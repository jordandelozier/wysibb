/**
 * Created with JetBrains WebStorm.
 * File: wysibb.presets
 * User: daniloff
 * Date: 7/24/12 - 5:31 PM
 */

var wysibb = wysibb || {};

wysibb.presets = {
    'phpbb3' : {
        buttons: "bold,italic,underline,|,quote,code,bullist2,numlist,|,img,link,fontsizeselect",
        bodyClass: "content",
        allButtons : {
            'fontsizeselect': {
                options:	"fontsizedefault,fontverysmall,fontsmall,fontnormal,fontbig,fontverybig"
            },
            'quote': {
                htmlOpen: '<blockquote class="uncited"><div>',
                htmlClose: '</div></blockquote>',
                htmlToBB: {'blockquote.uncited': '[quote]%$(this).html()%[/quote]','blockquote':'[quote="%$(this).children("div").children("cite").skipWBB().text().replace(" писал(а):","")%"]%$(this).children("div").html()%[/quote]'},
                bbToHTML: {'[quote](.*?)[/quote]': '<blockquote class="uncited"><div>$1</div></blockquote>','[quote=\"?(.*?)\"?](.*?)[/quote]':'<blockquote><div><cite>$1 писал(а):</cite>$2</div></blockquote>'},
                rootNode: 'blockquote'
            },
            'code': {
                htmlOpen: '<dl class="codebox"><dt>Код: <a href="#">Выделить всё</a></dt><dd><code>',
                htmlClose: '</code></dd></dl>',
                htmlToBB: {'dl.codebox': '[code]%$(this).children("dt").skipWBB().next("dd").children("code").html()%[/code]'},
                rootNode: 'dl.codebox'
            }
        }
    },
    'ipb3' : {
        buttons: "bold,italic,underline,strike,sub,sup,|,link,img,bullist,numlist,|,fontsizeselect,fontfamilyselect,|,justifyleft,justifycenter,justifyright,|,quote,code",
        allButtons : {
            'fontsizeselect': {
                options:	"fs1,fs2,fs3,fs4,fs5,fs6,fs7"
            },
            'quote': {
                htmlOpen: '<div class="blockquote"><div class="quote">',
                htmlClose: '</div></div>',
                htmlToBB: {'div.blockquote': '[quote]%$(this).html()%[/quote]'},
                rootNode: 'div.blockquote'
            },
            'code': {
                htmlOpen: '<pre class="prettyprint">',
                htmlClose: '</pre>',
                htmlToBB: {'pre.prettyprint': '[quote]%$(this).html()%[/quote]'},
                rootNode: 'pre.prettyprint'
            }
        }
    }
}