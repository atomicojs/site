import imgAuthor from "../assets/author.jpg";
import iconCode from "../assets/icon-code.svg";
import iconDonation from "../assets/icon-donation.svg";
import iconShare from "../assets/icon-share.svg";
import {
    SiteAuthor,
    SiteRow,
    SiteSection,
    SiteText,
    SiteTitle,
} from "../components";

export const TemplateAutor = () => (
    <SiteSection>
        <SiteAuthor slot="left">
            <img src={imgAuthor} />
        </SiteAuthor>
        <SiteText elegant>AUTHOR'S MESSAGE</SiteText>
        <SiteTitle>
            <h1>Join Atomico JS</h1>
        </SiteTitle>
        <SiteText slot="right">
            Atomico is an open source project developed by
            <a href=""> UpperCod</a>, we invite you to contribute to the
            improvement of Atomico in:
        </SiteText>
        <SiteRow slot="right">
            <img src={iconShare} alt="" />
            <SiteText slot="right">Using and sharing Atomico</SiteText>
        </SiteRow>
        <SiteRow slot="right">
            <img src={iconCode} alt="" />
            <SiteText slot="right">
                Improving the source code, sharing bugs and new features
            </SiteText>
        </SiteRow>
        <SiteRow slot="right">
            <img src={iconDonation} alt="" />
            <SiteText slot="right">Small donations</SiteText>
        </SiteRow>
    </SiteSection>
);
