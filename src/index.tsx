import imgByUppercod from "./assets/by-uppercod.svg";
import { SiteFooter, SiteLink } from "./components";
import { TemplateEcosystem } from "./templates/ecosystem";
import { TemplateHeader } from "./templates/header";
import { TemplateIsotype } from "./templates/isotype";
import { TemplateWeAre } from "./templates/we-are";
import { TemplateAutor } from "./templates/author";
import { TemplateFooter } from "./templates/footer";

export default (
    <host>
        <TemplateHeader />
        <TemplateIsotype />
        <TemplateWeAre />
        <TemplateEcosystem />
        <TemplateAutor />
        <TemplateFooter />
    </host>
);
