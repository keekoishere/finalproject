(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(t,e){if("function"==typeof define&&define.amd)define(["exports"],e);else if("undefined"!=typeof exports)e(exports);else{var s={};e(s),t.Hashids=s}}(this,function(t){"use strict";function h(t,e){for(var s=0;s<e.length;s++){var h=e[s];h.enumerable=h.enumerable||!1,h.configurable=!0,"value"in h&&(h.writable=!0),Object.defineProperty(t,h.key,h)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=function(){function u(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);var h,a,n="";this.escapeRegExp=function(t){return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")},this.parseInt=function(t,e){return/^(-|\+)?([0-9]+|Infinity)$/.test(t)?parseInt(t,e):NaN},this.seps="cfhistuCFHISTU",this.minLength=0<parseInt(e,10)?e:0,this.salt="string"==typeof t?t:"","string"==typeof s&&(this.alphabet=s);for(var r=0;r!==this.alphabet.length;r++)-1===n.indexOf(this.alphabet.charAt(r))&&(n+=this.alphabet.charAt(r));if(this.alphabet=n,this.alphabet.length<16)throw"error: alphabet must contain at least X unique characters".replace("X",16);if(-1!==this.alphabet.search(" "))throw"error: alphabet cannot contain spaces";for(var i=0;i!==this.seps.length;i++){var l=this.alphabet.indexOf(this.seps.charAt(i));-1===l?this.seps=this.seps.substr(0,i)+" "+this.seps.substr(i+1):this.alphabet=this.alphabet.substr(0,l)+" "+this.alphabet.substr(l+1)}this.alphabet=this.alphabet.replace(/ /g,""),this.seps=this.seps.replace(/ /g,""),this.seps=this._shuffle(this.seps,this.salt),(!this.seps.length||3.5<this.alphabet.length/this.seps.length)&&(h=Math.ceil(this.alphabet.length/3.5))>this.seps.length&&(a=h-this.seps.length,this.seps+=this.alphabet.substr(0,a),this.alphabet=this.alphabet.substr(a)),this.alphabet=this._shuffle(this.alphabet,this.salt);var p=Math.ceil(this.alphabet.length/12);this.alphabet.length<3?(this.guards=this.seps.substr(0,p),this.seps=this.seps.substr(p)):(this.guards=this.alphabet.substr(0,p),this.alphabet=this.alphabet.substr(p))}var t,e,s;return t=u,(e=[{key:"encode",value:function(){for(var t=arguments.length,e=new Array(t),s=0;s<t;s++)e[s]=arguments[s];if(!e.length)return"";if(e[0]&&e[0].constructor===Array&&!(e=e[0]).length)return"";for(var h=0;h!==e.length;h++)if(e[h]=this.parseInt(e[h],10),!(0<=e[h]))return"";return this._encode(e)}},{key:"decode",value:function(t){return t&&t.length&&"string"==typeof t?this._decode(t,this.alphabet):[]}},{key:"encodeHex",value:function(t){if(t=t.toString(),!/^[0-9a-fA-F]+$/.test(t))return"";for(var e=t.match(/[\w\W]{1,12}/g),s=0;s!==e.length;s++)e[s]=parseInt("1"+e[s],16);return this.encode.apply(this,e)}},{key:"decodeHex",value:function(t){for(var e=[],s=this.decode(t),h=0;h!==s.length;h++)e+=s[h].toString(16).substr(1);return e}},{key:"_encode",value:function(t){for(var e,s=this.alphabet,h=0,a=0;a!==t.length;a++)h+=t[a]%(a+100);for(var n=e=s.charAt(h%s.length),r=0;r!==t.length;r++){var i=t[r],l=n+this.salt+s;s=this._shuffle(s,l.substr(0,s.length));var p=this._toAlphabet(i,s);if(e+=p,r+1<t.length){var u=(i%=p.charCodeAt(0)+r)%this.seps.length;e+=this.seps.charAt(u)}}if(e.length<this.minLength){var o=(h+e[0].charCodeAt(0))%this.guards.length,f=this.guards[o];(e=f+e).length<this.minLength&&(o=(h+e[2].charCodeAt(0))%this.guards.length,e+=f=this.guards[o])}for(var c=parseInt(s.length/2,10);e.length<this.minLength;){var g=(e=(s=this._shuffle(s,s)).substr(c)+e+s.substr(0,c)).length-this.minLength;0<g&&(e=e.substr(g/2,this.minLength))}return e}},{key:"_decode",value:function(t,e){var s=[],h=0,a=new RegExp("[".concat(this.escapeRegExp(this.guards),"]"),"g"),n=t.replace(a," "),r=n.split(" ");if(3!==r.length&&2!==r.length||(h=1),void 0!==(n=r[h])[0]){var i=n[0];n=n.substr(1),a=new RegExp("[".concat(this.escapeRegExp(this.seps),"]"),"g"),r=(n=n.replace(a," ")).split(" ");for(var l=0;l!==r.length;l++){var p=r[l],u=i+this.salt+e;e=this._shuffle(e,u.substr(0,e.length)),s.push(this._fromAlphabet(p,e))}this.encode(s)!==t&&(s=[])}return s}},{key:"_shuffle",value:function(t,e){var s;if(!e.length)return t;for(var h=(t=t.split("")).length-1,a=0,n=0,r=0;0<h;h--,a++){a%=e.length,n+=s=e.charCodeAt(a);var i=t[r=(s+a+n)%h];t[r]=t[h],t[h]=i}return t=t.join("")}},{key:"_toAlphabet",value:function(t,e){for(var s="";s=e.charAt(t%e.length)+s,t=parseInt(t/e.length,10););return s}},{key:"_fromAlphabet",value:function(t,s){return t.split("").map(function(t){return s.indexOf(t)}).reduce(function(t,e){return t*s.length+e},0)}}])&&h(t.prototype,e),s&&h(t,s),u}();t.default=e});

},{}],2:[function(require,module,exports){
// getting csrf from cookie so ican attach to POST methods
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');

function csrfSafeMethod(method) {
    // these HTTP methods do not require CSRF protection
    return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}
$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});




$(document).ready(function()
{
  $('#q').typeahead({
    highlight: false,
    minLength: 1
  },
  {
    displayKey: function(suggestion) { return suggestion.artists + ' - ' + suggestion.track},
    limit: 30,
    source: search,
    templates: {
      suggestion: Handlebars.compile('<div>' + '<img src={{image}}>' + '{{artists}}'
       + '&emsp;' + '{{track}}' + ' (' + '{{album}}'+ ') ' + '   ' + '{{duration}}'  + '</div>')
    }
        
  });

  // when they select an option, show this with an image
 $('#q').bind('typeahead:select', function(ev, suggestion) {
    
  var d = new Date();
  const Hashids = require('hashids');
  
  var genurl = hashidsencode(musicinfo.uri + d.getTime());
  
    $.ajax({
      url: configuration['jsdemo']['ajax_view'],
      cache: false,
      type: "POST",
      data: {"musicinfo": suggestion, "genurl":genurl}, 
      success: function(data){

      },
      beforeSend: function(xhr, settings){
        xhr.setRequestHeader("X-CSRFToken", $.cookie('csrftoken'));
      }
    });

    document.getElementById("sugform").innerHTML += "<form action=\"{% url 'spotify:listento' genurl %}\" method='POST' id='sugform'>\
    <input type='text' name='urecd' placeholder='Who do you want to recommend this to?'>\
    <input type= 'text' name='msg' placeholder='Send him a message!'>\
    <input type='hidden' value='csrftoken'/>\
    <input type='hidden' name='musicinfo' id='musicinfo' value='suggestion'>\
    <button class='btn btn-primary' id='submit' onclick='submit()'> Recommend! </button> </form>"

  
function submit()
{
  var d = new Date();
  var Hashids = require('hashids');
  var hashids = new Hashids("this is what is up", 8, "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
  var genurl = hashidsencode(musicinfo.uri + d.getTime());
  
  $('#da').html("{% url 'spotify:listento' genurl %}");
}

  // need to format the url so I can embed for sample
  var embed = suggestion.embedurl
  var urlembed = embed.split(".com/")
  $('#displayrec').html('<iframe src=' + urlembed[0] + 
    ".com/embed/" + urlembed[1] + '"' + 'width="300" height="380" \
    frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>');

 
});
});


function search(query, syncResults, asyncResults)
{
    // Get places matching query (asynchronously)
    let parameters = {
        q: query
    };
    $.getJSON("/search", parameters, function(data, textStatus, jqXHR) {

        // Call typeahead's callback with search results (i.e., places)
        asyncResults(data);
    });
}







},{"hashids":1}]},{},[2]);
