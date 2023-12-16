import { c, css, useRef } from "atomico";
import { tokens, tokensCard, tokensColor, tokensSize } from "../site-tokens";
import { useParallax } from "@atomico/hooks/use-parallax";

function siteEye() {
    const refWindow = useRef(globalThis);
    const state = useParallax(refWindow);
    return (
        <host shadowDom>
            <div class="eye">
                <div className="iris"></div>
            </div>
            <style>
                {`:host{
                    --percent-x: ${state.x};
                    --percent-y: ${state.y};
                }`}
            </style>
        </host>
    );
}

siteEye.props = {
    myProp: String,
};

siteEye.styles = [
    tokensColor,
    css`
        :host {
            display: flex;
            justify-content: center;
            width: 100%;
            --size: 280px;
            --border: 1px solid var(--color-orbe);
        }
        .eye {
            width: var(--size);
            height: var(--size);
            border: var(--border);
            display: inline-block;
            position: relative;
            border-radius: 75% 0px;
            overflow: hidden;
            transform: rotate(45deg);
        }
        .iris {
            --size-iris: 50%;
            --center: calc(50% - var(--size-iris) / 2);
            width: var(--size-iris);
            height: var(--size-iris);
            border-radius: 100%;
            position: absolute;
            border: var(--border);
            top: var(--center);
            left: var(--center);
            transition: 0.5s linear all;
            transform: rotate(-45deg)
                translate(
                    calc(var(--size) * var(--percent-x) * 0.5),
                    calc(var(--size) / 2 * var(--percent-y) * 0.5)
                );
        }
    `,
];

export const SiteEye = c(siteEye);
