  var DataLoader = function(){
       
        var DATA = [];

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

        var loadContent = function(obj){

            var endpoint = obj.endpoint,
                callback = obj.callback,
                data = obj.data,
                show = obj.show;
            
            jQuery.ajax({
                url: endpoint,
                type: 'GET',
                data : data,
                success: function(data){
                    jQuery('.block-loader').fadeOut();
                    DATA = data;
                    DATA.content = data.content;
                    DATA.show = show;
                    callback(data);

                }
            })
        }

        var getEvents = function(){

            var container = jQuery('#content_container');

                data = [];

                if(proprieties.offset == 0) proprieties.offset = DATA.show;

                if(!('search' in proprieties) && Object.size(proprieties.filters) == 0){
                    data = DATA.content.slice(0,proprieties.offset);
                    total = DATA.info.total;
                } else if('search' in proprieties) {
                    if(proprieties.offset == 0) proprieties.offset = DATA.show;
                    total = Object.size(DATA.content);
                    data = total < DATA.show ? DATA.content : DATA.content.slice(0,proprieties.offset);
                } else {
                    if(proprieties.offset == 0) proprieties.offset = DATA.show;
                    data = proprieties.result.slice(0,proprieties.offset);
                    total = Object.size(proprieties.result);
                }

                
                current = proprieties.offset;

                if(total == 0){
                    container.html('<div class="clearfix"><div class="alert alert-danger">Nessun evento per questa selezione di filtri</div></div>')
                }
                
                var objData = {};
                    objData.data = data;
                var item = document.querySelector('#contentHbs').innerHTML,
                    hbs = Handlebars.compile(item);
                    container.html(hbs(objData));

        }

        var loadMoreEvents = function(){

            jQuery(document).on('click','#load_more',function(e){
                e.preventDefault();
                proprieties.offset += 5;
                getEvents();                
            });
    
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
    
                        proprieties.applyFilters(DATA.content);
                        getEvents();
    
                });

        }

        return {
            loadContent : loadContent,
            loadMoreEvents : loadMoreEvents,
            getEvents : getEvents
        }

}
