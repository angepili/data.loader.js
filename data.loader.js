var DataLoader = function(obj) {
       
        var DATA = [];

        var Options = {
            endpoint    : obj.endpoint ? obj.endpoint : '',
            params      : obj.data ? Object.keys(obj.data).map(function(key) { return key + '=' + obj.data[key]; }).join('&') : '',
            show        : obj.show ? obj.show : 10,
            container   : obj.container ? obj.container : 'DataLoaderContent',
            loadMore    : obj.loadMore ? obj.loadMore : 'LoadMore',
            template    : obj.template
        }

        var proprieties = {
            offset : 0,
            filters: {},
            findObjectByKey: function (array, key, value) {
                for (var i = 0; i < array.length; i++) {
                    if (array[i][key] === value) {
                        return array[i];
                    }
                }
                return null;
            },
            setFilter: function (key, value) {
                proprieties.filters[key] = value;
            },
            removeFilter : function(key){
                delete proprieties.filters[key];
            },
            applyFilters: function (data) {
                if (Object.size(data) == 0) {
    
                } else {
                    var criteria = [];
                    for (key in proprieties.filters) {
                        criteria.push({
                            Field: key,
                            Values: proprieties.filters[key]
                        })
                    }
                    proprieties.result = data.flexFilter(criteria);
                }
            },
            cleanData: function () {
                data = [];
                for (var i = 0; i < window.results.length; i++) {
                    if (window.results[i].id > 0) {
                        data.push(window.results[i]);
                    }
                }
            }
        }

        Object.size = function(obj) {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };

        function replaceMe(template, data) {
            const pattern = /{\s*(\w+?)\s*}/g;
            return template.replace(pattern, (_, token) => data[token] || '');
        }

        var Load = function(){
            const { endpoint, params, show } = Options;
            fetch(endpoint+params)
                .then(response => {
                    if (response.status !== 200) {
                      console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                      return;
                    }
                
                    response.json().then(data => {
                        DATA = data;
                        GetContent();
                        LoadMore();
                        // Filters();
                    });

                    
                })
        }

        var GetContent = ()=>{

            var container = document.getElementById(Options.container);

                if(proprieties.offset == 0) proprieties.offset = Options.show;

                if(!('search' in proprieties) && Object.size(proprieties.filters) == 0){
                    tmp = DATA.slice(0,proprieties.offset);
                    total = Object.size(DATA);
                } else if('search' in proprieties) {
                    if(proprieties.offset == 0) proprieties.offset = Options.show;
                    total = Object.size(DATA);
                    tmp = total < Options.show ? DATA : DATA.slice(0,proprieties.offset);
                } else {
                    if(proprieties.offset == 0) proprieties.offset = Options.show;
                    tmp = proprieties.result.slice(0,proprieties.offset);
                    total = Object.size(proprieties.result);
                }

                
                current = proprieties.offset;

                if(total == 0){
                    container.innterHtml = '<div class="clearfix"><div class="alert alert-danger">Nessun contenuto per questa selezione di filtri</div></div>';
                }
                
                container.innerHTML = '';
                for(var i = 0; i < Object.size(tmp); i++){
                    container.innerHTML += replaceMe(Options.template,tmp[i]);
                }

        }

        var LoadMore = function(){

            document.getElementById(Options.loadMore).addEventListener('click',(e)=>{
                e.preventDefault();
                proprieties.offset += Options.show;
                GetContent();  
            })

        }

        /**
         * TODO: da riscrivere
         */
        /* 
            var Filters = function(){
            var buttons = jQuery('button[data-filter]');
            buttons.on('click',function(e){
                e.preventDefault();
                proprieties.offset = 0;
                var that = jQuery(this),
                    container = that.parent(),
                    key = that.data('type'),
                    value = that.data('filter').toString();
                    active = that.hasClass('active');
                    that.removeClass('active');

                    container.find('button[data-type="'+key+'"]').removeClass('active');

                    if('search' in proprieties){
                        data = cache;
                        delete proprieties.search;
                    }

                    if(!active){
                        that.addClass('active');
                        proprieties.setFilter(key,value);
                        if(value == '*'){
                            proprieties.removeFilter(key);
                        }
                    } else {
                        that.removeClass('active');
                        if(key in proprieties.filters){
                            proprieties.removeFilter(key);
                        }
                    }
                    
                    if(container.find('button[data-type].active').length == 0){
                        container.find('button[data-type]:eq(0)').addClass('active');
                    }

                    proprieties.applyFilters(DATA);
                    GetContent();
            });
        } */


        return Load();

}
