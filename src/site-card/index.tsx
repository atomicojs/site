import { useSlot } from "@atomico/hooks/use-slot";
import { Props, c, css, useRef } from "atomico";
import { tokens } from "../site-tokens";
import { serialize } from "atomico/utils";
function siteCard({ dotColor }: Props<typeof siteCard>) {
    const refMedia = useRef();
    const refContent = useRef();
    const refFooter = useRef();
    const slotMedia = useSlot(refMedia);
    const slotContent = useSlot(
        refContent,
        (element) => element instanceof HTMLElement
    );
    const slotFooter = useSlot(refFooter);
    return (
        <host
            shadowDom
            layout={serialize(
                slotMedia.length && "media",
                slotContent.length && "content",
                slotFooter.length && "footer"
            )}
        >
            <div class="dot dot-circle"></div>
            <div class="dot dot-gradient"></div>
            <div class="media">
                <slot name="media" ref={refMedia} />
            </div>
            <div class="content">
                <slot ref={refContent}></slot>
            </div>
            <div class="footer">
                <slot name="footer" ref={refFooter}></slot>
            </div>
            <style>{`:host{--card-dot-bgcolor:${dotColor}}`}</style>
        </host>
    );
}

siteCard.props = {
    dotColor: { type: String, reflect: true },
    overflow: { type: Boolean, reflect: true },
    padding: { type: Boolean, reflect: true },
};

siteCard.styles = [
    tokens,
    css`
        :host {
            background: var(--color-card-container);
            border: var(--card-border);
            border-radius: var(--card-border-radius);
            position: relative;
            display: grid;
            gap: var(--card-gap);
            backdrop-filter: blur(10px);
            --display-media: none;
            --display-content: none;
            --display-footer: none;
        }
        :host([layout*="media"]) {
            --display-media: block;
        }
        :host([layout*="content"]) {
            --display-content: grid;
        }
        :host([layout*="footer"]) {
            --display-footer: flex;
        }
        :host([dot-color]) .dot {
            width: var(--card-dot-size);
            height: var(--card-dot-size);
            background: var(--card-dot-bgcolor);
            transition: var(--card-dot-transition);
            position: absolute;
        }
        :host([dot-color]) .dot-circle {
            top: 20px;
            right: 20px;
            border-radius: 100%;
            z-index: 2;
        }
        :host([dot-color]) .dot-gradient {
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            opacity: 0;
            transition: var(--card-dot-transition) 0.25s;
            background: radial-gradient(
                circle at 100% -50%,
                var(--card-dot-bgcolor),
                transparent
            );
        }
        :host([dot-color]:hover) .dot-gradient {
            transition-delay: 0s;
            opacity: 0.25;
        }
        :host([dot-color]:hover) .dot {
            box-shadow: 0px 0px 42px var(--card-dot-bgcolor);
        }
        :host([overflow]) {
            overflow: hidden;
        }
        ::slotted([slot="media"]) {
            width: 100%;
            object-fit: cover;
            display: block;
            border: none;
        }
        .media {
            display: var(--display-media);
            overflow: hidden;
            margin: var(--card-media-space);
            border-radius: calc(
                var(--card-border-radius) - var(--card-media-space)
            );
            position: relative;
        }
        .content {
            display: var(--display-content);
            position: relative;
            gap: var(--card-gap);
            padding: var(--card-content-space);
        }
        .footer {
            display: var(--display-footer);
            justify-content: space-between;
            align-items: center;
            border-top: var(--card-border);
            padding: var(--card-footer-space);
            position: relative;
        }
    `,
];

export const SiteCard = c(siteCard);
