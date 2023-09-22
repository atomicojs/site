import { c, css, useRef } from "atomico";
import { tokens } from "../site-tokens";
import { useResizeObserverState } from "@atomico/hooks/use-resize-observer";

function siteHeader() {
    const refLogo = useRef();
    const rect = useResizeObserverState(refLogo);

    return (
        <host shadowDom>
            <div class="layout">
                <div ref={refLogo}>
                    <slot name="logo"></slot>
                </div>
                <div class="links">
                    <slot name="link"></slot>
                </div>
                <div class="actions">
                    <slot name="action"></slot>
                </div>
            </div>
            <style>
                {rect?.width &&
                    `:host{
                --width-between: ${rect.width}px;
            }`}
            </style>
        </host>
    );
}

siteHeader.props = {
    myProp: String,
};

siteHeader.styles = [
    tokens,
    css`
        :host {
            --width-between: 200px;
            --padding: var(--size-7) var(--size-5);
            width: 100%;
            display: block;
            position: absolute;
            top: 0px;
            left: 0px;
            z-index: 2;
            padding: var(--padding);
            box-sizing: border-box;
        }
        .layout {
            width: 100%;
            display: grid;
            margin: 0px auto;
            max-width: var(--maxwidth);
            display: grid;
            align-items: center;
            justify-content: space-between;
            grid-template-columns: var(--width-between) 1fr var(--width-between);
        }
        .links {
            display: grid;
            grid-template-columns: auto auto auto;
            gap: 1rem;
            justify-content: center;
        }
        .actions {
            display: flex;
            align-items: center;
            justify-content: end;
            gap: var(--size-3);
        }
        @media (max-width: 768px) {
            .layout {
                grid-template-columns: auto auto;
            }
            .links {
                display: none;
            }
        }
    `,
];

export const SiteHeader = c(siteHeader);
