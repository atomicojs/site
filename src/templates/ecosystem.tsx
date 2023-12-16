import imgAtom from "../assets/atom.svg";
import {
    SiteAvatar,
    SiteCard,
    SiteCategories,
    SiteLink,
    SiteSection,
    SiteSocials,
    SiteText,
    SiteTitle,
    SiteRow,
    SitePlanet,
} from "../components";

export const TemplateEcosystem = () => (
    <SiteSection>
        <SiteRow colsMd="1fr 1fr">
            <SiteRow>
                <SiteTitle>
                    <h1>The Atomico Ecosystem</h1>
                </SiteTitle>
                <SiteText>
                    ullamco culpa duis excepteur quis amet ad proident Lorem
                    esse eu labore excepteur anim deserunt{" "}
                    <strong>occaecat veniam dolor</strong>
                    sunt magna
                </SiteText>
            </SiteRow>
            <SitePlanet />
        </SiteRow>
        <SiteCategories category="*" columns="1, 2 768px, 3 980px">
            <SiteLink slot="category" data-category="*" dot="#FFE600">
                All
            </SiteLink>
            <SiteLink slot="category" data-category="category-1" dot="#0088FF">
                Category 1
            </SiteLink>
            <SiteLink slot="category" data-category="category-2" dot="#00FF90">
                Category 2
            </SiteLink>
            <SiteCard padding extended overflow dotColor="#FFE600">
                <img
                    slot="media"
                    src="https://cdn.dribbble.com/userupload/10211211/file/original-bc768aed301f6f0f9a6d8673dadd4da8.png?resize=1024x768"
                />
                <SiteText color="subtitle">
                    <h4>@atomico/exports</h4>
                </SiteText>
                <SiteText>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </small>
                </SiteText>
                <SiteAvatar slot="footer" small detail="Matias">
                    <img src="https://avatars.githubusercontent.com/u/9159849?v=4" />
                </SiteAvatar>
                <SiteSocials
                    slot="footer"
                    twitter="uppercod"
                    github="uppercod"
                ></SiteSocials>
            </SiteCard>
            <SiteCard padding extended overflow dotColor="#FFE600">
                <iframe
                    slot="media"
                    src="//player.vimeo.com/video/135653517?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1&muted=1"
                    width="100%"
                ></iframe>
                <SiteText color="subtitle">
                    <h4>@atomico/exports</h4>
                </SiteText>
                <SiteText>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </small>
                </SiteText>
                <SiteAvatar slot="footer" small detail="Matias">
                    <img src="https://avatars.githubusercontent.com/u/9159849?v=4" />
                </SiteAvatar>
            </SiteCard>
            <SiteCard padding extended overflow dotColor="#FFE600">
                <img
                    slot="media"
                    src="https://cdn.dribbble.com/userupload/10211211/file/original-bc768aed301f6f0f9a6d8673dadd4da8.png?resize=1024x768"
                />
                <SiteText color="subtitle">
                    <h5>@atomico/exports</h5>
                </SiteText>
                <SiteText>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </small>
                </SiteText>
                <SiteAvatar slot="footer" small detail="Matias">
                    <img src="https://avatars.githubusercontent.com/u/9159849?v=4" />
                </SiteAvatar>
            </SiteCard>
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
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
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </small>
                </SiteText>
            </SiteCard>
            <SiteCard padding extended overflow dotColor="#00FF90">
                <SiteText color="subtitle">
                    <h4>@atomico/hooks</h4>
                </SiteText>
                <SiteText>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </small>
                </SiteText>
            </SiteCard>
            <SiteCard padding extended overflow dotColor="#00FF90">
                <SiteText color="subtitle">
                    <h4>@atomico/react</h4>
                </SiteText>
                <SiteText>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </small>
                </SiteText>
            </SiteCard>
            <SiteCard padding extended overflow dotColor="#00FF90">
                <SiteText color="subtitle">
                    <h4>@atomico/router</h4>
                </SiteText>
                <SiteText>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </small>
                </SiteText>
            </SiteCard>
            <SiteCard padding extended overflow dotColor="#00FF90">
                <SiteText color="subtitle">
                    <h4>@atomico/components</h4>
                </SiteText>
                <SiteText>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </small>
                </SiteText>
            </SiteCard>
            <SiteCard padding extended overflow dotColor="#00FF90">
                <SiteText color="subtitle">
                    <h4>@atomico/ui</h4>
                </SiteText>
                <SiteText>
                    <small>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                    </small>
                </SiteText>
            </SiteCard>
            <SiteCard padding extended overflow dotColor="#00FF90">
                <SiteText color="subtitle">
                    <h4>@atomico/ui</h4>
                </SiteText>
                <SiteText>
                    <small>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facere officiis, consequuntur laudantium nisi minima
                        totam.
                    </small>
                </SiteText>
            </SiteCard>
        </SiteCategories>
    </SiteSection>
);
