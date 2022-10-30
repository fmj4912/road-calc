import React, { useEffect, useState } from 'react';
import {MainForm} from "./components/MainForm/MainForm";
import OutputData from "./components/OutputData/OutputData";
import './App.css';
import { useValues, ValueContextProvider } from './components/ValueContext/ValueContext';


const App = () =>  {
	const [printFormat, setPrintFormat]  = useState<boolean>(false);
	const [renderResult, setRenderResult] = useState<boolean>(false);
	const {calculatorValues} = useValues();
	
	const setFormat = () => {
		setPrintFormat(!printFormat)
	}
	
	const setResult = () => {
		setRenderResult(!renderResult)
	}

	useEffect (() => {

	}) 
  
    if (printFormat === false) { 
    return (
		<ValueContextProvider>
	      <div className="mybackground">
	        <div className="pt6 pb6">
		      <div className="">
		        <MainForm 
				renderResult={setResult}
				/>
		        <div>
	            {renderResult ?
				<>
	              <OutputData setPrintFormat={setFormat}
	              />
				  </>
				: (null)}
	          </div>
		      </div>
		    </div>
		  </div>
		  </ValueContextProvider>
	)}
    else {
    	return(
			<ValueContextProvider>
    		<div>
    			<h3>Ersättningsbeslut</h3>
    			<h4>Skäl:</h4>
    			<p>Styckningslotten inträder med ett andelstal för drift och ett för utförande.<br />
    			Andelstalet för utförande är det andelstal som reglerar ägandet av vägen och är således det andelstal som reglerar inträdesersättningen. </p>
    			<p>Först beräknas vägens värde enligt Lantmäteriets schablonkostnader, därefter görs avskrivning för vägens ålder och fortsatta användbarhet.<br /> 
				Vägen är en {calculatorValues.printGrundMaterial} grusväg {calculatorValues.printTopMaterial} och det ger ett kvadratmeterpris om {(calculatorValues.basicMaterial + calculatorValues.topMaterial)} kr/m2. <br />
				Vägen är ca {calculatorValues.width} meter bred och den aktuella sektionen är ca {calculatorValues.length} meter lång enligt akt (<i>aktnummer</i>). <br />
				Vägens ålder anses vara {calculatorValues.ageReal} år eller äldre, vilket ger en avskrivning om {100-(calculatorValues.age*100)} %. <br />
				Den fortsatta användbarheten för vägen anses {calculatorValues.printAnvandbarhet}, vilket ger en avskrivning om {100-(calculatorValues.anvandbarhet*100)} %.</p>
    			<p>Vägens värde blir:<br />
    			{calculatorValues.basicMaterial} (+{calculatorValues.topMaterial}) * {calculatorValues.width} * {calculatorValues.length} * {calculatorValues.age} * {calculatorValues.anvandbarhet} = {calculatorValues.totalValue} kr</p>
    			<h4>Beslut:</h4>
				{calculatorValues.propertyShares.length > 0 &&
				<>
				{calculatorValues.propertyShares.map((x,i) =>
					<p>Fastigheten Blivande (<i>Fastighet#{i+1}</i>) skall betala {x}/{calculatorValues.andelstalNewAndOld}-del av det beräknade överskottet i (<i>gemensamhetsanläggningens namn</i>),<br /> bestående av anläggningens värde plus föreningens kassabehållning och fonderade medel minus föreningens skulder. </p>	
					) }
    			</>
				}
    			<p>Kassabehållning, fonderade medel och skulder ska beräknas den dag beslutet registreras i fastighetsregistret.<br /> 
    			Anläggningens värde i den aktuella sektionen uppskattas till {calculatorValues.totalValue} kr.</p>
    			<p>Ersättning ska betalas senast 3 månader efter det att ersättningsbeslutet har vunnit laga kraft.</p>
    			<p>Om betalning sker därefter betalas ränta enligt 6§ räntelagen från sista betalningsdag tills betalning sker.</p>
    			<br /> 
    			<br /> 
    			<br /> 
    			<br /> 
    			<div>
    				<p onClick={() => setFormat()} className="silver pb2 pointer">Tryck här för att gå tillbaka</p>
    			</div>
    		</div>
			</ValueContextProvider>
    	);
    }
  }


export default App;
