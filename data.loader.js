"use strict";

var DataLoader = function DataLoader(obj) {
  var DATA = [];
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
    findObjectByKey: function findObjectByKey(array, key, value) {
      for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
          return array[i];
        }
      }

      return null;
    },
    setFilter: function setFilter(key, value) {
      Proprieties.filters[key] = value;
    },
    removeFilter: function removeFilter(key) {
      delete Proprieties.filters[key];
    },
    applyFilters: function applyFilters(data) {
      if (Object.size(data) != 0) {
        Proprieties.result = data.filter(function (obj) {
          return Object.keys(Proprieties.filters).every(function (c) {
            return obj[c] == Proprieties.filters[c];
          });
        });
      }
    }
  };

  Object.size = function (obj) {
    var size = 0,
        key;

    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }

    return size;
  };

  var BuildTemplate = function BuildTemplate(template, data) {
    var pattern = /{\s*(\w+?)\s*}/g;
    return template.replace(pattern, function (_, token) {
      return data[token] || '';
    });
  };

  var Load = function Load() {
    var endpoint = Options.endpoint,
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

  var GetContent = function GetContent() {
    var container = Options.container,
        template = Options.template,
        show = Options.show,
        tmp = null;
    var ContainerElement = document.getElementById(container);
    var total = DATA.length;
    if (Proprieties.offset == 0) Proprieties.offset = show;

    if (Object.size(Proprieties.filters) == 0) {
      tmp = DATA.slice(0, Proprieties.offset);
    } else {
      tmp = Proprieties.result.slice(0, Proprieties.offset);
    }

    if (total == 0) {
      ContainerElement.innterHtml = Options.noResMsg;
    }

    var totalNow = Proprieties.result ? Object.size(Proprieties.result) : total;

    if (tmp.length == totalNow) {
      document.getElementById(Options.loadMore).style.display = 'none';
    } else {
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

  var Filters = function Filters() {
    var buttons = document.querySelectorAll('button[data-filter]');

    var _loop = function _loop(i) {
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

    for (var i = 0; i < buttons.length; i++) {
      _loop(i);
    }

    function removeClass() {
      for (var _i = 0; _i < buttons.length; _i++) {
        buttons[_i].classList.remove('active');
      }
    }

    function hasClass(element, className) {
      return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
    }
  };

  return Load();
};