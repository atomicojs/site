import { css } from "atomico";

export const tokensColor = css`
    @tokens "./tokens.yaml" filter(color);
`;

export const tokensSize = css`
    @tokens "./tokens.yaml" filter(size);
`;

export const tokensText = css`
    @tokens "./tokens.yaml" filter(text);
`;

export const tokensLayout = css`
    @tokens "./tokens.yaml" filter(layout);
`;

export const tokensButton = css`
    @tokens "./tokens.yaml" use(button);
`;

export const tokensButtons = css`
    @tokens "./tokens.yaml" use(buttonsite);
`;

export const tokensCard = css`
    @tokens "./tokens.yaml" use(card);
`;

export const tokensCode = css`
    @tokens "./tokens.yaml" use(code);
`;

export const tokensScroll = css`
    @tokens "./tokens.yaml" use(scroll);
`;

export const tokensAvatar = css`
    @tokens "./tokens.yaml" use(avatar);
`;

export const tokensLink = css`
    @tokens "./tokens.yaml" use(link);
`;

export const tokens = css`
    @tokens "./tokens.yaml";
`;
