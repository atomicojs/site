import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens";

function siteText({ size, color }: Props<typeof siteText>) {
    return (
        <host shadowDom>
            <slot></slot>
            <style>{`:host{
                ${size ? `--font-size: var(--size-${size}) !important;` : ""}
                ${color ? `--color: var(--color-${color}) !important;` : ""}
            }`}</style>
        </host>
    );
}

siteText.props = {
    size: { type: Number, reflect: true },
    color: { type: String, value: "text" },
    elegant: { type: Boolean, reflect: true },
    textCenter: { type: Boolean, reflect: true },
    columns: { type: Boolean, reflect: true },
};

siteText.styles = [
    tokens,
    css`
        :host {
            color: var(--color);
            font-size: var(--font-size);
            line-height: var(--font-line-text);
            font-weight: var(--font-weight-text);
            letter-spacing: var(--font-spacing);
        }
        ::slotted(*) {
            margin: 0;
        }
        ::slotted(strong),
        ::slotted(a) {
            font-weight: var(--font-weight-bold);
            color: var(--color-accent);
        }
        ::slotted(a) {
            text-decoration-style: wavy;
        }
        ::slotted(h1),
        ::slotted(h2),
        ::slotted(h3),
        ::slotted(h4),
        ::slotted(h5),
        ::slotted(h6) {
            color: var(--color-title);
        }
        :host([elegant]) {
            --font-spacing: var(--size-3);
            --font-weight-text: var(--font-weight-bold);
        }
        :host([elegant]:not([size])) {
            --font-size: 0.875em;
        }
        :host([text-center]) {
            text-align: center;
        }
        :host([columns]) {
            columns: 380px 2;
            column-gap: var(--size-8);
        }
    `,
];

export const SiteText = c(siteText);

customElements.define("site-text", SiteText);
