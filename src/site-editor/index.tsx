import { useProxySlot } from "@atomico/hooks/use-slot";
import { Props, c, css, useProp, useRef } from "atomico";
import { SiteButton, SiteButtons } from "../site-button";
import { tokensCard, tokensColor } from "../site-tokens";
import { SiteCard } from "../site-card";
import { copy } from "@atomico/hooks/use-copy";

function siteEditor({ text }: Props<typeof siteEditor>) {
    const [tab, setTab] = useProp<string>("tab");
    const ref = useRef();
    const slots = useProxySlot<HTMLElement>(
        ref,
        (node) => node instanceof HTMLElement
    );
    return (
        <host shadowDom>
            <slot ref={ref} />
            <SiteCard>
                <div class="header">
                    <SiteButtons>
                        {slots.map((element, i) => {
                            const label = element.getAttribute("label");
                            const value =
                                element.getAttribute("value") || label;
                            const checked = tab ? value === tab : !i;
                            return (
                                <SiteButton
                                    checked={checked}
                                    class="button"
                                    onclick={() => setTab(value)}
                                    small
                                >
                                    {label || value}
                                </SiteButton>
                            );
                        })}
                    </SiteButtons>
                    {text && (
                        <SiteButton
                            icon
                            active
                            small
                            staticNode
                            onclick={() => copy(decodeURI(text))}
                            class="buttons"
                        >
                            <svg
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 3C0 2.44772 0.447715 2 1 2H8C8.55229 2 9 2.44772 9 3V10C9 10.5523 8.55229 11 8 11H1C0.447715 11 0 10.5523 0 10V3Z"
                                    fill="currentColor"
                                />
                                <rect
                                    opacity="0.5"
                                    x="2"
                                    width="9"
                                    height="9"
                                    rx="1"
                                    fill="currentColor"
                                />
                            </svg>
                        </SiteButton>
                    )}
                </div>
                <div class="view">
                    {slots.map((element, i) => {
                        const label = element.getAttribute("label");
                        const value = element.getAttribute("value") || label;
                        const isShow = tab ? tab === value : !i;
                        return (
                            <div class={`tab ${isShow ? "show" : "hide"}`}>
                                <slot name={(element.slot = `tab-${i}`)}></slot>
                            </div>
                        );
                    })}
                </div>
            </SiteCard>
        </host>
    );
}

siteEditor.props = {
    tab: String,
    text: String,
    role: { type: String, value: "editor", reflect: true },
};

siteEditor.styles = [
    tokensColor,
    // tokensEditor,
    css`
        :host {
            display: content;
        }
        .header {
            display: grid;
            grid-template-columns: auto auto;
            justify-content: space-between;
            align-items: center;
            padding: var(--padding);
            box-sizing: border-box;
            border-bottom: var(--border);
        }
        .view {
            border-radius: 0 0 var(--radius) var(--radius);
        }
        .hide {
            display: none;
        }
    `,
];

export const SiteEditor = c(siteEditor);
