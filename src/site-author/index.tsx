import { useParallax } from "@atomico/hooks";
import { c, css, useRef } from "atomico";
import { tokensSize } from "../site-tokens";

function siteAuthor() {
    const host = useRef(globalThis);
    const state = useParallax(host);
    return (
        <host shadowDom>
            <slot></slot>
            <style>
                {`:host{
                    --percent-x: ${state.x + 1};
                    --percent-y: ${state.y + 1};
                }`}
            </style>
        </host>
    );
}

siteAuthor.styles = [
    tokensSize,
    css`
        :host {
            display: block;
            --color-1: rgba(0, 255, 144, 0.25);
            --color-2: rgb(214, 0, 255, 0.5);
            --size: 80px;
            --blur: 100vh;
        }
        ::slotted(*) {
            max-width: 100%;
            border-radius: var(--size-2);
            transition: 1s linear;
            box-shadow: calc(var(--size) * var(--percent-x))
                    calc(var(--size) * var(--percent-y)) var(--blur)
                    var(--color-1),
                calc(var(--size) * -1 * var(--percent-x))
                    calc(var(--size) * -1 * var(--percent-y)) var(--blur)
                    var(--color-2);
        }
    `,
];

export const SiteAuthor = c(siteAuthor);
