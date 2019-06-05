import React from "react";
import "./App.css";
import data from "./data.js";

function Item(props) {
  return (
    <div className="Box">
      <div className="Page">{props.displayUser.id}/25</div>
      <div className="Name">
        {props.displayUser.name.first} {props.displayUser.name.last}
      </div>
      <p>
        <div>
          <b>From:</b> {props.displayUser.city}, {props.displayUser.country}
        </div>
        <div>
          <b>Job Title:</b> {props.displayUser.title}
        </div>
        <div>
          <b>Employer:</b> {props.displayUser.employer}
        </div>
      </p>
      <div className="Movies">
        <b>Favorite Movies:</b>{" "}
        <ol>
          <li>{props.displayUser.favoriteMovies[0]}</li>
          <li>{props.displayUser.favoriteMovies[1]}</li>
          <li>{props.displayUser.favoriteMovies[2]}</li>
        </ol>
      </div>
    </div>
  );
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      page: 0,
      user: data[0]
    };
    this.nextUser = this.nextUser.bind(this);
    this.previousUser = this.previousUser.bind(this);
  }

  nextUser() {
    let { page } = this.state;
    page = page + 1;
    if(page === data.length) {
      return this.setState(
        { page: 0, 
          user: data[0] }
      )
    }
    this.setState({ page: page, 
      user: data[page] });
  }

  previousUser() {
    let { page } = this.state;
    page = page - 1;
    if(page <= 0) {
      return this.setState({
        page: data.length,
        data: data[data.length]
      })
    }
    this.setState({ page: page, 
      user: data[page] });
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <div className="Home">Home</div>
        </div>
        <div>
          <div className="InfoBox">
            <Item displayUser={this.state.user} />
          </div>
          <div className="Buttons">
            <button className="Previous" onClick={this.previousUser}>
              {"<"} Previous
            </button>
            <button className="Next" onClick={this.nextUser}>
              Next {">"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
