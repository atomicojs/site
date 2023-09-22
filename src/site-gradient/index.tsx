import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens";

function siteGradient({ x }: Props<typeof siteGradient>) {
    const currentX = x > 0.2 ? 0.18 : x < -0.4 ? -0.4 : x;
    return (
        <host shadowDom>
            <div class="gradient gradient-1" style={`--x:${currentX};`}></div>
            <div class="gradient gradient-2" style={`--x:${currentX};`}></div>
        </host>
    );
}

siteGradient.props = {
    x: { type: Number, value: -0.1 },
};

siteGradient.styles = [
    tokens,
    css`
        :host {
            display: grid;
            width: 100%;
            height: 100%;
            --color-1-1: #ff0099;
            --color-1-2: #ff33dd;
            --color-1-3: #ff33dd90;
            --color-1-4: #ff33dd90;
            --color-2-1: #ff0099;
            --color-2-2: #ff33dd;
            --color-2-3: #ff33dd90;
            --color-2-4: #ff33dd90;
            --blur: 2vh;
            grid-template-columns: auto auto;
            overflow: hidden;
        }
        .gradient {
            width: 100%;
            height: 100%;
            filter: blur(var(--blur));
            position: relative;
        }
        .gradient-1 {
            left: calc(var(--blur) * -1);
            --left: calc(100% * var(--x, 0));
            background-image: radial-gradient(
                    ellipse 100% 1% at var(--left) 50%,
                    var(--color-1-1) 0%,
                    transparent 100%
                ),
                radial-gradient(
                    ellipse 50% 0.5% at 50% 50%,
                    var(--color-1-2) 0%,
                    transparent 100%
                ),
                radial-gradient(
                    ellipse 50% 25% at var(--left) 50%,
                    var(--color-1-3) 0%,
                    transparent 100%
                ),
                radial-gradient(
                    ellipse 100% 50% at var(--left) 50%,
                    var(--color-1-4) 0%,
                    transparent 100%
                );
        }
        .gradient-2 {
            right: calc(var(--blur) * -1);
            --left: calc(100% * (1 - var(--x, 0)));
            background-image: radial-gradient(
                    ellipse 100% 1% at var(--left) 50%,
                    var(--color-2-1) 0%,
                    transparent 100%
                ),
                radial-gradient(
                    ellipse 50% 1% at 50% 50%,
                    var(--color-2-2) 0%,
                    transparent 100%
                ),
                radial-gradient(
                    ellipse 50% 25% at var(--left) 50%,
                    var(--color-2-3) 0%,
                    transparent 100%
                ),
                radial-gradient(
                    ellipse 100% 50% at var(--left) 50%,
                    var(--color-2-4) 0%,
                    transparent 100%
                );
        }
    `,
];

export const SiteGradient = c(siteGradient);
