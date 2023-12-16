import { c, css } from "atomico";
import { tokensScroll } from "../site-tokens";
import { ScrollableComponentElement } from "scrollable-component";

function siteScroll() {
    return <host></host>;
}

siteScroll.styles = [
    tokensScroll,
    css`
        :host {
            width: 100%;
            --scrollbar-width: var(--width);
        }
    `,
];

export const SiteScroll = c(siteScroll, ScrollableComponentElement);
