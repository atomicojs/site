import { c, css, useProp } from "atomico";
import { tokens } from "../site-tokens";

function siteMenu() {
    const [show, setShow] = useProp<boolean>("show");
    return (
        <host shadowDom>
            <button class="button">
                <slot name="icon" onclick={() => setShow(true)}>
                    <svg width="30" height="13" viewBox="0 0 30 13">
                        <g
                            id="Group_53"
                            data-name="Group 53"
                            transform="translate(-1170 -77)"
                        >
                            <rect
                                id="Rectangle_142"
                                data-name="Rectangle 142"
                                width="30"
                                height="1"
                                transform="translate(1170 77)"
                                fill="#fff"
                            />
                            <rect
                                id="Rectangle_143"
                                data-name="Rectangle 143"
                                width="30"
                                height="1"
                                transform="translate(1170 83)"
                                fill="#fff"
                            />
                            <rect
                                id="Rectangle_144"
                                data-name="Rectangle 144"
                                width="30"
                                height="1"
                                transform="translate(1170 89)"
                                fill="#fff"
                            />
                        </g>
                    </svg>
                </slot>
            </button>
            <div class="content-fixed">
                <div class="content-inner">
                    <button
                        class="button button-closed"
                        onclick={() => setShow(false)}
                    >
                        <slot name="icon-closed">
                            <svg
                                width="21.921"
                                height="21.921"
                                viewBox="0 0 21.921 21.921"
                            >
                                <path
                                    id="x"
                                    d="M-8695.04-2254.332l-10.253,10.253-.708-.708,10.253-10.253L-8706-2265.292l.708-.708,10.253,10.253,10.253-10.253.707.708-10.252,10.253,10.252,10.253-.707.708Z"
                                    transform="translate(8706.001 2266)"
                                    fill="#fff"
                                />
                            </svg>
                        </slot>
                    </button>
                    <slot></slot>
                </div>
            </div>
        </host>
    );
}

siteMenu.props = {
    show: { type: Boolean, reflect: true },
};

siteMenu.styles = [
    tokens,
    css`
        :host {
            display: block;
            --top: 100vh;
            --opacity: 0;
            --delay: 1s;
        }
        :host([show]) {
            --top: 0vh;
            --opacity: 1;
            --delay: 0s;
        }
        .content-fixed {
            width: 100%;
            height: 100%;
            position: fixed;
            top: var(--top);
            left: 0px;
            background: var(--color-background);
            transition: top 0s var(--delay), opacity 1s ease;
            opacity: var(--opacity);
        }
        .content-inner {
            max-width: var(--maxwidth);
            height: 100%;
            margin: auto;
            position: relative;
            padding: var(--size-10) var(--size-4);
            box-sizing: border-box;
        }
        .button {
            cursor: pointer;
            padding: 0px;
            background: none;
            border: none;
        }
        .button-closed {
            float: right;
        }
    `,
];

export const SiteMenu = c(siteMenu);
