/*! mr.js v1.00.00 | (c) 2016 unbios.com */

'use strict';

/* 

static persitent global vars * global functions 
server side events functions
client side events functions

*/

/*! jsTimezoneDetect - v1.0.5 - 2013-04-01 */
window.jstz=function(){var b=function(a){a=-a.getTimezoneOffset();return null!==a?a:0},c=function(){return b(new Date(2010,0,1,0,0,0,0))},f=function(){return b(new Date(2010,5,1,0,0,0,0))},e=function(){var a=c(),d=f(),b=c()-f();return new jstz.TimeZone(jstz.olson.timezones[0>b?a+",1":0<b?d+",1,s":a+",0"])};return{determine_timezone:function(){"undefined"!==typeof console&&console.log("jstz.determine_timezone() is deprecated and will be removed in an upcoming version. Please use jstz.determine() instead.");
return e()},determine:e,date_is_dst:function(a){var d=5<a.getMonth()?f():c(),a=b(a);return 0!==d-a}}}();jstz.TimeZone=function(b){var c=null,c=b;"undefined"!==typeof jstz.olson.ambiguity_list[c]&&function(){for(var b=jstz.olson.ambiguity_list[c],e=b.length,a=0,d=b[0];a<e;a+=1)if(d=b[a],jstz.date_is_dst(jstz.olson.dst_start_dates[d])){c=d;break}}();return{name:function(){return c}}};jstz.olson={};
jstz.olson.timezones={"-720,0":"Etc/GMT+12","-660,0":"Pacific/Pago_Pago","-600,1":"America/Adak","-600,0":"Pacific/Honolulu","-570,0":"Pacific/Marquesas","-540,0":"Pacific/Gambier","-540,1":"America/Anchorage","-480,1":"America/Los_Angeles","-480,0":"Pacific/Pitcairn","-420,0":"America/Phoenix","-420,1":"America/Denver","-360,0":"America/Guatemala","-360,1":"America/Chicago","-360,1,s":"Pacific/Easter","-300,0":"America/Bogota","-300,1":"America/New_York","-270,0":"America/Caracas","-240,1":"America/Halifax",
"-240,0":"America/Santo_Domingo","-240,1,s":"America/Asuncion","-210,1":"America/St_Johns","-180,1":"America/Godthab","-180,0":"America/Argentina/Buenos_Aires","-180,1,s":"America/Montevideo","-120,0":"America/Noronha","-120,1":"Etc/GMT+2","-60,1":"Atlantic/Azores","-60,0":"Atlantic/Cape_Verde","0,0":"Etc/UTC","0,1":"Europe/London","60,1":"Europe/Berlin","60,0":"Africa/Lagos","60,1,s":"Africa/Windhoek","120,1":"Asia/Beirut","120,0":"Africa/Johannesburg","180,1":"Europe/Moscow","180,0":"Asia/Baghdad",
"210,1":"Asia/Tehran","240,0":"Asia/Dubai","240,1":"Asia/Yerevan","270,0":"Asia/Kabul","300,1":"Asia/Yekaterinburg","300,0":"Asia/Karachi","330,0":"Asia/Kolkata","345,0":"Asia/Kathmandu","360,0":"Asia/Dhaka","360,1":"Asia/Omsk","390,0":"Asia/Rangoon","420,1":"Asia/Krasnoyarsk","420,0":"Asia/Jakarta","480,0":"Asia/Shanghai","480,1":"Asia/Irkutsk","525,0":"Australia/Eucla","525,1,s":"Australia/Eucla","540,1":"Asia/Yakutsk","540,0":"Asia/Tokyo","570,0":"Australia/Darwin","570,1,s":"Australia/Adelaide",
"600,0":"Australia/Brisbane","600,1":"Asia/Vladivostok","600,1,s":"Australia/Sydney","630,1,s":"Australia/Lord_Howe","660,1":"Asia/Kamchatka","660,0":"Pacific/Noumea","690,0":"Pacific/Norfolk","720,1,s":"Pacific/Auckland","720,0":"Pacific/Tarawa","765,1,s":"Pacific/Chatham","780,0":"Pacific/Tongatapu","780,1,s":"Pacific/Apia","840,0":"Pacific/Kiritimati"};
jstz.olson.dst_start_dates={"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"Atlantic/Stanley":new Date(2011,8,4,7,0,0,0),"America/Asuncion":new Date(2011,9,2,3,0,0,0),"America/Santiago":new Date(2011,9,9,3,0,0,0),"America/Campo_Grande":new Date(2011,9,16,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,
2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2011,2,13,2,0,0,0),"America/New_York":new Date(2011,2,13,7,0,0,0),"Asia/Gaza":new Date(2011,2,26,23,0,0,0),"Asia/Beirut":new Date(2011,2,27,1,0,0,0),"Europe/Minsk":new Date(2011,2,27,2,0,0,0),"Europe/Helsinki":new Date(2011,2,27,4,0,0,0),"Europe/Istanbul":new Date(2011,2,28,5,0,0,0),"Asia/Damascus":new Date(2011,3,1,2,0,0,0),"Asia/Jerusalem":new Date(2011,3,1,6,0,0,0),"Africa/Cairo":new Date(2010,3,30,4,0,0,
0),"Asia/Yerevan":new Date(2011,2,27,4,0,0,0),"Asia/Baku":new Date(2011,2,27,8,0,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"Pacific/Fiji":new Date(2010,11,29,23,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0)};
jstz.olson.ambiguity_list={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Asuncion":["Atlantic/Stanley","America/Asuncion","America/Santiago","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":"Asia/Gaza Asia/Beirut Europe/Minsk Europe/Helsinki Europe/Istanbul Asia/Damascus Asia/Jerusalem Africa/Cairo".split(" "),"Asia/Yerevan":["Asia/Yerevan","Asia/Baku"],"Pacific/Auckland":["Pacific/Auckland",
"Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"]};
  
window.isbrowser = {Useragent: function() {return navigator.userAgent;},Any: function() {return (isbrowser.Useragent() );}}
window.isplatform = {
    Android: function() {return navigator.userAgent.match(/Android/i) ? 'Android' : false;},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i) ? 'BlackBerry' : false;},
    iPhone: function() {return navigator.userAgent.match(/iPhone/i) ? 'iPhone' : false;},
    iPad: function() {return navigator.userAgent.match(/iPad/i) ? 'iPad' : false;},
    iPod: function() {return navigator.userAgent.match(/iPod/i) ? 'iPod' : false;},
    IEMobile: function() {return navigator.userAgent.match(/IEMobile/i) ? 'IEMobile' : false;},
    OS: function() {return navigator.platform;},
    Any: function() {return (isplatform.Android() || isplatform.BlackBerry() || isplatform.iPhone() || isplatform.iPad() || isplatform.iPod() || isplatform.IEMobile() || isplatform.OS() );}};

window.process = [];

window.menustate = 'home';
window.contactstate = 0;
window.overlaystate = 0;
window.scrollstate = 0;


function _process(ctype, cwho, cdata, cpath) {

  var data = '';
  var baseurl = window.location.protocol + "//" + (window.location.host + "/" + window.location.pathname).replace('//', '/') + '/';
  /* configured to allow for requests to different resources for load balance option * default * baseurl */
  console.log('using default baseurl :' + baseurl);
   
  switch (ctype) {

    case ('get'):
          getdata(baseurl + cpath, callrequest, 'url', cwho);
    break;
      
    case ('post'):
          switch (cwho) {
            case ('_contact'):   /* contact us widget */
                  postdata(baseurl + cpath, callrequest , 'url',  cdata , cwho);
            break;
          }
    break;
  }

  baseurl = null;
  callrequest(data);
  data = null;
}

function callrequest(data) {
   
  /* responce data || user messaged || error handling  */

  var datastr = data.split(':*:');

  if (datastr[0] !== '') {
  
  /*
  console.log('(status: post or get or error) -> ' + datastr[0]); // status: post or get or error
  console.log('(postfrom: who made request) -> ' + datastr[1]);   // postfrom: who made the post 
  console.log('this is the data in -->' + data);
  */

    switch (datastr[0]) {

      case ('get'):

           switch (true) {

            case (datastr[1] === '_kcode'):
                  /* now check for error bubbled, returned from process */
                  datastr[3] = trimquote(datastr[3]);
                  set_html_val('authenticity_token', datastr[3]);
                  console.log('update auth token: ' + datastr[3]);
 
            break;

            case ('error'):
                  console.log(datastr[1]);
                  console.log(datastr[2]);
                  console.log('unable to connect to unbios, please try later');
            break;
             
            }
            datastr = null;
      break;

      case ('post'):          
          /* post returned good (error not bubbled from post action) check postfrom */

           switch (true) {

            case (datastr[1] === '_contact'):
                  /* now check for error bubbled, returned from process */
                  datastr[3] = trimquote(datastr[3]);

                  if ( datastr[3] === 'correct_contact_send' ) {

                       statemsg('_contact', 'correct');

                       console.log('contact us process completed * correct');
                  
                  } else {

                       statemsg('_contact','error');

                       console.log('contact us process completed * error');
                  }            
            break;
                    
            }
            datastr = null;
      break;
   }
  }
  datastr = null;
}


/* client side events * functions */

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {

    // navmaincolor();
    // changeimg();
   
  }
}


window.onload = function() {

  /* onload */

  /* gifcntrl('load'); // or start * browser implementation */

  /* var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; */
  /* var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; */

  // imgload("/vid/background_spaceman.png");

  console.log('test');

  switch (true) {

      case (document.documentElement.scrollTop > 740 || document.body.scrollTop > 740 ):
            /* console.log('white the header'); */
            clear_css_class('main-nav', 'home');
            add_css_class('main-nav', 'dark');
            scrollstate = 2;
      break;

      case (document.documentElement.scrollTop > 150 || document.body.scrollTop > 150):
            /* console.log('darken the header'); */
            clear_css_class('main-nav', 'home');
            add_css_class('main-nav', 'light');
            scrollstate = 1;
      break;

      case (document.documentElement.scrollTop < 150 || document.body.scrollTop < 150 ):
            /* console.log('lighten the header'); */
            clear_css_class('main-nav', 'home');
            scrollstate = 0;
      break;

  }
}


function changeimg() {
  var totalCount = 3;
  var num = Math.ceil( Math.random() * totalCount );
  var ext = 'jpg';
  if (isodd(num)) {ext = 'gif';} else {ext = 'jpg';}
  // console.log('number image : ' + num + '.' + ext);
  document.getElementsByTagName("body")[0].style.backgroundImage = 'url(img/background/'+num+'.'+ext+')';
  document.body.style.backgroundSize="cover";
  document.body.style.backgroundRepeat="fixed";
}


function isodd(num) { return num % 2;}
  
// window.onscroll = function() { navmaincolor() };

function navmaincolor() {

  console.log(document.body.scrollTop);
  console.log(document.documentElement.scrollTop);
/*
  if (document.documentElement.scrollTop !== 0 || document.body.scrollTop !== 0 ) { 

      switch (true) {
        case (visible_css_class('homepage')):
        case (visible_css_id('findmore')):
              //gifcntrl('stop'); imgcntrl('color'); 
        break;
      }
  
  } else { 

     switch (true) {
        case (visible_css_class('homepage')):
        case (visible_css_id('findmore')):
              //gifcntrl('start');imgcntrl('uncolor'); 
        break;
     }
  }
  */
  
  if ( !( visible_css_class('visible') || visible_css_class('about') || visible_css_class('contact') || visible_css_class('privacy') || visible_css_class('terms')  ) ) { 

    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var sevenforty = 0;
    var onefifty = 0;

    console.log('width : ' + width);

    switch (true) {

      case (width <= 355):    /* 320x480 */
            onefifty = 80;    /* 150 - 99px approx */
            sevenforty = 580; /* 740 adjusted for small screen */
      break; 

      case (width > 320):    /* 320x480 */
            onefifty = 80;    /* 150 - 99px approx */
            sevenforty = 673; /* 740 adjusted for small screen */
      break; 

      case (width === 360):   /* 360x640 */
            onefifty = 80;    /* 150 - 99px approx */
            sevenforty = 666; /* 740 adjusted for small screen */
      break;

      default:
            onefifty = 150;   /* 150 default */
            sevenforty = 740; /* 740 default */
    }

    switch (true) {


      case (document.documentElement.scrollTop > 1000 || document.body.scrollTop > 1000):
 
      break;

      case (document.documentElement.scrollTop > sevenforty || document.body.scrollTop > sevenforty ):
            console.log('white the header');
            clear_css_class('main-nav', 'home');
            //add_css_class('main-nav', 'light');
            add_css_class('main-nav', 'dark');
            scrollstate = 2;
      break;

      case (document.documentElement.scrollTop > onefifty || document.body.scrollTop > onefifty):
            console.log('darken the header');
            clear_css_class('main-nav', 'home');
            //add_css_class('main-nav', 'light');
            add_css_class('main-nav', 'dark');
            scrollstate = 1;
      break;

      case (document.documentElement.scrollTop < onefifty || document.body.scrollTop < onefifty ):
            console.log('lighten the header');
            clear_css_class('main-nav', 'home'); 
 
            scrollstate = 0;
      break;

    } 
    width = null; sevenforty = null; onefifty = null;   
  }
}

/*
ref : http://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation

scrollTo:
e = element to scroll to or top position in pixels
d = time to scroll in ms

scrollToX:
e = scrollable element
a = initiall scrollable element position (from)
b = height to scroll to (to)
t = lerp from a to b (0 - 1)
v = speed. input 1 / time to scroll
s = repeat every 's' miliseconds
*/

function scrollTo(e,d){if(d>=0){var h=document.documentElement;if(h.scrollTop===0){var t=h.scrollTop;++h.scrollTop;h=t+1===h.scrollTop--?h:document.body}typeof e==="object"&&(e=e.offsetTop);scrollToX(h,h.scrollTop,e,0,1/d,20)}}function scrollToX(e,a,b,t,v,s){function F(){var k='';t<0||t>1||v<=0||(k=t-1,e.scrollTop=a-(a-b)*(k*k*k+1),t+=v*s,setTimeout(F,s))} F() }


document.onmouseover = function mouseover(event) {

 var elem = (event.target) ? event.target : event.srcElement;

 try { var tagclass = elem.className.split(" ")[0]; } catch(e) { var tagclass = null; }
 var tagid = elem.id;

 var tagclass = elem.className.split(" ")[0];

 switch(true) {

  case (tagid === 'hometoday'):
        elem.setAttribute('src', '/img/today-48-blank.png');
  break;

 }

}

document.onmouseout = function mouseover(event) {

 var elem = (event.target) ? event.target : event.srcElement;

 try { var tagclass = elem.className.split(" ")[0]; } catch(e) { var tagclass = null; }
 var tagid = elem.id;

 var tagclass = elem.className.split(" ")[0];

 switch(true) {

  case (tagid === 'hometoday'):
        elem.setAttribute('src', '/img/today-48.png');
  break;


 }

}

document.onkeyup = function keyPress(event) {

  console.log('onkeyup contactstate : ' + contactstate);

  switch (true) {

    case ( contactstate === 1 ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('contact_name'):
        case ('contact_email'):
        case ('contact_subject'):
        case ('contact_message'):
              validate('contact');
        break;
      }
    }

    break;

  }
}

document.onchange = function onChange(event) {

  console.log('onchange contactstate : ' + contactstate);

  switch (true) {

    case ( contactstate === 1 ):

    var tagid = event.target.id;
    if (tagid) {

      switch (tagid) {

        case ('contact_name'):
        case ('contact_email'):
        case ('contact_subject'):
        case ('contact_message'):
              validate('contact');
        break;
      }
    }
    break;

  }
}

document.onclick = function keyClick(event) {

  var elem = (event.target) ? event.target : event.srcElement;
 
  try { var tagclass = elem.className.split(" ")[0]; } catch(e) { var tagclass = null; }
  var tagid = elem.id;

  var tagclass = elem.className.split(" ")[0];
  var tagtype = elem.tagName.toLowerCase();

  console.log(tagid);
  console.log(tagclass);
  /*console.log(tagtype);*/

/* howmain * main menu */

  // timtoggle('resume');
  // clear_css_class('footer','open');
  // timtoggle('toggle');


  switch (true) {

/* menu items */

   case (tagclass === 'logo'):
   case (tagclass === 'navbar-brand'):
         timtoggle('toggle');
   case (tagclass === 'homenav'):
   case (tagid === 'homenav'):
   case (tagclass === 'homespace'):
   case (tagid === 'home'):
         if (overlaystate === 1) { navtoggle();}
         selectmenu('home');
         scrollTo(0, 700);
   break;

   case (tagclass === 'how'):
         timtoggle('resume');
   case (tagclass === 'aboutnav'):
   case (tagid === 'aboutnav'):
   case (tagclass === 'aboutspace'):
   case (tagid === 'about'):
         if (overlaystate === 1) { navtoggle();}
         selectmenu('about');
         scrollTo(0, 700);
   break;

   case (tagclass === 'blognav'):
   case (tagid === 'blognav'):
   case (tagid === 'blog'):
   case (tagclass === 'blogspace'):
   case (tagclass === 'blog'):
   case (tagid === 'blog'):
         if (overlaystate === 1) { navtoggle();}
         selectmenu('blog');
         scrollTo(0, 700);
   break;

   case (tagclass === 'termsandprivacy'):
         selectmenu('termsprivacy');
         scrollTo(0, 700);
   break;

   case (tagclass === 'contactnav'):
   case (tagid === 'contactnav'):
   case (tagclass === 'contactspace'):
   case (tagclass === 'getintouch'):    
   case (tagid === 'contact'):
         if (overlaystate === 1) { navtoggle();}
         scrollTo(0, 700);
         selectmenu('contact');
         timtoggle('resume');
         /*clear_css_class('footer','open');
         setTimeout( function() {  clear_css_class('footer',''); } , 2500 ); */
   break;

   case (tagclass === 'open'):
   case (tagclass === 'footxt'):
          /* setTimeout( function() {  clear_css_class('footer',''); } , 2500 ); */
   break;


/* hamburger */

   case (tagid === 'body'):
   case (tagid === 'menu'):
   case (tagid === 'wrapper'):
   case (tagid === 'main-nav'):
   case (tagid === 'overlay'):
   case (tagid === 'nav-toggle'):
   case (tagclass === 'mobile-menu-trigger'):

/* extended hamburger */

   case (tagclass === 'figure__caption'):
   case (tagclass === 'caption__inner'):

   case (tagclass === 'talk'):
   case (tagclass === 'homekey'):

   case (tagid === '' && tagclass === ''):
         if ( contactstate !== 1 ) { gifcntrl('toggle'); }
         navtoggle();
   break;

/* contact us we can help */

    case (tagid === 'mail-widget'):
    case (tagclass === 'title-bar'):
    case (tagclass === 'title-text'):
    case (tagclass === 'online-dot'):
    case (tagclass === 'title-click'):
    case (tagclass === 'controls'):
          contoggle();
    break;

    case (tagclass === 'contactclose'):
    case (tagid === 'sendclose'):
          clearcontent();
          quitclose();
    break;

/* summary service buttons * unable * pre-post */

    case (tagid === 'contact_name'):
    case (tagid === 'contact_email'):
    case (tagid === 'contact_subject'):
          if ( visible_css_class('buttonprocess') ) {
             document.getElementById("contact_name").blur();
             document.getElementById("contact_email").blur();
             document.getElementById("contact_subject").blur();
          }
    break;

/* contact us, we can help message widget  */

    case (tagid === 'contact_message'):
          if ( visible_css_class('buttonprocess') ) {
              document.getElementById("contact_message").blur();
          } else {
              validate('contact');
          }
    break;

    case (tagid === 'contact_submit'):

          if ( validate('contact')) {
               process['_contact'] = '_contact' + '=' + base64_encode( 'contact' ) + ':'
               + encrypt( document.getElementById("contact_name").value ) + ':'
               + encrypt((document.getElementById("contact_email").value).toLowerCase()) + ':'
               + base64_encode( document.getElementById("contact_subject").value ) + ':'
               + encrypt( document.getElementById("contact_message").value ) + ':'
               + base64_encode(un.vi) + ':' 
               + base64_encode(isplatform.Any()) + ':' 
               + base64_encode(isbrowser.Any()) + ':' 
               + base64_encode(istimezone()) + ':'
               + base64_encode( document.getElementById("authenticity_token").value );

               _process('post', '_contact', process['_contact'] ,'callin');

               stateprocess('_contact','set');

               console.log('send process completed!');
          
          } else {

               console.log('send process problem!');
          }

    break;

    case (tagclass === 'copyright'):
          window.open("http://www.unbios.com");
    break;

  }

  elem = null;tagclass = null;tagid = null;tagclass = null;tagtype = null;

}

function unscroll(state) {

  switch (state) {
    case ('start'):
          clear_css_class('body','unscroll');
    break;
    case ('stop'):
          setTimeout( function() { clear_css_class('body',''); } , 500 );
    break;
  }
}


function clearwidget(widget) {

  switch (widget) {

    case ('contact'):

          document.getElementById(widget + '_name').value = '';
          document.getElementById(widget + '_email').value = '';
          document.getElementById(widget + '_subject').selectedIndex = 'selectsubject';
          document.getElementById(widget + '_message').value = '';
    break;

  }
}

function selectmenu(menu) {

  clear_css_class('home','menu'); 
  clear_css_class('about','menu');
  clear_css_class('blog','menu');
  clear_css_class('contact','menu');
  clear_css_class(menu,'menu-select');

  document.getElementsByTagName("body")[0].removeAttribute("style");

  switch (menu) {

    case ('home'):
          
           switch (un.cs[0]) {

            case (0):
                 clear_css_class('body','stopcolor');
                 clear_css_class('main-nav', 'stopcolor');
                 clear_css_class('contact_submit', 'stopcolor');
            break;
            case (1):
                 clear_css_class('body','readycolor');
                 clear_css_class('main-nav', 'readycolor');
                 clear_css_class('contact_submit', 'readycolor');
            break;
            case (2):
                 clear_css_class('body','gocolor');
                 clear_css_class('main-nav', 'gocolor');
                 clear_css_class('contact_submit', 'gocolor');
            break;
            case (3):
                 clear_css_class('body','pausecolor');
                 clear_css_class('main-nav', 'pausecolor');
                 clear_css_class('contact_submit', 'pausecolor');
            break;

          }

          set_css_class('home','display','block');
          set_css_class('about','display','none');
          set_css_class('blog','display','none');
          set_css_class('contact','display','none');
          set_css_class('termsprivacy','display','none');
     
          menustate = 'home';
          gifcntrl('start');
    break;

    case ('about'):

           switch (un.cs[0]) {

            case (0):
                 clear_css_class('body','stopcolor');
                 clear_css_class('main-nav', 'stopcolor');
                 clear_css_class('contact_submit', 'stopcolor');
            break;
            case (1):
                 clear_css_class('body','readycolor');
                 clear_css_class('main-nav', 'readycolor');
                 clear_css_class('contact_submit', 'readycolor');
            break;
            case (2):
                 clear_css_class('body','gocolor');
                 clear_css_class('main-nav', 'gocolor');
                 clear_css_class('contact_submit', 'gocolor');
            break;
            case (3):
                 clear_css_class('body','pausecolor');
                 clear_css_class('main-nav', 'pausecolor');
                 clear_css_class('contact_submit', 'pausecolor');
            break;

          }
  
          set_css_class('home','display','none');
          set_css_class('about','display','block');
          set_css_class('blog','display','none');
          set_css_class('contact','display','none');
          set_css_class('termsprivacy','display','none');
    
          gifcntrl('stop');
          menustate = 'about';
          scrollstate = 1;
    break;

    case ('blog'):

          switch (un.cs[0]) {

            case (0):
                 clear_css_class('body','stopcolor');
                 clear_css_class('main-nav', 'stopcolor');
                 clear_css_class('contact_submit', 'stopcolor');
            break;
            case (1):
                 clear_css_class('body','readycolor');
                 clear_css_class('main-nav', 'readycolor');
                 clear_css_class('contact_submit', 'readycolor');
            break;
            case (2):
                 clear_css_class('body','gocolor');
                 clear_css_class('main-nav', 'gocolor');
                 clear_css_class('contact_submit', 'gocolor');
            break;
            case (3):
                 clear_css_class('body','pausecolor');
                 clear_css_class('main-nav', 'pausecolor');
                 clear_css_class('contact_submit', 'pausecolor');
            break;

          }

          set_css_class('home','display','none');
          set_css_class('about','display','none');
          set_css_class('blog','display','block');
          set_css_class('contact','display','none');
          set_css_class('termsprivacy','display','none');
    
          gifcntrl('stop');
          menustate = 'blog';
          scrollstate = 1;
    break;

    case ('contact'):

          switch (un.cs[0]) {

            case (0):
                 clear_css_class('body','stopcolor');
                 clear_css_class('main-nav', 'stopcolor');
                 clear_css_class('contact_submit', 'stopcolor');
            break;
            case (1):
                 clear_css_class('body','readycolor');
                 clear_css_class('main-nav', 'readycolor');
                 clear_css_class('contact_submit', 'readycolor');
            break;
            case (2):
                 clear_css_class('body','gocolor');
                 clear_css_class('main-nav', 'gocolor');
                 clear_css_class('contact_submit', 'gocolor');
            break;
            case (3):
                 clear_css_class('body','pausecolor');
                 clear_css_class('main-nav', 'pausecolor');
                 clear_css_class('contact_submit', 'pausecolor');
            break;

          }

          set_css_class('home','display','none');
          set_css_class('about','display','none');
          set_css_class('approach','display','none');
          set_css_class('blog','display','none');
          set_css_class('contact','display','block');
          set_css_class('termsprivacy','display','none');

          gifcntrl('stop');
          menustate = 'contact';
          scrollstate = 1;
    break;

    case ('termsprivacy'):

          switch (un.cs[0]) {

            case (0):
                 clear_css_class('body','stopcolor');
                 clear_css_class('main-nav', 'stopcolor');
                 clear_css_class('contact_submit', 'stopcolor');
            break;
            case (1):
                 clear_css_class('body','readycolor');
                 clear_css_class('main-nav', 'readycolor');
                 clear_css_class('contact_submit', 'readycolor');
            break;
            case (2):
                 clear_css_class('body','gocolor');
                 clear_css_class('main-nav', 'gocolor');
                 clear_css_class('contact_submit', 'gocolor');
            break;
            case (3):
                 clear_css_class('body','pausecolor');
                 clear_css_class('main-nav', 'pausecolor');
                 clear_css_class('contact_submit', 'pausecolor');
            break;

          }

          set_css_class('home','display','none');
          set_css_class('about','display','none');
          set_css_class('blog','display','none');
          set_css_class('contact','display','none');
          set_css_class('termsprivacy','display','block');

          gifcntrl('stop');
          menustate = 'termsandprivacy';
          scrollstate = 1;
    break;

  }

}

function validate(widget) {

  /* basic : name, postcode, email, select, message validate  */

  var valchk = 0;

  switch (widget) {

    case ('contact'):

          if ( isvalid( document.getElementById(widget + '_name').value ) === false ) { clear_css_class(widget + '_name', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_name', 'mail');valchk = valchk + 1;}
          if ( isemail( document.getElementById(widget + '_email').value ) === false ) { clear_css_class(widget + '_email', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_email', 'mail');valchk = valchk + 1;}
          if ( isselect( document.getElementById(widget + '_subject')) === false )  { clear_css_class(widget + '_subject', 'mail_un');valchk = valchk - 1;} else { clear_css_class(widget + '_subject', 'mail');valchk = valchk + 1;} 
          if ( isvalid( document.getElementById(widget + '_message').value) === false ) { clear_css_class(widget + '_message', 'mail_message_un');valchk = valchk - 1;} else { clear_css_class(widget + '_message', 'mail_message');valchk = valchk + 1;} 
              
          console.log('valchk : ' + valchk);

          if (valchk === 4) {ustop(); clear_css_class('contact_submit','buttonfillmenu'); return true;} else {clear_css_class('contact_submit','buttonunable'); return false;}
              
          valchk = null;
     
    break;

  }  
}


function isvalid(html) {

  /* html === document.getElementById('comments').value */

  if (html === null || html === "") { return false; }

  var unchars = "!@#$%^&*()+=-[]\\\';/{}|\":<>?";

  for (var i = 0; i < html.length; i++) {
    if (unchars.indexOf( html.charAt(i)) != -1 ) {
    /* alert ("Your username has special characters. \nThese are not allowed.\n Please remove them and try again."); */
    return false;
    unchars = null;
    }
  }
}

function isvalidaddress(html) {

  /* html === document.getElementById('comments').value */

  if (html === null || html === "") { return false; }

  var unchars = "!@#$%^&*()+=-[]\\\';/{}|\":<>?";

  for (var i = 0; i < html.length; i++) {
    if (unchars.indexOf( html.charAt(i)) != -1 ) {
    /* alert ("Your username has special characters. \nThese are not allowed.\n Please remove them and try again."); */
    return false;
    unchars = null;
    }
  }

  if ( html.length < 15 ) { return false; }

}

function isvalidzero(html) {

  /* html === document.getElementById('comments').value */

  var unchars = "!@#$%^&*()+=-[]\\\';/{}|\":<>?";

  for (var i = 0; i < html.length; i++) {
    if (unchars.indexOf( html.charAt(i)) != -1 ) {
    /* alert ("Your username has special characters. \nThese are not allowed.\n Please remove them and try again."); */
    return false;
    unchars = null;
    }
  }
}

function isvalidpromo(html) {

  /* html === document.getElementById('comments').value */

  var unchars = "!@#$%^&*()+=-[]\\\';/{}|\":<>?";

  for (var i = 0; i < html.length; i++) {
    if (unchars.indexOf( html.charAt(i)) != -1 ) {
    /* alert ("Your username has special characters. \nThese are not allowed.\n Please remove them and try again."); */
    return false;
    unchars = null;
    }
  }

  switch (true) {

    case (html.length === 0):
    case (html.length < 5 ):
          return true;
    break;
    case (html.length > 5 ):
          return false;
    break;
  }
}


function isnumber(number) {

  if (number === null || number === "" ) { return false; }

   var regex=/^[0-9]+$/;
    if (number.match(regex) || ( number.replace(/\s/g,'').length > 8 )) {
        return true;
    } else {
        return false;
    }
}


function iszip(postcode) {

  if (postcode === null || postcode === "") { return false; }
  postcode = postcode.replace(/\s/g, "");
  var regex = /^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i;
  return regex.test(postcode);

}


function isemail(email) {

  var hasError = false;
  var emReg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
  switch (true) {
    case (!email):
          console.log('we are here ... !em');
          hasError = true;
    break;
    case (!emReg.test(email)):
          hasError = true;
    break;
  }
  if (!hasError) {
      emReg, hasError = null;   
      console.log('we are here ... !hasError true');
      return true;
  } else {
      console.log('we are here ... !hasError false');
      return false;
  }
}


function isselect(selector) {

  var selectedvalue = selector.options[selector.selectedIndex].value;
  if (selectedvalue === "selectsubject") {
      selectedvalue = null;
      return false;
  }
}

function istimezone() {
  var tz = jstz.determine(); var response_text = '';
  if (typeof (tz) === 'undefined') {
      response_text = 'No timezone found';
  } else {
      response_text = tz.name(); 
  }
  return response_text;
  tz = null; response_text = null;
}

function checkzip() {
 
  var el = document.getElementById('zipcheck_zip');

  switch (true) {

    case (el.value.toUpperCase().indexOf('SW18') !== -1):
          console.log('return 2');
          return 2;
    break

    default:
          console.log('return 1');
          return 1;
  }

  el = null;

}

function stripnotes(msg) {
  
  msg = msg.replace(/<br>/gi, "\n");
  msg = msg.replace(/\s+$/, '');
  return msg;

}

function stateprocess(who,action) {

 /* feedback to inform that the action is being processed */

  switch (who) {


    case ('_contact'):

      if (action === 'set') {

          clear_css_class('contact_name', 'mail_grey');
          clear_css_class('contact_email', 'mail_grey');
          clear_css_class('contact_subject', 'mail_grey');
          clear_css_class('contact_message', 'mail_message_grey');
     
          set_css_id('contact_submit', 'display', 'none');
          set_css_id('contact_process', 'display', 'block');

      } else {

          clear_css_class('contact_name', 'mail');
          clear_css_class('contact_email', 'mail');
          clear_css_class('contact_subject', 'mail');
          clear_css_class('contact_message', 'mail_message');

          set_css_id('contact_process', 'display', 'none');
          set_css_id('contact_submit', 'display', 'block');

      }

    break;

  }
}


function statemsg(who,state) {

  switch (who) {

    case ('_contact'):

      if (state === 'error') {
          add_css_class('openModal', 'darkmodal');
          set_css_class('summaryfail', 'display', 'block');
      } else {
          add_css_class('openModal', 'darkmodal');
          set_html_id('sendmail', '' + (document.getElementById("contact_email").value) + '' );
          set_css_class('contactsendmsg', 'display', 'block');
      }

      contactclose();
      stateprocess('_contact','unset');
      clearwidget('contact');

      console.log('we are in statemsg, close this dialog ... then display either success dialog or fail dialog!');

    break;

  }
}

function contactclose() {

  /* maybe settimeout * input data * process message * close dialog * <- no delay between -> * display message */
  add_css_class('mail-widget', 'closed');add_css_class('widget-state', 'closed');clear_css_class('online-dot', 'online-dot'); add_css_class('online-dot', 'animateflicker');contactstate = 0;

}

function clearcontent() {

  document.getElementById("sendmail").value = '';
 
}

function quitclose() {

  clear_css_class('openModal', 'modalDialog'); 
  set_css_class('contactsendmsg', 'display', 'none');

}

function randomnumber(min, max) {

  /* ref: http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range */
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function colorswitch() {

  console.log('color number : ' + un.cs[0])

  switch (un.cs[0]) {
    case (0):
          console.log('default color 0 yeah!');
          clear_css_class('body','stopcolorease');
          clear_css_class('main-nav', 'stopcolorease');
          un.cs[0] = un.cs[0] + 1;
    break;
    case (1):
          console.log('default color 1 yeah!');
          clear_css_class('body','readycolorease');
          clear_css_class('main-nav', 'readycolorease');
          un.cs[0] = un.cs[0] + 1;
    break;
    case (2):
          console.log('default color 2 yeah!');
          clear_css_class('body','gocolorease');
          clear_css_class('main-nav', 'gocolorease');
          un.cs[0] = un.cs[0] + 1;
    break;
    case (3):
          console.log('default color 3 yeah!');
          clear_css_class('body','pausecolorease');
          clear_css_class('main-nav', 'pausecolorease');
          un.cs[0] = 0;
    break;

  }

  ll = 0;  
}

function wordswitch() {

  switch (un.ws[0]) {
    case (0):
         console.log('default words 0 yeah!');
         set_html_id('code','Tech');
         un.ws[0] = un.ws[0] + 1; 
    break;
    case (1):
         console.log('default words 1 yeah!');
         set_html_id('code','Code');
         un.ws[0] = un.ws[0] + 1; 
    break;
    case (2):
         console.log('default words 2 yeah!');
         set_html_id('code','Tech');
         un.ws[0] = un.ws[0] + 1; 
    break;
    case (3):
         console.log('default words 3 yeah!');
         un.ws[0] = 0;
         set_html_id('code','Code');
    break;

  }
 
}

function contoggle() {

console.log('contactstate : ' + contactstate);

  if (contactstate === 0) {
      clear_css_class('mail-widget', 'chatlio-widget');
      clear_css_class('widget-state', 'controls');
      set_css_id('contact_name', 'focus', 'focus');
      clear_css_class('online-dot', 'online-dot');

      selectmenu(menustate);

      gifcntrl('stop');
      timtoggle('pause');

      contactstate = 1;
  } else { 
      add_css_class('mail-widget', 'closed');
      add_css_class('widget-state', 'closed');
      clear_css_class('online-dot', 'online-dot');
      clear_css_class('contact_name', 'mail');
      clear_css_class('contact_email', 'mail');
      clear_css_class('contact_subject', 'mail');
      clear_css_class('contact_message', 'mail_message');
      document.getElementById('contact_subject').selectedIndex = '0';
      add_css_class('online-dot', 'animateflicker');

      gifcntrl('start'); 
      timtoggle('resume');

      contactstate = 0;
  }
}


function navtoggle() {

console.log('overlay state : ' + overlaystate);

  document.getElementsByTagName("body")[0].removeAttribute("style");

  if (overlaystate === 0) {

      clear_css_class('main-nav', 'stopcolorease');
      clear_css_class('contact_submit', 'stopcolorease');

      clear_css_class('nav-toggle','darker');
      clear_css_class('body','stopcolor');

      add_css_class('overlay', 'visible');
      add_css_class('main-nav', 'overlay-visible');
      add_css_class('title-bar', 'dark');
   
      gifcntrl('toggle');

      /* reset default color set */
      un.cs[0] = 0;
    
      /* upause(); */

      console.log('color number : ' + un.cs[0]);

      overlaystate = 1;

  } else {


      clear_css_class('overlay', 'overlay');
      clear_css_class('nav-toggle','');
      
      clear_css_class('main-nav', 'stopcolor');
      clear_css_class('title-bar', 'title-bar');
 
      gifcntrl('toggle');
   
      overlaystate = 0;

    switch (true) {

      case (scrollstate === 0):
            clear_css_class('main-nav', 'home');
      break;
      case (scrollstate === 1):
            //add_css_class('main-nav', 'light');
      break;
      case (scrollstate === 2):
            add_css_class('main-nav', 'dark');
      break;
    }
  }
}

function timtoggle(ctrl) {

  switch(ctrl) {

    case ('stop'):
          ustop();
    break;

    case ('pause'):
          switch (true) {
     
            case (un.ts[0] === 0):
                  upause();
            break;

          }

    break;

    case ('resume'):
          switch (true) {
    
            case (typeof un.ts[0] === 'undefined'):
                  ustart();
            break;
    
            case (un.ts[0] === 1):
                  uresume();
            break;

          }

    break;

    case ('toggle'):

          switch (true) {
    
            case (typeof un.ts[0] === 'undefined'):
                  ustart();
            break;
    
            case (un.ts[0] === 1):
                  uresume();
            break;
          
            case (un.ts[0] === 0):
                  upause();
            break;

          }

    break;

  }
}

function gifcntrl(state) {

  switch (state) {

    case ('start'):
          // clear_css_class('jumbo', 'jumbotron'); 
    break;

    case ('stop'):
          // imgload("/vid/background_spaceman.png");
          // clear_css_class('jumbo', 'jumbotroff');
    break;

    case ('toggle'):

    break;
    
  }
}

function imgcntrl(state) {

  if (visible_css_id('findmore')) {

    switch (state) {

      case ('uncolor'):
           clear_css_class('imgmore', 'greyscale');     
      break;

      case ('color'):
           clear_css_class('imgmore', 'imgscale');    
      break;

    }
  }
}
                                           
//console.log('\n\n\n\n .d8888b.  888                       888\nd88P  Y88b 888                       888\nY88b.      888                       888    This is a browser feature intended for \n "Y888b.   888888  .d88b.  88888b.   888    developers. Ok so I borrowed this message\n    "Y88b. 888    d88""88b 888 "88b  888    from a popular social media site, other sites  \n      "888 888    888  888 888  888  Y8P    also seems to be disabling this browser feature \nY88b  d88P Y88b.  Y88..88P 888 d88P         to try and prevent Self-XSS scams!  \n "Y8888P"   "Y888  "Y88P"  88888P"   888    \n                           888      \n                           888              \n                           888              \n\nSee https://en.wikipedia.org/wiki/Self-XSS for more information.\n\n')
//window.console.log = function(){
//console.error('The developer console is temporarily disabled; contact me at http://unbios.com for more information.');window.console.log = function() {return false;}}

/* console.log('trigger disable message'); */
