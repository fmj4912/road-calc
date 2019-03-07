import React, { Component } from 'react';
import MainForm from "./components/MainForm/MainForm.js";
import Tachyons from "tachyons";

import './App.css';

class App extends Component {

	constructor() {
		super();
		this.state = {
			width: 0,
			length: 0,
			basicMaterial: 0.6,
			topMaterial: 0.8,
			age: 0
		}
	}


	getLength = (lengthValue) => {
		this.setState({length: parseInt(lengthValue.target.value)});
	}

	getWidth = (widthValue) => {
		this.setState({width: parseInt(widthValue.target.value)});	
	}

	getAge = (ageValue) => {
		if (parseInt(ageValue.target.value) >= 35) {
			this.setState({age: 0.5})
		} else if (parseInt(ageValue.target.value) >= 20) {
			this.setState({age: 0.7})
		} else if (parseInt(ageValue.target.value) >= 10) {
			this.setState({age: 0.8})
		} else if (parseInt(ageValue.target.value) >= 5) {
			this.setState({age: 0.9})
		} else {
			this.setState({age: 1})
		}
	}

	getBasicMaterial = (value) => {
		this.setState({basicMaterial: value});
	}

	getTopMaterial = (value) => {
		this.setState({topMaterial: value});
	}

	mainFunction = () => {
		const TotalValue = (this.state.basicMaterial + this.state.topMaterial) * this.state.length * this.state.width * this.state.age;

		return (
			console.log(TotalValue)
		);
	}



  render() {
    return (
      <div className="">
        <MainForm 
        	getLength={this.getLength} 
        	getWidth={this.getWidth} 
        	getAge={this.getAge} 
        	getBasicMaterial={this.getBasicMaterial} 
        	getTopMaterial={this.getTopMaterial} 
        	mainFunction={this.mainFunction} 
        />
      </div>
    );
  }
}

export default App;
