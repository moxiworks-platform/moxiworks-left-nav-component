import { LitElement, html, css } from 'lit-element';
import CSS from './style';

class MoxiLeftNav extends LitElement {
  static get properties() {
    return { 
      message: { type: String },
    };
  }

  static get styles() {
    return CSS();
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