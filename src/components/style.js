import { css } from 'lit-element';
export default function style() {
  return css`
    :host {
      border-collapse: initial;
      border-spacing: initial;
      caption-side: initial;
      color: initial;
      cursor: initial;
      direction: initial;
      empty-cells: initial;
      font-family: initial;
      font-size: initial;
      font-style: initial;
      font-variant: initial;
      font-weight: initial;
      font-size-adjust: initial;
      font-stretch: initial;
      font: initial;
      letter-spacing: initial;
      line-height: initial;
      list-style-image: initial;
      list-style-position: initial;
      list-style-type: initial;
      list-style: initial;
      orphans: initial;
      quotes: initial;
      tab-size: initial;
      text-align: initial;
      text-align-last: initial;
      text-decoration-color: initial;
      text-indent: initial;
      text-justify: initial;
      text-shadow: initial;
      text-transform: initial;
      visibility: initial;
      white-space: initial;
      widows: initial;
      word-break: initial;
      word-spacing: initial;
      word-wrap: initial;
    }
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
      text-align: initial;
    }
  `
}