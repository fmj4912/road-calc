import React, { createContext, FC, useContext, useState } from 'react';
import { CalculatorValues, Usability } from '../entities/CalculatorValues';

const defaultValue: CalculatorValues ={
  width: 0,
  length: 0,
  basicMaterial: 0.6,
  topMaterial: 0.8,
  age: 0,
  anvandbarhet: Usability.GOOD,
  ageReal: 0,
  andelstalNewAndOld: 0,
  andelsKvot: [],
  totalValue: 0,
  andelstalPay: [],
  printGrundMaterial: "",
  printTopMaterial: "",
  printAnvandbarhet: "",
  properties: [],
  setExtraProperty: false,
  baseShares: 0,
  propertyShares: []
}

const ValueContext = createContext({
  calculatorValues: defaultValue,
  setCalculatorValues: (calculatorValues: CalculatorValues)=> {}
});

export const ValueContextProvider = ({ children }:any) => {

const [calculatorValues, setCalculatorValues] = useState<CalculatorValues>(
	{
		width: 0,
		length: 0,
		basicMaterial: 0.6,
		topMaterial: 0.8,
		age: 0,
		anvandbarhet: Usability.GOOD,
		ageReal: 0,
		andelstalNewAndOld: 0,
		andelsKvot: [],
		totalValue: 0,
		andelstalPay: [],
		printGrundMaterial: "",
		printTopMaterial: "",
		printAnvandbarhet: "",
		properties: [],
		setExtraProperty: false,
		baseShares: 0,
		propertyShares: []
	});

  return (
    <ValueContext.Provider value ={{calculatorValues, setCalculatorValues}}>
      {children}
    </ValueContext.Provider>
  )
};

export const useValues = () => useContext(ValueContext);
