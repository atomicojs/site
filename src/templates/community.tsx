import iconDiscord from "../assets/icon-discord.svg";
import iconLinkedin from "../assets/icon-linkedin.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import {
    SiteButton,
    SiteGrid,
    SiteSection,
    SiteText,
    SiteTitle,
} from "../components";

export const TemplateCommunity = () => (
    <SiteSection>
        <SiteTitle>
            <h1>Join the community</h1>
        </SiteTitle>
        <SiteText>
            Atomico simplifies learning, workflow, and maintenance when creating
            webcomponents.
        </SiteText>
        <SiteGrid columns="1, 3 768px">
            <SiteButton style="--button-border-color: #404EED">
                <img src={iconDiscord} /> Discord
            </SiteButton>
            <SiteButton style="--button-border-color: #1DB0F2">
                <img src={iconTwitter} /> Twitter
            </SiteButton>
            <SiteButton style="--button-border-color: #0063B9">
                <img src={iconLinkedin} /> Linkedin
            </SiteButton>
        </SiteGrid>
    </SiteSection>
);
