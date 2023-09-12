import categories from "../data/categories"
import './kategori-item'
import DataCategories from '../data/data-categories'
import $ from "jquery";


class KategoriList extends HTMLElement {
  constructor() {
    super()
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    this._kategori = categories
    try {
      const result = DataCategories.categoriesList()
      this.renderResult(result);
    } catch (error) {
      console.log(error);
      // this.fallbackResult('error');
    }
    this.render()
  }

  renderResult = results => {
    console.log(results);
    // const categoriesListElement = $('kategori-item')[0];
    // categories = results
    // categories = result
  }

  fallbackResult = message => {
    console.log(message);
  };

  render() {
    this._kategori.forEach(item => {
      const kategoriItemElement = document.createElement('kategori-item');
      kategoriItemElement.setCategori = item
      this.shadowDOM.appendChild(kategoriItemElement)
    });

    
  }

}

customElements.define('kategori-list', KategoriList);
