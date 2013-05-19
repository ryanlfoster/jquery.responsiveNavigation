(function(){
  var defaults = {
    navPrefix: 'ng',
    mainWrapper: '.content-wrapper',
    navigationWrapper: '#ng-navigation',
    navigationInner: '.ng-nav',
    buttonMargin: 30
  },
  responsiveNavigation = {
    prefixClass: '',
    prefixID: '',
    buttonName: '',
    buttonWidth: 0,
    ulNavName: '',
    navControlsName: '',
    mainNavName: '',
    navButtonWidth: '',
    navOffsetWidth: 0,
    globalWidth: 0,
    cnt: 0,
    opt: '',
    init: function(params){
      this.opt = $.extend(defaults, params);
      responsiveNavigation.createNavigation();
      responsiveNavigation.currentResolution();
      responsiveNavigation.config();
      responsiveNavigation.onClickEvent();
      responsiveNavigation.onResizeEvent();
      responsiveNavigation.dataSectionNames();
    },
    createNavigation: function(){
      // create main navigation
      var navContent = '<div id="'+this.opt.navPrefix+'-'+'navigation-controls"><div class="'+this.opt.navPrefix+'-'+'nav-inner"><a class="'+this.opt.navPrefix+'-'+'button" href="#"><span class="icon first"></span><span class="icon"></span><span class="icon"></span></a></div></div>';
      $(this.opt.mainWrapper).prepend(navContent);
    },
    currentResolution: function(){
      // Parameters used for resize
      this.globalWidth = window.innerWidth || document.documentElement.clientWidth;
      this.navOffsetWidth = parseInt(this.globalWidth - this.buttonWidth, 10);
    },
    config: function(){
      // Class or ID
      this.prefixClass = '.' + this.opt.navPrefix;
      this.prefixID = '#' + this.opt.navPrefix;
      // Rest of configuration
      this.buttonName = this.prefixClass + '-' + 'button';
      this.buttonWidth = parseInt( $(this.buttonName).outerWidth() + this.opt.buttonMargin, 10);
      this.navControlsName = this.prefixID + '-' + 'navigation-controls';
      // Navigation button config
      this.navButtonWidth = $(this.buttonName).outerWidth();
      // Change here value if you have paddings or margins around button
      this.navOffsetWidth = parseInt(this.globalWidth - this.buttonWidth, 10);
    },
    counter: function(param){
      if( typeof(param) != 'undefined' ){
        counter = param;
      } else{
        counter = this.cnt++;
        counter++;
      }
      this.cnt = counter;
    },
    onClickEvent: function(){
      var that = this;
      $(that.buttonName).on('click', function(e) {
        that.mobileCSS();
        that.counter();
        if(that.cnt % 2 !== 0){
          that.moveRight();
        }else{
          that.moveLeft();
        }
        e.preventDefault();
      });
    },
    moveRight: function(){
      $(this.opt.mainWrapper).animate({left: this.navOffsetWidth}, {duration: 800,easing: 'easeOutBack'});
    },
    moveLeft: function(param){
      if(param){
        $(this.opt.mainWrapper).css('left', 0);
      }else{
        $(this.opt.mainWrapper).animate({left: 0}, {duration: 200,easing: 'linear'});
      }
    },
    onResizeEvent: function(){
      var that = this;
      $(window).resize(function(){
        that.currentResolution();
        if(that.globalWidth < 768){
          that.detectCurrentState();
        }else{
          $(that.opt.mainWrapper).css('left', 'auto');
          that.desktopCSS();
        }
      });
    },
    detectCurrentState: function(){
      if($(this.opt.mainWrapper).offset().left > 0){
        this.counter(0);
        this.moveLeft('fast');
      }
    },
    dataSectionNames: function(){
      var that = this;
      $(this.opt.navigationWrapper).find('ul').each(function(){
        if( $(this).data('section-name') ) $(this).before('<h2>'+ $(this).data('section-name') + '</h2>');
      });
    },
    mobileCSS: function(){
      $(this.opt.navigationWrapper).find(this.opt.navigationInner).css({ 'width': this.navOffsetWidth+'px' });
    },
    desktopCSS: function(){
      $(this.opt.navigationWrapper).find(this.opt.navigationInner).css({ 'width': '100%' });
    }
  };

  window.responsiveNavigation = responsiveNavigation;

})();


