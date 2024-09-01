import { css, html } from "lit";

export const chevron = html`<svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.4 23.82">
      <path fill="currentColor" d="m39.34,1.06c-1.41-1.41-3.7-1.41-5.12,0l-14.02,14.02L6.18,1.06C4.76-.35,2.47-.35,1.06,1.06s-1.41,3.7,0,5.12l16.58,16.58c1.41,1.41,3.7,1.41,5.12,0L39.34,6.18c1.41-1.41,1.41-3.7,0-5.12Z"></path>
    </svg>`

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
        border-top: none;
        border-bottom: 1px solid var(--il-storm-lighter-3);
        border-left: none;
        border-right: none;
        box-sizing: border-box;
        width: 100%;
        
        line-height: var(--ilw-section-nav--line-height);
        font-weight: var(--ilw-section-nav--root-font-weight);
        font-size: var(--ilw-section-nav--toggle-font-size);
        text-align: left;
        padding-left: var(--ilw-section-nav--item-padding-left);
        padding-right: var(--ilw-margin--side);
        
        background: var(--il-storm-lighter-4);
        
        display: none;
        position: relative;
    }
    
    #section-nav-toggle:active {
        background: var(--il-storm-lighter-3);
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
        :is(.auto-collapse, .force-collapse) #section-nav-toggle {
            display: block;
        }
        
        :is(.auto-collapse, .force-collapse) .section-nav-list--level-0 {
            display: none;
        }

        :is(.auto-collapse, .force-collapse).open .section-nav-list--level-0 {
            display: block;
        }

        .section-nav-full-width {
            left:50%;
            margin-left:-50vw;
            margin-right:-50vw;
            position:relative;
            right:50%;
            width: 100vw;
            box-sizing: border-box;
        }
    }
`;