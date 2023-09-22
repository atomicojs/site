import { Type, Props, c, css } from "atomico";
import { tokens } from "../site-tokens";
import { useResponsiveState } from "@atomico/hooks/use-responsive-state";

function siteGrid({ columns, gap }: Props<typeof siteGrid>) {
    const currentColumn = useResponsiveState(columns || "1");

    return (
        <host shadowDom>
            <slot></slot>
            <style>{`
                :host{
                    --columns: ${currentColumn};
                    --gap: var(--size-${gap});
                }
            `}</style>
        </host>
    );
}

siteGrid.props = {
    columns: { type: String, value: "1" },
    gap: { type: Number, value: 6 },
    align: {
        type: String as Type<
            "center" | "middle" | "top" | "bottom" | "centered"
        >,
        reflect: true,
    },
};

siteGrid.styles = [
    tokens,
    css`
        :host {
            display: grid;
            min-width: 100%;
            grid-template-columns: repeat(var(--columns), 1fr);
            gap: var(--gap);
            color: var(--color-title);
        }
        :host([align="top"]) {
            align-items: flex-start;
        }
        :host([align="bottom"]) {
            align-items: flex-end;
        }
        :host([align="middle"]),
        :host([align="centered"]) {
            align-items: flex-start;
        }
        :host([align="center"]),
        :host([align="centered"]) {
            justify-content: center;
        }
    `,
];

export const SiteGrid = c(siteGrid);
