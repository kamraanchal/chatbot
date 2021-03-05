class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    return this.actionProvider.handleCity(message);
  }

  containsFlightId = (message) => {
    const regexp = /[A-Z]{2,}[0-9]{2,}/gim;
    return message.match(regexp);
  };
}

export default MessageParser;
