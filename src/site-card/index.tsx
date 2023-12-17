import { useSlot } from "@atomico/hooks/use-slot";
import { Props, c, css, useRef } from "atomico";
import { serialize } from "atomico/utils";
import { tokensCard, tokensColor } from "../site-tokens";
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
                <svg width="100%" viewBox="0 0 320 220" />
                <div class="media-view">
                    <slot name="media" ref={refMedia} />
                </div>
            </div>
            <div class="content">
                <slot ref={refContent}></slot>
            </div>
            <div class="footer">
                <slot name="footer" ref={refFooter}></slot>
            </div>
            <style>{`:host{--dot-bgcolor:${dotColor}}`}</style>
        </host>
    );
}

siteCard.props = {
    dotColor: { type: String, reflect: true },
    overflow: { type: Boolean, reflect: true },
    padding: { type: Boolean, reflect: true },
    extended: { type: Boolean, reflect: true },
};

siteCard.styles = [
    tokensColor,
    tokensCard,
    css`
        :host {
            background: var(--color-card-container);
            border: var(--border);
            border-radius: var(--border-radius);
            position: relative;
            display: grid;
            gap: var(--gap);
            backdrop-filter: blur(10px);
            --display-media: none;
            --display-content: none;
            --display-footer: none;
            --display-dot: none;
        }
        :host([extended]) {
            min-width: 100%;
            min-height: 100%;
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
        :host([dot-color]) {
            --display-dot: block;
        }
        .dot {
            width: var(--dot-size);
            height: var(--dot-size);
            background: var(--dot-bgcolor);
            transition: var(--dot-transition);
            position: absolute;
        }
        .dot-circle {
            top: 20px;
            right: 20px;
            border-radius: 100%;
            z-index: 2;
        }
        .dot-gradient {
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            opacity: 0;
            transition: var(--dot-transition) 0.25s;
            background: radial-gradient(
                circle at 100% -50%,
                var(--dot-bgcolor),
                transparent
            );
        }
        :host([dot-color]:hover) .dot-gradient {
            transition-delay: 0s;
            opacity: 0.25;
        }
        :host([dot-color]:hover) .dot {
            box-shadow: 0px 0px 42px var(--dot-bgcolor);
        }
        :host([overflow]) {
            overflow: hidden;
        }
        ::slotted([slot="media"]) {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            border: none;
        }
        .dot {
            display: var(--display-dot);
        }
        .media {
            display: var(--display-media);
            overflow: hidden;
            margin: var(--media-space);
            border-radius: calc(var(--border-radius) - var(--media-space));
            position: relative;
            margin-bottom: auto;
        }
        .media-view {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }
        .content {
            display: var(--display-content);
            position: relative;
            gap: var(--gap);
            padding: var(--content-space);
            margin: 0 0 auto;
        }
        .footer {
            display: var(--display-footer);
            justify-content: space-between;
            align-items: center;
            border-top: var(--border);
            padding: var(--footer-space);
            position: relative;
            margin-top: auto;
        }
    `,
];

export const SiteCard = c(siteCard);
