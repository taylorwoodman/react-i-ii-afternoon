import React from 'react';
import './App.css';
import data from './data.js';

function Item(props){
  return (
    <div className="info">
      <div>Page {props.displayUser.id}/25</div>
      <div>{props.displayUser.name.first} {props.displayUser.name.last}</div>
      <div>From: {props.displayUser.city}, {props.displayUser.country}</div>
      <div>Job Title: {props.displayUser.title}</div>
      <div>Employer: {props.displayUser.employer}</div>
      <div>Favorite Movies: <ol> <li>{props.displayUser.favoriteMovies[0]}</li>
      <li>{props.displayUser.favoriteMovies[1]}</li>
      <li>{props.displayUser.favoriteMovies[2]}</li>
      </ol>
      </div>
      
    </div>
  )
 

}

class App extends React.Component{
  constructor(){
    super();

    this.state = {
    page: 1,
    user: data[0]
    }

  }


render() {


  return (
    <div className="App">
      <div className="Header"></div>
      <div>
        <div className="InfoBox">
      <Item displayUser={this.state.user}/>
        </div>
        <div className="Buttons">
      <button className='Previous' onClick={this.handleClick}>{'<'} Previous</button>
      <button className='Next'>Next {'>'}</button>
      </div>
      </div>
      </div>
      
      
  );
}
}
export default App;
