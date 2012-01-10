/**
 * @license
 * jQuery Bookmarklet - version 1.1
 * Originally written by: Brett Barros
 * With modifications by: Paul Irish
 * Modified again by: Lennart Borgman
 *   - Tried to avoid clobbering name space.
 *   - Avoid loading jQuery if already loaded.
 *   - Do not use $(), use jQuery() instead since this will be run in an unknown environment.
 *
 * If you use this script, please link back to the source.
 *
 * Copyright (c) 2010 Latent Motion (http://latentmotion.com/how-to-create-a-jquery-bookmarklet/)
 * Copyright (c) 2011 Lennart Borgman.
 *      Changed most of it, but kept the basic ideas.
 *
 * Released under the Creative Commons Attribution 3.0 Unported License,
 * as defined here: http://creativecommons.org/licenses/by/3.0/
 *
 * For a description of this particular bookmarklet see the .html-file
 * with the same name as this .js-file.
 */


(function () {

    ////////////////////////////////////////////////////////////
    // Instructions.
    //
    // myOptions and myBookmarklet are used to get things going. You
    // probably do not want to change those names. The function
    // myBookmarklet (which you must write) is called with no
    // arguments when jQuery and the files below have been loaded.
    //
    //
    // Utility functions from the bookmarklet framework you can use:
    //
    //     function hasNeededVersion (need_version, has_version)
    //       Check if a needed version of a library already is loaded.
    //       Version numbers must be in the format 1.2.3.4 etc.
    //     function isIE()
    //       Return true if browser is IE, otherwise false.
    //     function timeStamp (where)
    //       Writes elapsed time (ms) and WHERE to console.
    //
    // You can not use the name startTheBookmarklet(myOptions).
    //
    //
    // There is no need to namespace function names if they are
    // declared and run directly in this file since they are all local
    // here (everything is in an anonymous function here). But please
    // note that you must namespace things so they do ot clash with
    // the page you are on:
    // 
    // - Of course all global names must be namespaced. The solution
    //   is to not use any global names.
    //
    // - Event names must be namespaced (the way // jQuery does
    //   it).
    // 
    // - If you are using timers then all functions that are called in
    //   the timers must be name spaced.
    //
    // - For stylesheets you need namespaced ids and classes.
    //
    //
    // Below these instructions is your own space upto the marker
    // where the constant things begin. Enter whatever variables and
    // functions you want here. They will be locally defined. (But do
    // not forget to declare your variables. I you do they will have
    // global scope and possible disturb the web page where the
    // bookmarklet is used.)
    //
    // End of instructions etc.
    ////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////////////
    /// Start of Your bookmarklet space.
    ///
    /// Here You must:
    ///   - Set myNamespace.
    ///   - Set myURL. (Optional. Should be a comment.)
    ///   - Fill in myOptions.
    ///   - Write the function myBookmarklet.
    ///   - Follow the instructions for name spacing above.
    ///
    /// Here You can:
    ///   - Write as many functions as you want.
    ///   - Define as many variables as you like.
    /// (But be aware of "shadowing" of names.)

    var myNamespace = 'findword72789'; // For this bookmarklet, same as in .js file!
    // myURL='https://dl.dropbox.com/u/848981/it/cw/cw-cld.js';

    var myOptions = {
        // Note that you need full path names to files here!
        //
        // Enter the URL of CSS style files you want to load:
        css : [
            "https://dl.dropbox.com/u/848981/it/cw/cw.css"
        ],
        // Enter the URL of javascript files you want to load:
        js  : [
            "https://dl.dropbox.com/u/848981/it/jQuery.myPopupMenu.js"
        ],    
        // Enter jQuery info (note that you need to load via https):
        jqpath : "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",
        jquery : "1.7.1" // Min jQuery version number.
    };

    function myBookmarklet() {
        // Enter you code for the bookmarklet here! This function is
        // ran after all .css and .js files has been loaded (inclusive
        // jQuery).
        //
        // Note that jQuery.noConflict() may have been done so you can
        // not use $() but must use jQuery() instead.

    }

    ////////////////////////////////////////////////////////////
    /// End of Your bookmarklet space!
    ////////////////////////////////////////////////////////////////
    // Never change anything below this line! :-)
    ////////////////////////////////////////////////////////////////

    var lastTimeStamp;
    function timeStamp (where) {
        var thisTime = new Date().getTime();
        lastTimeStamp = lastTimeStamp || thisTime;
        var elapsed = thisTime - lastTimeStamp;
        where = where || "";
        if (where) where = " ("+where+")";
        if (console) console.log("TIMESTAMP elapsed (ms): "+elapsed+where);
    }

    function isIE() {
        // Detecting Internet Explorer More Effectively
        // http://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
        return navigator.appName == 'Microsoft Internet Explorer';
    }

    function hasNeededVersion (need_version, has_version) {
        if (console) console.log("hasNeededVersion ("+need_version+", "+has_version+")");
        if (!has_version) return false;
        if (!need_version) return true; // Since we have it.
        var need_p = need_version.split(".");
        var has_p = has_version.split(".");
        var need_len = need_p.length;
        var has_len = has_p.length;
        var minlen=Math.min(need_len, has_len);
        var maxlen=Math.min(need_len, has_len);
        for (var i=0; i<maxlen; i++) {
            if (i<minlen) {
                if (need_p[i]*1 > has_p[i]*1) {
                    return false;
                } if (need_p[i]*1 < has_p[i]*1) {
                    return true;
                }
            }
        }
        if (need_len > has_len) {
            return false;
        }
        return true;
    }

    startTheBookmarklet(myOptions);
    function startTheBookmarklet(a)
    {
        var myUniqId = "bookmarkletFramework26536"; // Let is store things in the window object.
        function loadRestOfMyScriptsThenStart(b)
        {
            if(b.length===0){
                // Give myBookmarklet an external name so we can call
                // it directly in the first bookmarklet part if this
                // file already have been loaded.
                myBookmarklet();
                window[myNamespace] = myBookmarklet;
                return false
            }
            var next = b[0];
            timeStamp("before getScript:("+next+")");
            var has_it = false;
            jQuery('script[type="text/javascript"]').each(
                function(){
                    var src = jQuery(this).attr("src");
                    if (next == src) has_it = true;
                });
            if (window[myUniqId]) {
                for (var i=0, len=window[myUniqId].length; i<len; i++) {
                    var src = window[myUniqId][i];
                    if (next == src) has_it = true;
                }
            }
            if (has_it) {
                loadRestOfMyScriptsThenStart(b.slice(1));
            } else {
                if (!window[myUniqId]) window[myUniqId] = [];
                window[myUniqId].push(next);
                jQuery.getScript(next,
                                 function(){ loadRestOfMyScriptsThenStart(b.slice(1))})
            }
        }
        function loadMyCssFiles(files)
        {
            timeStamp("before adding CSS files");
            jQuery.each(files,
                        function(idx,file){
                            var has_it = false;
                            jQuery('link[rel="stylesheet"]')
                                .each(function(){
                                    if (file == jQuery(this).attr("href")) has_it = true;
                                });
                            if (!has_it) {
                                jQuery("<link>").attr({href:file,rel:"stylesheet"}).appendTo("head");
                            }
                        })
                }
        function loadMyStylesAndScripts()
        {
            timeStamp("loadMyStylesAndScripts");
            loadMyCssFiles(a.css);
            loadRestOfMyScriptsThenStart(a.js)
        }

        function loadScript(url, callback){
            var script = document.createElement("script")
            script.type = "text/javascript";
            if (script.readyState){  //IE
                script.onreadystatechange = function(){
                    if (script.readyState == "loaded" ||
                        script.readyState == "complete"){
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {  //Others
                script.onload = function(){
                    callback();
                };
            }
            script.src = url;
            document.getElementsByTagName("head")[0].appendChild(script);
        }


        if (!(typeof myNamespace == "string" && 0 != myNamespace.length))
            throw "ERROR: myNamespace must be defined in Your part of the bookmarklet .js file!";
        if (console) console.log("myNamespace="+myNamespace);

        lastTimeStamp = undefined;
        timeStamp("\n\n=========== Starting ============================");
        var need_new_jq = true;
        var has_jq;
        if (typeof jQuery != "undefined") {
            has_jq = true;
            need_new_jq = !hasNeededVersion(a.jquery, jQuery().jquery);
        }
        if (need_new_jq) {
            timeStamp("Will load a new jQuery and run jQuery.noConflict() if needed.");
            loadScript(a.jqpath,
                       function() {
                           if (!has_jq) jQuery.noConflict();
                           loadMyStylesAndScripts();
                       });
        } else {
            loadMyStylesAndScripts();
        }
    };
})();

//// For Emacs, please don't remove.
// Local Variables:
// coding: utf-8
// End:
