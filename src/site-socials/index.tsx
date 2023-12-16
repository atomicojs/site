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
                <a
                    href={`https://twitter.com/${twitter}`}
                    class="link"
                    target="_blank"
                >
                    <Twitter cloneNode />
                </a>
            )}
            {!!github && (
                <a
                    class="link"
                    href={`https://github.com/${github}`}
                    target="_blank"
                >
                    <Github cloneNode />
                </a>
            )}
            {!!discord && (
                <a
                    class="link"
                    href={`https://discord.com/invite/${discord}`}
                    target="_blank"
                >
                    <Discord cloneNode />
                </a>
            )}
            {!!youtube && (
                <a
                    class="link"
                    href={`https://www.youtube.com/${youtube}`}
                    target="_blank"
                >
                    <Youtube cloneNode />
                </a>
            )}
        </host>
    );
}

siteSocials.props = {
    twitter: String,
    github: String,
    discord: String,
    youtube: String,
};

siteSocials.styles = [
    tokensColor,
    tokensSize,
    tokensLink,
    css`
        :host {
            display: inline-flex;
            border-radius: 100px;
            border: var(--social-border);
            padding: var(--social-space);
            ---color-container: var(--color-link-social-container);
            ---color-invert: var(--color-link-social-invert);
        }
        .link {
            --size: calc(
                var(--social-size) -
                    (var(--social-space) + var(--social-border-width) * 2)
            );
            width: var(--size);
            height: var(--size);
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
            width: 50%;
            height: 50%;
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
