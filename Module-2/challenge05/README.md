- Customize the h1 inside the header:

Using font-size property inside header is confusing

```css
header {
    font-size: 72px;
}
```
This doesn't mean that the h1 font will be 72px. This means that paragraths inside header will have font 72px. So h1s inside header get scaled up in proportion the the size of ps. Much simpler to stay away from header and just use h1 for everything:

```cs
h1 {
    background-color: #281B2D;
    color: #fff;
    text-align: center;
    font-size: 72px;
    margin-top: 0;
    padding: 25px 0;
}
```
