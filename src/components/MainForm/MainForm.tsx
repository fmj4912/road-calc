import React, {  } from "react";
import { Usability } from "../entities/CalculatorValues";
import { useValues } from "../ValueContext/ValueContext";
import "./MyForm.css";


export const MainForm = ({renderResult}:any) => {
 
 const {calculatorValues, setCalculatorValues} = useValues();
    const setBaseShares = (input:number) => {
      calculatorValues.baseShares = input;
    }
    const addPropertyShare = (input: number, index:number) => {
      debugger;
    	const tempArray = calculatorValues.propertyShares;
      tempArray[index] = input;
      setCalculatorValues({...calculatorValues,
      propertyShares: tempArray});
    }
    	
  
     const setExtraProperty = () => {
      if(calculatorValues.propertyShares.length < 5){
        const tempArray = calculatorValues.propertyShares;
      tempArray.push(0);
      setCalculatorValues({...calculatorValues,
      propertyShares: tempArray});
      }
    }

  
    const getLength = (lengthValue: number) => {
      setCalculatorValues({
        ...calculatorValues,
        length:lengthValue
       })
    }
  
    const getWidth = (widthValue: number) => {
      setCalculatorValues({
        ...calculatorValues,
        width:widthValue
       })
    }
  
    const getAge = (ageValue: number) => {
      debugger;
      if (ageValue > 35) {
        setCalculatorValues({
          ...calculatorValues,
          ageReal:ageValue,
          age: 0.6
         })
        
      } else if (ageValue >= 25) {
        setCalculatorValues({
          ...calculatorValues,
          ageReal:ageValue,
          age: 0.7
         })
      } else if (ageValue >= 15) {
        setCalculatorValues({
          ...calculatorValues,
          ageReal:ageValue,
          age: 0.8
         })
        
      } else if (ageValue >= 5) {
        setCalculatorValues({
          ...calculatorValues,
          ageReal:ageValue,
          age: 0.9
         })
      } else {
        setCalculatorValues({
          ...calculatorValues,
          ageReal:ageValue,
          age: 1
         })
  
      }
    }
  
    const  getBasicMaterial = (value:number) => {
      
      if (value === 75) {
        setCalculatorValues({...calculatorValues,
          basicMaterial: value,
          printGrundMaterial: "dålig"
        })
        
      } else if (value === 250) {
        setCalculatorValues({...calculatorValues,
          basicMaterial: value,
          printGrundMaterial: "bra"
        })
        
      } else if (value === 350) {
        setCalculatorValues({...calculatorValues,
          basicMaterial: value,
          printGrundMaterial: "bättre"
        })
      }
    }
  
    const  getTopMaterial = (value:number) => {
      
      if (value === 0) {
        setCalculatorValues({...calculatorValues,
          topMaterial: value,
          printTopMaterial: "utan beläggning"
        })
      
      } else if (value === 50) {
        setCalculatorValues({...calculatorValues,
          topMaterial: value,
          printTopMaterial: "med oljegrusbeläggning"
        })
      } else if (value === 100) {
        setCalculatorValues({...calculatorValues,
          topMaterial: value,
          printTopMaterial: "med asfaltsbeläggning"
        })
      }
    }
  
    const  getAnvandbarhet = (value:number) => {
      if (value === Usability.GOOD) {
        setCalculatorValues({...calculatorValues,
          anvandbarhet: Usability.GOOD,
          printAnvandbarhet: "god"
        })
      } else if (value === Usability.NORMAL) {
        setCalculatorValues({...calculatorValues,
          anvandbarhet: Usability.NORMAL,
          printAnvandbarhet: "normal"
        })
      } else if (value === Usability.WORSE) {
        setCalculatorValues({...calculatorValues,
          anvandbarhet: Usability.WORSE,
          printAnvandbarhet: "sämre"
        })
      } else if (value === Usability.POOR) {
        setCalculatorValues({...calculatorValues,
          anvandbarhet: Usability.POOR,
          printAnvandbarhet: "undermålig"
        })
      }
    }
  
  
    const  mainFunction = () => {
      let tempAndelsTal = 0;
      let tempPropertyArray = [];
      let tempTotalValue = 0;
      let tempAndelsTalArray = [];


      for(let i = 0; i < calculatorValues.propertyShares.length; i++){
        tempAndelsTal += calculatorValues.propertyShares[i];
      }
      
      setCalculatorValues({...calculatorValues,
        andelstalNewAndOld: calculatorValues.baseShares + tempAndelsTal
      });

      
      for(let i = 0; i < calculatorValues.propertyShares.length; i++){
        tempPropertyArray[i] = (calculatorValues.propertyShares[i] / calculatorValues.andelstalNewAndOld);
      }

      setCalculatorValues({...calculatorValues,
        properties: tempPropertyArray
      });
      
      
      tempTotalValue= (calculatorValues.basicMaterial + calculatorValues.topMaterial) * calculatorValues.length * calculatorValues.width * calculatorValues.age * calculatorValues.anvandbarhet;
  
      setCalculatorValues({...calculatorValues,
      totalValue: tempTotalValue
    })

      for(let i = 0; i < calculatorValues.andelsKvot.length; i++){
        tempAndelsTalArray[i] = calculatorValues.totalValue * (calculatorValues.andelsKvot[i] || 0);
      }

      setCalculatorValues({...calculatorValues,
        andelstalPay:tempAndelsTalArray
      })
      debugger;
      console.log(calculatorValues);
      renderResult();
    }

    return (
        <div className="">
            <div className="">
                <article className="tc br3 ba dark-gray b--black-10 mv4 w-auto w-50-m w-30-l mw-9 center formbackground">
                    <div className="">
                        <p className="f3 underline">Anslutningsberäkning</p>
                        <div className="flex items-center justify-center flex-column">
                          <div className='cf dib'>
                            <p className="m0 f6 b tc">Vägens grundmaterial</p>
                            <button onClick={() => getBasicMaterial(75)} className="selectionbackground change-button-color f6 fl hover-bg-orange hover-white b--black ba ph3 pv2 dib br2 br--left bl orange">Grus (<i>dålig standard</i>)</button>
                            <button onClick={() => getBasicMaterial(200)} className= {`selectionbackground change-button-color f6 fl hover-bg-orange hover-white b--black ba ph3 pv2 dib orange`}>Grus (<i>bra standard</i>)</button>
                            <button onClick={() => getBasicMaterial(350)} className="selectionbackground change-button-color f6 fl hover-bg-orange hover-white b--black ba ph3 pv2 dib orange br2 br--right br">Grus (<i>bättre standard</i>)</button>
                          </div>
                        </div>
                        <div className="flex items-center justify-center flex-column">
                          <div className='cf dib'>
                            <p className="m0 f6 b tc">Vägens beläggning</p>
                            <button onClick={() => getTopMaterial(0)} className="selectionbackground f6 fl hover-bg-orange hover-white b--black ba ph3 pv2 dib br2 br--left bl orange">Ingen</button>
                            <button onClick={() => getTopMaterial(50)}className="selectionbackground f6 fl hover-bg-orange hover-white b--black ba ph3 pv2 dib orange">Tankbeläggning (<i>t.ex. oljegrus</i>)</button>
                            <button onClick={() => getTopMaterial(100)}className="selectionbackground f6 fl hover-bg-orange hover-white b--black ba ph3 pv2 dib orange br2 br--right br">Massabeläggning (<i> t.ex. asfalt</i></button>
                          </div>
                        </div>
                        <div className='cf dib'>
                            <p className="m0 f6 b tc">Vägens fortsätta andvändbarhet</p>
                            <button onClick={() => getAnvandbarhet(1)} className="selectionbackground change-button-color f6 fl hover-bg-orange hover-white b--black ba ph3 pv2 dib br2 br--left bl orange">God</button>
                            <button onClick={() => getAnvandbarhet(0.75)} className= {`selectionbackground change-button-color f6 fl hover-bg-orange hover-white b--black ba ph3 pv2 dib orange`}>Normal</button>
                            <button onClick={() => getAnvandbarhet(0.5)} className= {`selectionbackground change-button-color f6 fl hover-bg-orange hover-white b--black ba ph3 pv2 dib orange`}>Sämre</button>
                            <button onClick={() => getAnvandbarhet(0.25)} className="selectionbackground change-button-color f6 fl hover-bg-orange hover-white b--black ba ph3 pv2 dib orange br2 br--right br">Undermålig</button>
                          </div>
                        <form className="pt3 pl5 pr5 black-80">
                          <div className="measure ">
                            <label htmlFor="length" className="f6 b db mb2">Vägens ålder</label>
                            <input onChange={ x => getAge(parseInt(x.currentTarget.value))} id="length" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                          </div>
                        </form>
                        <form className="pt3 pl5 pr5 black-80">
                          <div className="measure ">
                            <label htmlFor="length" className="f6 b db mb2">Vägens längd</label>
                            <input onChange={x => getLength(parseInt(x.currentTarget.value))} id="length" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                          </div>
                        </form>
                        <form className="pt3 pl5 pr5 pb3 black-80">
                          <div className="measure">
                            <label htmlFor="width" className="f6 b db mb2">Vägens bredd</label>
                            <input onChange={x => getWidth(parseInt(x.currentTarget.value))} id="width" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                          </div>
                        </form>
                        <hr />
                        <form className="pt3 pl5 pr5 pb3 black-80">
                          <div className="measure">
                            <label htmlFor="width" className="f6 b db mb2">Anläggningens totala andelsstal (före inträde)</label>
                            <input onChange={x => setBaseShares(parseInt(x.currentTarget.value))} id="andelstaltotal" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                          </div>
                        </form>
                        {calculatorValues.propertyShares && calculatorValues.propertyShares.length > 0 && 
                        <>
                          {calculatorValues.propertyShares.map((x:number , i: number) => 
           
                          <form className="pt3 pl5 pr5 pb3 black-80">
                            <div className="measure">
                              <label htmlFor="width" className="f6 b db mb2">Fastighet #{i+1} andelsstal</label>
                              <input id="andelstal1" onChange={x => addPropertyShare(parseInt(x.currentTarget.value), i)} className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                            </div>
                          </form>
                        
                        )}
                        </>
                        }
                        <div className="center pb3">
                          <button onClick={setExtraProperty} className="f7 grow bg-orange hover-bg-orange hover-white b--black bb bt br bl ph3 br2 pv2 dib black shadow-5 pointer">Lägg till fastighet
                          </button>
                        </div>
                        <hr />
                        <div className="center pa4">
                          <button onClick={mainFunction} className="f4 b grow bg-orange hover-bg-orange hover-white b--black bb bt br bl ph3 br2 pv2 ph4 dib black shadow-5 pointer">Beräkna
                          </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    )
}