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
        margin: 0;
        padding: 0;
        line-height: var(--ilw-section-nav--line-height);
        font-weight: var(--ilw-section-nav--font-weight);
    }

    .section-nav-list--level-0 {
        padding-left: 0;
        font-size: var(--ilw-section-nav--level0-font-size);
    }
    

    .section-nav-list--level-1 {
        font-size: var(--ilw-section-nav--level1-font-size);
    }

    .section-nav-list--level-2 {
    }

    #section-nav-toggle {
        display: none;
    }
`;