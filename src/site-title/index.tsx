import { c, css } from "atomico";
import { tokensColor, tokensText } from "../site-tokens";

function siteTitle() {
    return (
        <host shadowDom>
            <slot></slot>
        </host>
    );
}

siteTitle.styles = [
    tokensColor,
    tokensText,
    css`
        :host {
            color: var(--color-title);
            line-height: var(--text-height-title);
            font-weight: var(--text-weight-bold);
            position: relative;
        }
        ::slotted(*) {
            margin: 0px;
        }
        ::slotted(h1) {
            font-size: var(--text-size-title-1);
        }
        ::slotted(h2) {
            font-size: var(--text-size-title-2);
        }
        ::slotted(h3) {
            font-size: var(--text-size-title-3);
        }
        ::slotted(h4) {
            font-size: var(--text-size-title-4);
        }
        ::slotted(h5) {
            font-size: var(--text-size-title-5);
        }
    `,
];

export const SiteTitle = c(siteTitle);
