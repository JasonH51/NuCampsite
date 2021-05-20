import React, { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new date() });
  }

  render() {
    return (
      <div className="timer">
        <h2>Hello world</h2>
        <h2>the time is {this.state.date}</h2>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      partyType: "birthday",
      entertainment: "clowns",
      venue: {
        name: "Polly's Party Palace",
        capacity: 120,
      },
    };
  }

  Party() {
    return (
      <div>
        <h3>Party Time!</h3>
        <p>
          This {this.state.partyType} party will be held at {this.state.venue.name} with a maximum capacity of{" "}
          {this.state.venue.capacity}.
        </p>
        <p>Featured entertainment:{this.state.entertainment}!</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Party />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
