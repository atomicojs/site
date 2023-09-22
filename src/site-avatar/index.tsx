import { Props, c, css } from "atomico";
import { tokens } from "../site-tokens";

function siteAvatar({ media }: Props<typeof siteAvatar>) {
    return (
        <host shadowDom>
            {!!media && <img src={media} alt="" class="avatar-img" />}
            <slot />
        </host>
    );
}

siteAvatar.props = {
    media: String,
    label: String,
} satisfies Props;

siteAvatar.styles = [
    tokens,
    css`
        :host {
            display: flex;
            align-items: center;
            --link-background: transparent;
            --link-color: unset;
            gap: var(--size-2);
            text-transform: uppercase;
            font-size: var(--size-3);
            letter-spacing: var(--size-1);
        }

        .avatar-img {
            width: var(--size-6);
            height: var(--size-6);
            border-radius: 100vh;
        }
    `,
];

export const SiteAvatar = c(siteAvatar);
