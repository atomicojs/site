import iconFunction from "../assets/icon-function.svg";
import iconShadow from "../assets/icon-shadow.svg";
import iconWatch from "../assets/icon-watch.svg";
import imgStep1 from "../assets/step-1.svg";
import imgStep2 from "../assets/step-2.svg";
import imgStep3 from "../assets/step-3.svg";
import imgStep4 from "../assets/step-4.svg";
import {
    SiteCard,
    SiteCount,
    SiteText,
    SiteTitle,
    SiteSection,
    SiteRow,
} from "../components";

export const TemplateWeAre = () => (
    <SiteSection>
        <SiteRow colsMd="55% auto" gap={7}>
            <SiteRow>
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
                <SiteRow cols="auto 1fr">
                    <img src={iconFunction} alt="" />
                    <SiteText>
                        Ullamco culpa duis excepteur quis amet ad
                    </SiteText>
                </SiteRow>
                <SiteRow cols="auto 1fr">
                    <img src={iconShadow} alt="" />
                    <SiteText>
                        Ullamco culpa duis excepteur quis amet ad
                    </SiteText>
                </SiteRow>
                <SiteRow cols="auto 1fr">
                    <img src={iconWatch} alt="" />
                    <SiteText>
                        Ullamco culpa duis excepteur quis amet ad
                    </SiteText>
                </SiteRow>
            </SiteRow>
            <SiteRow>
                <SiteRow>
                    <SiteCount color="#FF0099" value={1}>
                        <SiteText elegant small color="title">
                            IMPORT
                        </SiteText>
                    </SiteCount>
                    <SiteCard padding overflow>
                        <img class="step-img" src={imgStep1} alt="" />
                    </SiteCard>
                </SiteRow>
                <SiteRow>
                    <SiteCount color="#FFE600" value={2}>
                        <SiteText elegant small color="title">
                            WEBCOMPONENT
                        </SiteText>
                    </SiteCount>
                    <SiteCard padding overflow>
                        <img class="step-img" src={imgStep2} alt="" />
                    </SiteCard>
                </SiteRow>
                <SiteRow>
                    <SiteCount color="#00FF90" value={3}>
                        <SiteText elegant small color="title">
                            STYLES
                        </SiteText>
                    </SiteCount>
                    <SiteCard padding overflow>
                        <img class="step-img" src={imgStep3} alt="" />
                    </SiteCard>
                </SiteRow>
                <SiteRow>
                    <SiteCount color="#0088FF" value={4}>
                        <SiteText elegant small color="title">
                            DECLARATIONS
                        </SiteText>
                    </SiteCount>
                    <SiteCard padding overflow>
                        <img class="step-img" src={imgStep4} alt="" />
                    </SiteCard>
                </SiteRow>
            </SiteRow>
        </SiteRow>
    </SiteSection>
);
