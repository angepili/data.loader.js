const DataLoader = function(obj) {
       
        let DATA = [];

        const Options = {
            endpoint    : obj.endpoint ? obj.endpoint : '',
            params      : obj.data ? Object.keys(obj.data).map(function(key) { return key + '=' + obj.data[key]; }).join('&') : '',
            show        : obj.show ? obj.show : 10,
            container   : obj.container ? obj.container : 'DataLoaderContent',
            loadMore    : obj.loadMore ? obj.loadMore : 'LoadMore',
            template    : obj.template
        }

        const Proprieties = {
            offset : 0,
            filters: {},
            findObjectByKey: (array, key, value) => {
                for (var i = 0; i < array.length; i++) {
                    if (array[i][key] === value) {
                        return array[i];
                    }
                }
                return null;
            },
            setFilter: (key, value) => {
                Proprieties.filters[key] = value;
            },
            removeFilter : key => {
                delete Proprieties.filters[key];
            },
            applyFilters:  data => {
                if (Object.size(data) == 0) {
    
                } else {
                    var criteria = [];
                    for (key in Proprieties.filters) {
                        criteria.push({
                            Field: key,
                            Values: Proprieties.filters[key]
                        })
                    }
                    Proprieties.result = data.flexFilter(criteria);
                }
            },
            cleanData: () => {
                data = [];
                for (var i = 0; i < window.results.length; i++) {
                    if (window.results[i].id > 0) {
                        data.push(window.results[i]);
                    }
                }
            }
        }

        Object.size = obj => {
            var size = 0, key;
            for (key in obj) {
                if (obj.hasOwnProperty(key)) size++;
            }
            return size;
        };

        const BuildTemplate = (template, data) => {
            const pattern = /{\s*(\w+?)\s*}/g;
            return template.replace(pattern, (_, token) => data[token] || '');
        }

        const Load = () => {
            const { endpoint, params } = Options;
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

        const GetContent = () => {

            const { container, template, show } = Options;
            const ContainerElement = document.getElementById(container);
            let total = Object.size(DATA);
            
                if(Proprieties.offset == 0) Proprieties.offset = show;


                if(!('search' in Proprieties) && Object.size(Proprieties.filters) == 0){
                    tmp = DATA.slice(0,Proprieties.offset);
                } else if('search' in Proprieties) {
                    tmp = total < show ? DATA : DATA.slice(0,Proprieties.offset);
                } else {
                    total = Object.size(Proprieties.result);
                    tmp = Proprieties.result.slice(0,Proprieties.offset);
                }

                if(total == 0){
                    ContainerElement.innterHtml = '<div class="clearfix"><div class="alert alert-danger">Nessun contenuto per questa selezione di filtri</div></div>';
                }
                
                ContainerElement.innerHTML = '';
                tmp.map( item => {
                    ContainerElement.innerHTML += BuildTemplate( template, item );
                })

        }

        const LoadMore = () => {
            document.getElementById(Options.loadMore).addEventListener('click',(e)=>{
                e.preventDefault();
                Proprieties.offset += Options.show;
                GetContent();  
            });
        }

        /**
         * TODO: da riscrivere
         */
        /* 
            var Filters = function(){
            var buttons = jQuery('button[data-filter]');
            buttons.on('click',function(e){
                e.preventDefault();
                Proprieties.offset = 0;
                var that = jQuery(this),
                    container = that.parent(),
                    key = that.data('type'),
                    value = that.data('filter').toString();
                    active = that.hasClass('active');
                    that.removeClass('active');

                    container.find('button[data-type="'+key+'"]').removeClass('active');

                    if('search' in Proprieties){
                        data = cache;
                        delete Proprieties.search;
                    }

                    if(!active){
                        that.addClass('active');
                        Proprieties.setFilter(key,value);
                        if(value == '*'){
                            Proprieties.removeFilter(key);
                        }
                    } else {
                        that.removeClass('active');
                        if(key in Proprieties.filters){
                            Proprieties.removeFilter(key);
                        }
                    }
                    
                    if(container.find('button[data-type].active').length == 0){
                        container.find('button[data-type]:eq(0)').addClass('active');
                    }

                    Proprieties.applyFilters(DATA);
                    GetContent();
            });
        } */


        return Load();

}
