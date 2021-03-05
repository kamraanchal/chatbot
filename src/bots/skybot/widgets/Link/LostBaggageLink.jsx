import React from "react";

import Link from "./Link";

const LostBaggageLink = () => {
  const getUrl = () => {
    return `https://covid19.who.int/`;
  };

  return <Link url={getUrl()} title={"WHO Coronavirus Disease (COVID-19) Dashboard"} />;
};

export default LostBaggageLink;
