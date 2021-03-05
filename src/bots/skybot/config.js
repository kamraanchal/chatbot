import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";


import NewOptions from "./widgets/GeneralOptions/NewOptions";
import GeneralOptions from "./widgets/GeneralOptions/GeneralOptions";
import PlacestoVisitLink from "./widgets/Link/PlacestoVisitLink";
import LostBaggageLink from "./widgets/Link/LostBaggageLink";
import FlightBotAvatar from "./domainComponents/FlightBotAvatar";

const botName = "Citybot";

const config = {
  botName: botName,
  lang: "en",
  initialMessages: [
    createChatBotMessage(`Hi I'm ${botName}.`),
    createChatBotMessage(
      "First things first, which city are you looking for information from?"
    ),
  ],
  state: {
    airports: [],
    selectedAirport: { iata: "OSL", nameCompact: "Oslo" },
    flightType: "",
    selectedFlightId: "",
    selectedFlight: null,
	url:`https://covid19.who.int/`,
	title:"WHO Coronavirus Disease (COVID-19) Dashboard"
  },
  customComponents: {
    botAvatar: (props) => <FlightBotAvatar {...props} />,
  },
  widgets: [
    {
      widgetName: "newoptions",
      widgetFunc: (props) => <NewOptions {...props} />,
    },
    {
      widgetName: "options",
      widgetFunc: (props) => <GeneralOptions {...props} />,
    },
    {
      widgetName: "placestovisit",
      widgetFunc: (props) => <PlacestoVisitLink {...props} />,
	   mapStateToProps: ["url", "title"],
    },
    {
      widgetName: "lostLuggageLink",
      widgetFunc: (props) => <LostBaggageLink {...props} />,
    },
  ],
};

export default config;
