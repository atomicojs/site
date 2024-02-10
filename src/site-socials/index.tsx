import { Props, c, css } from "atomico";
import { tokensColor, tokensLink, tokensSize } from "../site-tokens";
import { Twitter, Github, Discord, Youtube } from "../site-socials/logos";

function siteSocials({
    twitter,
    github,
    discord,
    youtube,
}: Props<typeof siteSocials>) {
    return (
        <host shadowDom>
            {!!twitter && (
                <div class="item">
                    <a
                        href={`https://twitter.com/${twitter}`}
                        class="link"
                        target="_blank"
                    >
                        {Twitter}
                    </a>
                </div>
            )}
            {!!github && (
                <div class="item">
                    <a
                        class="link"
                        href={`https://github.com/${github}`}
                        target="_blank"
                    >
                        {Github}
                    </a>
                </div>
            )}
            {!!discord && (
                <div class="item">
                    <a
                        class="link"
                        href={`https://discord.com/invite/${discord}`}
                        target="_blank"
                    >
                        {Discord}
                    </a>
                </div>
            )}
            {!!youtube && (
                <div class="item">
                    <a
                        class="link"
                        href={`https://www.youtube.com/${youtube}`}
                        target="_blank"
                    >
                        {Youtube}
                    </a>
                </div>
            )}
        </host>
    );
}

siteSocials.props = {
    twitter: String,
    github: String,
    discord: String,
    youtube: String,
    narrow: { type: Boolean, reflect: true },
};

siteSocials.styles = [
    tokensColor,
    tokensSize,
    tokensLink,
    css`
        :host {
            display: inline-flex;
            flex-flow: row wrap;
            border-radius: 100px;
            border: var(--social-border);
            box-sizing: border-box;
            ---color-container: var(--color-link-social-container);
            ---color-invert: var(--color-link-social-invert);
            --size: calc(var(--social-size) - var(--social-border-width) * 2);
        }
        :host([narrow]) {
            width: var(--social-size);
        }
        .item {
            width: var(--size);
            height: var(--size);
            padding: var(--social-space);
            box-sizing: border-box;
        }
        .link {
            width: 100%;
            height: 100%;
            display: flex;
            background: none;
            color: unset;
            border: none;
            border-radius: 100px;
            background: var(---color-container);
            color: var(---color-invert);
            align-items: center;
            justify-content: center;
            transition: var(--transition);
            cursor: pointer;
        }
        .link svg {
            width: 0.875rem;
            height: 0.875rem;
        }
        .link svg * {
            fill: currentColor;
        }
        .link:hover {
            ---color-container: var(--color-link-social-invert);
            ---color-invert: var(--color-link-social-container);
        }
    `,
];

export const SiteSocials = c(siteSocials);
