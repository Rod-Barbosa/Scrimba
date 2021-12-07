QUICK REACT SET UP:
------------

Just add these lines on the head of the document:

CDN Links for react and reactDOM:
```
<script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

babel to use JSX:
```
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```

Easy as pie. Just like that you can write an index.js with simple JSX and it will render (sure it will come with a warning but nobody has time for that)

```React
ReactDOM.render(<ul>
                    <li>item 1</li>
                    <li>item 2</li>
                    <li>item 3</li>
                </ul>
    , document.getElementById("root"))
```
