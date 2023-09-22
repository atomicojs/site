import { Props, c, css, useRef } from "atomico";
import { useRender } from "@atomico/hooks/use-render";
import { tokens } from "../site-tokens";

function siteButton({ color, href, open }: Props<typeof siteButton>) {
    const ref = useRef<HTMLAnchorElement>();
    useRender(
        () =>
            href && (
                <a
                    slot="link"
                    href={href}
                    ref={ref}
                    target={open ? "_blank" : ""}
                ></a>
            ),
        [href, open]
    );

    return (
        <host shadowDom onclick={() => ref.current.click()}>
            <slot></slot>
            {color && (
                <style>{`:host{--button-border-color:var( --color-${color},${color} )!important}`}</style>
            )}
        </host>
    );
}

siteButton.props = {
    small: { type: Boolean, reflect: true },
    color: { type: String, reflect: true },
    href: { type: String },
    open: { type: String },
};

siteButton.styles = [
    tokens,
    css`
        :host {
            display: inline-flex;
            border: var(--button-border-width) solid var(--button-border-color);
            border-radius: var(--button-border-radius);
            justify-content: center;
            align-items: center;
            gap: var(--button-gap);
            padding: var(--button-padding);
            cursor: pointer;
            font-size: var(--button-font-size);
            transition: 0.3s ease all;
            color: var(--button-color);
        }
    `,
];

export const SiteButton = c(siteButton);
