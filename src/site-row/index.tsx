import { Props, c, css } from "atomico";
import { tokensSize } from "../site-tokens";

function siteRow({
    cols = "1fr",
    gap,
    colsMd = cols,
    colsXl = colsMd,
}: Props<typeof siteRow>) {
    return (
        <host shadowDom>
            <slot />
            <style>{`:host{
                 --cols:${cols}; 
                 --cols-md:${colsMd}; 
                 --cols-xl:${colsXl}; 
                --gap: var(--size-${gap});
            }`}</style>
        </host>
    );
}

type Cols = `${number}%` | `${number}fr` | "auto";

type Align = "middle" | "top" | "bottom" | "centered" | "center";

const cols = {
    type: String,
    reflect: true,
    value: (): `${Cols}` | `${Cols} ${Cols}` | `${Cols} ${Cols} ${Cols}` =>
        undefined,
};

siteRow.props = {
    inline: { type: String, reflect: true },
    content: { type: String, reflect: true, value: (): Align => "middle" },
    flex: { type: Boolean, reflect: true },
    gap: { type: Number, reflect: true, value: 5 },
    cols: cols,
    colsMd: cols,
    colsXl: cols,
};

siteRow.styles = [
    tokensSize,
    css`
        :host {
            display: grid;
            gap: var(--gap);
            --columns: var(--cols);
            grid-template-columns: var(--columns);
        }
        :host([flex]) {
            display: flex;
            flex-flow: row wrap;
        }
        :host([content="middle"]),
        :host([content="centered"]) {
            align-items: center;
        }
        :host([content="center"]),
        :host([content="centered"]) {
            justify-items: center;
        }
        @media (min-width: 980px) {
            :host {
                --columns: var(--cols-xl, var(--cols));
            }
        }
        @media (min-width: 720px) {
            :host {
                --columns: var(--cols-md, var(--cols));
            }
        }
    `,
];

export const SiteRow = c(siteRow);
