import { TemplateAutor } from "./templates/author";
import { TemplateEcosystem } from "./templates/ecosystem";
import { TemplateCommunity } from "./templates/community";
import { TemplateFooter } from "./templates/footer";
import { TemplateHeader } from "./templates/header";
import { TemplateIsotype } from "./templates/isotype";
import { TemplateWeAre } from "./templates/we-are";

export default (
    <host>
        <TemplateHeader />
        <TemplateIsotype />
        <TemplateWeAre />
        <TemplateEcosystem />
        <TemplateCommunity />
        <TemplateAutor />
        <TemplateFooter />
    </host>
);
