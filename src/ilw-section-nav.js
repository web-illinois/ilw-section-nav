import { LitElement, html } from 'lit';
import styles from './ilw-section-nav.styles';
import './ilw-section-nav.css';

class SectionNav extends LitElement {

    static get properties() {
        return {
            theme: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.theme = '';
    }

    render() {
        return html`
      <div>
          <slot></slot>
      </div>
    `;
    }
}

customElements.define('ilw-section-nav', SectionNav);