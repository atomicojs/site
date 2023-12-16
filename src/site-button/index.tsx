import { Props, c, css } from "atomico";
import { tokensButton, tokensColor, tokensSize } from "../site-tokens";
export { SiteButtons } from "./buttons";

function siteButton({ color }: Props<typeof siteButton>) {
    return (
        <host shadowDom>
            <button>
                <slot></slot>
            </button>
            {color && (
                <style>{`:host{--button-border-color:var( --color-${color},${color} )!important}`}</style>
            )}
        </host>
    );
}

siteButton.props = {
    small: { type: Boolean, reflect: true },
    color: { type: String, reflect: true },
    checked: { type: Boolean, reflect: true },
    icon: { type: Boolean, reflect: true },
};

siteButton.styles = [
    tokensColor,
    tokensSize,
    tokensButton,
    css`
        :host {
            display: content;
        }
        :host([icon]) {
            --padding: 0;
        }
        button {
            display: flex;
            justify-content: center;
            align-items: center;
            height: var(--size);
            min-width: var(--size);
            padding: 100px;
            background: var(--color-container);
            color: var(--color);
            padding: var(--padding);
            border-radius: var(--radius);
            border: var(--border);
            border-radius: var(--border-radius);
            font-family: unset;
            font-size: var(--text-size);
            box-sizing: border-box;
            transition: var(--transition);
            cursor: pointer;
            letter-spacing: var(--text-spacing);
            gap: 1em;
        }
    `,
];

export const SiteButton = c(siteButton);
