import { c, css } from "atomico";
import imgAtom from "./assets/atom.svg";
import imgAuthor from "./assets/author.jpg";
import imgByUppercod from "./assets/by-uppercod.svg";
import iconCode from "./assets/icon-code.svg";
import iconDiscord from "./assets/icon-discord.svg";
import iconDonation from "./assets/icon-donation.svg";
import iconFunction from "./assets/icon-function.svg";
import iconLinkedin from "./assets/icon-linkedin.svg";
import iconShadow from "./assets/icon-shadow.svg";
import iconShare from "./assets/icon-share.svg";
import iconTwitter from "./assets/icon-twitter.svg";
import iconWatch from "./assets/icon-watch.svg";
import imgLogoText from "./assets/logo-text.svg";
import imgLogo from "./assets/logo.svg";
import imgStep1 from "./assets/step-1.svg";
import imgStep2 from "./assets/step-2.svg";
import imgStep3 from "./assets/step-3.svg";
import imgStep4 from "./assets/step-4.svg";
import {
    SiteAuthor,
    SiteButton,
    SiteCard,
    SiteCategories,
    SiteCount,
    SiteEye,
    SiteFooter,
    SiteGrid,
    SiteHeader,
    SiteIsotype,
    SiteLink,
    SiteMenu,
    SiteSection,
    SiteText,
    SiteTitle,
    SiteGradient,
    tokens,
} from "./components";
function site() {
    return (
        <host shadowDom>
            <SiteSection style="height: 50vh">
                <SiteGradient slot="background" />
                <SiteTitle full-width>
                    <h1>¿Por que sucede?</h1>
                </SiteTitle>
                <SiteText slot="">
                    Create interfaces with code
                    <br /> simple, fast and light
                </SiteText>
            </SiteSection>
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
            </SiteHeader>
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

            <SiteSection>
                <SiteTitle>
                    <h1>Simple, fast and light</h1>
                </SiteTitle>
                <SiteText>
                    ullamco culpa duis excepteur quis amet
                    <strong> ad proident Lorem </strong>
                    esse eu labore excepteur anim deserunt occaecat veniam dolor
                    enim ullamco qui dolor ad reprehenderit irure dolor Lorem
                    sunt magna et pariatur eu irure amet enim sit magna dolor ad
                    et aliquip ut labore culpa ad
                </SiteText>
                <div class="icon-row">
                    <img src={iconFunction} alt="" />
                    <SiteText>
                        Ullamco culpa duis excepteur quis amet ad
                    </SiteText>
                </div>
                <div class="icon-row">
                    <img src={iconShadow} alt="" />
                    <SiteText>
                        Ullamco culpa duis excepteur quis amet ad
                    </SiteText>
                </div>
                <div class="icon-row">
                    <img src={iconWatch} alt="" />
                    <SiteText>
                        Ullamco culpa duis excepteur quis amet ad
                    </SiteText>
                </div>
                <div slot="right" class="steps">
                    <div class="step">
                        <SiteCount color="#FF0099" value={1}>
                            <SiteText elegant color="title">
                                IMPORT
                            </SiteText>
                        </SiteCount>
                        <SiteCard padding overflow>
                            <img class="step-img" src={imgStep1} alt="" />
                        </SiteCard>
                    </div>
                    <div class="step">
                        <SiteCount color="#FFE600" value={2}>
                            <SiteText elegant color="title">
                                WEBCOMPONENT
                            </SiteText>
                        </SiteCount>
                        <SiteCard padding overflow>
                            <img class="step-img" src={imgStep2} alt="" />
                        </SiteCard>
                    </div>
                    <div class="step">
                        <SiteCount color="#00FF90" value={3}>
                            <SiteText elegant color="title">
                                STYLES
                            </SiteText>
                        </SiteCount>
                        <SiteCard padding overflow>
                            <img class="step-img" src={imgStep3} alt="" />
                        </SiteCard>
                    </div>
                    <div class="step">
                        <SiteCount color="#0088FF" value={4}>
                            <SiteText elegant color="title">
                                DECLARATIONS
                            </SiteText>
                        </SiteCount>
                        <SiteCard padding overflow>
                            <img class="step-img" src={imgStep4} alt="" />
                        </SiteCard>
                    </div>
                </div>
            </SiteSection>
            <SiteSection>
                <SiteTitle>
                    <h1>The Atomico Ecosystem</h1>
                </SiteTitle>
                <SiteText>
                    ullamco culpa duis excepteur quis amet ad proident Lorem
                    esse eu labore excepteur anim deserunt{" "}
                    <strong>occaecat veniam dolor</strong>
                    sunt magna
                </SiteText>
                <img slot="right" src={imgAtom} />
                <SiteCategories
                    category="*"
                    slot="footer"
                    columns="1, 2 768px, 3 980px"
                >
                    <SiteLink slot="category" data-category="*" dot="#FFE600">
                        All
                    </SiteLink>
                    <SiteLink
                        slot="category"
                        data-category="category-1"
                        dot="#0088FF"
                    >
                        Category 1
                    </SiteLink>
                    <SiteLink
                        slot="category"
                        data-category="category-2"
                        dot="#00FF90"
                    >
                        Category 2
                    </SiteLink>
                    <a
                        href="upper.cl"
                        target="_blank"
                        data-category="category-1"
                    >
                        <SiteCard padding overflow dotColor="#FFE600">
                            <SiteText color="subtitle">
                                <h4>@atomico/exports</h4>
                            </SiteText>
                            <SiteText>
                                <small>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                </small>
                            </SiteText>
                        </SiteCard>
                    </a>

                    <SiteCard
                        padding
                        overflow
                        dotColor="#0088FF"
                        data-category="category-2"
                    >
                        <SiteText color="subtitle">
                            <h4>@atomico/router</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard
                        padding
                        overflow
                        dotColor="#00FF90"
                        data-category="category-3"
                    >
                        <SiteText color="subtitle">
                            <h4>@atomico/store</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard padding overflow dotColor="#00FF90">
                        <SiteText color="subtitle">
                            <h4>@atomico/hooks</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard padding overflow dotColor="#00FF90">
                        <SiteText color="subtitle">
                            <h4>@atomico/react</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard padding overflow dotColor="#00FF90">
                        <SiteText color="subtitle">
                            <h4>@atomico/router</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard padding overflow dotColor="#00FF90">
                        <SiteText color="subtitle">
                            <h4>@atomico/components</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                    <SiteCard padding overflow dotColor="#00FF90">
                        <SiteText color="subtitle">
                            <h4>@atomico/ui</h4>
                        </SiteText>
                        <SiteText>
                            <small>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit.
                            </small>
                        </SiteText>
                    </SiteCard>
                </SiteCategories>
            </SiteSection>
            <SiteSection>
                <SiteTitle>
                    <h1>Ideas, projects and companies that use Atomico</h1>
                </SiteTitle>
                <SiteText>
                    ullamco culpa duis excepteur quis amet ad proident Lorem
                    esse eu labore excepteur anim deserunt{" "}
                    <strong>occaecat veniam dolor</strong>
                    sunt magna
                </SiteText>
            </SiteSection>
            <SiteSection>
                <SiteTitle>
                    <h1>Join the community</h1>
                </SiteTitle>
                <SiteText>
                    Atomico simplifies learning, workflow, and maintenance when
                    creating webcomponents.
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
            <SiteSection>
                <SiteAuthor>
                    <img src={imgAuthor} />
                </SiteAuthor>
                <SiteGrid slot="right" gap={1}>
                    <SiteText elegant>AUTHOR'S MESSAGE</SiteText>
                    <SiteTitle>
                        <h1>Join Atomico JS</h1>
                    </SiteTitle>
                </SiteGrid>
                <SiteText slot="right">
                    Atomico is an open source project developed by
                    <a href=""> UpperCod</a>, we invite you to contribute to the
                    improvement of Atomico in:
                </SiteText>
                <div class="icon-row" slot="right">
                    <img src={iconShare} alt="" />
                    <SiteText slot="right">Using and sharing Atomico</SiteText>
                </div>
                <div class="icon-row" slot="right">
                    <img src={iconCode} alt="" />
                    <SiteText slot="right">
                        Improving the source code, sharing bugs and new features
                    </SiteText>
                </div>
                <div class="icon-row" slot="right">
                    <img src={iconDonation} alt="" />
                    <SiteText slot="right">Small donations</SiteText>
                </div>
            </SiteSection>
            <SiteFooter>
                <img slot="logo" src={imgByUppercod} />
                <SiteLink>Twitter</SiteLink>
                <SiteLink>Discord</SiteLink>
                <SiteLink>Github</SiteLink>
            </SiteFooter>
        </host>
    );
}

site.styles = [
    tokens,
    css`
        img {
            max-width: 100%;
        }
        .steps {
            display: grid;
            gap: var(--size-6);
        }
        .step {
            display: grid;
            gap: var(--size-4);
        }
        .step-img {
            width: 100%;
            max-width: 380px;
        }
        .icon-row {
            display: grid;
            align-items: center;
            grid-template-columns: auto 1fr;
            gap: var(--size-4);
        }
        .eye {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            opacity: 0.5;
        }
        .menu {
            min-height: 100%;
            box-sizing: border-box;
            display: flex;
            align-items: flex-end;
        }
        .menu-items {
            display: flex;
            flex-flow: row wrap;
            gap: 1em;
        }
        .menu-group {
            display: grid;
            gap: 20px;
        }
    `,
];

export const Site = c(site);

customElements.define("my-site", Site);
