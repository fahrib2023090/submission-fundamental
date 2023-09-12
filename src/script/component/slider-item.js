
class SliderItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set slider(slider) {
    this._slider = slider;
    this.render();
  }

  get slider() {
    return this._slider || null;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        * {
          box-sizing: border-box;
        }
        :host {
          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
          flex: 1 0 20%; /* explanation below */
          margin: 5px;
          height: 100px;

        }

        img {
          width: 100%;
          height: auto;
        }

        figure {
          position: relative;
        }
        
        figure figcaption {
          color: white;
          position: absolute;
          bottom: 0;
          left: 0;
          text-align: center;
          padding: 15px;
          font-style: oblique;
          font-size: smaller;
          background: #16161670;
        }
        
      </style>
      <figure>
        <img src="${this.slider.pict}">
        <figcaption>${this.slider.title}</figcaption>
      </figure>
    `
  }
}

customElements.define('slider-item', SliderItem)