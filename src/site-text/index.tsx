import { Props, c, css } from "atomico";
import { serialize } from "atomico/utils";
import { tokensColor, tokensSize, tokensText } from "../site-tokens";

function siteText({ size, color }: Props<typeof siteText>) {
    return (
        <host shadowDom>
            <slot></slot>
            <style>{`:host{
                ${serialize(
                    color && `--color-text: var(--color-${color}) !important;`
                )}                
            }`}</style>
        </host>
    );
}

siteText.props = {
    size: { type: Number, reflect: true },
    color: { type: String },
    elegant: { type: Boolean, reflect: true },
    textCenter: { type: Boolean, reflect: true },
    cols: { type: Boolean, reflect: true },
    bold: { type: Boolean, reflect: true },
};

siteText.styles = [
    tokensSize,
    tokensColor,
    tokensText,
    css`
        :host {
            color: var(--color-text);
            font-size: var(--text-size);
            font-weight: var(--text-weight);
            line-height: var(--text-height);
            letter-spacing: var(--text-spacing);
        }
        :host([bold]) {
            --text-weight: var(--text-weight-bold);
        }
        :host([text-center]) {
            text-align: center;
        }
        ::slotted(strong) {
            color: var(--color-accent);
            font-weight: var(--text-weight-bold);
        }
        ::slotted(b) {
            color: var(--color-title);
            font-weight: var(--text-weight-medium);
        }
        ::slotted(*) {
            margin: 0;
        }
        :host([elegant]) {
            --text-spacing: var(--size-3);
            --text-weight: var(--font-weight-bold);
        }
        ::slotted(*) {
            column-count: var(--text-column-count);
            column-gap: var(--text-column-gap);
            column-width: var(--text-column-width);
        }
    `,
];

export const SiteText = c(siteText);
