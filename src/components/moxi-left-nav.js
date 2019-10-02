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
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
      <div id="moxi-left-navigation">
        <div id="brokerage-logo">
          <img src="https://www.windermere.com/assets/shared/WRE_logo_white-268x100-18c23149838895d8ecfa41867b9bb393.png" width="150" />
        </div>
        <div id="moxi-left-nav-search">
          <div id="magnifying-glass-svg">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20"><path d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z" fill="#626262"/></svg>
          </div>
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
          <li class="section-break"></li>
          <li class="sub-title">Brokerage</li>
          <li>Intranet</li>
          <li>Directory</li>
          <li>Documents</li>
          <li class="section-break"></li>
          <li class="sub-title">Manage</li>
          <li>Company</li>
          <li>Support Tools</li>
        </ul>
      </div>
    `;
  }

}

customElements.define('moxi-left-nav', MoxiLeftNav);