import React from "react";

import { Pickup } from "./Types";

interface Props {
  pickUps: Pickup[];
}

function PickUpRenderer(props: Props) {
  if (props.pickUps.length > 0) {
    return (
      <table>
        <tr>
          <th>Strasse</th>
          <th>Abholdatum</th>
        </tr>
        {props.pickUps
          .sort((pickup1: Pickup, pickup2: Pickup) => {
            return pickup1.street.localeCompare(pickup2.street);
          })
          .map(value => {
            return (
              <tr>
                <td>{value.street}</td>
                <td>{value.pickup.format("DD.MM.YYYY")}</td>
              </tr>
            );
          })}
      </table>
    );
  } else {
    return <div>enthält die Liste der Pickups</div>;
  }
}

export default PickUpRenderer;
