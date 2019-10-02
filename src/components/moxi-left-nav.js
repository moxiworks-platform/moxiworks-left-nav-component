import { LitElement, html, css } from 'lit-element';

class MoxiLeftNav extends LitElement {
  
  static get properties() {
    return { message: { type: String } };
  }

  static get styles() {
    return css`
      #moxi-left-navigation {
        font-family: 'Muli', sans-serif;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 225px;
        background: #000;
      }
      #brokerage-logo {
        padding: 16px;
      }
      #brokerage-logo img {
        display:block;
        margin: auto;
      }
    `
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div id="moxi-left-navigation">
        <div id="brokerage-logo">
          <img src="https://www.windermere.com/assets/shared/WRE_logo_white-268x100-18c23149838895d8ecfa41867b9bb393.png" width="150" />
        </div>
      </div>
    `;
  }

}

customElements.define('moxi-left-nav', MoxiLeftNav);