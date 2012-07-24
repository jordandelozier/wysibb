/**
 * Created with JetBrains WebStorm.
 * File: wysibb.config
 * User: daniloff
 * Date: 7/24/12 - 5:24 PM
 */

var wysibb = wysibb || {};

wysibb.options = {
    version:			"0.6.4",
    debug:				true,
    onlyBBmode:			false,
    bbmode:				false,
    watchTxtArea:		true,
    smileAutoDetect:	true,
    tabInsert:			true,
    autoResize:			true,
    bodyClass:			"",
    maxheight:			800,
    themeName:			'default',
    skipBodyTransform:	["code"],
    themePrefix:		'themes',
    validTags:			["a","b","i","s","u","img","ul","ol","li","br","p","q","strike","blockquote","table","tr","td"],
    buttons:			"bold,italic,underline,strike,sup,sub,|,fontsizeselect,fontfamilyselect,fontcolor,|,justifyleft,justifycenter,justifyright,|,link,img,table,|,bullist,numlist,quote,offtopic,code,spoiler", //default active button list
    allButtons:			{
        "bold":	{
            title:"Жирный",
            buttonHTML: '<span class="ve-tlb-bold"></span>',
            command: 'new NativeCommand("Bold")',
            bbName: "b",
            bbOpen: "[b]",
            bbClose: "[/b]",
            htmlToBB: {'b':'[b]%$(this).html()%[/b]','strong':'[b]%$(this).html()%[/b]'},
            bbToHTML: {'[b](.*?)[/b]':'<b>$1</b>'}
        },
        "italic": {
            title:"Курсив",
            buttonHTML: '<span class="ve-tlb-italic"></span>',
            command: 'new NativeCommand("Italic")',
            bbName: "i",
            bbOpen: "[i]",
            bbClose: "[/i]",
            htmlToBB: {'i':'[i]%$(this).html()%[/i]','em':'[i]%$(this).html()%[/i]'},
            bbToHTML: {'[i](.*?)[/i]':'<i>$1</i>'}
        },
        "underline": {
            title:"Подчеркнутый",
            buttonHTML: '<span class="ve-tlb-underline"></span>',
            command: 'new NativeCommand("Underline")',
            bbName: "u",
            bbOpen: "[u]",
            bbClose: "[/u]",
            htmlToBB: {'u':'[u]%$(this).html()%[/u]'},
            bbToHTML: {'[u](.*?)[/u]':'<u>$1</u>'}
        },
        "strike": {
            title:"Зачеркнутый",
            buttonHTML: '<span class="ve-tlb-strike"></span>',
            command: 'new NativeCommand("StrikeThrough")',
            bbName: "s",
            bbOpen: "[s]",
            bbClose: "[/s]",
            htmlToBB: {'strike':'[s]%$(this).html()%[/s]'},
            bbToHTML: {'[s](.*?)[/s]':'<s>$1</s>'}
        },
        "link":	{
            title:"Вставить ссылку",
            buttonHTML: '<span class="ve-tlb-link"></span>',
            command: 'new linkCommand()',
            bbName: "url",
            bbOpen:"[url={href}]{href}",
            skipSelectRange: true,
            bbClose:"[/url]",
            htmlToBB: {'a': '[url=%$(this).attr("href")%]%$(this).html()%[/url]'},
            bbToHTML: {'[url=(.*?)](.*?)[/url]':'<a href="$1">$2</a>'}
        },
        "img": {
            title:"Вставить изображение",
            buttonHTML: '<span class="ve-tlb-img"></span>',
            command: 'new imgCommand()',
            bbName: "img",
            bbOpen:"[img]{src}",
            bbClose:"[/img]",
            skipSelectRange: true,
            htmlToBB: {'img': '[img]%$(this).attr("src")%[/img]'},
            bbToHTML: {'[img](.*?)[/img]':'<img src="$1" />'},
            uploader: {
                enable:			true,
                defaultType:	1,
                maxwidth:		600,
                maxheight:		600,
                useThumb:		true,
                transload_url:	false,
                uploadurl:		"{themePrefix}/imgupload.php"
            }
        },
        "bullist": {
            title:"Вставить список",
            buttonHTML: '<span class="ve-tlb-list"></span>',
            command: 'new NativeCommand("InsertUnorderedList")',
            bbName: "list",
            bbOpen:"[list]\n[*]",
            bbClose:"\n[/list]",
            htmlToBB: {'ul': '[list]%$(this).html()%[/list]','li': "[*]%$(this).html()%"},
            bbToHTML: {'[*](.*?)(?=[)':'<li>$1</li>','[list](.*?)[/list]':'<ul>$1</ul>'}
        },
        "bullist2": {
            title:"Вставить список",
            buttonHTML: '<span class="ve-tlb-list"></span>',
            command: 'new NativeCommand("InsertUnorderedList")',
            bbName: "list",
            bbOpen:"[list]\n[*]",
            bbClose:"[/*]\n[/list]",
            htmlToBB: {'ul': '[list]%$(this).html()%[/list]','li': "[*]%$(this).html()%[/*]"},
            bbToHTML: {'[*](.*?)[/*]':'<li>$1</li>','[list](.*?)[/list]':'<ul>$1</ul>'}
        },
        "numlist": {
            title:"Вставить нумерованный список",
            buttonHTML: '<span class="ve-tlb-numlist"></span>',
            command: 'new NativeCommand("InsertOrderedList")',
            bbName: "list=1",
            bbOpen:"[list=1]\n[*]",
            bbClose:"\n[/list]",
            htmlToBB: {'ol': '[list=1]%$(this).html()%[/list]','li': "[*]%$(this).html()%"},
            bbToHTML: {'[*](.*?)(?=[)':'<li>$1</li>','[list\=1](.*?)[/list]':'<ol>$1</ol>'}
        },
        "numlist2": {
            title:"Вставить нумерованный список",
            buttonHTML: '<span class="ve-tlb-list"></span>',
            command: 'new NativeCommand("InsertOrderedList")',
            bbName: "list=1",
            bbOpen:"[list=1]\n[*]",
            bbClose:"[/*]\n[/list]",
            htmlToBB: {'ol': '[list=1]%$(this).html()%[/list]','li': "[*]%$(this).html()%[/*]"},
            bbToHTML: {'[*](.*?)[/*]':'<li>$1</li>','[list=1](.*?)[/list]':'<ol>$1</ol>'}
        },
        "justifyleft": {
            title:"Текст по левому краю",
            buttonHTML: '<span class="ve-tlb-textleft"></span>',
            command: 'new justifyCommand("justifyleft")',
            htmlOpen: '<div class="wbb-left">',
            htmlClose: '</div>',
            bbName: "left",
            bbOpen:"[left]",
            bbClose:"[/left]",
            htmlToBB: {'div.wbb-left': '[left]%$(this).html()%[/left]'},
            rootNode: 'div.wbb-left',
            contentSelector: '$(rootNode).html()'

        },
        "justifycenter": {
            title:"Текст по центру",
            buttonHTML: '<span class="ve-tlb-textcenter"></span>',
            command: 'new justifyCommand("justifycenter")',
            htmlOpen: '<div class="wbb-center" style="text-align:center">',
            htmlClose: '</div>',
            bbName: "center",
            bbOpen:"[center]",
            bbClose:"[/center]",
            htmlToBB: {'div.wbb-center': '[center]%$(this).html()%[/center]'},
            rootNode: 'div.wbb-center',
            contentSelector: '$(rootNode).html()'

        },
        "justifyright": {
            title:"Текст правому краю",
            buttonHTML: '<span class="ve-tlb-textright"></span>',
            command: 'new justifyCommand("justifyright")',
            htmlOpen: '<div class="wbb-right" style="text-align:right">',
            htmlClose: '</div>',
            bbName: "right",
            bbOpen:"[right]",
            bbClose:"[/right]",
            htmlToBB: {'div.wbb-right': '[right]%$(this).html()%[/right]'},
            rootNode: 'div.wbb-right',
            contentSelector: '$(rootNode).html()'

        },
        "offtopic": {
            title:"Оффтоп",
            buttonHTML: '<span class="ve-tlb-offtopic"></span>',
            command: 'new CustomCommand("offtopic")',
            htmlOpen: '<span class="offtop" style="font-size:9px;color:gray;">',
            htmlClose: '</span>',
            bbName: "offtop",
            bbOpen:"[offtop]",
            bbClose:"[/offtop]",
            htmlToBB: {'span.offtop': '[offtop]%$(this).html()%[/offtop]'},
            rootNode: 'span.offtop',
            contentSelector: '$(rootNode).html()'
        },
        "code": {
            title:"Вставить код",
            buttonHTML: '<span class="ve-tlb-code"></span>',
            command: 'new CustomCommand("code")',
            htmlOpen: '<div class="code"><div class="codetop">Код</div><div class="codemain">',
            htmlClose: '</div></div>',
            bbName: "code",
            bbOpen:"[code]",
            bbClose:"[/code]",
            htmlToBB: {'div.codetop': '[code]%$(this).skipWBB().next("div.codemain").skipWBB().html()%[/code]'},
            rootNode: 'div.code',
            contentSelector: '$(rootNode).find("div.codemain").html()'
        },
        "spoiler": {
            title:"Сворачиваемый текст",
            buttonHTML: '<span class="ve-tlb-spoiler"></span>',
            command: 'new CustomCommand("spoiler")',
            htmlOpen: '<div class="spoiler"><div class="hidetop">Спойлер (+/-)</div><div class="hidemain">',
            htmlClose: '</div></div>',
            bbName: "spoiler",
            bbOpen:"[spoiler]",
            bbClose:"[/spoiler]",
            htmlToBB: {'div.spoiler': '[spoiler]%$(this).children("div.hidetop").skipWBB().next("div.hidemain").html()%[/spoiler]'},
            rootNode: 'div.spoiler',
            contentSelector: '$(rootNode).find("div.hidemain").html()'
        },
        "sub": {
            title:"Подстрочный текст",
            buttonHTML: '<span class="ve-tlb-sub"></span>',
            command: 'new NativeCommand("subscript")',
            bbName: "sub",
            bbOpen:"[sub]",
            bbClose:"[/sub]",
            htmlToBB: {'sub': '[sub]%$(this).html()%[/sub]'},
            bbToHTML: {'[sub](.*?)[/sub]':'<sub>$1</sub>'}
        },
        "sup": {
            title:"Надстрочный текст",
            buttonHTML: '<span class="ve-tlb-sup"></span>',
            command: 'new NativeCommand("superscript")',
            bbName: "sup",
            bbOpen:"[sup]",
            bbClose:"[/sup]",
            htmlToBB: {'sup': '[sup]%$(this).html()%[/sup]'},
            bbToHTML: {'[sup](.*?)[/sup]':'<sup>$1</sup>'}
        },
        "quote": {
            title:"Вставить цитату",
            buttonHTML: '<span class="ve-tlb-quote"></span>',
            command: 'new CustomCommand("quote")',
            htmlOpen: '<div class="blockquote">',
            htmlClose: '</div>',
            bbName: "quote",
            bbOpen:"[quote]",
            bbClose:"[/quote]",
            htmlToBB: {'div.blockquote': '[quote]%$(this).html()%[/quote]'},
            bbToHTML: {},
            rootNode: 'div.blockquote',
            contentSelector: '$(rootNode).html()'
        },
        "fontsizeselect": {
            title:		"Размер текста",
            type:		"select",
            options:	"fontsizedefault,fontverysmall,fontsmall,fontnormal,fontbig,fontverybig", //default select list, phpBB3,
            htmlToBB:	{},
            bbToHTML:	{}
        },
        "fontfamilyselect": {
            title:		"Шрифт текста",
            type:		"select",
            options:	"fontfamilydefault,arial,comic_sans_ms,courier_new,georgia,lucida,tahoma,times,trebuchet,verdana", //default select list, IPB3.3
            htmlToBB:	{}
        },
        "fontcolor": {
            title:		"Цвет текста",
            type:		"colorpicker",
            buttonHTML: '<div class="val"><span class="val-line"></span></div>',
            command: 	'new NativeCommand("foreColor","{color}")',
            colorList:	"#000000,#444444,#666666,#999999,#b6b6b6,#cccccc,#d8d8d8,#efefef,#f4f4f4,#ffffff,-, \
								 #ff0000,#980000,#ff7700,#ffff00,#00ff00,#00ffff,#1e84cc,#0000ff,#9900ff,#ff00ff,-, \
								 #f4cccc,#dbb0a7,#fce5cd,#fff2cc,#d9ead3,#d0e0e3,#c9daf8,#cfe2f3,#d9d2e9,#ead1dc, \
								 #ea9999,#dd7e6b,#f9cb9c,#ffe599,#b6d7a8,#a2c4c9,#a4c2f4,#9fc5e8,#b4a7d6,#d5a6bd, \
								 #e06666,#cc4125,#f6b26b,#ffd966,#93c47d,#76a5af,#6d9eeb,#6fa8dc,#8e7cc3,#c27ba0, \
								 #cc0000,#a61c00,#e69138,#f1c232,#6aa84f,#45818e,#3c78d8,#3d85c6,#674ea7,#a64d79, \
								 #900000,#85200C,#B45F06,#BF9000,#38761D,#134F5C,#1155Cc,#0B5394,#351C75,#741B47, \
								 #660000,#5B0F00,#783F04,#7F6000,#274E13,#0C343D,#1C4587,#073763,#20124D,#4C1130",
            htmlToBB: {'font[color*="#"]': '[color=%$(this).attr("color")%]%$(this).removeAttr("color").get(0).outerHTML%[/color]'},
            bbToHTML: {'[color=[[\"\']]?(.*?)[[\"\']]?](.*?)[/color]':'<font color="$1">$2</font>'}
        },
        "table": {
            title:		"Вставить таблицу",
            type:		"table",
            buttonHTML: '<div class="val"></div>',
            rows:	10,
            cols:	10,
            tdwidth:	15,
            htmlToBB: {'td':'[td]%$(this).html()%[/td]','tr':'[tr]%$(this).html()%[/tr]','table':'[table]%$(this).html()%[/table]'},
            bbToHTML: {'[table](.*?)[/table]':'<table class="wbbtable" cellpadding="0" cellspacing="5">$1</table>','[tr](.*?)[/tr]':'<tr>$1</tr>','[td](.*?)[/td]':'<td>$1</td>'}
        },
        'wbbConvertation': {
            htmlToBB: {'span.tab':"   %(this).html()%"},
            bbToHTML: {'\n':'<br/>','\\s\\s\\s':'<span class="tab">\uFEFF</span>'}
        }
    },
    selectOptions: {
        "fontsizedefault": {
            title: "Размер текста",
            command: 'new CustomCommand("fontsizedefault")',
            isDefault:	true,
            htmlOpen: '<span class="defvalue">',
            htmlClose: '</span>',
            bbName: "",
            bbOpen:"",
            bbClose:"",
            rootNode: 'font[size!=""]',
            htmlToBB: {},
            bbToHTML: {}
        },
        "fontfamilydefault": {
            title: "Шрифт текста",
            command: 'new CustomCommand("fontfamilydefault")',
            isDefault:	true,
            htmlOpen: '<span class="defvalue">',
            htmlClose: '</span>',
            bbName: "",
            bbOpen:"",
            bbClose:"",
            rootNode: 'font[face!=""]',
            htmlToBB: {},
            bbToHTML: {}
        },
        "fontverysmall": {
            title: "Очень маленький",
            command: 'new NativeCommand("fontSize",1)',
            htmlOpen: '<font size="1">',
            htmlClose: '</font>',
            bbName: "size=50",
            bbOpen:"[size=50]",
            bbClose:"[/size]",
            htmlToBB: {'font[size="1"]': '[size=50]%$(this).removeAttr("size").get(0).outerHTML%[/size]'}
        },
        "fontsmall": {
            title: "Маленький",
            command: 'new NativeCommand("fontSize",2)',
            htmlOpen: '<font size="2">',
            htmlClose: '</font>',
            bbName: "size=85",
            bbOpen:"[size=85]",
            bbClose:"[/size]",
            htmlToBB: {'font[size="2"]': '[size=85]%$(this).removeAttr("size").get(0).outerHTML%[/size]'}
        },
        "fontnormal": {
            title: "Нормальный",
            command: 'new NativeCommand("fontSize",3)',
            htmlOpen: '<font size="3">',
            htmlClose: '</font>',
            bbName: "size=100",
            bbOpen:"[size=100]",
            bbClose:"[/size]",
            htmlToBB: {'font[size="3"]': '[size=100]%$(this).removeAttr("size").get(0).outerHTML%[/size]'}
        },
        "fontbig": {
            title: "Большой",
            command: 'new NativeCommand("fontSize",4)',
            htmlOpen: '<font size="4">',
            htmlClose: '</font>',
            bbName: "size=150",
            bbOpen:"[size=150]",
            bbClose:"[/size]",
            htmlToBB: {'font[size="4"]': '[size=150]%$(this).removeAttr("size").get(0).outerHTML%[/size]'}
        },
        "fontverybig": {
            title: "Очень большой",
            command: 'new NativeCommand("fontSize",6)',
            htmlOpen: '<font size="6">',
            htmlClose: '</font>',
            bbName: "size=200",
            bbOpen:"[size=200]",
            bbClose:"[/size]",
            htmlToBB: {'font[size="6"]': '[size=200]%$(this).removeAttr("size").get(0).outerHTML%[/size]'}
        },
        "fs1": {
            title: "1 (8pt)",
            command: 'new NativeCommand("fontSize",1)',
            htmlOpen: '<font size="1">',
            htmlClose: '</font>',
            bbName: "size=1",
            bbOpen:"[size=1]",
            bbClose:"[/size]",
            htmlToBB: {'font[size="1"]': '[size=1]%$(this).removeAttr("size").get(0).outerHTML%[/size]'}
        },
        "fs2": {
            title: "2 (10pt)",
            command: 'new NativeCommand("fontSize",2)',
            htmlOpen: '<font size="2">',
            htmlClose: '</font>',
            bbName: "size=2",
            bbOpen:"[size=2]",
            bbClose:"[/size]",
            htmlToBB: {'font[size="2"]': '[size=2]%$(this).removeAttr("size").get(0).outerHTML%[/size]'}
        },
        "fs3": {
            title: "3 (12pt)",
            command: 'new NativeCommand("fontSize",3)',
            htmlOpen: '<font size="2">',
            htmlClose: '</font>',
            bbName: "size=3",
            bbOpen:"[size=3]",
            bbClose:"[/size]",
            htmlToBB: {'font[size="3"]': '[size=3]%$(this).removeAttr("size").get(0).outerHTML%[/size]'}
        },
        "fs4": {
            title: "4 (14pt)",
            command: 'new NativeCommand("fontSize",4)',
            htmlOpen: '<font size="4">',
            htmlClose: '</font>',
            bbName: "size=4",
            bbOpen:"[size=4]",
            bbClose:"[/size]",
            htmlToBB: {'font[size="4"]': '[size=4]%$(this).removeAttr("size").get(0).outerHTML%[/size]'}
        },
        "fs5": {
            title: "5 (18pt)",
            command: 'new NativeCommand("fontSize",5)',
            htmlOpen: '<font size="5">',
            htmlClose: '</font>',
            bbName: "size=5",
            bbOpen:"[size=5]",
            bbClose:"[/size]",
            htmlToBB: {'font[size="5"]': '[size=5]%$(this).removeAttr("size").get(0).outerHTML%[/size]'}
        },
        "fs6": {
            title: "6 (24pt)",
            command: 'new NativeCommand("fontSize",6)',
            htmlOpen: '<font size="6">',
            htmlClose: '</font>',
            bbName: "size=6",
            bbOpen:"[size=6]",
            bbClose:"[/size]",
            htmlToBB: {'font[size="6"]': '[size=6]%$(this).removeAttr("size").get(0).outerHTML%[/size]'}
        },
        "fs7": {
            title: "7 (36pt)",
            command: 'new NativeCommand("fontSize",7)',
            htmlOpen: '<font size="7">',
            htmlClose: '</font>',
            bbName: "size=7",
            bbOpen:"[size=7]",
            bbClose:"[/size]",
            htmlToBB: {'font[size="7"]': '[size=7]%$(this).removeAttr("size").get(0).outerHTML%[/size]'}
        },
        "arial": {
            title: "Arial",
            command: 'new NativeCommand("fontName","arial")',
            htmlOpen: '<font face="arial">',
            htmlClose: '</font>',
            bbName: "font=arial",
            bbOpen:"[font=arial]",
            bbClose:"[/font]",
            htmlToBB: {'font[face="arial"]': '[font=arial]%$(this).removeAttr("face").get(0).outerHTML%[/font]'}
        },
        "comic_sans_ms": {
            title: "Comic Sans MS",
            command: 'new NativeCommand("fontName","Comic Sans MS")',
            htmlOpen: '<font face="Comic Sans MS">',
            htmlClose: '</font>',
            bbName: "font=comic sans ms,cursive",
            bbOpen:"[font=comic sans ms,cursive]",
            bbClose:"[/font]",
            htmlToBB: {'font[face="Comic Sans MS"]': '[font=comic sans ms,cursive]%$(this).removeAttr("face").get(0).outerHTML%[/font]'}
        },
        "courier_new": {
            title: "Courier New",
            command: 'new NativeCommand("fontName", "Courier New")',
            htmlOpen: '<font face="Courier New">',
            htmlClose: '</font>',
            bbName: "font=courier new,courier,monospace",
            bbOpen:"[font=courier new,courier,monospace]",
            bbClose:"[/font]",
            htmlToBB: {'font[face="Courier New"]': '[font=courier new,courier,monospace]%$(this).removeAttr("face").get(0).outerHTML%[/font]'}
        },
        "georgia": {
            title: "Georgia",
            command: 'new NativeCommand("fontName", "Georgia")',
            htmlOpen: '<font face="Georgia">',
            htmlClose: '</font>',
            bbName: "font=georgia,serif",
            bbOpen:"[font=georgia,serif]",
            bbClose:"[/font]",
            htmlToBB: {'font[face="Georgia"]': '[font=georgia,serif]%$(this).removeAttr("face").get(0).outerHTML%[/font]'}
        },
        "lucida": {
            title: "Lucida Sans Unicode",
            command: 'new NativeCommand("fontName", "Lucida Sans Unicode")',
            htmlOpen: '<font face="Lucida Sans Unicode">',
            htmlClose: '</font>',
            bbName: "font=lucida sans unicode,lucida grande,sans-serif",
            bbOpen:"[font=lucida sans unicode,lucida grande,sans-serif]",
            bbClose:"[/font]",
            htmlToBB: {'font[face="Lucida Sans Unicode"]': '[font=lucida sans unicode,lucida grande,sans-serif]%$(this).removeAttr("face").get(0).outerHTML%[/font]'}
        },
        "tahoma": {
            title: "Tahoma",
            command: 'new NativeCommand("fontName", "Tahoma")',
            htmlOpen: '<font face="Tahoma">',
            htmlClose: '</font>',
            bbName: "font=tahoma,geneva,sans-serif",
            bbOpen:"[font=tahoma,geneva,sans-serif]",
            bbClose:"[/font]",
            htmlToBB: {'font[face="Tahoma"]': '[font=tahoma,geneva,sans-serif]%$(this).removeAttr("face").get(0).outerHTML%[/font]'}
        },
        "times": {
            title: "Times New Roman",
            command: 'new NativeCommand("fontName", "Times New Roman")',
            htmlOpen: '<font face="Times New Roman">',
            htmlClose: '</font>',
            bbName: "font=times new roman,times,serif",
            bbOpen:"[font=times new roman,times,serif]",
            bbClose:"[/font]",
            htmlToBB: {'font[face="Times New Roman"]': '[font=times new roman,times,serif]%$(this).removeAttr("face").get(0).outerHTML%[/font]'}
        },
        "trebuchet": {
            title: "Trebuchet MS",
            command: 'new NativeCommand("fontName", "Trebuchet MS")',
            htmlOpen: '<font face="Trebuchet MS">',
            htmlClose: '</font>',
            bbName: "font=trebuchet ms,helvetica,sans-serif",
            bbOpen:"[font=trebuchet ms,helvetica,sans-serif]",
            bbClose:"[/font]",
            htmlToBB: {'font[face="Trebuchet MS"]': '[font=trebuchet ms,helvetica,sans-serif]%$(this).removeAttr("face").get(0).outerHTML%[/font]'}
        },
        "verdana": {
            title: "Verdana",
            command: 'new NativeCommand("fontName", "Verdana")',
            htmlOpen: '<font face="Verdana">',
            htmlClose: '</font>',
            bbName: "font=verdana,geneva,sans-serif",
            bbOpen:"[font=verdana,geneva,sans-serif]",
            bbClose:"[/font]",
            htmlToBB: {'font[face="Verdana"]': '[font=verdana,geneva,sans-serif]%$(this).removeAttr("face").get(0).outerHTML%[/font]'}
        }
    },
    smileList:			[
        {title:"Улыбка",img: '<img src="{themePrefix}/{themeName}/img/smiles/sm1.png" class="sm">',bbcode:":)"},
        {title:"Огорчение",img: '<img src="{themePrefix}/{themeName}/img/smiles/sm8.png" class="sm">',bbcode:":("},
        {title:"Смех",img: '<img src="{themePrefix}/{themeName}/img/smiles/sm2.png" class="sm">',bbcode:":D"},
        {title:"Подмигивание",img: '<img src="{themePrefix}/{themeName}/img/smiles/sm3.png" class="sm">',bbcode:";)"},
        {title:"Спасибо, класс",img: '<img src="{themePrefix}/{themeName}/img/smiles/sm4.png" class="sm">',bbcode:":up:"},
        {title:"Ругаю",img: '<img src="{themePrefix}/{themeName}/img/smiles/sm5.png" class="sm">',bbcode:":down:"},
        {title:"Шок",img: '<img src="{themePrefix}/{themeName}/img/smiles/sm6.png" class="sm">',bbcode:":shock:"},
        {title:"Злой",img: '<img src="{themePrefix}/{themeName}/img/smiles/sm7.png" class="sm">',bbcode:":angry:"},
        {title:"Тошнит",img: '<img src="{themePrefix}/{themeName}/img/smiles/sm9.png" class="sm">',bbcode:":sick:"}
    ] //default smileList
}