"use strict";
function DataLoader(obj) {
    var DATA;
    var Options = {
        endpoint: obj.endpoint ? obj.endpoint : '',
        params: obj.data ? Object.keys(obj.data).map(function (key) {
            return key + '=' + obj.data[key];
        }).join('&') : '',
        show: obj.show ? obj.show : 10,
        container: obj.container ? obj.container : 'DataLoaderContent',
        loadMore: obj.loadMore ? obj.loadMore : 'LoadMore',
        noResMsg: obj.noResMsg ? obj.noResMsg : '<p style="clear:both">Nessun contenuto per questa selezione di filtri</p>',
        template: obj.template
    };
    var Proprieties = {
        offset: 0,
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
            Proprieties.filters[key] = value;
        },
        removeFilter: function (key) {
            delete Proprieties.filters[key];
        },
        applyFilters: function (data) {
            if (Object.keys(data).length != 0) {
                Proprieties.result = data.filter(function (obj) {
                    return Object.keys(Proprieties.filters).every(function (c) {
                        return obj[c] == Proprieties.filters[c];
                    });
                });
            }
        }
    };
    var BuildTemplate = function (template, data) {
        var pattern = /{\s*(\w+?)\s*}/g;
        return template.replace(pattern, function (_, token) {
            return data[token] || '';
        });
    };
    var Load = function () {
        var endpoint = Options.endpoint, params = Options.params;
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
    var GetContent = function () {
        var container = Options.container, template = Options.template, show = Options.show, ContainerElement = document.getElementById(container), total = DATA.length, totalNow = Proprieties.result ? Object.keys(Proprieties.result).length : total;
        var tmp = null;
        if (Proprieties.offset == 0)
            Proprieties.offset = show;
        if (Object.keys(Proprieties.filters).length == 0) {
            tmp = DATA.slice(0, Proprieties.offset);
        }
        else {
            tmp = Proprieties.result.slice(0, Proprieties.offset);
        }
        if (total == 0) {
            ContainerElement.innerHTML = Options.noResMsg;
        }
        if (tmp.length == totalNow) {
            document.getElementById(Options.loadMore).style.display = 'none';
        }
        else {
            document.getElementById(Options.loadMore).style.display = 'block';
        }
        ContainerElement.innerHTML = '';
        tmp.map(function (item) {
            ContainerElement.innerHTML += BuildTemplate(template, item);
        });
    };
    var LoadMore = function LoadMore() {
        document.getElementById(Options.loadMore).addEventListener('click', function (e) {
            e.preventDefault();
            Proprieties.offset += Options.show;
            GetContent();
        });
    };
    var Filters = function () {
        var _loop = function (i, buttons) {
            var that = buttons[i];
            that.addEventListener('click', function (e) {
                e.preventDefault();
                var key = that.getAttribute('data-type');
                var value = that.getAttribute('data-filter');
                Proprieties.offset = 0;
                if (!hasClass(that, 'active')) {
                    removeClass();
                    that.classList.add('active');
                    Proprieties.setFilter(key, value);
                    if (value == '*') {
                        Proprieties.removeFilter(key);
                    }
                }
                else {
                    that.classList.remove('active');
                    if (key in Proprieties.filters) {
                        Proprieties.removeFilter(key);
                    }
                }
                Proprieties.applyFilters(DATA);
                GetContent();
            });
        };
        var buttons = document.querySelectorAll('button[data-filter]');
        for (var i = 0; i < buttons.length; i++) {
            _loop(i, buttons);
        }
        var removeClass = function () {
            for (var _i = 0; _i < buttons.length; _i++) {
                buttons[_i].classList.remove('active');
            }
        };
        var hasClass = function (element, className) {
            return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
        };
    };
    return Load();
}