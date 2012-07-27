/**
 * Created with JetBrains WebStorm.
 * File: wysibb.render
 * User: daniloff
 * Date: 7/24/12 - 5:43 PM
 */

var wysibb = wysibb || {};

wysibb.render = function (bbtext) {
    "use strict";
    var currow, currowName, //bbToHTML,
        html = bbtext,
        options = wysibb.options,
        smileLen = options.smileList.length, smile, smileBB, smileRegexp,
        allBtn = options.allButtons,
        selectArray, selectLen, selectName,
        i, j,
        applyBB = function (html, element) {
            var bbToHTML;
            if (element.bbOpen !== "" && element.bbClose !== "") {
                wysibb.helpers.checkBBtoHTML(element);
                bbToHTML = element.bbToHTML;
                html = wysibb.helpers.replaceBBtoHTML(html, bbToHTML);
            }
            return html;
        };
    html = html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    for (i = 0; i < smileLen; i += 1) {
        smile = options.smileList[i];
        smile.img = wysibb.helpers.wbbStringFormat(smile.img, options);
        smileBB = smile.bbcode;
        if (smile && smile.img) {
            smileBB = smileBB.replace(/([^a-z0-9])/gi, "\\$1");
            smileRegexp = new RegExp(smileBB, "mg");
            html = html.replace(smileRegexp, smile.img);
        }
    }
    for (currowName in allBtn) {
        if (allBtn.hasOwnProperty(currowName)) {
            currow = options.allButtons[currowName];
            if (!currow.type || currow.type !== "select") {
                html = applyBB(html, currow);
            } else {
                selectArray = currow.options.split(',');
                selectLen = selectArray.length;
                for (j = 0; j < selectLen; j += 1) {
                    selectName = selectArray[j];
                    currow = options.selectOptions[selectName];
                    html = applyBB(html, currow);
                }
            }
        }
    }
    //clear br's
    //var resobj = $("<div>"+html+"</div>");
    //resobj.find("ul > br,table > br, tr > br").each(function(idx,el) {
    //$(el).remove();
    //});
    //return resobj.html();
    return html;
};
