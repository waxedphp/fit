
;(function ( $, window, document, undefined ) {

    var pluginName = 'fit',
        _search = '.waxed-fit-parent',
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

      this.getBox = function (element, parentElement) {
        var $el = $(element);
        var wWidth = $(parentElement).width();
        var wHeight = $(parentElement).height();
        var offset = $el.offset();
        var eWidth = $el.width();
        var eHeight = $el.height();
        return  {
          eWidth: eWidth,
          eHeight: eHeight,
          left: offset.left,
          top: offset.top,
          wWidth: wWidth,
          wHeight: wHeight,
          right: wWidth - (offset.left + eWidth),
          bottom: wHeight - (offset.top + eHeight)
        }
      },

      this.fit = function() {
        if (typeof(that.dd.fitHeightAs)=='string') {
          var parent = $(that.dd.fitHeightAs);
          //console.log('CH', parent);//, $(children[1]).innerHeight());
          var box = that.getBox(that.element, parent);
          var my = Math.floor((box.wHeight - box.eHeight)/2);
          $(that.element).css('margin-top', my+'px');
          $(that.element).css('margin-bottom', my+'px');
        }
        if (typeof(that.dd.fitWidthAs)=='string') {
          var parent = $(that.dd.fitWidthAs);
          //console.log('CH', parent);//, $(children[1]).innerHeight());
          var box = that.getBox(that.element, parent);
          var mx = Math.floor((box.wWidth - box.eWidth)/2);
          $(that.element).css('margin-left', mx+'px');
          $(that.element).css('margin-right', mx+'px');
        }
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
