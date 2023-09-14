import categories from "../data/categories"
import './kategori-item'
import DataCategories from '../data/data-categories'
import $ from "jquery";


class KategoriList extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this._kategori = categories
    this.mouseDown = false;
    this.startX;
    this.scrollLeft;
    this.slider = document.querySelector('kategori-list');
    this.render()
    this.getKategori()
  }

  async getKategori() {
    try {
      const result = await DataCategories.categoriesList()
      this.renderResult(result);
    } catch (error) {
      this.fallbackResult(error);
    }
  }

  renderResult = results => {
    results.genres.forEach(item => {
      const kategoriItemElement = document.createElement('kategori-item');
      kategoriItemElement.setCategori = item
      this.shadowDOM.appendChild(kategoriItemElement)
    });
  }

  fallbackResult = message => {
    console.log(message);
  };

  render() {
    this.slider.addEventListener('mousemove', (e) => {
      e.preventDefault();
      if(!this.mouseDown) { return; }
      const x = e.pageX - this.slider.offsetLeft;
      const scroll = (x - this.startX) * 0.1;
      this.slider.scrollLeft = this.scrollLeft - scroll;
    });
  
    // Add the event listeners
    this.slider.addEventListener('mousedown', this.startDragging, false);
    this.slider.addEventListener('mouseup', this.stopDragging, false);
    this.slider.addEventListener('mouseleave', this.stopDragging, false);
    
  }

  startDragging (e) {
    this.mouseDown = true;
    this.startX = e.pageX - this.slider.offsetLeft;
    this.scrollLeft = this.slider.scrollLeft;
  };
  
  stopDragging (event) {
    this.mouseDown = false;
  };

}

customElements.define('kategori-list', KategoriList);
