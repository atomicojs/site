import { useParallax } from "@atomico/hooks/use-parallax";
import { c, css, useRef } from "atomico";
import { SitePlanet } from "../site-planet";
import { tokensColor, tokensSize } from "../site-tokens";

function siteIsotype() {
    const host = useRef(globalThis);
    const state = useParallax(host);
    return (
        <host shadowDom>
            <div class="atom-orbe" style="--orbe-size: 1.5; opacity:.5">
                <div
                    class="orbe"
                    ref={(ref) => {
                        ref.style.transform = `translate(${state.x * -50}px,${
                            state.y * -50
                        }px)`;
                    }}
                ></div>
            </div>
            <div class="atom-orbe" style="--orbe-size: 2; opacity:.35">
                <div
                    class="orbe"
                    ref={(ref) => {
                        ref.style.transform = `translate(${state.x * -100}px,${
                            state.y * -100
                        }px)`;
                    }}
                ></div>
            </div>
            <div class="atom-orbe" style="--orbe-size: 2.5; opacity:.15">
                <div
                    class="orbe"
                    ref={(ref) => {
                        ref.style.transform = `translate(${state.x * -150}px,${
                            state.y * -150
                        }px)`;
                    }}
                ></div>
            </div>
            <div class="atom-group">
                <div class="atom atom-0"></div>
                <div
                    ref={(ref) => {
                        ref.style.transform = `translate(${state.x * -100}px,${
                            state.y * -100
                        }px)`;
                    }}
                    class="atom atom-1 atom-inner-shadow"
                >
                    <SitePlanet class="planet" />
                </div>
                <div
                    ref={(ref) => {
                        ref.style.transform = `translate(${state.x * -50}px,${
                            state.y * -50
                        }px)`;
                    }}
                    class="atom atom-2 atom-inner-shadow"
                >
                    <SitePlanet class="planet" style="--duration: 60s" />
                </div>
                <div
                    ref={(ref) => {
                        ref.style.transform = `translate(${state.x * 100}px,${
                            state.y * 100
                        }px)`;
                    }}
                    class="atom atom-3 atom-inner-shadow"
                >
                    <SitePlanet
                        class="planet"
                        reverse
                        y
                        style="--duration: 30s"
                    />
                </div>
            </div>
            <div class="atom-content">
                <div class="atom-inner">
                    <slot></slot>
                </div>
            </div>
        </host>
    );
}

siteIsotype.props = {
    myProp: String,
};

siteIsotype.styles = [
    tokensColor,
    tokensSize,
    css`
        :host {
            width: 100%;
            height: 100%;
            display: grid;
            overflow: hidden;
            place-content: center;
            --background: var(--color-background);
            background: var(--background);
            position: relative;
            font-size: 1.8vh;
            color: var(--color-primary-contrast);
            --figure-size: 24.75em;
        }
        .planet {
            --color-shadow-1: #ff00000a;
            --color-shadow-2: #8500ff00;
        }
        .atom-content {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0px;
            left: 0px;
            display: flex;
        }
        .atom-inner {
            margin: auto;
            display: grid;
            justify-items: center;
            gap: 1.25rem;
        }
        .atom {
            width: var(--size);
            height: var(--size);
            border-radius: 100%;
            position: absolute;
            background: var(--background);
            transition: 1s linear all;
        }
        .orbe {
            transition: 0.5s linear all;
        }
        .atom-group {
            width: var(--figure-size);
            height: var(--figure-size);
            margin: auto;
            position: relative;
        }
        .atom-inner-shadow {
            box-shadow: inset var(--shadow) rgba(171, 255, 252, 0.12),
                var(--shadow-2, 0px 0px 0px transparent),
                var(--shadow-3, 0px 0px 0px transparent),
                var(--shadow-4, 0px 0px 0px transparent);
        }
        .atom-0 {
            --size: 100%;
            box-shadow: 0px 3.125em 6.25 rgba(255, 255, 255, 0.5);
        }
        .atom-1 {
            --size: 50%;
            bottom: -10%;
            right: 0px;
            --shadow: 2.5em -2.5em 3.75em;
            --shadow-3: inset -20px 20px 20px rgba(255, 0, 205, 0.16);
            --shadow-4: inset -10px 10px 8px -10px rgba(255, 255, 255, 0.25);
            transition: 1s linear all;
            filter: blur(2px);
        }
        .atom-2 {
            --size: 100%;
            --shadow: 2.5em -2.5em 3.75em;
            --shadow-3: inset -20px 20px 20px rgba(255, 0, 205, 0.16);
            --shadow-4: inset -10px 10px 8px -10px rgba(255, 255, 255, 0.25);
            filter: blur(1px);
            transition: 2s linear all;
        }
        .atom-3 {
            --size: 60%;
            --shadow: 2.5em -2.5em 3.75em;
            --shadow-2: -50px 50px 50px rgba(0, 0, 0, 0.1);
            --shadow-3: inset -20px 20px 20px rgba(255, 0, 205, 0.16);
            --shadow-4: inset -10px 10px 8px -10px rgba(255, 255, 255, 0.5);
            filter: blur(0.5px);
            top: -8%;
            left: 60%;
            transition: 0.5s linear all;
        }
        .atom-orbe {
            position: absolute;
            width: calc(var(--figure-size) * var(--orbe-size));
            height: calc(var(--figure-size) * var(--orbe-size));
            opacity: var(--opacity);
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
        .orbe {
            width: 100%;
            height: 100%;
            border-radius: 100%;
            border: 2px solid var(--color-orbe);
            border-bottom-color: var(--color-orbe-1);
            border-left-color: var(--color-orbe-1);
        }

        @media (max-width: 768px) {
            :host {
                --figure-size: 70vw;
            }
        }
    `,
];

export const SiteIsotype = c(siteIsotype);
