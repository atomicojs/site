import { useSlot } from "@atomico/hooks/use-slot";
import { Props, c, css, useRef } from "atomico";
import { serialize } from "atomico/utils";
import { tokens } from "../site-tokens/site-tokens";

function siteSection({ bigLabel }: Props<typeof siteSection>) {
    const refHeader = useRef();
    const refLeft = useRef();
    const refRight = useRef();
    const refFooter = useRef();

    const slotHeader = useSlot(refHeader);
    const slotLeft = useSlot(refLeft);
    const slotRight = useSlot(refRight);
    const slotFooter = useSlot(refFooter);

    return (
        <host
            shadowDom
            layout={serialize(
                slotHeader.length && "header",
                (slotLeft.length || slotRight.length) && "columns",
                slotFooter.length && "footer"
            )}
        >
            <div class="layout">
                {bigLabel && (
                    <div>
                        <div class="bigLabel">{bigLabel}</div>
                        <div class="bigLabel-gradient"></div>
                    </div>
                )}
                <div class="header grid centered">
                    <slot name="header" ref={refHeader} />
                </div>
                <div class="columns">
                    <div class={`left ${slotRight.length ? "grid" : ""}`}>
                        <slot name="left" ref={refLeft}></slot>
                    </div>
                    <div class={`right ${slotRight.length ? "grid" : ""}`}>
                        <slot name="right" ref={refRight}></slot>
                    </div>
                </div>
                <div class="footer grid">
                    <slot ref={refFooter}></slot>
                </div>
            </div>
            <div class="background">
                <slot name="background" />
            </div>
        </host>
    );
}

siteSection.props = {
    bigLabel: String,
    context: { type: String, reflect: true, value: "section" },
    align: { type: String, reflect: true },
};

siteSection.styles = [
    tokens,
    css`
        :host {
            --font-big-label: 30vh;
            --gap: var(--size-8);
            --padding: var(--size-8) var(--size-5);
            --align: center;
            --display-header: none;
            --display-columns: none;
            --display-footer: none;
            display: block;
            padding: var(--padding);
            background: var(--color-background);
            box-sizing: border-box;
            color: var(--color-text);
            position: relative;
        }
        :host([align="top"]) {
            --align: top;
        }
        :host([layout*="header"]) {
            --display-header: grid;
        }
        :host([layout*="columns"]) {
            --display-columns: grid;
        }
        :host([layout*="footer"]) {
            --display-footer: grid;
        }
        .grid.centered {
            place-content: center;
        }
        .left,
        .right {
            display: none;
        }
        .grid {
            display: grid;
            gap: var(--size-7);
            position: relative;
        }
        .grid.left,
        .grid.right {
            gap: var(--size-5);
        }
        .header {
            display: var(--display-header);
            text-align: center;
        }
        .columns {
            display: var(--display-columns);
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: var(--size-7);
            align-items: center;
        }
        .footer {
            display: var(--display-footer);
        }
        .layout {
            max-width: var(--maxwidth);
            min-height: 100%;
            margin: auto;
            display: grid;
            align-items: var(--align);
            gap: var(--gap);
            position: relative;
            z-index: 2;
        }
        .background {
            width: 100%;
            height: 100%;
            position: absolute;
            z-index: 0;
            left: 0;
            top: 0;
        }
    `,
];

export const SiteSection = c(siteSection);

customElements.define("site-section", SiteSection);
