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
let anvandbarhet = 0;
let ageReal = 0;

let andelstalNewAndOld = 0;
let andelsKvot1 = 0;
let andelsKvot2 = 0;
let andelsKvot3 = 0;
let andelsKvot4 = 0;
let andelsKvot5 = 0;


let totalValue = 0;
let andelstal1Pay = 0;
let andelstal2Pay = 0;
let andelstal3Pay = 0;
let andelstal4Pay = 0;
let andelstal5Pay = 0;

let printGrundMaterial = "";
let printTopMaterial = "";
let printAnvandbarhet = "";


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
			fifthConnectCost: 0,
			printFormat: false
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
		ageReal = parseInt(ageValue.target.value);
		if (parseInt(ageReal) > 35) {
			age = 0.6;
		} else if (parseInt(ageReal) >= 25) {
			age = 0.7;
		} else if (parseInt(ageReal) >= 15) {
			age = 0.8;
		} else if (parseInt(ageReal) >= 5) {
			age = 0.9;
		} else {
			age = 1;

		}
	}

	getBasicMaterial = (value) => {
		basicMaterial = value;
		if (value === 75) {
			printGrundMaterial = "dålig";
		} else if (value === 250) {
			printGrundMaterial = "bra";
		} else if (value === 350) {
			printGrundMaterial = "bättre"
		}
	}

	getTopMaterial = (value) => {
		topMaterial = value;
		if (value === 0) {
			printTopMaterial = "utan beläggning";
		} else if (value === 50) {
			printTopMaterial = "med oljegrusbeläggning";
		} else if (value === 100) {
			printTopMaterial = "med asfaltsbeläggning"
		}
	}

	getAnvandbarhet = (value) => {
		anvandbarhet = value;
		if (value === 1) {
			printAnvandbarhet = "god";
		} else if (value === 0,75) {
			printAnvandbarhet = "normal";
		} else if (value === 0,5) {
			printAnvandbarhet = "sämre"
		} else if (value === 0,25) {
			printAnvandbarhet = "undermålig"
		}
	}


	mainFunction = () => {
		andelstalNewAndOld = this.state.baseShares + this.state.firstPropertyShare+ this.state.secondPropertyShare+ this.state.thirdPropertyShare+ this.state.fourthPropertyShare+ this.state.fifthPropertyShare;

		andelsKvot1 = parseFloat(this.state.firstPropertyShare / andelstalNewAndOld);
		andelsKvot2 = parseFloat(this.state.secondPropertyShare / andelstalNewAndOld);
		andelsKvot3 = parseFloat(this.state.thirdPropertyShare / andelstalNewAndOld);
		andelsKvot4 = parseFloat(this.state.fourthPropertyShare / andelstalNewAndOld);
		andelsKvot5 = parseFloat(this.state.fifthPropertyShare / andelstalNewAndOld);

		totalValue = (basicMaterial + topMaterial) * length * width * age * anvandbarhet;

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

	setPrintFormat = (yesno) => {
		this.setState({printFormat: !this.state.printFormat});
	}

  render() {
    if (this.state.printFormat === false) { 
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
		        	getAnvandbarhet={this.getAnvandbarhet} 
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
	              	setPrintFormat={this.setPrintFormat}
	              />
	            ) : (null)}
	          </div>
		      </div>
		    </div>
		  </div>
    );}else {
    	return(
    		<div>
    			<h3>Ersättningsbeslut</h3>
    			<h4>Skäl:</h4>
    			<p>Styckningslotten inträder med ett andelstal för drift och ett för utförande.<br />
    			Andelstalet för utförande är det andelstal som reglerar ägandet av vägen och är således det andelstal som reglerar inträdesersättningen. </p>
    			<p>Först beräknas vägens värde enligt Lantmäteriets schablonkostnader, därefter görs avskrivning för vägens ålder och fortsatta användbarhet.<br /> 
				Vägen är en {printGrundMaterial} grusväg {printTopMaterial} och det ger ett kvadratmeterpris om {(basicMaterial + topMaterial)} kr/m2. <br />
				Vägen är ca {width} meter bred och den aktuella sektionen är ca {length} meter lång enligt akt (<i>aktnummer</i>). <br />
				Vägens ålder anses vara {ageReal} år eller äldre, vilket ger en avskrivning om {100-(age*100)} %. <br />
				Den fortsatta användbarheten för vägen anses {printAnvandbarhet}, vilket ger en avskrivning om {100-(anvandbarhet*100)} %.</p>
    			<p>Vägens värde blir:<br />
    			{basicMaterial} (+{topMaterial}) * {width} * {length} * {age} * {anvandbarhet} = {totalValue} kr</p>
    			<h4>Beslut:</h4>
    			<p>Fastigheten Blivande (<i>Fastighet#1</i>) skall betala {this.state.firstPropertyShare}/{andelstalNewAndOld}-del av det beräknade överskottet i (<i>gemensamhetsanläggningens namn</i>),<br /> bestående av anläggningens värde plus föreningens kassabehållning och fonderade medel minus föreningens skulder. </p>
    			{(this.state.secondProperty === true) ? (
	              <p>Fastigheten Blivande (<i>Fastighet#2</i>) skall betala {this.state.secondPropertyShare}/{andelstalNewAndOld}-del av det beräknade överskottet i (<i>gemensamhetsanläggningens namn</i>),<br /> bestående av anläggningens värde plus föreningens kassabehållning och fonderade medel minus föreningens skulder.</p>
	            ) : (null)}
	            {(this.state.thirdProperty === true) ? (
	              <p>Fastigheten Blivande (<i>Fastighet#3</i>) skall betala {this.state.thirdPropertyShare}/{andelstalNewAndOld}-del av det beräknade överskottet i (<i>gemensamhetsanläggningens namn</i>),<br /> bestående av anläggningens värde plus föreningens kassabehållning och fonderade medel minus föreningens skulder.</p>
	            ) : (null)}
	            {(this.state.fourthProperty === true) ? (
	              <p>Fastigheten Blivande (<i>Fastighet#4</i>) skall betala {this.state.fourthPropertyShare}/{andelstalNewAndOld}-del av det beräknade överskottet i (<i>gemensamhetsanläggningens namn</i>),<br /> bestående av anläggningens värde plus föreningens kassabehållning och fonderade medel minus föreningens skulder.</p>
	            ) : (null)}
	            {(this.state.fifthProperty === true) ? (
	              <p>Fastigheten Blivande (<i>Fastighet#5</i>) skall betala {this.state.fifthPropertyShare}/{andelstalNewAndOld}-del av det beräknade överskottet i (<i>gemensamhetsanläggningens namn</i>),<br /> bestående av anläggningens värde plus föreningens kassabehållning och fonderade medel minus föreningens skulder.</p>
	            ) : (null)}
    			<p>Kassabehållning, fonderade medel och skulder ska beräknas den dag beslutet registreras i fastighetsregistret.<br /> 
    			Anläggningens värde i den aktuella sektionen uppskattas till {totalValue} kr.</p>
    			<p>Ersättning ska betalas senast 3 månader efter det att ersättningsbeslutet har vunnit laga kraft.</p>
    			<p>Om betalning sker därefter betalas ränta enligt 6§ räntelagen från sista betalningsdag tills betalning sker.</p>
    			<br /> 
    			<br /> 
    			<br /> 
    			<br /> 
    			<div>
    				<p onClick={() => this.setPrintFormat(0)} className="silver pb2 pointer">Tryck här för att gå tillbaka</p>
    			</div>
    		</div>

    	);
    }
  }
}

export default App;
