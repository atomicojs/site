import atomico from "@atomico/vite";
import { defineConfig } from "vite";
import { createHtml } from "@atomico/vite/plugins/markdown";
import Prism from "prismjs";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-json";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-js-extras";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";

export default defineConfig({
    build: {
        target: "esnext",
    },
    test: {
        environment: "happy-dom",
    },
    plugins: [
        atomico({
            cssLiterals: { postcss: true },
            customElements: {
                define: ["./src/**/*"],
            },
            markdown: {
                imports: `
                import { SiteCode, SiteEditor, SitePreview } from "/src/components";
                `,
                render: {
                    preview(token) {
                        if (token.options.includes("only")) {
                            return createHtml(token.preview);
                        }

                        const [lang] = token.lang.split(/\s+/);

                        const attrs = token.options.map((value) => {
                            const [attr, val] = value.split("=");
                            return val ? `${attr}="${val}"` : value;
                        });

                        const html = Prism.highlight(
                            token.text,
                            Prism.languages[lang],
                            lang
                        );
                        return createHtml(`<SiteEditor text="${encodeURI(
                            token.text
                        )}" ${attrs.join(" ")}>
                            <SitePreview label="Preview" ${attrs.join(
                                " "
                            )} load=${token.preview}/>
                        <SiteCode unstyle label="Code" type="${
                            token.lang
                        }" html="${Buffer.from(html).toString("base64")}"/>
                        </SiteEditor>`);
                    },
                    code(token) {
                        const [lang] = token.lang.split(/\s+/);

                        const html = Prism.highlight(
                            token.text,
                            Prism.languages[lang],
                            lang
                        );

                        return createHtml(
                            `<SiteCode type="${lang}" html="${Buffer.from(
                                html
                            ).toString("base64")}"/>`
                        );
                    },
                },
            },
        }),
    ],
});
