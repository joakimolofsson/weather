import React, { Component } from 'react';
import './App.css';
import Weather from './components/Weather';
import logo from './images/logo.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      failMsg: '',
      weather: [],
    }
  }

  searchCity(e) {//api fetch
    e.preventDefault();
    const reqCity = fetch(`https://api.apixu.com/v1/current.json?key=219032b3f93248c1bcb124223171806&q=${this.refs.city.value}`);

    reqCity.then(data => {
      return data.json();
    }).then(data => {
      this.setState({
        failMsg: '',
        weather: this.state.weather.concat({
          name: data.location.name,
          country: data.location.country,
          temp: data.current.temp_c,
          text: data.current.condition.text
        })
      });
    }).catch(error => {
      this.setState({
        failMsg: 'Nothing found',
      });
    });
  }

  removeCity(index) {//delete function
    this.setState({
      weather: this.state.weather.filter((x,i) => i !== index)
    })
  }

  render() {
    return (
      <div className="App">
        <img src={logo} alt="Logo" className="imageLogo"/>
        <div className="searchContainer">
          <h2>How's the weather in...</h2>
          <form className="searchForm" onSubmit={this.searchCity.bind(this)}>
            <label className="searchFormLabel">Location:</label>
            <input type="text" ref="city"/>
            <input type="submit" value="+"/>
          </form>
          <br/>
          <p className="failMsg">{this.state.failMsg}</p>
        </div>
        <Weather weatherData={this.state.weather} removeCity={this.removeCity.bind(this)}/>
        <img src={logo} alt="Logo" className="imageLogoMobile"/>
      </div>
    );
  }
}

export default App;
