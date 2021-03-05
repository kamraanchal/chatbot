import React from "react";

import Options from "../Options/Options";

const GeneralOptions = props => {
  const options = [
    {
      name: "Places",
      handler: props.actionProvider.handleMahaperiyava1,
      id: 1
    },
    { name: "Covid cases", handler: props.actionProvider.handlenew, id: 2 },
    /* {
      name: "Party",
      handler: props.actionProvider.handleParkingOptions,
      id: 3
    },
    {
      name: "things",
      handler: props.actionProvider.handleAirport,
      id: 5
    } */
  ];
  return <Options options={options} title="Options" {...props} />;
};

export default GeneralOptions;
