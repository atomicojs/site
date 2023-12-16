import * as readme from "./README.md";
import {
    SitePattern,
    SiteSection,
    SiteRow,
    SiteTitle,
    SiteAvatar,
    SiteText,
    SiteMd,
} from "../../components";

export default (
    <host>
        <SiteSection>
            <SitePattern reverse absolute slot="background" />
            <SiteRow>
                <SiteTitle>
                    <h1>{readme.meta.title}</h1>
                </SiteTitle>
                <SiteText>
                    <p>{readme.meta.description}</p>
                </SiteText>
                <SiteAvatar label="UpperCod" detail="Creator of Atomico">
                    <img src={readme.meta.avatar} alt={readme.meta.author} />
                </SiteAvatar>
            </SiteRow>
        </SiteSection>
        <SiteSection style="padding-top: 0" class="site-md">
            <SiteMd>{readme.default}</SiteMd>
        </SiteSection>
    </host>
);
