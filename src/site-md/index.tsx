import { c, css } from "atomico";
import { tokensColor, tokensSize, tokensText } from "../site-tokens";

function siteMd() {
    return (
        <host shadowDom>
            <slot />
        </host>
    );
}

siteMd.styles = [
    tokensText,
    tokensColor,
    tokensSize,
    css`
        :host {
            color: var(--color-text);
            font-weight: var(--text-weight);
            line-height: var(--text-height);
        }
    `,
];

export const SiteMd = c(siteMd);
