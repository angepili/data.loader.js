![data.loader.js](https://sendeyo.com/up/d/12f6ea3abb)

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
        endpoint : 'https://jsonplaceholder.typicode.com/posts',
        show : 6,
        template :  `
            <div class="item">
                <h2>{id} - {title}</h2>
                <p class="bio">{body}</p>
            </div>
            `, 
        container: 'DataLoaderContent',
        loadMore: 'LoadMore'
    });
```
