```tsx meta
export const meta = {
    title: `Stories with @atomico/stories`,
    description: (
        <>
            Markdown with <b>superpowers</b>
        </>
    ),
    avatar: "https://atomicojs.dev/assets/author.b6c35ffb.jpg",
    author: "UpperCod",
};
```

# hello

```tsx module
import { SiteText } from "/src/components";
```

<SiteText cols>

Lorem ipsum dolor [sit amet consectetur](#example) adipiscing elit rutrum dignissim, molestie nascetur nunc bibendum sodales eleifend sociosqu vitae, litora felis posuere commodo tincidunt phasellus nibh aptent. Volutpat ridiculus tincidunt gravida ut eleifend erat arcu euismod tempor enim hac suspendisse, consequat ad senectus urna pretium purus quisque netus nisi lobortis. Hac et accumsan litora inceptos rhoncus montes purus aliquam taciti habitasse, auctor urna ultrices lobortis ad feugiat integer etiam viverra, **consequat orci lacus dui nec maecenas curae proin est.**

</SiteText>

1. Inceptos habitasse blandit venenatis magna sodales suscipit sem, placerat potenti curae sagittis dapibus justo tincidunt
2. id penatibus lobortis massa primis morbi. Nam purus sem penatibus et

_Hac et accumsan litora inceptos rhoncus montes purus aliquam taciti habitasse, aucto_

```tsx my-component.tsx
import { Props, css, c } from "atomico";

function myComponent({ value }: Props<typeof myComponent>) {
    return (
        <host shadowDom>
            <h1>{value}</h1>
        </host>
    );
}

myComponent.props = { value: String };

myComponent.styles = css`
    :host {
        width: 100px;
        height: 100px;
        color: white;
    }
`;

export const MyComponent = c(myComponent);

customElements.define("my-component", MyComponent);
```

## Example

```tsx preview
import { MyComponent } from "./my-component";

export default <MyComponent value="Example!" />;
```

> tellus urna, pellentesque conubia elementum nascetur ultrices malesuada hac, erat class velit auctor id. Curae nibh facilisis rhoncus ante sem vivamus scelerisque, cum proin lacus urna purus integer vitae tempus, leo eros nascetur mollis ligula condimentum.

---

# Bye!
