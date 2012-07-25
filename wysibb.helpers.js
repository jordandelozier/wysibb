/**
 * Created with JetBrains WebStorm.
 * File: wysibb.helpers
 * User: daniloff
 * Date: 7/24/12 - 5:56 PM
 */

/*global $:true*/

var wysibb = wysibb || {};

wysibb.helpers = {
    bbReplace: function (str, regexp, repl) {
        "use strict";
        while (str.match(regexp)) {
            str = str.replace(regexp, repl);
        }
        return str;
    },
    wbbStringFormat: function (template, data) {
        "use strict";
        var innerFunc = function (str, key) {
            var keys = key.split("."),
                value = data[keys.shift()];
            $.each(keys, function () { value = value[this]; });
            return (value === null || value === undefined) ? "" : value;
        };
        return template.replace(/\{([\w\.]*)\}/g, innerFunc);
    },
    checkBBtoHTML: function (obj) {
        "use strict";
        var bbkey, bbrepl, bbToHTML = obj.bbToHTML;
        if (!bbToHTML || bbToHTML.isEmpty()) {
            bbToHTML = {};
            bbkey = obj.bbOpen + "(.*?)" + obj.bbClose;
            bbrepl = obj.htmlOpen + "$1" + obj.htmlClose;
            bbToHTML[bbkey] = bbrepl;
            obj.bbToHTML = bbToHTML;
        }
    },
    replaceBBtoHTML: function (html, bbToHTML) {
        "use strict";
        var rexExpPattern, regExp, element;
        for (element in bbToHTML) {
            if (bbToHTML.hasOwnProperty(element)) {
                rexExpPattern = bbToHTML[element];
                element = element.replace(/\*\]/g, "\\*]")
                    .replace(/\[/g, "\\[")
                    .replace(/\]/g, "\\]")
                    .replace(/\\\[\\\[/g, "[")
                    .replace(/\\\]\\\]/g, "]");
                regExp = new RegExp(element, "gmi");
                html = wysibb.helpers.bbReplace(html, regExp, rexExpPattern);
                //html = html.replace(bregexp,repl);
            }
        }
        return html;
    },
    removeBreaks: function (text) {
        "use strict";
        var pattern,
            result = text;
        pattern = /(\r\n|\n|\r)/gm;
        result = result.replace(pattern, "<1br />");
        pattern = /<1br \/>/gi;
        result = result.replace(pattern, " ");
        pattern = /\s+/g;
        result = result.replace(pattern, " ");
        return result;
    }
};

Object.prototype.isEmpty = function () {
    "use strict";
    var key, map = this;
    for (key in map) {
        if (map.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};