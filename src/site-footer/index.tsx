import { c, css } from "atomico";
import { tokens } from "../site-tokens";

function siteFooter() {
    return (
        <host shadowDom>
            <div class="content">
                <div>
                    <slot name="logo"></slot>
                </div>
                <div class="links">
                    <slot></slot>
                </div>
            </div>
        </host>
    );
}

siteFooter.styles = [
    tokens,
    css`
        :host {
            --padding: var(--size-8) var(--size-4);
            display: block;
            background: var(--color-background);
            padding: var(--padding);
        }
        .content {
            display: flex;
            flex-flow: row wrap;
            width: 100%;
            max-width: var(--maxwidth);
            margin: auto;
            justify-content: space-between;
            align-items: end;
        }
        .links {
            display: flex;
            gap: var(--size-4);
        }
        @media (max-width: 520px) {
            .content {
                justify-content: center;
            }
        }
    `,
];

export const SiteFooter = c(siteFooter);
