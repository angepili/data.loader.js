export interface Options {
    endpoint: string,
    show?: number,
    template: string,
    container?: string,
    loadMore?: string,
    noResMsg?: string,
    data?: string
}

interface Proprieties {
    offset : number,
    filters : Object,
    [key: string]: any
}

export default function DataLoader(obj: Options) {

    let DATA:[];

    let Options = {
        endpoint    : obj.endpoint ? obj.endpoint : '',
        params      : obj.data ? Object.keys(obj.data).map(function (key) {
                            return key + '=' + obj.data[key];
                        }).join('&') : '',
        show        : obj.show ? obj.show : 10,
        container   : obj.container ? obj.container : 'DataLoaderContent',
        loadMore    : obj.loadMore ? obj.loadMore : 'LoadMore',
        noResMsg    : obj.noResMsg ? obj.noResMsg : '<p style="clear:both">Nessun contenuto per questa selezione di filtri</p>',
        template    : obj.template
    };

    let Proprieties : Proprieties = {
        offset : 0,
        filters : {},
        findObjectByKey: (array, key, value) => {
            for (let i = 0; i < array.length; i++) {
                if (array[i][key] === value) {
                    return array[i];
                }
            }
            return null;
        },
        setFilter: (key: string, value: string) => {
            Proprieties.filters[key] = value;
        },
        removeFilter: (key: string) => {
            delete Proprieties.filters[key];
        },
        applyFilters: (data: Array<any>) => {
            if (Object.keys(data).length != 0) {
                Proprieties.result = data.filter((obj) =>{
                    return Object.keys(Proprieties.filters).every(function (c) {
                        return obj[c] == Proprieties.filters[c];
                    });
                });
            }
        }
    }

    const BuildTemplate = (template, data) => {
        const pattern = /{\s*(\w+?)\s*}/g;
        return template.replace(pattern, (_, token) => {
            return data[token] || '';
        });
    };

    const Load = () => {
        let endpoint = Options.endpoint,
            params = Options.params;
            fetch(endpoint + params).then(function (response) {
                if (response.status === 200) {
                    response.json().then(function (data) {
                        DATA = data;
                        GetContent();
                        LoadMore();
                        Filters();
                    });
                }
            });
    };

    const GetContent = () => {
        const   container   = Options.container,
                template    = Options.template,
                show        = Options.show,
                ContainerElement: HTMLElement = document.getElementById(container),
                total       = DATA.length,
                totalNow    = Proprieties.result ? Object.keys(Proprieties.result).length : total

        let tmp : any = null;

        if(Proprieties.offset == 0) Proprieties.offset = show;

        if(Object.keys(Proprieties.filters).length == 0) {
            tmp = DATA.slice(0, Proprieties.offset);
        } else {
            tmp = Proprieties.result.slice(0, Proprieties.offset);
        }

        if(total == 0) {
            ContainerElement.innerHTML = Options.noResMsg;
        }

        if(tmp.length == totalNow) {
            document.getElementById(Options.loadMore).style.display = 'none';
        } else {
            document.getElementById(Options.loadMore).style.display = 'block';
        }

        ContainerElement.innerHTML = '';
        tmp.map(function (item) {
            ContainerElement.innerHTML += BuildTemplate(template, item);
        });
    };

    const LoadMore = function LoadMore() {
        document.getElementById(Options.loadMore).addEventListener('click', function (e) {
            e.preventDefault();
            Proprieties.offset += Options.show;
            GetContent();
        });
    };

    const Filters = () => {
    
        const _loop = (i:number,buttons) => {
            let that:HTMLBodyElement = buttons[i];
            that.addEventListener('click', function (e) {
                e.preventDefault();
                let key = that.getAttribute('data-type');
                let value = that.getAttribute('data-filter');
                Proprieties.offset = 0;

                if (!hasClass(that, 'active')) {
                    removeClass();
                    that.classList.add('active');
                    Proprieties.setFilter(key, value);

                    if (value == '*') {
                        Proprieties.removeFilter(key);
                    }
                } else {
                    that.classList.remove('active');

                    if (key in Proprieties.filters) {
                        Proprieties.removeFilter(key);
                    }
                }

                Proprieties.applyFilters(DATA);
                GetContent();
            });
        };

        const buttons = document.querySelectorAll('button[data-filter]');

        for(let i = 0; i < buttons.length; i++) {
            _loop(i,buttons);
        }

        const removeClass = () => {
            for (var _i = 0; _i < buttons.length; _i++) {
                buttons[_i].classList.remove('active');
            }
        }

        const hasClass = (element : HTMLBodyElement, className: string) => {
            return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
        }
    };

    return Load();
};