import imgLogoText from "../assets/logo-text.svg";
import { SiteGrid, SiteIsotype, SiteText } from "../components";

export const TemplateIsotype = () => (
    <SiteIsotype>
        <SiteGrid gap={3} centered>
            <img src={imgLogoText} alt="" />
            <SiteText elegant color="accent">
                WEBCOMPONENTS
            </SiteText>
            <SiteText textCenter>
                Create interfaces with code
                <br /> simple, fast and light
            </SiteText>
        </SiteGrid>
    </SiteIsotype>
);
