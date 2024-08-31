import { css } from 'lit';

export default css`
    :host {
        display: block;
    }

    .section-nav-top {
        margin: var(--ilw-section-nav--margin);
    }

    .section-nav-list {
        list-style: none;
        padding: 0 0 0 var(--ilw-section-nav--level-padding);
        margin: 0;
        line-height: var(--ilw-section-nav--line-height);
        font-weight: var(--ilw-section-nav--font-weight);
    }

    .section-nav-list--level-0 {
        padding-left: 0;
        font-size: var(--ilw-section-nav--level0-font-size);
    }
    
    .section-nav-list--level-0 > li ::slotted(a) {
        border-top: var(--ilw-section-nav--level1-border);
    }

    .section-nav-list--level-1 {
        font-size: var(--ilw-section-nav--level1-font-size);
    }

    .section-nav-list--level-2 {
        padding-left: calc(var(--ilw-section-nav--level2-padding));
    }

    .style-root {
        ::slotted(a:first-of-type) {
            font-size: var(--ilw-section-nav--root-font-size);
            background: var(--ilw-section-nav--root-background);
            font-weight: var(--ilw-section-nav--root-font-weight);
            border-top: none;
        }
    }

    #section-nav-toggle {
        display: none;
    }
`;