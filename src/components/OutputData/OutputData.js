import React from "react";


const OutputData = ({totalValueState, secondProperty, thirdProperty, fourthProperty, fifthProperty, firstConnectCost, secondConnectCost, thirdConnectCost, fourthConnectCost, fifthConnectCost}) => {
    return (
                <article className="tc br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw9 center formbackground">
                    <div className="">
                        <div className="pt2 pb4">Anläggningens värde: {totalValueState} kr</div>
                        <div className="pt2 pb2">Anslutningsersättning #1: {firstConnectCost} kr</div>
                        {(secondProperty === true) ?
                          (<div className="pt2 pb2">Anslutningsersättning #2: {secondConnectCost} kr</div>)
                          : (null)}
                          {(thirdProperty === true) ?
                          (<div className="pt2 pb2">Anslutningsersättning #3: {thirdConnectCost} kr</div>)
                          : (null)}
                          {(fourthProperty === true) ?
                          (<div className="pt2 pb2">Anslutningsersättning #4: {fourthConnectCost} kr</div>)
                          : (null)}
                          {(fifthProperty === true) ?
                          (<div className="pt2 pb2">Anslutningsersättning #5: {fifthConnectCost} kr</div>)
                          : (null)}
                    </div>
                </article>
    );
}

export default OutputData;
