
class KategoriItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set setCategori(kategori) {
    this._kategori = kategori;
    this.render();
  }

  get kategori() {
    return this._kategori || null;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
        * {
          box-sizing: border-box;
        }
        :host {
          border-radius: 10px;
          position: relative;
          text-align: center;
          color: white;
        }

        .centered {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .centered > a {
          color: white;
          text-decoration: none;
        }

        img {
          width: 100%;
          height: auto;
        }
      </style>

      <img src="${this.kategori.pict}" alt="Snow" style="width:100%;">
      <div class="centered"><a href="https://google.com">${this.kategori.title}</a></div>
    `
  }
}

customElements.define('kategori-item', KategoriItem)