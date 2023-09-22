import { c, css } from "atomico";
import { tokens } from "../site-tokens";

function siteBigTitle() {
    return (
        <host shadowDom>
            <slot></slot>
            <div class="gradient"></div>
        </host>
    );
}

siteBigTitle.styles = [
    tokens,
    css`
        :host {
            --font-weight: var(--font-weight-title);
            --font-size: 30vh;
            font-size: var(--font-size);
            color: transparent;
            text-stroke: 1px var(--color-orbe);
            -webkit-text-stroke: 1px var(--color-orbe);
            position: relative;
            line-height: 1em;
            font-weight: var(--font-weight);
            margin-bottom: calc(var(--font-size) * -0.25);
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
