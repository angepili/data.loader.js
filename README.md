# data.loader.js

```javascript
var dataLoa = new DataLoader(),
    ENDPOINT = 'https://jsonplaceholder.typicode.com/posts';
    runFilters.loadContent({
        endpoint : ENDPOINT,
        show : 6, // items to show
        data : {} // optional data send request
        callback : function(){ /** run after load */ },
    });
```
