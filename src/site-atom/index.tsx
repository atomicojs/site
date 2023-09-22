import { c, css } from "atomico";
import { tokens } from "../site-tokens";

function siteAtom() {
    return (
        <host shadowDom>
            <div>
                <div class="circle">
                    <div class="golden golden-1"></div>
                    <div class="golden golden-2"></div>
                    <div class="golden golden-3"></div>
                    <div class="golden golden-4"></div>
                    <div class="circle-fill"></div>
                </div>
            </div>
        </host>
    );
}

siteAtom.props = {
    myProp: String,
};

siteAtom.styles = [
    tokens,
    css`
        :host {
            display: block;
        }
        .golden {
            width: var(--width);
            height: var(--height);
            position: absolute;
            top: 50%;
            left: 50%;
            border: 1px solid white;
            border-radius: 100%;
            transform: translate(var(--translate)) rotate(var(--deg));
        }
        .golden-1,
        .golden-2 {
            --translate: -50%, -10%;
            --width: 300%;
            --height: 75%;
            --deg: 25deg;
        }
        .golden-3,
        .golden-4 {
            --width: 500%;
            --height: 120%;
            --translate: -50%, -20%;
            --deg: 25deg;
        }
        .golden-2,
        .golden-4 {
            --deg: -25deg;
        }
        .circle {
            width: 100px;
            height: 100px;
            border-radius: 100%;
            position: relative;
        }
        .circle-fill {
            width: 100%;
            height: 100%;
            border-radius: 100%;
            background: red;
            position: relative;
            z-index: 1;
        }
    `,
];

export const SiteAtom = c(siteAtom);
