import { c, css } from "atomico";
import { tokensScroll } from "../site-tokens";

function siteScroll() {
    return <host></host>;
}

siteScroll.styles = [
    tokensScroll,
    css`
        :host {
            width: 100%;
            overflow: auto;
        }
    `,
];

export const SiteScroll = c(siteScroll);
