import { LitElement, html, css } from 'lit-element';

class MoxiLeftNav extends LitElement {
  
  static get properties() {
    return { 
      message: { type: String },
    };
  }

  static get styles() {
    return css`
      #moxi-left-navigation {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-family: 'Muli', sans-serif;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        width: 225px;
        background: #000;
        padding: 0;
        overflow-y: auto;
        z-index: 1000;
      }
      #brokerage-logo {
        padding: 16px;
      }
      #brokerage-logo img {
        display:block;
        margin: auto;
      }
      #moxi-left-nav-search {
        margin-bottom: 16px;
        padding: 0 16px;
      }
      #moxi-left-nav-search input {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        width: 193px;
        padding: 5.5px;
        border-radius: 25px;
        border: 0;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      li {
        color: #fff;
        padding: 6px 16px;
        cursor: pointer;
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
        <div id="moxi-left-nav-search">
          <input name="moxi-search" placeholder="Search Anything">
        </div>
        <ul>
          <li>Dashboard</li>
          <li>Calendar</li>
          <li>People</li>
          <li>Listings</li>
          <li>Presentation</li>
          <li>Website</li>
          <li>Campaigns</li>
          <li>Promote</li>
        </ul>
      </div>
    `;
  }

}

customElements.define('moxi-left-nav', MoxiLeftNav);