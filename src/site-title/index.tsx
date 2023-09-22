import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens";

function siteTitle() {
    return (
        <host shadowDom>
            <slot></slot>
        </host>
    );
}

siteTitle.styles = [
    tokens,
    css`
        :host {
            color: var(--color-title);
            line-height: var(--font-line-title);
            font-weight: var(--font-weight-title);
            position: relative;
        }
        ::slotted(*) {
            margin: 0px;
        }
        ::slotted(h1) {
            font-size: var(--font-size-title-1);
        }
        ::slotted(h2) {
            font-size: var(--font-size-title-2);
        }
        ::slotted(h3) {
            font-size: var(--font-size-title-3);
        }
        ::slotted(h4) {
            font-size: var(--font-size-title-4);
        }
        ::slotted(h5) {
            font-size: var(--font-size-title-5);
        }
    `,
];

export const SiteTitle = c(siteTitle);

customElements.define("site-title", SiteTitle);
