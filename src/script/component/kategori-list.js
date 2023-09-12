import sliders from "../data/sliders"
import './slider-item'

class KategoriList extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this._sliders = sliders
    this.render()
    this.sliderRun()
  }

  render() {
    this._sliders.forEach(item => {
      const sliderItemElement = document.createElement('slider-item');
      sliderItemElement.slider = item
      this.shadowDOM.appendChild(sliderItemElement)
    });

    
  }

  sliderRun() {
  }

}

customElements.define('kategori-list', KategoriList);
