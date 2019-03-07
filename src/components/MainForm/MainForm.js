import React from "react";
import "./MyForm.css";


const MainForm = ({getWidth, getLength, getAge, getBasicMaterial, getTopMaterial, mainFunction, secondProperty, thirdProperty, fourthProperty, fifthProperty, setExtraProperty, setBaseShares, setProperty1Share, setProperty2Share, setProperty3Share, setProperty4Share, setProperty5Share}) => {
    return (
        <div className="">
            <div className="">
                <article className="tc br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw9 center formbackground">
                    <div className="">
                        <p className="f3">Anslutningsberäkning</p>
                        <div className="flex items-center justify-center flex-column">
                          <div className='cf dib'>
                            <p className="m0 f6 silver tc">Vägens grundmaterial</p>
                            <p onClick={() => getBasicMaterial(100)} className="selectionbackground f6 fl hover-bg-orange hover-white b--black bb bt bl ph3 pv2 dib br2 br--left bl orange" href="#0">Grus (dålig)</p>
                            <p onClick={() => getBasicMaterial(150)} className="selectionbackground f6 fl hover-bg-orange hover-white b--black ba ph3 pv2 dib orange" href="#0">Grus (bra)</p>
                            <p onClick={() => getBasicMaterial(250)} className="selectionbackground f6 fl hover-bg-orange hover-white b--black bb bt ph3 pv2 dib orange br2 br--right br" href="#0">Grus (bättre)</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center flex-column">
                          <div className='cf dib'>
                            <p className="m0 f6 silver tc">Vägens beläggning</p>
                            <p onClick={() => getTopMaterial(0)} className="selectionbackground f6 fl hover-bg-orange hover-white b--black bb bt bl ph3 pv2 dib br2 br--left bl orange" href="#0">Ingen</p>
                            <p onClick={() => getTopMaterial(25)}className="selectionbackground f6 fl hover-bg-orange hover-white b--black ba ph3 pv2 dib orange" href="#0">Oljegrus</p>
                            <p onClick={() => getTopMaterial(50)}className="selectionbackground f6 fl hover-bg-orange hover-white b--black bb bt ph3 pv2 dib orange br2 br--right br" href="#0">Asfalt</p>
                          </div>
                        </div>
                        <form className="pt3 pl5 pr5 black-80">
                          <div className="measure ">
                            <label htmlFor="length" className="f6 b db mb2">Vägens ålder</label>
                            <input onChange={getAge} id="length" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                          </div>
                        </form>
                        <form className="pt3 pl5 pr5 black-80">
                          <div className="measure ">
                            <label htmlFor="length" className="f6 b db mb2">Vägens längd</label>
                            <input onChange={getLength} id="length" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                          </div>
                        </form>
                        <form className="pt3 pl5 pr5 pb3 black-80">
                          <div className="measure">
                            <label htmlFor="width" className="f6 b db mb2">Vägens bredd</label>
                            <input onChange={getWidth} id="width" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                          </div>
                        </form>
                        <hr />
                        <form className="pt3 pl5 pr5 pb3 black-80">
                          <div className="measure">
                            <label htmlFor="width" className="f6 b db mb2">Anläggningens totala andelsstal (före inträde)</label>
                            <input onChange={setBaseShares} id="andelstaltotal" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                          </div>
                        </form>
                        <form className="pt3 pl5 pr5 pb3 black-80">
                          <div className="measure">
                            <label htmlFor="width" className="f6 b db mb2">Fastighet #1 andelsstal</label>
                            <input onChange={setProperty1Share} id="andelstal1" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                          </div>
                        </form>
                        <div>
                          {(secondProperty === true) ? (
                            <form className="pt3 pl5 pr5 pb3 black-80">
                            <div className="measure">
                              <label htmlFor="width" className="f6 b db mb2">Fastighet #2 andelsstal</label>
                              <input onChange={setProperty2Share} id="andelstal1" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                            </div>
                          </form>
                          ) : (null)}
                        </div>
                        <div>
                          {thirdProperty === true ? (
                            <form className="pt3 pl5 pr5 pb3 black-80">
                            <div className="measure">
                              <label htmlFor="width" className="f6 b db mb2">Fastighet #3 andelsstal</label>
                              <input onChange={setProperty3Share} id="andelstal1" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                            </div>
                          </form>
                          ) : (null)}
                        </div>
                        <div>
                          {fourthProperty === true ? (
                            <form className="pt3 pl5 pr5 pb3 black-80">
                            <div className="measure">
                              <label htmlFor="width" className="f6 b db mb2">Fastighet #4 andelsstal</label>
                              <input onChange={setProperty4Share} id="andelstal1" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                            </div>
                          </form>
                          ) : (null)}
                        </div>
                        <div>
                          {fifthProperty === true ? (
                            <form className="pt3 pl5 pr5 pb3 black-80">
                            <div className="measure">
                              <label htmlFor="width" className="f6 b db mb2">Fastighet #5 andelsstal</label>
                              <input onChange={setProperty5Share} id="andelstal1" className="shadow-5 input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                            </div>
                          </form>
                          ) : (null)}
                        </div>
                        <div className="center pb3">
                          <button onClick={setExtraProperty} className="f7 grow bg-orange hover-bg-orange hover-white b--black bb bt br bl ph3 br2 pv2 dib black pointer">Lägg till fastighet
                          </button>
                        </div>
                        <hr />
                        <div className="center pa4">
                          <button onClick={mainFunction} className="f5 b grow bg-orange hover-bg-orange hover-white b--black bb bt br bl ph3 br4 pv2 dib black pointer">Beräkna
                          </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default MainForm;
