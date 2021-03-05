import { Component } from "react";

const api = {
  key: "7f70220af2158f71a96dd15557bf588a",
  base: "https://api.openweathermap.org/data/2.5/"
}
var selectedOption1 = "In";
class ActionProvider extends Component  {
  constructor(createChatBotMessage, setStateFunc) {
	  super();
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
	this.selectedOption = "In";
	
  }
  handlenew = () => {
	  fetch(`https://corona-api.com/countries/${selectedOption1}`)
        .then(res => res.json())
        .then(result => {
			if(typeof result.data !== "undefined"){
				const message = this.createChatBotMessage(
				  "Country "+result.data.name);
				
				this.addMessageToState(message);
				const message1 = this.createChatBotMessage(
				  "Active Cases today:- "+result.data.today.confirmed + " \n Deaths today:- "+result.data.today.deaths,
				  {
					widget: "newoptions",
					loading: true,
					terminateLoading: true,
					withAvatar: true,
				  });
				
				this.addMessageToState(message1);
			
			}		
        })
    
  };
  handleMahaperiyava = () => {
	  fetch(`https://corona-api.com/countries/${selectedOption1}`)
        .then(res => res.json())
        .then(result => {
			if(typeof result.data !== "undefined"){
				
				const message = this.createChatBotMessage(
				  "Total Active Cases:- "+result.data.latest_data.confirmed + " \n Total Deaths:- "+result.data.latest_data.deaths
				  + " \n Total Recovered:- "+result.data.latest_data.recovered + " \n Total Critical:- "+result.data.latest_data.critical);
				
				this.addMessageToState(message);
				const message1 = this.createChatBotMessage(
				  "Here's a link to WHO Covid-19 Cases Data.",
				  {
					widget: "lostLuggageLink",
					loading: true,
					terminateLoading: true,
					withAvatar: true,
				  }
				);

				this.addMessageToState(message1);
			}		
        })
    
  };
  handleStatistics = () => {
	  fetch(`https://corona-api.com/countries/${selectedOption1}`)
        .then(res => res.json())
        .then(result => {
			if(typeof result.data !== "undefined"){
				
				const message = this.createChatBotMessage(
				  "Death_rate:- "+result.data.latest_data.calculated.death_rate + " \n Recovery_rate:- "+result.data.latest_data.calculated.recovery_rate
				  + " \n Cases per Million Population:- "+result.data.latest_data.calculated.cases_per_million_population);
				
				this.addMessageToState(message);
				const message1 = this.createChatBotMessage(
				  "Here's a link to WHO Covid-19 Cases Data.",
				  {
					widget: "lostLuggageLink",
					loading: true,
					terminateLoading: true,
					withAvatar: true,
				  }
				);

				this.addMessageToState(message1);
			}		
        })
    
  };
    handleMahaperiyava1 = () => {
		;
	  const message1 = this.createChatBotMessage(
				  "Links for Places to Visit.",
				  {
					widget: "placestovisit",
					loading: true,
					terminateLoading: true,
					withAvatar: true,
				  }
				);

				this.addMessageToState(message1);
    
  };
handleCity = (options) => {
	fetch(`${api.base}weather?q=${options}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
			if(typeof result.main !== "undefined"){
				this.setState((state) => ({
				  ...state,
				  url: `https://www.google.com/search?sclient=psy-ab&site=&source=hp&btnG=Search&q=${options}%20point%20of%20interest`,
				  title: "Places to Visit in "+options,
				}));
				selectedOption1 = result.sys.country;
				console.log(selectedOption1);
				const message = this.createChatBotMessage(
				  result.name +" is very beautiful and vibrant city. Current temperature is "+ result.main.temp + "°c and it feels like "+ result.main.feels_like + "°c \n Weather Description:- "+ result.weather[0].description,
				  {
					widget: "options",
					loading: true,
					terminateLoading: true,
					withAvatar: true,
				  }
				);
				
				this.addMessageToState(message);
			}
			else{
				const message = this.createChatBotMessage(
				  "Oops! I'm sorry. I couldnot find a match for the city entered. Please Enter a valid City. "
				);
				
				this.addMessageToState(message);
			}		
        })
		
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
