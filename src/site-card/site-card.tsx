import { c, css, Props } from "atomico";
import { tokens } from "../site-tokens/site-tokens";
function siteCard({ dotColor }: Props<typeof siteCard>) {
    return (
        <host shadowDom>
            <div class="dot dot-circle"></div>
            <div class="dot dot-gradient"></div>
            <div class="content">
                <slot></slot>
            </div>
            <style>{`:host{--dot-bgcolor:${dotColor}}`}</style>
        </host>
    );
}

siteCard.props = {
    dotColor: { type: String, reflect: true },
    overflow: { type: Boolean, reflect: true },
    padding: { type: Boolean, reflect: true },
};

siteCard.styles = [
    tokens,
    css`
        :host {
            --gap: var(--size-4);
            --padding: var(--size-5);
            --radius: var(--size-2);
            --dot-size: var(--size-2);
            --dot-transition: 1s ease all;

            background: var(--color-card-background);
            border: 1px solid var(--color-card-border);
            box-sizing: border-box;
            border-radius: var(--radius);
            position: relative;
            display: block;
        }
        :host([dot-color]) .dot {
            width: var(--dot-size);
            height: var(--dot-size);
            background: var(--dot-bgcolor);
            transition: var(--dot-transition);
            position: absolute;
        }
        :host([dot-color]) .dot-circle {
            top: 20px;
            right: 20px;
            border-radius: 100%;
        }
        :host([dot-color]) .dot-gradient {
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            opacity: 0;
            transition: var(--dot-transition) 0.25s;
            background: radial-gradient(
                circle at 100% -50%,
                var(--dot-bgcolor),
                transparent
            );
        }
        :host([dot-color]:hover) .dot-gradient {
            transition-delay: 0s;
            opacity: 0.25;
        }
        :host([dot-color]:hover) .dot {
            box-shadow: 0px 0px 42px var(--dot-bgcolor);
        }
        :host([overflow]) {
            overflow: hidden;
        }
        :host([padding]) {
            padding: var(--padding);
        }
        .content {
            display: grid;
            position: relative;
            gap: var(--gap);
        }
    `,
];

export const SiteCard = c(siteCard);

customElements.define("site-card", SiteCard);
