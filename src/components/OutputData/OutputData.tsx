import React from "react";
import { useValues } from "../ValueContext/ValueContext";


const OutputData = ({setPrintFormat}: any) => {

  const {calculatorValues} = useValues();

    return (
                <article className="tc br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw9 center formbackground">
                    <div className="">
                        <div className="pt4 pb4">Anläggningens värde: {calculatorValues.totalValue} kr</div>
                        {calculatorValues.andelstalPay && calculatorValues.andelstalPay.length > 0 &&
                        <>
                        {calculatorValues.andelstalPay.map((x, i) => 
                        <div className="pt2 pb2">Anslutningsersättning #{i}: {x} kr</div>
                        )}
                        </>}
                        <div>
                          <p onClick={() => setPrintFormat()} className="silver pb2 pointer grow">Tryck här för utskriftsformat</p>
                        </div>
                    </div>
                </article>
    );
}

export default OutputData;
