import React from "react";

import Options from "../Options/Options";

const NewOptions = props => {
  const options = [
    {
      name: "Total Cases",
      handler: props.actionProvider.handleMahaperiyava,
      id: 1
    },
    { name: "Statistics", handler: props.actionProvider.handleStatistics, id: 2 },
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

export default NewOptions;
