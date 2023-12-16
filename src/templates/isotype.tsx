import imgLogoText from "../assets/logo-text.svg";
import { SiteRow, SiteIsotype, SiteText } from "../components";

export const TemplateIsotype = () => (
    <SiteIsotype>
        <SiteRow content="center">
            <img src={imgLogoText} alt="" />
            <SiteText elegant>
                <strong>WEBCOMPONENTS</strong>
            </SiteText>
            <SiteText textCenter>
                Create interfaces with code
                <br /> simple, fast and light
            </SiteText>
        </SiteRow>
    </SiteIsotype>
);
