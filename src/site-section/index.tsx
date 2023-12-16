import { c, css } from "atomico";
import { tokensLayout, tokensSize } from "../site-tokens";

function siteSection() {
    return (
        <host shadowDom>
            <slot name="background" />
            <div class="content">
                <slot />
            </div>
        </host>
    );
}

siteSection.props = {
    context: { type: String, reflect: true, value: "section" },
};

siteSection.styles = [
    tokensSize,
    tokensLayout,
    css`
        :host {
            position: relative;
            padding: var(--layout-padding);
            box-sizing: border-box;
            display: block;
        }
        .content {
            width: 100%;
            margin: auto;
            max-width: var(--layout-max-width);
            position: relative;
            z-index: 1;
        }
    `,
];

export const SiteSection = c(siteSection);
