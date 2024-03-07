
;(function ( $, window, document, undefined ) {

    var pluginName = 'fit',
        _search = '.waxed-fit',
        _api = [],
        defaults = {
            propertyName: "value"
        },
        inited = false
        ;

    function Instance(pluggable,element,dd){
      var that = this;
      this.pluggable = pluggable;
      this.element = element;
      this.o = element;
      this.t = pluginName;
      this.dd = dd;
      this.name = '';
      this.cfg = {
      };

      this.invalidate = function(RECORD){

      },

      this.setRecord = function(RECORD){
        if (typeof that.dd.name == 'undefined') return;
        var rec = that.pluggable.getvar(that.dd.name, RECORD);
        if (typeof rec != 'object') { return; };
        if (typeof rec.scrollTo == 'string') {
          setTimeout(function(){
            that.scrollTo(rec.scrollTo);
          }, 100);
        };
        if (typeof rec.scrollToName == 'string') {
          setTimeout(function(){
            that.scrollToName(rec.scrollToName);
          }, 100);
        };
      },

      this.scrollToName = function(s){
        var ss = 'a[name='+s+']';
        //console.log('SCROLLTO', ss);
        this.scrollTo(ss);
        $(ss).addClass('active');
      },

      this.scrollTo = function(s){
        //'a[name=foo]'
        //console.log('SCROLLTO', s);
        $(that.element).scrollTop(0);
        var box = $(s).position();
        if (typeof box == 'undefined') return;
        var height = $(s).outerHeight(true);
        //console.log('SCROLLTO', s, box.top, height);
        var position = box.top - height - 20;
        $(that.element).animate({scrollTop: position});

      },

      this.getBox = function (element) {
        var $el = $(element);
        var wWidth = $(window).width();
        var wHeight = $(window).height();
        var offset = $el.offset();
        var eWidth = $el.outerWidth();
        var eHeight = $el.outerHeight();
        return  {
          left: offset.left,
          top: offset.top,
          wWidth: wWidth,
          wHeight: wHeight,
          right: wWidth - (offset.left + eWidth),
          bottom: wHeight - (offset.top + eHeight)
        }
      },

      this.fit = function() {
        var box = that.getBox(that.element);
        //console.log('FIT', box);
        //$(that.element).css('padding-right','15px');
        $(that.element).css('overflow','auto');
        $(that.element).css('height', (box.wHeight - box.top - 5)+'px');
      },

      this.free = function() {

      },

      this.init=function() {

        this.fit();
        window.addEventListener("resize", this.fit);
        setTimeout(function(){
          that.fit();
        }, 500);


        inited = true;
      },
      this._init_();
    }

    $.waxxx(pluginName, _search, Instance, _api);


})( jQuery, window, document );
/*--*/
//# sourceURL: /js/jam/boilerplate/plugin.js
