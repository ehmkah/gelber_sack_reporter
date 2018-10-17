import React from "react";

import { Pickup } from "./Types";

interface Props {
  pickUps: Pickup[];
}

function PickUpRenderer(props: Props) {
  if (props.pickUps.length > 0) {
    return (
      <div>
        {props.pickUps
          .sort((pickup1: Pickup, pickup2: Pickup) => {
            return pickup1.street.localeCompare(pickup2.street);
          })
          .map(value => {
            return (
              <div>
                <div>{value.street}</div>
                <div>{value.pickup.format("DD.MM.YYYY")}</div>
              </div>
            );
          })}
      </div>
    );
  } else {
    return <div>enthält die Liste der Pickups</div>;
  }
}

export default PickUpRenderer;
