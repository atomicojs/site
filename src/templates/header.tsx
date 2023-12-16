import imgLogo from "../assets/logo.svg";
import {
    SiteEye,
    SiteHeader,
    SiteLink,
    SiteMenu,
    SiteSocials,
    SiteText,
    SiteRow,
    SiteSection,
} from "../components";

export const TemplateHeader = () => (
    <SiteHeader>
        <img src={imgLogo} slot="logo" />
        <SiteLink
            href="https://github.com/atomicojs/atomico/"
            target="_blank"
            slot="link"
        >
            Github
        </SiteLink>
        <SiteLink slot="link">Documentation</SiteLink>
        <SiteLink slot="link">Support</SiteLink>
        <SiteMenu slot="action">
            <SiteEye class="eye"></SiteEye>
            <SiteSection>
                <SiteRow>
                    <SiteText elegant color="accent">
                        SOCIALS
                    </SiteText>
                    <SiteRow flex>
                        <SiteLink>TWITTER</SiteLink>
                        <SiteLink>LINKEDIN</SiteLink>
                        <SiteLink>DISCORD</SiteLink>
                        <SiteLink>GITHUB</SiteLink>
                    </SiteRow>
                    <SiteRow flex>
                        <SiteLink>TWITTER</SiteLink>
                        <SiteLink>LINKEDIN</SiteLink>
                        <SiteLink>DISCORD</SiteLink>
                        <SiteLink>GITHUB</SiteLink>
                    </SiteRow>
                </SiteRow>
            </SiteSection>
        </SiteMenu>
        <SiteSocials
            twitter="atomicojs"
            github="atomicojs"
            discord="atomicojs"
            youtube="atomicojs"
            slot="action"
        />
    </SiteHeader>
);
