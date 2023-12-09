import imgByUppercod from "../assets/by-uppercod.svg";
import { SiteFooter, SiteLink } from "../components";

export const TemplateFooter = () => (
    <SiteFooter>
        <img slot="logo" src={imgByUppercod} />
        <SiteLink>Twitter</SiteLink>
        <SiteLink>Discord</SiteLink>
        <SiteLink>Github</SiteLink>
    </SiteFooter>
);
