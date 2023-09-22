import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens";

function siteSlide({ myProp }: Props<typeof siteSlide>) {
    return (
        <host shadowDom>
            <slot></slot>
        </host>
    );
}

siteSlide.props = {
    myProp: String,
};

siteSlide.styles = [
    tokens,
    css`
        :host {
            width: 100%;
            min-height: 100%;
            display: block;
            background: var(--color-background);
        }
    `,
];

export const SiteSlide = c(siteSlide);
