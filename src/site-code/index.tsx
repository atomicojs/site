import { Props, c, css } from "atomico";
import { SiteScroll } from "../site-scroll";
import { SiteCard } from "../site-card";
import { tokensCard, tokensCode, tokensColor } from "../site-tokens";

function siteCode({ html, type, unstyle }: Props<typeof siteCode>) {
    const content = (
        <SiteScroll>
            <code id="code" innerHTML={atob(html)} class={`language-${type}`} />
        </SiteScroll>
    );
    return (
        <host shadowDom>
            {unstyle ? content : <SiteCard>{content}</SiteCard>}
            <style>{css}</style>
        </host>
    );
}

siteCode.props = {
    unstyle: { type: Boolean, reflect: true },
    html: { type: String },
    type: { type: String },
};

siteCode.styles = [
    tokensColor,
    tokensCard,
    tokensCode,
    css`
        :host {
            display: block;
            font-size: var(--font-size);
            line-height: var(--font-height);
        }
        code[class*="language-"] {
            text-shadow: none;
            font-family: Menlo, Monaco, Consolas, "Andale Mono", "Ubuntu Mono",
                "Courier New", monospace;
            direction: ltr;
            text-align: left;
            white-space: pre;
            word-spacing: normal;
            word-break: normal;
            line-height: 1.5;
            hyphens: none;
        }
        code[class*="language-"]::selection,
        code[class*="language-"] *::selection {
            text-shadow: none;
            background: #264f78;
        }

        .namespace {
            opacity: 0.7;
        }

        .token.doctype .token.doctype-tag {
            color: #569cd6;
        }

        .token.doctype .token.name {
            color: #9cdcfe;
        }

        .token.comment,
        .token.prolog {
            color: #6a9955;
        }

        .token.punctuation,
        .language-html .language-css .token.punctuation,
        .language-html .language-javascript .token.punctuation {
            color: #d4d4d4;
        }

        .token.property,
        .token.tag,
        .token.boolean,
        .token.number,
        .token.constant,
        .token.symbol,
        .token.inserted,
        .token.unit {
            color: #b5cea8;
        }

        .token.selector,
        .token.attr-name,
        .token.string,
        .token.char,
        .token.builtin,
        .token.deleted {
            color: #ce9178;
        }

        .language-css .token.string.url {
            text-decoration: underline;
        }

        .token.operator,
        .token.entity {
            color: #d4d4d4;
        }

        .token.operator.arrow {
            color: #569cd6;
        }

        .token.atrule {
            color: #ce9178;
        }

        .token.atrule .token.rule {
            color: #c586c0;
        }

        .token.atrule .token.url {
            color: #9cdcfe;
        }

        .token.atrule .token.url .token.function {
            color: #dcdcaa;
        }

        .token.atrule .token.url .token.punctuation {
            color: #d4d4d4;
        }

        .token.keyword {
            color: #569cd6;
        }

        .token.keyword.module,
        .token.keyword.control-flow {
            color: #c586c0;
        }

        .token.function,
        .token.function .token.maybe-class-name {
            color: #dcdcaa;
        }

        .token.regex {
            color: #d16969;
        }

        .token.important {
            color: #569cd6;
        }

        .token.italic {
            font-style: italic;
        }

        .token.constant {
            color: #9cdcfe;
        }

        .token.class-name,
        .token.maybe-class-name {
            color: #4ec9b0;
        }

        .token.console {
            color: #9cdcfe;
        }

        .token.parameter {
            color: #9cdcfe;
        }

        .token.interpolation {
            color: #9cdcfe;
        }

        .token.punctuation.interpolation-punctuation {
            color: #569cd6;
        }

        .token.boolean {
            color: #569cd6;
        }

        .token.property,
        .token.variable,
        .token.imports .token.maybe-class-name,
        .token.exports .token.maybe-class-name {
            color: #9cdcfe;
        }

        .token.selector {
            color: #d7ba7d;
        }

        .token.escape {
            color: #d7ba7d;
        }

        .token.tag {
            color: #569cd6;
        }

        .token.tag .token.punctuation {
            color: #808080;
        }

        .token.cdata {
            color: #808080;
        }

        .token.attr-name {
            color: #9cdcfe;
        }

        .token.attr-value,
        .token.attr-value .token.punctuation {
            color: #ce9178;
        }

        .token.attr-value .token.punctuation.attr-equals {
            color: #d4d4d4;
        }

        .token.entity {
            color: #569cd6;
        }

        .token.namespace {
            color: #4ec9b0;
        }

        code[class*="language-javascript"],
        code[class*="language-jsx"],
        code[class*="language-typescript"],
        code[class*="language-tsx"] {
            color: #9cdcfe;
        }

        code[class*="language-css"] {
            color: #ce9178;
        }

        code[class*="language-html"] {
            color: #d4d4d4;
        }

        .language-regex .token.anchor {
            color: #dcdcaa;
        }

        .language-html .token.punctuation {
            color: #808080;
        }

        .line-highlight.line-highlight {
            background: #f7ebc6;
            box-shadow: inset 5px 0 0 #f7d87c;
            z-index: 0;
        }
        /**CUSTOM */
        .keyword {
            color: #ff8282 !important;
        }
        .function {
            color: #2befb3 !important;
        }
        .tag {
            color: #abfffc !important;
        }
    `,
];

export const SiteCode = c(siteCode);
