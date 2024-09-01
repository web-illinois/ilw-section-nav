import { css, html } from "lit";

export const chevron = html`<svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.4 23.82">
      <path fill="currentColor" d="m39.34,1.06c-1.41-1.41-3.7-1.41-5.12,0l-14.02,14.02L6.18,1.06C4.76-.35,2.47-.35,1.06,1.06s-1.41,3.7,0,5.12l16.58,16.58c1.41,1.41,3.7,1.41,5.12,0L39.34,6.18c1.41-1.41,1.41-3.7,0-5.12Z"></path>
    </svg>`

export default css`
    :host {
        display: block;
    }

    .section-nav-top {
        margin-top: var(--ilw-section-nav--margin-top);
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
        border-top: none;
        border-bottom: var(--ilw-section-nav--toggle--border);
        border-left: none;
        border-right: none;
        box-sizing: border-box;
        width: 100%;
        font-family: var(--ilw-section-nav--toggle--font);

        min-height: var(--ilw-section-nav--item--height);
        font-weight: var(--ilw-section-nav--toggle--font-weight);
        font-size: var(--ilw-section-nav--toggle--font-size);
        text-align: left;
        padding-left: var(--ilw-section-nav--item--padding-left);
        padding-right: var(--ilw-margin--side);

        background: var(--ilw-section-nav--toggle--background);

        display: none;
        position: relative;
    }

    #section-nav-toggle:active {
        background: var(--ilw-section-nav--toggle--background--active);
    }

    #section-nav-toggle .chevron {
        height: 0.5rem;
        position: absolute;
        right: var(--ilw-margin--side);
        top: calc(50% - 0.25rem);
    }

    .open #section-nav-toggle .chevron {
        transform: scale(-1);
    }

    @media screen and (max-width: 700px) {

        .auto-collapse.section-nav-top {
            margin-top: 0;
            margin-bottom: var(--ilw-section-nav--collapsed--margin-bottom);
            border-bottom: var(--ilw-section-nav--collapsed--border);
        }

        .auto-collapse #section-nav-toggle {
            display: block;
        }

        .auto-collapse .section-nav-list--level-0 {
            display: none;
        }

        .auto-collapse.open .section-nav-list--level-0 {
            display: block;
        }

        .section-nav-full-width {
            left: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
            position: relative;
            right: 50%;
            width: 100vw;
            box-sizing: border-box;
        }
    }

    .force-collapse.section-nav-top {
        margin-top: 0;
        margin-bottom: var(--ilw-section-nav--collapsed--margin-bottom);
        border-bottom: var(--ilw-section-nav--collapsed--border);
    }

    .force-collapse #section-nav-toggle {
        display: block;
    }

    .force-collapse .section-nav-list--level-0 {
        display: none;
    }

    .force-collapse.open .section-nav-list--level-0 {
        display: block;
    }
`;