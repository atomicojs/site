import { Props, c, css } from "atomico";
import { SiteRow } from "../site-row";
import { SiteText } from "../site-text";
import { tokensAvatar, tokensSize } from "../site-tokens";

function siteAvatar({ label, detail }: Props<typeof siteAvatar>) {
    return (
        <host shadowDom>
            <SiteRow cols={`auto${label || detail ? " 1fr" : ""}`} gap={3}>
                <div class="mask">
                    <slot />
                </div>
                <SiteRow gap={0}>
                    <SiteText>
                        <b>{label}</b>
                    </SiteText>
                    <SiteText small>
                        <span>{detail}</span>
                    </SiteText>
                </SiteRow>
            </SiteRow>
        </host>
    );
}

siteAvatar.props = {
    label: String,
    detail: String,
    small: { type: Boolean, reflect: true },
} satisfies Props;

siteAvatar.styles = [
    tokensSize,
    tokensAvatar,
    css`
        :host {
            --color-1: rgba(0, 255, 144, 0.25);
            --color-2: rgb(214, 0, 255, 0.5);
        }
        .mask {
            width: var(--size);
            height: var(--size);
            border-radius: 100vh;
            overflow: hidden;
            box-shadow: -1rem -0.5rem 4rem var(--color-1),
                1rem 0.5rem 4rem var(--color-2);
            border: 1px solid var(--color-divide);
        }
        ::slotted(*) {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `,
];

export const SiteAvatar = c(siteAvatar);
