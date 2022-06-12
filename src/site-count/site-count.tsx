import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteCount({ value, color }: Props<typeof siteCount>) {
    return (
        <host shadowDom>
            <div class="dot">{value}</div>
            <div class="label">
                <slot></slot>
            </div>
            <style>{color && `:host{--dot-bgcolor:${color}}`}</style>
        </host>
    );
}

siteCount.props = {
    value: {
        type: Number,
    },
    color: {
        type: String,
    },
};

siteCount.styles = [
    tokens,
    css`
        :host {
            --size: var(--size-5);
            --dot-color: var(--color-background);
            display: grid;
            align-items: center;
            grid-template-columns: auto 1fr;
            gap: var(--size-5);
            font-size: calc(var(--size) * 0.6);
        }
        .dot {
            width: var(--size);
            height: var(--size);
            background: var(--dot-bgcolor, #fff);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 100px;
            font-weight: var(--font-bold);
            color: var(--dot-color);
        }
        .label {
            color: var(--color-subtitle);
            letter-spacing: var(--size-1);
            text-align: left;
        }
    `,
];

export const SiteCount = c(siteCount);

customElements.define("site-count", SiteCount);
