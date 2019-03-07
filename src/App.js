import React, { Component } from 'react';
import MainForm from "./components/MainForm/MainForm.js";
import OutputData from "./components/OutputData/OutputData.js";
import Tachyons from "tachyons";

import './App.css';


let width = 0;
let length = 0;
let basicMaterial = 0.6;
let topMaterial = 0.8;
let age = 0;


let totalValue = 0;
let andelstal1Pay = 0;
let andelstal2Pay = 0;
let andelstal3Pay = 0;
let andelstal4Pay = 0;
let andelstal5Pay = 0;

class App extends Component {

	constructor() {
		super();
		this.state = {
			secondProperty: false,
			thirdProperty: false,
			fourthProperty: false,
			fifthProperty: false,
			renderResult: false,
			totalValueState: 0,
			baseShares: 0,
			firstPropertyShare: 0,
			secondPropertyShare: 0,
			thirdPropertyShare: 0,
			fourthPropertyShare: 0,
			fifthPropertyShare: 0,
			firstConnectCost: 0,
			secondConnectCost: 0,
			thirdConnectCost: 0,
			fourthConnectCost: 0,
			fifthConnectCost: 0
		}
	}


	setBaseShares = (input) => {
		this.setState({baseShares: parseInt(input.target.value)})
	}
	setProperty1Share = (input) => {
		this.setState({firstPropertyShare: parseInt(input.target.value)})
	}
	setProperty2Share = (input) => {
		this.setState({secondPropertyShare: parseInt(input.target.value)})
	}
	setProperty3Share = (input) => {
		this.setState({thirdPropertyShare: parseInt(input.target.value)})
	}
	setProperty4Share = (input) => {
		this.setState({fourthPropertyShare: parseInt(input.target.value)})
	}
	setProperty5Share = (input) => {
		this.setState({fifthPropertyShare: parseInt(input.target.value)})
	}


	setExtraProperty = () => {
		if (this.state.secondProperty === false) {
			this.setState({secondProperty: true});
		} else if (this.state.thirdProperty === false) {
			this.setState({thirdProperty: true});
		} else if (this.state.fourthProperty === false) {
			this.setState({fourthProperty: true});
		} else if (this.state.fifthProperty === false) {
			this.setState({fifthProperty: true});
		}
	}

	getLength = (lengthValue) => {
		length = parseInt(lengthValue.target.value);
	}

	getWidth = (widthValue) => {
		width = parseInt(widthValue.target.value);
	}

	getAge = (ageValue) => {
		if (parseInt(ageValue.target.value) >= 35) {
			age = 0.6;
		} else if (parseInt(ageValue.target.value) >= 20) {
			age = 0.7;
		} else if (parseInt(ageValue.target.value) >= 10) {
			age = 0.8;
		} else if (parseInt(ageValue.target.value) >= 5) {
			age = 0.9;
		} else {
			age = 1;
		}
	}

	getBasicMaterial = (value) => {
		basicMaterial = value;
	}

	getTopMaterial = (value) => {
		topMaterial = value;
	}

	mainFunction = () => {
		const andelstalNewAndOld = this.state.baseShares + this.state.firstPropertyShare+ this.state.secondPropertyShare+ this.state.thirdPropertyShare+ this.state.fourthPropertyShare+ this.state.fifthPropertyShare;

		const andelsKvot1 = parseFloat(this.state.firstPropertyShare / andelstalNewAndOld);
		const andelsKvot2 = parseFloat(this.state.secondPropertyShare / andelstalNewAndOld);
		const andelsKvot3 = parseFloat(this.state.thirdPropertyShare / andelstalNewAndOld);
		const andelsKvot4 = parseFloat(this.state.fourthPropertyShare / andelstalNewAndOld);
		const andelsKvot5 = parseFloat(this.state.fifthPropertyShare / andelstalNewAndOld);

		totalValue = (basicMaterial + topMaterial) * length * width * age;

		andelstal1Pay = totalValue * andelsKvot1;
		andelstal2Pay = totalValue * andelsKvot2;
		andelstal3Pay = totalValue * andelsKvot3;
		andelstal4Pay = totalValue * andelsKvot4;
		andelstal5Pay = totalValue * andelsKvot5;

		this.setState({totalValueState: totalValue});
		this.setState({firstConnectCost: parseInt(andelstal1Pay)});
		this.setState({secondConnectCost: parseInt(andelstal2Pay)});
		this.setState({thirdConnectCost: parseInt(andelstal3Pay)});
		this.setState({fourthConnectCost: parseInt(andelstal4Pay)});
		this.setState({fifthConnectCost: parseInt(andelstal5Pay)});

		this.setState({renderResult: true});

		return (
			(1)
		);
	}



  render() {
    return (
      <div className="mybackground">
        <div className="pt6 pb6">
		      <div className="">
		        <MainForm 
		        	getLength={this.getLength} 
		        	getWidth={this.getWidth} 
		        	getAge={this.getAge} 
		        	getBasicMaterial={this.getBasicMaterial} 
		        	getTopMaterial={this.getTopMaterial} 
		        	mainFunction={this.mainFunction} 
		        	secondProperty={this.state.secondProperty}
		        	thirdProperty={this.state.thirdProperty}
		        	fourthProperty={this.state.fourthProperty}
		        	fifthProperty={this.state.fifthProperty}
		        	setExtraProperty={this.setExtraProperty}
		        	setBaseShares={this.setBaseShares}
		        	setProperty1Share={this.setProperty1Share}
		        	setProperty2Share={this.setProperty2Share}
		        	setProperty3Share={this.setProperty3Share}
		        	setProperty4Share={this.setProperty4Share}
		        	setProperty5Share={this.setProperty5Share}
		        />
		        <div>
	            {(this.state.renderResult === true) ? (
	              <OutputData 
	              	totalValueState={this.state.totalValueState}
	              	secondProperty={this.state.secondProperty}
	              	thirdProperty={this.state.thirdProperty}
	              	fourthProperty={this.state.fourthProperty}
	              	fifthProperty={this.state.fifthProperty}
	              	firstConnectCost={this.state.firstConnectCost}
	              	secondConnectCost={this.state.secondConnectCost}
	              	thirdConnectCost={this.state.thirdConnectCost}
	              	fourthConnectCost={this.state.fourthConnectCost}
	              	fifthConnectCost={this.state.fifthConnectCost}
	              />
	            ) : (null)}
	          </div>
		      </div>
		    </div>
		  </div>
    );
  }
}

export default App;
