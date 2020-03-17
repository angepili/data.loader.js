![data.loader.js](https://sendeyo.com/up/d/12f6ea3abb)<!-- .element  style="width: 300px; height: auto" -->

This library are able to fetch json data from external source, show X items per times, and filter by object key.

DEMO: https://angepili.github.io/data.loader.js/

### Params
| Key | Description |
|-----|-------------|
|endpoint| Required,string; data source|
|show|Optional,int; how many items show per time|
|template|Required,html inside backtick; the tpl item|
|container|Optioanl,stirng; container ID|
|loadMore|Optioanl,string; text inside Load More button|
|noResMsg|Optional,string; text to show when the content is unavailable|
|data|Optional,Object;optional params endpoint|


### Example

```html
    <!-- data-filter should be contain the object key to filter -->
    <div id="Filters">
        <button data-type="author" data-filter="*" class="active">All</button>
        <button data-type="author" data-filter="Paul Jarvis">Jarvis</button>
        <button data-type="author" data-filter="Alejandro Escamilla">Escamilla</button>
        <button data-type="author" data-filter="NASA">NASA</button>
    </div>

    <div id="DataLoaderContent"></div>
    <button id="LoadMore">More</button>

    <script type="text/javascript" src="data.loader.js"></script>
```

```javascript
    new DataLoader({
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
