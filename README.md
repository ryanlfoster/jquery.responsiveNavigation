**Demo**: [ngResponsiveNavigation](http://jsbin.com/atodeh/18/edit) - ** Do not forget to click first on "Run with JS" located on output window **

repsonsiveNavigation
==========================

This jQuery script creates navigation used for the mobile phones and tablets. When collapsing, navigation is animating from left to right, calculating current window width minus button width (very similar like on youtube mobile app).

## Usage ##

Default options:

```javascript
$(function(){
  responsiveNavigation.init({
    navPrefix: 'ng',
	  mainWrapper: '.content-wrapper',
	  navigationWrapper: '#ng-navigation',
	  navigationInner: '.ng-nav',
	  buttonMargin: 30
  });
});
```

## Options ##

* __navPrefix__ - prefix used for all selectors in this script
* __mainWrapper__ - main content area. Put here all the content of your web site
* __buttonMargin__ - margin used to separate button from collapsable navigation
* __<ul data-section-name="Section one">__ If you add section name in ul, it will automatically create h2 tag out of it

## Demos ##

* [repsonsiveNavigation](http://jsbin.com/atodeh/16/edit) - ** Do not forget to click first on "Run with JS" located on output window **

## Warning ##
If you are changing prefix and classes in html file, do not forget to change your CSS file!

## Author ##

Tomislav Matijević

