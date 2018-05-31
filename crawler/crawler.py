import urllib
import json
import time
import sys
import codecs

adrkey=6900000
sleeper=1

#ausgabe = open("69_70.txt","w", "utf-8")
ausgabe = codecs.open("69_70.txt", "w", "utf-8")

while adrkey<7000000:

    link = "https://trenntstadt-berlin.de/api-abfuhr.php?adrkey="+str(adrkey)+"&amp;step=2"
    f = urllib.urlopen(link)
    myfile = f.read()

    time.sleep(sleeper)
    try:
        data_row = json.loads(myfile)["d"]
        ausgabe.write(data_row["Pstlz"]+"::::"+data_row["Street"]+"::::"+data_row["Houseno"]+ "::::"+data_row["Service_day_regular"]+"::::"+ data_row["Service_date"]+"::::"+data_row["Adrkey"]+"::::"+data_row["Rhythm"]+"\n")
    except ValueError:
        pass
    adrkey = adrkey + 1
ausgabe.close()