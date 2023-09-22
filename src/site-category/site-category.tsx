import { useProxySlot } from "@atomico/hooks/use-slot";
import autoAnimate from "@formkit/auto-animate";
import { c, css, useCallback, useProp, useRef, useState } from "atomico";
import { tokens } from "../site-tokens/site-tokens";

function siteCategories() {
    const refSlots = useRef();
    const [category, setCategory] = useProp<string>("category");
    const [ids] = useState<HTMLElement[]>([]);
    const slots = useProxySlot<HTMLElement>(refSlots, (el) => {
        if (el instanceof HTMLElement) {
            if (!ids.includes(el)) {
                ids.push(el);
            }
            return true;
        }
    });

    const animate = useCallback((ref) => autoAnimate(ref), [autoAnimate]);

    return (
        <host shadowDom>
            <slot id="slots" ref={refSlots}></slot>
            <header
                onclick={(event) => {
                    const path = event.composedPath() as HTMLElement[];
                    for (let i = 0; i < path.length; i++) {
                        if (path[i] === event.currentTarget) break;

                        if (path[i]?.dataset?.category) {
                            setCategory(path[i].dataset.category);
                        }
                    }
                }}
            >
                <slot name="category" />
            </header>
            <div ref={animate} class="grid">
                {slots
                    .filter(
                        (el) =>
                            category === "*" || el.dataset.category === category
                    )
                    .map((el, i) => (
                        <div key={el}>
                            <slot
                                name={(el.slot = "slot-" + ids.indexOf(el))}
                            ></slot>
                        </div>
                    ))}
            </div>
        </host>
    );
}

siteCategories.props = {
    category: { type: String },
};

siteCategories.styles = [
    tokens,
    css`
        :host {
            display: grid;
            gap: var(--size-6);
        }
        #slots {
            display: none;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: var(--size-6);
            position: relative;
        }
        header {
            display: flex;
            flex-flow: row wrap;
            gap: var(--size-4);
        }
    `,
];

export const SiteCategories = c(siteCategories);

customElements.define("site-categories", SiteCategories);
