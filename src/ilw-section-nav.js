import { LitElement, html } from "lit";
import styles from "./ilw-section-nav.styles";
import "./ilw-section-nav.css";
import { ManualSlotController } from "./ManualSlotController.js";
import { map } from "lit/directives/map.js";
import { classMap } from "lit/directives/class-map.js";

class SectionNav extends LitElement {
    static shadowRootOptions = {
        ...LitElement.shadowRootOptions,
        slotAssignment: "manual",
    };

    static get properties() {
        return {
            theme: {},
            collapse: { type: Boolean },
            open: { reflect: true },
            label: {},
            noRoot: { type: Boolean, attribute: "no-root" },
            isRoot: { type: Boolean, attribute: "is-root", reflect: true },
            _level: { state: true, type: Number },
        };
    }

    static get styles() {
        return styles;
    }

    _observer = new ManualSlotController(this);

    constructor() {
        super();
        this.theme = "";
        this.collapse = false;
        this.open = "false";
        this.label = "Pages In This Section";
        this.noRoot = false;
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
     *
     * @arg {"true" | "false" | undefined} open Provide the argument to force a specific state.
     */
    toggle(open = this.open) {
        if (open) {
            if (this.open === open) {
                return;
            }
            this.open = open;
        } else if (this.open === "true") {
            this.open = "false";
        } else {
            this.open = "true";
        }
    }

    render() {
        const ul = html`
            <ul class="section-nav-list section-nav-list--level-${this._level}">
                ${map(Array.from(this.children), (it, index) => {
                    const classes = {
                        "section-nav-item": true,
                        "section-nav-item--root": index === 0 && this.isRoot 
                    }
                    return html`<li class=${classMap(classes)}>
                        <slot></slot>
                    </li>`;
                })}
            </ul>
        `;
        if (this.isRoot) {
            const classes = {
                "section-nav-top": true,
                "force-collapse": this.collapse,
                "style-root": !this.noRoot,
                open: this.open === "true",
            };
            return html` <div class=${classMap(classes)}>
                <nav aria-labelledby="section-nav-toggle">
                    <button id="section-nav-toggle" @click="${this.toggle}">
                        ${this.label}
                    </button>
                    ${ul}
                </nav>
            </div>`;
        }
        return ul;
    }
}

customElements.define("ilw-section-nav", SectionNav);
