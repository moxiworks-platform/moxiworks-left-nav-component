import { LitElement, html, css } from 'lit-element';

class MoxiLeftNav extends LitElement {
  
  static get properties() {
    return { message: { type: String } };
  }

  static get styles() {
    return css`
      div,p,ul,li {
        font-family: Helvetica, Verdana, Arial, sans-serif;
      }
    `
  }

  constructor() {
    super();
    this.message='Hello world! From my-element';
  }

  render() {
    return html`
      <p>${this.message}</p>
    `;
  }

}
customElements.define('moxi-left-nav', MoxiLeftNav);