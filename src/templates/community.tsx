import iconDiscord from "../assets/icon-discord.svg";
import iconLinkedin from "../assets/icon-linkedin.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import {
    SiteButton,
    SiteSection,
    SiteText,
    SiteTitle,
    SiteRow,
} from "../components";

export const TemplateCommunity = () => (
    <SiteSection>
        <SiteRow colsMd="1fr 1fr">
            <SiteTitle>
                <h1>Join the community</h1>
            </SiteTitle>
            <SiteText>
                Atomico simplifies learning, workflow, and maintenance when
                creating webcomponents.
            </SiteText>
            <SiteRow flex>
                <SiteButton style="--button-border-color: #404EED">
                    <img src={iconDiscord} /> Discord
                </SiteButton>
                <SiteButton style="--button-border-color: #1DB0F2">
                    <img src={iconTwitter} /> Twitter
                </SiteButton>
                <SiteButton style="--button-border-color: #0063B9">
                    <img src={iconLinkedin} /> Linkedin
                </SiteButton>
            </SiteRow>
        </SiteRow>
    </SiteSection>
);
