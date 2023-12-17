import { c, css } from "atomico";
import { tokensColor } from "../site-tokens";

function sitePlanet() {
    return (
        <host shadowDom>
            <div className="group">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
        </host>
    );
}

sitePlanet.props = {
    y: { type: Boolean, reflect: true },
    reverse: { type: Boolean, reflect: true },
};

sitePlanet.styles = [
    tokensColor,
    css`
        :host {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            perspective: 320px;
            transform-style: preserve-3d;
            filter: blur(1px);
            --duration: 10s;
            --direction: 1;
            --p1: 0;
            --p2: 1;
            --color-shadow-1: var(--color-orbe-2);
            --color-shadow-2: var(--color-orbe-3);
        }
        :host([reverse]) {
            --direction: -1;
        }
        :host([y]) {
            --p1: 1;
            --p2: 0;
        }
        .item {
            width: 100%;
            height: 100%;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            border-radius: 100%;
            border: 1px solid var(--color-orbe-1);
            --deg: 0deg;
            box-sizing: border-box;
            transform: rotate3d(var(--p1), var(--p2), 0, var(--deg));
            border-top-color: var(--color-orbe);
            border-right-color: var(--color-orbe);
            box-shadow: var(--color-shadow-1) 50px 50px 100px,
                var(--color-shadow-2) -50px -50px 100px;
            animation: rotate var(--duration) linear infinite;
        }

        .item.shadow {
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(2px);
        }
        .item.y {
            --p1: 1;
            --p2: 0;
        }
        .item {
            --deg: 0deg;
        }
        .item:nth-child(1) {
            --deg: 0deg;
        }
        .item:nth-child(2) {
            --deg: 20deg;
        }
        .item:nth-child(3) {
            --deg: 40deg;
        }
        .item:nth-child(4) {
            --deg: 60deg;
        }
        .item:nth-child(5) {
            --deg: 80deg;
        }
        .item:nth-child(6) {
            --deg: 100deg;
        }
        .item:nth-child(7) {
            --deg: 120deg;
        }
        .item:nth-child(8) {
            --deg: 140deg;
        }
        .item:nth-child(9) {
            --deg: 160deg;
        }
        .item:nth-child(10) {
            --deg: 180deg;
        }
        .item:nth-child(11) {
            --deg: 200deg;
        }
        .item:nth-child(12) {
            --deg: 220deg;
        }
        .item:nth-child(13) {
            --deg: 240deg;
        }
        .item:nth-child(14) {
            --deg: 280deg;
        }
        .item:nth-child(15) {
            --deg: 300deg;
        }
        .item:nth-child(16) {
            --deg: 320deg;
        }
        .item:nth-child(17) {
            --deg: 340deg;
        }
        .item:nth-child(18) {
            --deg: 360deg;
        }
        .item:nth-child(19) {
            --deg: 380deg;
        }
        .item:nth-child(20) {
            --deg: 400deg;
        }

        @keyframes rotate {
            from {
                transform: rotate3d(
                    var(--p1),
                    var(--p2),
                    1,
                    calc(var(--deg) * var(--direction))
                );
            }
            to {
                transform: rotate3d(
                    var(--p1),
                    var(--p2),
                    1,
                    calc((360deg + var(--deg)) * var(--direction))
                );
            }
        }
    `,
];

export const SitePlanet = c(sitePlanet);
