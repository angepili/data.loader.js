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
                    Proprieties.result = data.filter(function(obj) {
                       return Object.keys(Proprieties.filters).every(function(c) {
                         return obj[c] == Proprieties.filters[c];
                       });
                    });
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
                        console.log(response.status);
                        return;
                    }
                    response.json().then(data => {
                        DATA = data;
                        GetContent();
                        LoadMore();
                        Filters();
                    });
                })
        }

        const GetContent = () => {

            const { container, template, show } = Options;
            const ContainerElement = document.getElementById(container);
            let total = DATA.length;
            
            if(Proprieties.offset == 0) Proprieties.offset = show;

            if(Object.size(Proprieties.filters) == 0){
                tmp = DATA.slice(0,Proprieties.offset);
            } else {
                tmp = Proprieties.result.slice(0,Proprieties.offset);
            }

            if(total == 0){
                ContainerElement.innterHtml = '<div class="clearfix"><div class="alert alert-danger">Nessun contenuto per questa selezione di filtri</div></div>';
            }

            let totalNow = Proprieties.result ? Object.size(Proprieties.result) : total;
                console.log(tmp.length,totalNow);
                if(tmp.length == totalNow){
                    document.getElementById(Options.loadMore).style.display = 'none';
                } else {
                    document.getElementById(Options.loadMore).style.display = 'block';
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

    
        const Filters = ()=> {
            let buttons = document.querySelectorAll('button[data-filter]');
                
                for(let i = 0; i < buttons.length; i++){
                    const that = buttons[i];
                    that.addEventListener('click',(e)=>{
                        e.preventDefault();
                        let key = that.getAttribute('data-type');
                        let value = that.getAttribute('data-filter');
                        Proprieties.offset = 0;
                        if(!hasClass(that,'active')){
                            removeClass();
                            that.classList.add('active');
                            Proprieties.setFilter(key,value);
                            if(value == '*'){
                                Proprieties.removeFilter(key);
                            }
                        } else {
                            that.classList.remove('active');
                            if(key in Proprieties.filters){
                                Proprieties.removeFilter(key);
                            }
                        }

                        Proprieties.applyFilters(DATA);
                        GetContent();
                    });
                }

                function removeClass(){
                    for(let i = 0; i < buttons.length; i++){
                        buttons[i].classList.remove('active');
                    }
                }

                function hasClass(element, className) {
                    return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
                }
        } 


        return Load();

}
