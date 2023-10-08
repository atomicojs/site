import { Props, c, css, useHost, useRef } from "atomico";
import { tokens } from "../site-tokens";
import { useParallax } from "@atomico/hooks/use-parallax";

function siteLink({ href, target, dot }: Props<typeof siteLink>) {
    const refLink = useRef();
    const host = useHost();
    const state = useParallax(host);
    return (
        <host shadowDom onclick={() => href && refLink.current.click()}>
            {href && <a ref={refLink} href={href} target={target}></a>}
            {dot && (
                <div class="dot">
                    <div class="dot" />
                </div>
            )}
            <div class="layer">
                <div className="layer-line"></div>
            </div>
            <slot></slot>
            <style>{`:host{--position-x: ${state.x};--dot-color: ${dot}}`}</style>
        </host>
    );
}

siteLink.props = {
    href: String,
    target: String,
    dot: { type: String, reflect: true },
};

siteLink.styles = [
    tokens,
    css`
        :host {
            --padding: var(--size-2) 0px;
            --opacity: 0;
            --delay: 0s;
            --dot-size: var(--size-2);
            display: flex;
            color: var(--color-title);
            text-transform: uppercase;
            font-size: var(--size-3);
            letter-spacing: var(--size-1);
            text-align: center;
            padding: var(--padding);
            position: relative;
            cursor: pointer;
            overflow: hidden;
            align-items: center;
            gap: var(--dot-size);
        }
        :host(:hover) {
            --opacity: 1;
            --delay: 0s;
        }
        .dot {
            width: var(--dot-size);
            height: var(--dot-size);
            background: var(--dot-color);
            border-radius: 100%;
        }
        .dot > .dot {
            background: var(--dot-color);
            filter: blur(calc(var(--dot-size) * 0.5));
        }
        .layer {
            width: 100%;
            height: var(--size-1);
            position: absolute;
            bottom: 0px;
            left: 0px;
            display: flex;
            justify-content: center;
            transform: translateX(calc(50% * var(--position-x)));
            transition: transform 0.5s linear, opacity 0.25s linear var(--delay);
            opacity: var(--opacity);
        }
        .layer-line {
            width: var(--size-4);
            height: 100%;
            background: white;
            border-radius: 100px;
        }
    `,
];

export const SiteLink = c(siteLink);
