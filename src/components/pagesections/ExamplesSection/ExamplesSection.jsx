import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import { ConditionallyRender } from "react-util-kit";

import "../../../App.css";

import { ReactComponent as ButtonIcon } from "../../../assets/icons/robot.svg";


import skybotConfig from "../../../bots/skybot/config";
import skybotMessageParser from "../../../bots/skybot/MessageParser";
import skybotActionProvider from "../../../bots/skybot/ActionProvider";
import GradientBackground from "../../../components/GradientBackground/GradientBackground";

import "./ExamplesSection.css";

const ExamplesSection = () => {
	const [showBot, toggleBot] = useState(false);
  
  const saveMessages = (messages) => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  };

  const loadMessages = () => {
    const messages = JSON.parse(localStorage.getItem("chat_messages"));
    return messages;
  };
 
  return (

    <div className="app-examples-section" id="examples">
	<GradientBackground>
        
        <div className="app-examples-skybot-container">

          <div className="app-examples-skybot-description">
            <h1>Citybot</h1>
            <p>
              Citybot is the bot that shows the current weather of the city and also shows the COVID cases recorderd in the country.
            </p>
          </div>
        </div>
       <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showBot}
            show={
              <Chatbot
                config={skybotConfig}
            actionProvider={skybotActionProvider}
            messageParser={skybotMessageParser}
			messageHistory={loadMessages()}
            saveMessages={saveMessages}
              />
            }
          />
        </div>
 
        <button className="app-chatbot-button" onClick={() => toggleBot((prev) => !prev)}>
          <ButtonIcon className="app-chatbot-button-icon" />
        </button> 
</GradientBackground>
      
    </div>
  );
};

export default ExamplesSection;
