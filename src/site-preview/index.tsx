import { useRender } from "@atomico/hooks/use-render";
import { Props, c, css, useAsync, useEffect, useRef } from "atomico";
import { tokensCard, tokensCode, tokensColor } from "../site-tokens";

const preloadAtomico = async (children: any) =>
    (await import("atomico")).h("host", { children });

const loadAsync = async (
    sandbox: boolean,
    load: () => Promise<any>
): Promise<{
    props: any;
    default: any;
}> => {
    if (sandbox) return undefined;
    return load();
};

function sitePreview({ load, sandbox }: Props<typeof sitePreview>) {
    const ref = useRef<HTMLIFrameElement>();

    const module = useAsync(loadAsync, [sandbox, load]);

    useRender(() => {
        return sandbox ? (
            <iframe ref={ref} style="border: none; width: 100%;" />
        ) : (
            module.default
        );
    }, [module, load]);

    useEffect(() => {
        if (!load || !sandbox) return;
        const script = document.createElement("script");
        script.type = "module";
        script.id = "load";
        script.textContent = `
      (await (${preloadAtomico.toString()})(
        (await (${load.toString()})()).default
      )).render(document.body);
      load.remove();
      const resize = new ResizeObserver(([entry])=>{
        window.dispatchEvent(new CustomEvent("ResizeObserver",{detail:entry.contentRect}))
      });
      resize.observe(document.body);
    `;
        const style = document.createElement("style");
        style.textContent = `
        :root{
            overflow: auto;
        }
        body{
          margin: 0px;
          height: auto;
          overflow: auto;
        }
    `;

        ref.current.contentDocument.body.append(script);
        ref.current.contentDocument.head.append(style);
        ref.current.contentWindow.addEventListener(
            "ResizeObserver",
            ({ detail }: CustomEvent<{ height: number }>) => {
                ref.current.style.height = `${detail.height}px`;
            }
        );
    }, [load, sandbox]);

    return (
        <host shadowDom>
            <slot />
        </host>
    );
}

sitePreview.props = {
    load: Function,
    sandbox: { type: Boolean, reflect: true },
    focus: { type: Boolean, reflect: true },
    role: { type: String, value: "preview", reflect: true },
};

sitePreview.styles = [
    tokensColor,
    tokensCard,
    css`
        :host {
            display: flex;
            resize: horizontal;
            overflow-x: auto;
            max-width: 100%;
            min-width: 280px;
            box-sizing: border-box;
            padding: var(---padding);
            border-radius: var(--radius);
            background: var(--background);
        }
        :host([focus]) {
            align-items: center;
            justify-content: center;
            padding: 5%;
        }
    `,
];

export const SitePreview = c(sitePreview);
