import { c, css } from "atomico";
import { tokensButtons, tokensSize } from "../site-tokens";

function siteButtons() {
    return (
        <host shadowDom>
            <slot />
        </host>
    );
}

siteButtons.styles = [
    tokensSize,
    css`
        :host {
            display: flex;
            flex-flow: row wrap;
            gap: var(--size-1);
        }
    `,
];

export const SiteButtons = c(siteButtons);
