/**
 * Created with JetBrains WebStorm.
 * File: wysibb.helpers
 * User: daniloff
 * Date: 7/24/12 - 5:56 PM
 */

var wysibb = wysibb || {};

wysibb.helpers = {
    bbReplace: function (str,regexp,repl) {
        while (str.match(regexp)) {
            str=str.replace(regexp,repl);
        }
        return str;
    },
    wbbStringFormat: function(template, data) {
        var innerFunc = function (str, key) {
            var keys = key.split("."),
                value = data[keys.shift()];
            $.each(keys, function () { value = value[this]; });
            return (value === null || value === undefined) ? "" : value;
        };
        return template.replace(/\{([\w\.]*)\}/g, innerFunc);
    }
}