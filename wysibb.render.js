/**
 * Created with JetBrains WebStorm.
 * File: wysibb.render
 * User: daniloff
 * Date: 7/24/12 - 5:43 PM
 */

var wysibb = wysibb || {};

wysibb.render = function (bbtext, element) {
    "use strict";
    var currow, currowName, bbToHTML,
        html = bbtext,
        options = wysibb.options,
        smileLen = options.smileList.length,
        allBtn = options.allButtons;

    //check for skip body transform for bbcodes in skipBodyTransform
    if (options.skipBodyTransform && options.skipBodyTransform.length>0) {
        for (var i=0; i<options.skipBodyTransform.length; i++) {
            var trbb = options.skipBodyTransform[i];
            var xp = new RegExp('(\\['+trbb+'[\\s\\S]*?\\])([\\s\\S]*?)(\\[\\/'+trbb+'\\])',"mgi");
            html = html.replace(xp,function(l,pre,text,post) {
                text = text.replace(/\[/g,"&#91;")
                    .replace(/\]/g,"&#93;");
                return pre+text+post;
            });
        }
    }
    //check for smiles
    html = html.replace(/\</g,"&lt;");
    html = html.replace(/\>/g,"&gt;");
    for (var i=0; i< smileLen; i++) {
        var repl = options.smileList[i];
        repl.img = wysibb.helpers.wbbStringFormat(repl.img, options);
        var smbb = repl.bbcode;
        if (repl && repl.img) {
            smbb = smbb.replace(/([^a-z0-9])/gi,"\\$1");
            var bregexp = new RegExp(smbb,"mg");
            html = html.replace(bregexp,repl.img);
        }
    }
    for(currowName in allBtn) {
        if (allBtn.hasOwnProperty(currowName)) {
            currow = options.allButtons[currowName];
            if (!currow.type || currow.type !== "select") {
                wysibb.helpers.checkBBtoHTML(currow);
                bbToHTML = currow.bbToHTML;
                html = wysibb.helpers.replaceBBtoHTML(html, bbToHTML);
            } else {

            }
            html = wysibb.helpers.removeBreaks(html);
        }
        element.html(html);
    }

    //clear br's
    var resobj = $("<div>"+html+"</div>");
    resobj.find("ul > br,table > br, tr > br").each(function(idx,el) {
        $(el).remove();
    });

    return resobj.html();
}
