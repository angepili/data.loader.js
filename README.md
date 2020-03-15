# data.loader.js
<img src="https://raw.githubusercontent.com/angepili/data.loader.js/master/logo.svg" alt="logo" />

```html
    <div id="DataLoaderContent"></div>
    <button id="LoadMore">Carica altro</button>
```

```javascript
    DataLoader({
        endpoint : 'https://jsonplaceholder.typicode.com/posts', // Required,
        show : 6, // Set number of items to show and offset; Optional, 6 by defaut
        template :  `
            <div class="item">
                <h2>{id} - {title}</h2>
                <p class="bio">{body}</p>
            </div>
            `, // Define the TPL to iterate, Use {variable} to replace automatically obj key; required
        container: 'DataLoaderContent', // Set ID of container; Optional, use "DataLoaderContent" by default
        loadMore: 'LoadMore' // Set ID of button; Optional, use "LoadMore" by default
    });
```
