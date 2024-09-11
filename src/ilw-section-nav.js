import { LitElement, html, unsafeCSS } from "lit";
import styles from "./ilw-section-nav.styles.css?inline";
import "./ilw-section-nav.css";
import { ManualSlotController } from "./ManualSlotController.js";
import { classMap } from "lit/directives/class-map.js";

const chevron = html`<svg aria-hidden="true" class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.4 23.82">
      <path fill="currentColor" d="m39.34,1.06c-1.41-1.41-3.7-1.41-5.12,0l-14.02,14.02L6.18,1.06C4.76-.35,2.47-.35,1.06,1.06s-1.41,3.7,0,5.12l16.58,16.58c1.41,1.41,3.7,1.41,5.12,0L39.34,6.18c1.41-1.41,1.41-3.7,0-5.12Z"></path>
    </svg>`

class SectionNav extends LitElement {
    static shadowRootOptions = {
        ...LitElement.shadowRootOptions,
        slotAssignment: "manual",
    };

    static get properties() {
        return {
            mode: {},
            collapse: {},
            open: { reflect: true },
            label: {},
            isRoot: { type: Boolean, attribute: "is-root", reflect: true },
            _level: { state: true, type: Number },
        };
    }

    static get styles() {
        return unsafeCSS(styles);
    }

    _observer = new ManualSlotController(this);

    constructor() {
        super();
        this.mode = "";
        this.collapse = null;
        this.open = "false";
        this.label = "Pages In This Section";
        this.isRoot = true;
        this._level = 0;
    }

    connectedCallback() {
        super.connectedCallback();
        let parent = this.parentElement.closest("ilw-section-nav");
        if (!parent) {
            this.isRoot = true;
        } else {
            this.isRoot = false;
            this._level = parent._level + 1;
        }
    }

    /**
     * Toggle between open and closed states when collapsed.
     */
    toggle() {
        if (this.open === "true") {
            this.open = "false";
        } else {
            this.open = "true";
        }
    }

    render() {
        if (this.mode === "manual") {
            return this._renderManual();
        } else {
            return this._renderAutomatic();
        }
    }

    _renderAutomatic() {
        let inner = [];

        for (let i = 0; i < this.children.length; i++) {
            const classes = {
                "section-nav-item": true,
                "section-nav-item--root": i === 0 && this.isRoot,
            };

            // Because the link and sub-nav need to be inside the same li element,
            // we'll create two slots if needed for that.
            const double =
                this.children.item(i + 1) &&
                this.children.item(i + 1).tagName === "ILW-SECTION-NAV";
            let slot;
            if (double) {
                slot = html`<slot></slot><slot></slot>`;
                ++i;
            } else {
                slot = html`<slot></slot>`;
            }

            inner.push(html`<li class=${classMap(classes)}>${slot}</li>`);
        }

        const ul = html`
            <ul
                class="section-nav-list section-nav-list--level-${this._level}"
                id="section-nav--level-${this._level}"
            >
                ${inner}
            </ul>
        `;
        if (this.isRoot) {
            const classes = {
                "section-nav-top": true,
                "auto-collapse": !this.collapse,
                "force-collapse": this.collapse === "true",
                "prevent-collapse": this.collapse === "false",
                "section-nav-full-width": !this.collapse,
                open: this.open === "true",
            };
            return html` <div class=${classMap(classes)}>
                <nav aria-labelledby="section-nav-toggle">
                    <button
                        id="section-nav-toggle"
                        type="button"
                        @click="${this.toggle}"
                        aria-expanded=${this.open}
                        aria-controls="section-nav--level-${this._level}"
                    >
                        ${this.label} ${chevron}
                    </button>
                    ${ul}
                </nav>
            </div>`;
        }
        return ul;
    }

    _renderManual() {
        const classes = {
            "section-nav-top": true,
            "section-nav-manual": true,
            "auto-collapse": !this.collapse,
            "force-collapse": this.collapse === "true",
            "prevent-collapse": this.collapse === "false",
            "section-nav-full-width": !this.collapse,
            open: this.open === "true",
        };
        return html` <div class=${classMap(classes)}>
            <nav aria-labelledby="section-nav-toggle">
                <button
                    id="section-nav-toggle"
                    type="button"
                    @click="${this.toggle}"
                    aria-expanded=${this.open}
                    aria-controls="section-nav--level-${this._level}"
                >
                    ${this.label} ${chevron}
                </button>
                <div id="section-nav--level-${this._level}">
                    <slot></slot>
                </div>
            </nav>
        </div>`;
    }
}

customElements.define("ilw-section-nav", SectionNav);
