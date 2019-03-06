import React from "react";
import "./MyForm.css";

const MainForm = () => {
    return (
        <div className="mybackground">
            <div className="pt7 pb7">
                <article className="tc br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw9 center formbackground">
                    <div className="">
                        <p className="f3">Anslutningsberäkning</p>
                        <div class="flex items-center justify-center flex-column">
                          <div class='cf dib'>
                            <p class="m0 f6 silver tc">Vägens grundmaterial</p>
                            <a class="selectionbackground f6 fl hover-bg-orange hover-white b--black link bb bt bl ph3 pv2 dib br2 br--left bl orange" href="#0">Grus (dålig)</a>
                            <a class="selectionbackground f6 fl hover-bg-orange hover-white b--black link ba ph3 pv2 dib orange" href="#0">Grus (bra)</a>
                            <a class="selectionbackground f6 fl hover-bg-orange hover-white b--black link bb bt ph3 pv2 dib orange br2 br--right br" href="#0">Grus (bättre)</a>
                          </div>
                        </div>
                        <div class="flex items-center justify-center flex-column">
                          <div class='cf dib'>
                            <p class="m0 f6 silver tc">Vägens beläggning</p>
                            <a class="selectionbackground f6 fl hover-bg-orange hover-white b--black link bb bt bl ph3 pv2 dib br2 br--left bl orange" href="#0">Ingen</a>
                            <a class="selectionbackground f6 fl hover-bg-orange hover-white b--black link ba ph3 pv2 dib orange" href="#0">Oljegrus</a>
                            <a class="selectionbackground f6 fl hover-bg-orange hover-white b--black link bb bt ph3 pv2 dib orange br2 br--right br" href="#0">Asfalt</a>
                          </div>
                        </div>
                        <form class="pt3 pl5 pr5 black-80">
                          <div class="measure ">
                            <label for="length" class="f6 b db mb2">Vägens längd</label>
                            <input id="length" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                          </div>
                        </form>
                        <form class="pt3 pl5 pr5 pb3 black-80">
                          <div class="measure">
                            <label for="width" class="f6 b db mb2">Vägens bredd</label>
                            <input id="width" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="name-desc" />
                          </div>
                        </form>
                        <div className="center pb4">
                          <button class="f5 b bg-orange hover-bg-orange hover-white b--black link bb bt br bl ph3 br4 pv2 dib black pointer">Beräkna
                          </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default MainForm;
