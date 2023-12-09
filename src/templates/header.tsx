import imgLogo from "../assets/logo.svg";
import {
    SiteEye,
    SiteHeader,
    SiteLink,
    SiteMenu,
    SiteSocials,
    SiteText,
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
            <div class="menu">
                <div class="menu-group">
                    <SiteText elegant color="accent">
                        SOCIALS
                    </SiteText>
                    <div class="menu-items">
                        <SiteLink>TWITTER</SiteLink>
                        <SiteLink>LINKEDIN</SiteLink>
                        <SiteLink>DISCORD</SiteLink>
                        <SiteLink>GITHUB</SiteLink>
                    </div>
                    <SiteText elegant color="accent">
                        STARTED
                    </SiteText>
                    <div class="menu-items">
                        <SiteLink>Get started</SiteLink>
                        <SiteLink>Template</SiteLink>
                        <SiteLink>Props</SiteLink>
                        <SiteLink>Hooks</SiteLink>
                    </div>
                    <SiteText elegant color="accent">
                        UTILITIES
                    </SiteText>
                    <div class="menu-items">
                        <SiteLink>@atomico/exports</SiteLink>
                        <SiteLink>@atomico/ui</SiteLink>
                        <SiteLink>@atomico/hooks</SiteLink>
                        <SiteLink>More</SiteLink>
                    </div>
                </div>
            </div>
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
