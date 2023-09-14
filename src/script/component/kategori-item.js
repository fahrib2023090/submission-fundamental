import $ from "jquery";
class KategoriItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
    console.log(this.shadowDOM);

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
          background: #534e53;
          border-radius: 10px;
          position: relative;
          text-align: center;
          color: white;
          width: 100%;
          border: 2px solid black;
        }

        :host(:hover) {
          border: 2px solid white;
        }

        .centered {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #4747479c;
          width: 100%;
        }

        .centered > a {
          color: white;
          text-decoration: none;
        }

        img {
          width: 200px;
          height: 200px;
          padding: 5px;
          border-radius: 10px;
        }
      </style>

      <img src="https://picsum.photos/200/200/?random&t=${this.kategori.name}" alt="Snow">
      <div class="centered"><a href="https://google.com">${this.kategori.name}</a></div>
    `
  }
}

customElements.define('kategori-item', KategoriItem)