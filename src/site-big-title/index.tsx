import { c, css } from "atomico";
import { tokensColor, tokensText } from "../site-tokens";

function siteBigTitle() {
    return (
        <host shadowDom>
            <slot></slot>
            <div class="gradient"></div>
        </host>
    );
}

siteBigTitle.styles = [
    tokensText,
    tokensColor,
    css`
        :host {
            --size: 30vh;
            font-size: var(--size);
            color: transparent;
            text-stroke: 1px var(--color-orbe);
            -webkit-text-stroke: 1px var(--color-orbe);
            position: relative;
            line-height: 1em;
            font-weight: var(--text-weight-bold);
            margin-bottom: calc(var(--size) * -0.25);
        }
        .gradient {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to bottom,
                transparent 25%,
                var(--color-background)
            );
        }
        @media (max-width: 768px) {
            :host {
                --font-size: 15vh;
            }
        }
    `,
];

export const SiteBigTitle = c(siteBigTitle);
