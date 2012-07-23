/*
	Autor: DVG
	WysiBB - WYSIWYG BBcode editor
	Version: 0.6.4
*/

(function($) {
	'use strict';
	$.wysibb = function(txtArea,settings) {
	    var options,isMobile,IE6,IE7;
		var options = {
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
			//themePrefix:		'http://www.wysibb.com/static/theme/',
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
				{title:"Улыбка",img: '<img src="{themePrefix}{themeName}/img/smiles/sm1.png" class="sm">',bbcode:":)"},
				{title:"Огорчение",img: '<img src="{themePrefix}{themeName}/img/smiles/sm8.png" class="sm">',bbcode:":("},
				{title:"Смех",img: '<img src="{themePrefix}{themeName}/img/smiles/sm2.png" class="sm">',bbcode:":D"},
				{title:"Подмигивание",img: '<img src="{themePrefix}{themeName}/img/smiles/sm3.png" class="sm">',bbcode:";)"},
				{title:"Спасибо, класс",img: '<img src="{themePrefix}{themeName}/img/smiles/sm4.png" class="sm">',bbcode:":up:"},
				{title:"Ругаю",img: '<img src="{themePrefix}{themeName}/img/smiles/sm5.png" class="sm">',bbcode:":down:"},
				{title:"Шок",img: '<img src="{themePrefix}{themeName}/img/smiles/sm6.png" class="sm">',bbcode:":shock:"},
				{title:"Злой",img: '<img src="{themePrefix}{themeName}/img/smiles/sm7.png" class="sm">',bbcode:":angry:"},
				{title:"Тошнит",img: '<img src="{themePrefix}{themeName}/img/smiles/sm9.png" class="sm">',bbcode:":sick:"}
			] //default smileList
		}
		var presets = {
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
		
		if (settings && settings.preset) {
			$.log("Load preset: "+settings.preset);
			var propt = presets[settings.preset] || {};
			$.extend(true,options, propt);
		}
		if (settings && typeof(settings.smileList)!="undefined") {options.smileList=[];}
		$.extend(true,options, settings);
		//$.log(options);
		// compatibility check, thx damnUploader
		$.extend($.support, {
			fileSelecting: (window.File != null) && (window.FileList != null),
			fileReading: (window.FileReader != null),
			fileSending: (window.FormData != null)
		});
		
		//init css prefix, if not set
		if (!options.themePrefix) {
			$('script').each(function(idx, el) {
				var sriptMatch = $(el).get(0).src.match(/(.*)jquery\.wysibb(\.min)?\.js.*$/);
				if (sriptMatch !== null) {
					options.themePrefix = sriptMatch[1];
				}
			});
		}
		
		isMobile = (function(a){if(/android.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) {return true} else {return false}})(navigator.userAgent||navigator.vendor||window.opera);
		IE6 = (navigator.userAgent.toLowerCase().indexOf('msie 6') != -1) && (navigator.userAgent.toLowerCase().indexOf('msie 7') == -1);
		IE7 = (navigator.userAgent.toLowerCase().indexOf('msie 7') != -1);
		//$.log(navigator.userAgent.toLowerCase());

		var bbmode,updateListeners,selection,enabledButtons,txtAreaSync;
		$.log("Init WysiBB");
		
		var $txtArea = $(txtArea);
		$txtArea.data("wbb",this);
		var idarea = $txtArea.attr("id");
		if (!idarea) {idarea = "id"+Math.floor(Math.random(0,10000)*1000); $txtArea.attr("id",idarea)}
		
		var $iFrame,iFrame,iFrameWindow,iFrameBody,iFrameDoc,$iFrameBody;
		//txtArea = this;
		bbmode=options.bbmode;
		updateListeners=[];
		enabledButtons=['wbbConvertation'];
		
		function init() {
			if (options.smileAutoDetect) {
				smileAutoDetect();
			}

			//create wbb editor
			buildEditor();
			
			//init selection object
			selection = new initSelection();
			
			//init form submit
			initFormSubmit();

			return;
			
		}
		function buildEditor() {
			$txtArea.css("border","0").css("outline","none");
			//$txtArea.after(wbbStringFormat('<link rel="stylesheet" type="text/css" media="all" href="{themePrefix}/{themeName}/theme.css?{version}" />',options));
            $txtArea.after(wbbStringFormat('<link rel="stylesheet" type="text/css" media="all" href="{themePrefix}/{themeName}/theme.css" />',options));
			
			$txtArea.wrap('<div class="wysibb"></div>');
			
			//init toolbar
			var activeButtons = options.buttons.split(",");
			if (activeButtons && activeButtons.length>0) {
				$.extend(true,options.allButtons,options.extraButtons);
				delete options.extraButtons;
				$.log("Create toolbar. Active buttons: "+activeButtons.length);
				var $topBar = $txtArea.before('<div class="wysibb-toolbar"></div>').prev();
				for (var i=0; i<activeButtons.length; i++) {
					var btnname = $.trim(activeButtons[i].toLowerCase());
					if (btnname=="|") {
						//create separator
						$topBar.append('<div class="wysibb-toolbar-vert"></div>');
						continue;
					}else if (btnname=="-") {
						//create line break
						$topBar.append('<div class="wysibb-toolbar-linebreak"></div>');
						continue;
					}
					var btnopt = options.allButtons[btnname];
					if (btnopt) {
						var type = btnopt.type;
						if (type && type=="select") { //select box
							//create select box
							var $btn = $(createElementFromString(wbbStringFormat('<div class="wysibb-toolbar-select" title="{title}"><div class="select-wrap"><span class="sel-value">{title}</span><div class="select-list"></div></div><span class="select-arrow"><span></span></span></div>',btnopt),document));
							var $slistwrap = $btn.find(".select-wrap");
							var $arrow = $btn.find(".select-arrow");
							var $slist = $btn.find(".select-list").css("display","none");;
							var optlist = (btnopt.options) ? btnopt.options.split(","):[];
							//$.log(optlist);
							var enoptions = [];
							for (var j=0; j<optlist.length; j++) {
								var oname = optlist[j];
								var o = options.selectOptions[oname];
								if (o) {
									o.html = wbbStringFormat(o.htmlOpen+o.title+o.htmlClose);
									var $option = $(createElementFromString(wbbStringFormat('<a href="javascript:void(0)" class="select-row isdefault-{isDefault}">{html}</a>',o),document));
									$slist.append($option);
									if (!o.isDefault) { //DEFAULT LISTENER OFF
										$.extend(btnopt.htmlToBB,o.htmlToBB);
										if (!o.bbToHTML) {
											o.bbToHTML = {};
											var bbkey = o.bbOpen.replace(/\s+/,"\\s")+"(.*?)"+o.bbClose.replace(/\s+/,"\\s");
											var bbval = o.htmlOpen+"$1"+o.htmlClose;
											o.bbToHTML[bbkey] = bbval;
										}
										if (!btnopt.bbToHTML) {btnopt.bbToHTML={};}
										$.extend(btnopt.bbToHTML,o.bbToHTML);
									}
									enoptions.push({opt:o,el:$option,option: oname});
								}
							}
							options.allButtons[btnname] = btnopt;
							var controller = new SelectController(enoptions, $btn,btnopt);		
							updateListeners.push(controller);
							enabledButtons.push(btnname);
							$topBar.append($btn);
							/* $btn.live("click",selectBoxToggle); */
							
							$btn.live("click",function(e) {
								btnToggle(".wysibb-toolbar-select",".select-list",e);
							});
						}else if (type && type=="colorpicker") { //colorpicker
							//create color picker
							var $btn = $(createElementFromString(wbbStringFormat('<div class="wysibb-toolbar-colorpicker" title="{title}">{buttonHTML}<span class="cpicker-dropdown"></span><div class="clist"><div class="nocolor" title="Не выбран">Авто</div></div>',btnopt),document));
							var $clist = $btn.find("div.clist");
							var colorlist = (btnopt.colorList) ? btnopt.colorList.split(","):[];
							for (var j=0; j<colorlist.length; j++) {
								var oname = $.trim(colorlist[j]) || "";
								colorlist[j]=oname;
								if (oname=="-") {
									//insert padding
									$clist.append('<span class="pl"></span>');
								}else{
									$clist.append(wbbStringFormat('<div class="scolor" style="background:{color}" title="{color}"></div>',{color:oname}));
								}
							}
							var controller = new ColorPickerController(colorlist, $btn,btnopt);		
							updateListeners.push(controller);
							enabledButtons.push(btnname);
							$topBar.append($btn);
							
							$btn.live("click",function(e) {
								btnToggle(".wysibb-toolbar-colorpicker",".clist",e);
							});
							
						}else if (type && type=="table") { //table
							//create table
							var $btn = $(createElementFromString(wbbStringFormat('<div class="wysibb-toolbar-table" title="{title}">{buttonHTML}<span class="cpicker-dropdown"></span><div class="clist"></div>',btnopt),document));
							var $clist = $btn.find("div.clist");
							var rows = btnopt.rows || 10;
							var cols = btnopt.cols || 10;
							var allcount = rows*cols;
							$clist.css("width",(cols*btnopt.tdwidth+2)+"px").css("height",(rows*btnopt.tdwidth+2)+"px");
							for (var j=1; j<=cols; j++) {
								for (var h=1; h<=rows; h++) {
									$clist.append(wbbStringFormat('<div class="tbl-sel" style="width:{width}px;height:{height}px;z-index:{zindex}" title="{row},{col}"></div>',{width: (j*btnopt.tdwidth),height: (h*btnopt.tdwidth),zindex: --allcount,row:h,col:j}));
								}
							}
							var controller = new TableController($btn,btnopt);		
							updateListeners.push(controller);
							enabledButtons.push(btnname);
							$topBar.append($btn);
							$btn.live("click",function(e) {
								btnToggle(".wysibb-toolbar-table",".clist",e);
							});
						}else{
							//create button
							btnopt.buttonHTML = wbbStringFormat(btnopt.buttonHTML,options);
							var $btn = $(createElementFromString(wbbStringFormat('<div class="wysibb-toolbar-btn" title="{title}" unselectable="on">{buttonHTML}</div>',btnopt),document));
							$topBar.append($btn);
							
							var funcname = btnopt.command.replace(/new\s+(\w+)(.*)/i,"$1");
							var args = btnopt.command.replace(/new\s+\w+\((.*)\)/i,"$1").replace(/\"/g,"").split(",");
							var c={};
							commandList[funcname].apply(c,args);
							var controller = new CommandController(c, $btn,btnopt);
							
							//var controller = new CommandController(eval(btnopt.command), $btn,btnopt);		
							updateListeners.push(controller);
							enabledButtons.push(btnname);
						}
					}
				}
				$topBar.append('<div class="wysibb-toolbar-btn btnModeSwitch" title="Показать BBcode" unselectable="on"><span class="ve-tlb-bbcode" unselectable="on"></span></div>');
				$topBar.find(".btnModeSwitch").click(function() {
					modeSwitch(this);
				});
				/* $topBar.append('<div style="clear:both"></div>'); */
			}
			
			//init smilelist
			if (options.smileList && options.smileList.length>0) {
				var $bottomBar = $txtArea.after('<div class="wysibb-toolbar wysibb-bottom-toolbar"></div>').next();
				for (var i=0; i<options.smileList.length; i++) {
					var curSmile = options.smileList[i];
					
					curSmile.img = wbbStringFormat(curSmile.img,options);
					var $btn = $(createElementFromString(wbbStringFormat('<div class="wysibb-toolbar-btn" title="{title}" unselectable="on">{img}</div>',curSmile),document));
					$bottomBar.append($btn);
					var controller = new CommandController(new commandList["smileCommand"], $btn,curSmile);		
				}
				$bottomBar.append('<div class="wysibb-powered" title="Редактор BBcode" unselectable="on"><a href="http://www.wysibb.com" target="_blank">WysiBB</a></div>');
			}
			smileSort();
			
			
			$txtArea.wrap('<div class="wysibb-text"></div>');
			
			//insert iframe if needed
			if (options.onlyBBmode!==true) {
				var frameWidth = $txtArea.width();
				var frameHeight = $txtArea.outerHeight();
				
				//$txtArea.parents(".wysibb").css("width",frameWidth+"px").css("max-width","100%");
				$txtArea.css("width",(frameWidth-12)+"px").css("margin","0").css("font-size","14px").css("padding","0").css("max-width","100%");
				
				$iFrame = $(wbbStringFormat('<iframe src="about:blank" class="wysibb-text-iframe" frameborder="0" style="margin:0;width:100%;height:{height}px;max-width:100%"></iframe>',{width:frameWidth,height:frameHeight}));
				
				
				//$txtArea.css("height",(frameHeight - $txtArea.parent().prev(".wysibb-toolbar").height() - $txtArea.parent().next(".wysibb-bottom-toolbar").height())+"px");
				
				$iFrame.bind('load',function() {
					iFrame = $iFrame.get(0);
					iFrameWindow=iFrame.contentWindow;
					iFrameDoc = iFrame.contentWindow.document;
					iFrameBody=iFrame.contentWindow.document.body;
					$iFrameBody = $(iFrameBody);
					var iFrameHead=iFrameDoc.getElementsByTagName('head')[0];
					
					
					
					//set styles from main page
					$(document.getElementsByTagName('head')[0]).find("link[rel='stylesheet']").each(function(idx,el) {
						$(iFrameHead).append($(el).clone());
					});
					
					$(document.body).find("link[rel='stylesheet']").each(function(idx,el) {
						$(iFrameHead).append($(el).clone());
					});
					
					
					
					//set default styles for body
					$iFrameBody.addClass("wysibb-body").addClass(options.bodyClass);
					if (('contentEditable' in iFrameBody) && !isMobile) {
						iFrameBody.contentEditable=true;
						try{
							//fix for mfirefox
							iFrameDoc.execCommand('StyleWithCSS', false, false);
						}catch(e) {}
					}else{
						//HTML5 contentEditable not supported, use bbmode
						options.onlyBBmode=true;
						bbmode=true;
					}
					
				
					//check if value exist
					if ($txtArea.val()!="")  {
						$iFrameBody.html(transformBBtoHTML($txtArea.val()));
						$txtArea.val("");
						checkForBR();
					}
					
					//set listener for keyup and mouse up for iframe
					if (isMobile) {
						$(iFrameDoc).live("click", updateToolbar);
					}else{
						$(iFrameDoc).live("mouseup", updateToolbar);
					}
					
					$(iFrameDoc).live("keyup", function(evt) {
						//if (evt.ctrlKey===true || ((evt.ctrlKey===true || evt.altKey===true) || (evt.which>=37 && evt.which<=40))) { //watch not all key press, 37-40: arrow keys
							updateToolbar();
							checkForBR();
						//}
					});
					if (options.tabInsert==true) {
						//tab insert
						$(iFrameDoc).live('keydown', function(e) {
							if (e.which == 9) {
								//insert tab
								if (e.preventDefault) {e.preventDefault();}
								selection.overrideWithNode('<span class="tab">\uFEFF</span>',null);
							}
						});
					}
					
					//clear html on paste from external editors
					$(iFrameDoc).live('keydown', function(e) {
						if ((e.which == 86 && (e.ctrlKey==true || e.metaKey==true)) || (e.which == 45 && (e.shiftKey==true || e.metaKey==true))) {
							selection.saveRange();
							$(iFrameBody).removeAttr("contentEditable");
							var tmpel = createElementFromString('<div></div>',iFrameDoc);
							$(tmpel).attr('contenteditable', 'true').attr('class', 'paste').appendTo(iFrameBody).on('paste', function(e) {
								setTimeout(function() {
									var text = $(tmpel).text();
									sanitizeHTML(tmpel);
									var html = $(tmpel).html();
									$(tmpel).remove();
									$(iFrameBody).attr("contentEditable","true");
									iFrameBody.focus();
									selection.overrideWithNode("<span>"+html+"</span>",selection.getSavedRange());
								}, 1);
							}).focus();
						}
					});
					
					
					
					//init watching for txtArea
					if (options.watchTxtArea===true) {
						$(document).live('click',function(evt) {
							//$.log(evt);
							if (!bbmode) {
								if ($(evt.target).parents(".wysibb").size()==0 ) {
									if ($txtArea.data("prevVal")!=$txtArea.val()) {
										$.log("txtArea has changed");
										selection.overrideWithNode(transformBBtoHTML($txtArea.val()),null,null,true,true);
										$txtArea.val("");
										$txtArea.data("prevVal","");
										checkForBR();
									}
								}
							}
						})
						$txtArea.data("prevVal",$txtArea.val());
					}
					
					//onEnter event, insert br
					$iFrameBody.live("keydown",function(event) {
						var parentLI = getContaining("li");
						if (event.which == 13 && !parentLI) {
							event.preventDefault();
							iFrameBody.focus();
							var snode = selection.getNode();
							if ((snode.tagName=="DIV" || snode.tagName=="BODY") && snode.lastChild.nodeName.toLowerCase()!="br") {
								$(snode).append("<br/>");
							}
							var elem = iFrameWindow.document.createElement("BR");
							selection.overrideWithNode(elem,null);
						}
					});
					
					//autoresize
					if (options.autoResize) {
						$iFrameBody.live('keydown mouseup',function() {autoResize();});
					}
					
				})
				
				$txtArea.after($iFrame);
				$txtArea.hide();
				
			}
			
			if (bbmode) {
				$(iFrame).hide();
				$(txtArea).show();
			}
			
			//set listener for keyup and mouse up for txtarea
			$txtArea.live("keyup mouseup", updateToolbar);
		}
		
		var commandList = {
			"NativeCommand": function (command,param) {
				if (!param) {param=null;}
				this.getCommandName = function() {return command;}
				this.getCommandParam = function() {return param;}
				this.execute = function(opt) {
					if (bbmode) {
						var bbcode = opt.bbName;
						txtArea.focus();
						if (checkBBContain(bbcode)) {
							//remove bb
							removeBBCode(bbcode);
						}else{
							setBBCode(opt,null);
						}
					}else{
						iFrameBody.focus();
						iFrameDoc.execCommand(command, false, param); 
					}
				};
				this.queryState = function(opt) {
					//highlite if active tag
					var bbcode = opt.bbName;
					if (param) {
						var cval = iFrameDoc.queryCommandValue(command)+"";
						cval = cval.replace(/\'/g,"");
						if (command=="foreColor") {
							cval = colorToHex(cval);
						}
						return (cval==param);
					}
					return (bbmode) ? checkBBContain(bbcode):iFrameDoc.queryCommandState(command);
				};
			},
			"CustomCommand": function (command) {
				this.execute = function(opt,clearList) {
					var tagfilter = opt.rootNode;
					if (bbmode) {
						txtArea.focus();
						var bbcode = opt.bbName;
						if (checkBBContain(bbcode)) {
							//remove bb
							removeBBCode(bbcode);
						}else{
							setBBCode(opt,null);
						}
					}else{
						iFrameBody.focus();
						var quoteBlock = getContaining(tagfilter);
						if (quoteBlock) {
							var $quoteBlock = $(quoteBlock);
							
							if ($quoteBlock.is("span,font")) {
								//is is text, multievents
								var selHTML = selection.getHTML();
								if (selHTML=="") {
									//close cur tag, set selectio after this node;
									var snode = selection.getNode();
									var txtnode = createElementFromString("<span>\uFEFF</span>");
									$(snode).after(txtnode);
									selection.setSelection(null,txtnode,0,0);
								}else{
									tagKnife(quoteBlock,opt.rootNode);
								}
							}else{
								//it is block, remove all
								$.log("it is block, remove all");
								if (opt.contentSelector) {
									var remRules = opt.contentSelector;
									remRules = remRules.replace(/rootNode/g,"this").replace(/\$/g,"jQuery");
									$quoteBlock.each(function() {$(this).replaceWith(eval(remRules));});
								}
							}
						}else{
							//insert
							var selHTML = selection.getHTML();
							//$.log(selHTML);
							if (selHTML=="") {
								//open empty tag
								$.log("open empty tag");
								var crnode = createElementFromString(wbbStringFormat("{htmlOpen}\uFEFF{htmlClose}",{htmlOpen:opt.htmlOpen,htmlClose:opt.htmlClose}));
								$(crnode).attr("wbb","true");
								var snode = selection.getNode();
								
								//insert span after, if parent span
								if ($(crnode).is("span,font") && $(snode).is("span,font")) {
									$(snode).after(crnode);
								}else{
									selection.overrideWithNode(crnode);
									
								}
								if ($(crnode).children().size()==0) {
									selection.setSelection(null,crnode,0,0);
								}
							}else{
							
								var snode = selection.getNode();
								var replaceNode=false;
								while (snode && snode.innerHTML==selHTML && $(snode).is("span,font")) {
									selHTML = snode.outerHTML;
									replaceNode=snode;
									//selection.setSelection(null,snode);
									snode = snode.parentNode;
								}
								
								//clear selHTML
								var el = iFrameDoc.createElement("SPAN");
									el.innerHTML = selHTML;
								if (clearList && clearList.length>0) {
									//it is selector list, clear all in list
									for (var k=0; k<clearList.length; k++) {
										var copt = clearList[k];
										if (copt) {
											var remRules = copt.contentSelector || "jQuery(this).contents()";
											remRules = remRules.replace(/rootNode/g,"this");
											$(el).find(copt.rootNode).each(function(){$(this).replaceWith(eval(remRules))});
										}
									}
								}else{
									//it is not select list, clear one this
									if (opt.contentSelector) {
										var remRules = opt.contentSelector || "jQuery(this).contents()";
										remRules = remRules.replace(/rootNode/g,"this");
										$(el).find(opt.rootNode).each(function() {$(this).replaceWith(eval(remRules))});
									}
								}
								//end clear
								
								selHTML = el.innerHTML;
								var resel = createElementFromString(wbbStringFormat("{htmlOpen}{txt}{htmlClose}",{htmlOpen:opt.htmlOpen,htmlClose:opt.htmlClose,txt:selHTML}));
								
								if (replaceNode) {
									$(replaceNode).replaceWith(resel);
								}else{
									selection.overrideWithNode(resel,null);
								}
								$(iFrameDoc).attr("wbb","true");
								
								selection.setSelection(null,resel,0,0);
								
							}
						}
						
					}
				}
				this.queryState = function(opt) {
					var bbcode = opt.bbName;
					var tagfilter = opt.rootNode;
					return isContaining(tagfilter,bbcode,selection.getNode());
				}
			},
			"linkCommand": function () {
				//var bbcode="url";
				this.execute = function(opt) {
					if (bbmode) {
						txtArea.focus();
						var bbcode = opt.bbName;
						if (checkBBContain(bbcode)) {
							//remove bb
							removeBBCode(bbcode);
						}else{
							var initialUrl = "http://";
							var url = window.prompt("Введите адрес ссылки:", initialUrl);
							if (url===null) return;
							if (url!="") {
								setBBCode(opt,{href:url});
							}
						}
					}else{
						iFrameBody.focus();
						var a = getContaining("a");
						var saveButton = (a) ? "Обновить ссылку":"Вставить ссылку";
						var removeStyle= a ? "":"display:none";
						var adata = a ? $(a).text():selection.getText();
						
						selection.saveRange(); //save current range status
						
						var $ahtml = $(wbbStringFormat('<table class="veditor-addlink-window" cellpadding="0" cellspacing="10"><tr><td class="right"><label class="tbl-label">Отображаемый текст</label></td><td><input type="text" id="veditor_atitle" style="width:300px" value="{atext}" /></td></tr><tr><td class="right"><label class="tbl-label">URL ссылки</label></td><td><input type="text" style="width:300px" id="veditor_ahref" value="{ahref}" placeholder="http://"  /></td></tr><tr><td></td><td><div class=""><button class="wbb-okbtn" style="padding:3px 15px;float:left;margin-right:15px;"  unselectable="on">{saveButton}</button><button class="wbb-redbtn" style="padding:3px 15px;float:left;{removeStyle}" unselectable="on">Убрать ссылку</button></div></td></tr></table>',{saveButton:saveButton,removeStyle:removeStyle,atext:adata,ahref:$(a).attr("href")}));
						
						
						
						$ahtml.find("button.wbb-okbtn").click(function() {
							//submit link event
							var $atitle = $ahtml.find("#veditor_atitle");
							var $ahref = $ahtml.find("#veditor_ahref")
							$ahtml.find("span.inperr").remove();
							if ($atitle.val()=="") {
								$atitle.after('<span class="inperr">Текст ссылки не может быть пустым.</span>');
								$atitle.focus();
								return;
							}
							if (!$ahref.val().match(/https*\:\/\//g)) {
								$ahref.after('<span class="inperr">Неправильный формат ссылки.<br/> <span style="color:#666">Пример: http://www.wysibb.com</span></span>');
								$ahref.focus();
								return;
							}
							//iFrameBody.focus();
							
							var elem = iFrameDoc.createElement("A");
							elem.setAttribute("href",$ahref.val());
							elem.innerHTML = $atitle.val();
							
							selection.overrideWithNode(elem,selection.getSavedRange(),"a");
							
							$(document).unbind("mousedown");
							$ahtml.find("#veditor_ahref").unbind("keyup change");
							
							$("#wbbModalWindow").hide();
							iFrameBody.focus();
						})
						$ahtml.find("button.wbb-redbtn").click(function() {
							//remove link event
							var a = selection.getNodeByRange(selection.getSavedRange());
							selection.overrideWithNode($(a).html(),selection.getSavedRange(),"a");
							$("#wbbModalWindow").hide();
							iFrameBody.focus();
						})
						
						showModalWindow("Вставка ссылки",$ahtml);
						
						$ahtml.find("#veditor_ahref").bind("keyup change",function() {
							if ($(this).val()=='' || (($(this).val().indexOf($('#veditor_atitle').val())!=-1 || $('#veditor_atitle').val().indexOf($(this).val())!=-1) && $(this).val().length>$('#veditor_atitle').val().length)) {
								$('#veditor_atitle').val($(this).val());
							}
						}).focus();
						
					}
				};
				this.queryState = function(opt) {
					var bbcode = opt.bbName;
					return isContaining("a",bbcode,selection.getNode());
				};
			},
			"imgCommand": function (imgBrowser) {
				this.execute = function(opt) {
					if (bbmode) {
						txtArea.focus();
						var bbcode = opt.bbName;
						if (checkBBContain(bbcode)) {
							//remove bb
							removeBBCode(bbcode);
						}else{
							if (!$.isFunction(imgBrowser)) {
								imgBrowser = promptImageBrowser;
							}
							var callback = function(img) {
								setBBCode(opt,{src:img.url}) 
							}
							imgBrowser({ callback: callback });
						}
					}else{
						iFrameBody.focus();
						var img = getContaining("img");
						
						selection.saveRange();

						if (!$.isFunction(imgBrowser)) {
							imgBrowser = niceImageBrowser;
						}
						var callback = function(r) {
							var elem;
							if (r.thumb && opt.uploader.useThumb) {
								elem = createElementFromString(wbbStringFormat('<a href="{img}"><img src="{thumb}" /></a>',r),iFrameDoc);
							}else{
								elem = createElementFromString(wbbStringFormat('<img src="{img}" />',r),iFrameDoc);
							}
							selection.overrideWithNode(elem,selection.getSavedRange());
						}
						imgBrowser({ callback: callback, url: $(img).attr('src'),uploader:opt.uploader})
					}
				};
				this.queryState = function(opt) {
					if (bbmode) {
						//highlite img only in bbmode
						return checkBBContain("img");
					}
					return false;
				};
			},
			"TableCommand": function () {
				this.execute = function(rows,cols) {
					if (bbmode) {
						var bbcode = "[table]\n";
						for (var i=1; i<=rows; i++) {
							bbcode+=" [tr]\n";
							for (var j=1; j<=cols; j++) {
								bbcode+="  [td][/td]\n";
							}
							bbcode+=" [/tr]\n";
						}
						bbcode+="[/table]";
						var cursel = selection.getTextWithInfo();
						txtArea.value = txtArea.value.substr(0,cursel.start)+bbcode+txtArea.value.substr(cursel.end,(txtArea.value.length-cursel.end));
					}else{
						var $tbl = $(createElementFromString(wbbStringFormat('<table class="wbbtable" cellpadding="0" cellspacing="5"></table>')));
						for (var i=1; i<=rows; i++) {
							var $tr = $("<tr></tr>").appendTo($tbl);
							for (var j=1; j<=cols; j++) {
								var $td = $("<td>\uFEFF</td>").appendTo($tr);
							}
						}
						selection.overrideWithNode($tbl.get(0),null);
					}
				};
				this.queryState = function(opt) {
					return (bbmode) ? checkBBContain("table"):getContaining("table");
				};
			},
			"smileCommand": function () {
				this.execute = function(opt) {
					if (bbmode) {
						txtArea.focus();
						setBBCode(opt,null);
					}else{
						iFrameBody.focus();
						selection.overrideWithNode(wbbStringFormat(opt.img,options));
					}
				};
				this.queryState = function() {
					return false;
				};
			},
			"justifyCommand": function () {
				this.execute = function(opt) {
					if (bbmode) {
						txtArea.focus();
						setBBCode(opt,null);
					}else{
						iFrameBody.focus();
						var c = getContaining(opt.rootNode);
						if (c) {
							$(c).replaceWith($(c).html());
							$(c).replaceWith($(c).html());
						}else{
							var pblock = getContaining(".wbb-left,.wbb-center,.wbb-right");
							var sHTML = selection.getHTML();
							var crnode;
							if (pblock) {
								crnode = createElementFromString(wbbStringFormat("{htmlOpen}{txt}{htmlClose}",{htmlOpen:opt.htmlOpen,htmlClose:opt.htmlClose,txt:$(pblock).html()}));
								$(pblock).replaceWith(crnode);
							}else{
								crnode = createElementFromString(wbbStringFormat("{htmlOpen}{txt}\uFEFF{htmlClose}",{htmlOpen:opt.htmlOpen,htmlClose:opt.htmlClose,txt:sHTML}));
								selection.overrideWithNode(crnode);
							}
							selection.setSelection(null,crnode,0,0);
						}
					}
				};
				this.queryState = function(opt) {
					return isContaining(opt.rootNode,opt.bbName,selection.getNode());
				};
			}
		}
		
		
		function CommandController(command, el, opt) {
			this.updateUI = function() {
				var state = command.queryState(opt);
				if (state) {$(el).addClass("on")}
				else{$(el).removeClass("on")}
			}
			
			$(el).attr("unselectable","on");
			$(el).find("*").attr("unselectable","on");
			$(el).live("mousedown", function(event) { 
				if (event.preventDefault) event.preventDefault();
			});		
			
			$(el).live('click',function(evt) {
				command.execute(opt);
				updateToolbar();
				checkForBR();
			});
		}
		function SelectController(optlist, el,sopt) {
			//el - select box
			var cList=[];
			var clearList = [];
			this.updateUI = function() {
				$(el).find(".sel-value").html(sopt.title);
				$(optlist).each(function(idx,e) {
					var command = cList[e.option].cmd;
					var opt = cList[e.option].opt;
					var state = command.queryState(opt);
					if (state===true && !opt.isDefault) {
						$(el).find(".sel-value").html(opt.title);
						return false;
					}
				});
			}
			
			$(el).attr("unselectable","on");
			$(el).find("*").attr("unselectable","on");
			$(el).live("mousedown", function(event) { 
				if (event.preventDefault) event.preventDefault();
			});		
			
			if (optlist.length>0) {
				
				for (var i=0; i<optlist.length; i++) {
					var optrow = optlist[i].opt;
					var elrow = optlist[i].el;
					var optname = optlist[i].option;
					
					var funcname = optrow.command.replace(/new\s+(\w+)(.*)/i,"$1");
					var args = optrow.command.replace(/new\s+\w+\((.*)\)/i,"$1").replace(/\"/g,"").split(",");
					var c={};
					commandList[funcname].apply(c,args);
					
					cList[optname] = {cmd:c,opt:optrow};
					
					
					clearList[clearList.length] = optrow;
					$(elrow).attr("optname",optname).live('click',function() {
						
						var oname = $(this).attr("optname");
						cList[oname].cmd.execute(cList[oname].opt,clearList);
						$(el).find(".sel-value").html(cList[oname].opt.title);
					});
				}
			}
			
		}
		function ColorPickerController(colorlist, el,sopt) {
			//el - colorpicker
			var cList=[];
			this.updateUI = function() {
				$(el).find(".val-line").css("background-color","#000000");
				$(colorlist).each(function(idx,color) {
					var command = cList[color].cmd;
					var state = command.queryState(cList[color].opt);
					if (state===true) {
						$(el).find(".val-line").css("background-color",color);
						return false;
					}
				});
				
			}
			
			$(el).attr("unselectable","on");
			$(el).find("*").attr("unselectable","on");
			$(el).live("mousedown", function(event) { 
				if (event.preventDefault) event.preventDefault();
			});		
			
			if (colorlist.length>0) {
				for (var i=0; i<colorlist.length; i++) {
					var colorname = colorlist[i];
					
					
					var cmd = wbbStringFormat(sopt.command,{color:colorname});
					var funcname = cmd.replace(/new\s+(\w+)(.*)/i,"$1");
					var args = cmd.replace(/new\s+\w+\((.*)\)/i,"$1").replace(/\"/g,"").split(",");
					var c={};
					commandList[funcname].apply(c,args);
					cList[colorname] = {cmd:c,opt:sopt};
					//cList[colorname] = {cmd:eval(wbbStringFormat(sopt.command,{color:colorname})),opt:sopt};
				}
				$(el).find("div.scolor").live("click",function() {
					var colorname = $(this).attr("title");
					cList[colorname].cmd.execute(cList[colorname].opt);
					updateToolbar();
				});
				
				$(el).find("div.nocolor").live("click",function() {
					var colorname = "#000000";
					cList[colorname].cmd.execute(cList[colorname].opt);
					updateToolbar();
				});
			}
			
		}
		function TableController(el, opt) {
			var command = new commandList["TableCommand"];
			this.updateUI = function() {
				var state = command.queryState(opt);
				if (state) {$(el).addClass("on")}
				else{$(el).removeClass("on")}
			}
			
			$(el).attr("unselectable","on");
			$(el).find("*").attr("unselectable","on");
			$(el).live("mousedown", function(event) { 
				if (event.preventDefault) event.preventDefault();
			});		
			
			$(el).find(".tbl-sel").live('click',function(evt) {
				var t = $(this).attr("title");
				var rl = t.split(",");
				iFrameBody.focus();
				command.execute(rl[0],rl[1]);
				updateToolbar();
				checkForBR();
			});
		}
		function updateToolbar() {
			$(updateListeners).each(function(idx,controller){
				controller.updateUI();
			});
		}
		function promptImageBrowser(opt) {
			var initialUrl = "http://";
			var url = window.prompt("Введите адрес изображения:", initialUrl);
			if (url===null) return;
			opt.callback({ url: url })
		}
		function niceImageBrowser(opt) {
			var imgpreview = opt.url ? opt.url:wbbStringFormat("{themePrefix}{themeName}/img/imgpreview.png",options);
			var saveButton= opt.url ?"Обновить изображение":"Вставить изображение";
			var uploadurl = wbbStringFormat(opt.uploader.uploadurl,options);
			
			var op = {
				"url": { 
					"class": (opt.uploader.defaultType==1 || !opt.uploader.enable) ? "active":"",
					"style": (opt.uploader.defaultType==1 || !opt.uploader.enable) ? "":"display:none"
				},
				"upload": { 
					"class": (opt.uploader.defaultType==2 && opt.uploader.enable) ? "active":"",
					"listyle": (!opt.uploader.enable) ? "display:none":"",
					"style": (opt.uploader.defaultType==2 && opt.uploader.enable) ? "":"display:none"
				}
				
			}
			
			var defaultType = opt.uploader.defaultType;
			if (!opt.uploader.enable) {defaultType=1;}

			
			var $ahtml = $(createElementFromString(wbbStringFormat('<div><ul class="wbb-imagemenu"><li  class="{op.url.class}" onClick="$(this).parent().find(\'li.active\').removeClass(\'active\');$(this).addClass(\'active\').parent().next(\'.url-image\').show().next(\'.local-img\').hide();"><span>Ввести URL</span></li><li class="{op.upload.class}" style="{op.upload.listyle}" onClick="$(this).parent().find(\'li.active\').removeClass(\'active\');$(this).addClass(\'active\').parent().next(\'.url-image\').hide().next(\'.local-img\').show()"><span>Загрузить файл</span></li> </ul> <div class="url-image" style="{op.url.style}"> <table class="veditor-addlink-window" cellpadding="0" cellspacing="10"> <tbody> <tr> <td class="center"> <table cellpadding="0" cellspacing="0" class="imgpreview"> <tbody> <tr> <td> <img id="imgpreview" src="{imgpreview}" /> </td> </tr> </tbody> </table> </td> <td> <label class="tbl-label" style="display:block">URL изображения</label> <input type="text" id="veditor_img" style="width:300px" value="{img}" /> <div> <button id="save1" class="wbb-okbtn" style="padding:3px 15px;margin-top:15px;">{saveButton}</button> </div> </td> </tr> </tbody> </table> </div>  <div style="{op.upload.style}" class="local-img"> <form id="fupform" class="upload" action="{uploadurl}" method="post" enctype="multipart/form-data" target="fupload"><input type="hidden" name="iframe" value="1"/><input type="hidden" name="idarea" value="{idarea}" /><div class="p">Перетащите изображение сюда</div> <div class="p2">или</div> <div class="fileupload"> <input id="fileupl" class="file" type="file" name="img" /><span  id="nicebtn" class="wbb-okbtn">Выберите изображение для загрузки</span> </div> </form> </div><iframe id="fupload" name="fupload" src="about:blank" frameborder="0" style="width:0px;height:0px;display:none"></iframe></div>',{saveButton:saveButton,imgpreview:imgpreview,img:opt.url,uploadurl:uploadurl,op:op,idarea:idarea}),document));
			
		
			
			showModalWindow("Вставить изображение",$ahtml);
			$ahtml.find("#save1").click(function() {
				//submit image
				iFrameBody.focus();
				$ahtml.find("span.inperr").remove();
				var $imgsrc = $ahtml.find("#veditor_img");
				if (!$imgsrc.val().match(/https*\:\/\//g)) {
					$imgsrc.after('<br/><span style="color:red;font-size:0.9em">Неправильный формат адреса изображения.</span>');
					return;
				}
				// callback call
				opt.callback({ img: $imgsrc.val() });
				$("#wbbModalWindow").hide();
				$(document).unbind("mousedown");
				$ahtml.find("#veditor_img").unbind("keyup change");
			});
			
			//init drag&drop iamge upload
			if (typeof(window.FileReader) == 'undefined') {
				$.log('Drag&Drop не поддерживается браузером!');
				$ahtml.find(".local-img .p, .local-img .p2").hide();
				$ahtml.find(".fileupload").css("margin-top","30px");
			}else{
				var $dropZone = $ahtml.find('.local-img');
				$dropZone[0].ondragover = function() {
					$dropZone.addClass('hover');
					return false;
				};
				$dropZone[0].ondragleave = function() {
					$dropZone.removeClass('hover');
					return false;
				};
				
				$dropZone[0].ondrop = function(e) {
					e.preventDefault();
					$dropZone.removeClass('hover');
					
					var file = e.dataTransfer.files[0];
					if (file) {
						if (file.name.match(/\.(jpg|png|jpeg|gif)$/)) {
							//ok,submit img
							var err = function() {
								$dropZone.addClass('droperr');
								$ahtml.find(".local-img .err").remove();
								$ahtml.find(".local-img").append('<span class="err">Во время загрузки изображения произошла ошибка.</span>')
							}
							fileUpload(uploadurl,file,opt,err);
							
							$ahtml.find(".local-img").html(wbbStringFormat('<div class="loader"><img src="{themePrefix}/{themeName}/img/loader.gif" /><br/>Загрузка файла</div>',options));
							
						}else{
							$ahtml.find(".local-img .err").remove();
							$ahtml.find(".local-img").append('<span class="err">Можно загружать только файлы с расширением jpg,png,gif.</span>');
							$dropZone.addClass('droperr');
						}
					}else{
						$dropZone.addClass('droperr');
						$ahtml.find(".local-img .err").remove();
						$ahtml.find(".local-img").append('<span class="err">Файл не выбран.</span>');
					}
				};
			}
			if ($.browser.msie) {
				//msie not posting form, by security reason. show default input field
				$ahtml.find("#nicebtn").hide();
				$ahtml.find("#fileupl").css("opacity","1");
			}
			$ahtml.find("#fileupl").bind("change",function() {
				$("#fupform").submit();
			});
			
			$ahtml.find("form.upload").bind("submit",function() {
				//submit event
				$ahtml.find(".local-img").hide().after(wbbStringFormat('<div class="local-img"><div class="loader"><img src="{themePrefix}/{themeName}/img/loader.gif" /><br/>Загрузка файла</div></div>',options));
				return true;

			});

			
			
			$ahtml.find("#veditor_img").bind("keyup change",function() {
				$('#imgpreview').attr("src",($(this).val()));
			}).focus();
		}
		function setBBCode(opt,params) {
			var cursel = selection.getTextWithInfo();
			var bbOpen = (opt.bbOpen) ? opt.bbOpen:"";
			var bbClose = (opt.bbClose) ? opt.bbClose:"";
			var bbcode = (opt.bbcode) ? opt.bbcode:"";
			
			if (opt.skipSelectRange===true) {cursel.text="";}
			var bbstring="";
			if (bbcode!="") {
				//smile bbcode
				bbstring = bbcode;
			}else{
				bbstring = wbbStringFormat(bbOpen+cursel.text+bbClose,params);
			}
			txtArea.value = txtArea.value.substr(0,cursel.start)+bbstring+txtArea.value.substr(cursel.end,(txtArea.value.length-cursel.end));
			if (opt.bbName!="url" && opt.bbName!="img" && (!cursel || cursel.length==0)) {
				selection.setRange(cursel.start + bbstring.length-(bbClose.length));
			}
		}
		function checkBBContain(bbcode) {
			var cursel = selection.getTextWithInfo();
			var txtvalue = txtArea.value.substr(0,cursel.start);
			var bbpattern = new RegExp("\\[(.*?)\\]","mgi");
			var contain=0;
			var aMatch;
			while (aMatch = bbpattern.exec(txtvalue)){
				var bb = aMatch[1];
					bb = bb.replace(/=.*/,"");
				var isCloseBB = bb.substr(0,1)=="/";
				var clearBB = bb.replace("/","");
				if (clearBB.toLowerCase()==bbcode.toLowerCase()) {
					if (!isCloseBB) {
						contain++;
					}else{
						contain--;
					}
				}
			}
			return (contain>0);
		}
		function isContaining(parentsel,bbcode,el) {
			if (bbmode) {
				return checkBBContain(bbcode);
			}else{
				return ($(el).is(parentsel) || $(el).parents(parentsel).size()>0);
			}
		}
		function getContaining(psel,rng) {
			if (!rng) {
				rng = selection.getRange();
			}
			var el = selection.getNodeByRange(rng);
			while (el && el.tagName!="BODY") {
				if ($(el).is(psel)) {return el};
				if (el) {el = el.parentNode;}
				else{return null;}
			}
			return null;
		}
		function removeBBCode(bbcode) {
			var cursel = selection.getTextWithInfo();
			var beforeTxt = txtArea.value.substr(0,cursel.start);
			var afterTxt = txtArea.value.substr(cursel.end,(txtArea.value.length-cursel.end));
			var bbpatternOpenBB = new RegExp("\\["+bbcode+"(?:\\=http.*?)*\\](.*?)$","i");
			var bbpatternCloseBB = new RegExp("^(.*?)\\[\\/"+bbcode+"\\]","i");
			
			beforeTxt = beforeTxt.replace(bbpatternOpenBB,"$1");
			afterTxt = afterTxt.replace(bbpatternCloseBB,"$1");
			
			txtArea.value = beforeTxt+cursel.text+afterTxt;
		}
		function modeSwitch(btn) {
			if (bbmode) {
				bbmode=false;
				$iFrameBody.html(transformBBtoHTML($txtArea.val()));
				$iFrame.show();
				$txtArea.hide().val("");
				$(btn).removeClass("on");
				
			}else{
				bbmode=true;
				if (iFrameBody && iFrameBody.lastChild && iFrameBody.lastChild.nodeName.toLowerCase()=="br") {
					$(iFrameBody.lastChild).remove();
				}
				$txtArea.val(transformHTMLtoBB(iFrameBody));
				$iFrame.hide();
				$txtArea.show();
				$(btn).addClass("on");
			}
		}
		function transformHTMLtoBB(rootel) {
			var outbb="";
			clearEmpty(iFrameBody);
			var cloneObj = 	$(rootel).clone();
			
			//smileTransform
			for (var i in options.smileList) {
				var imgrow = options.smileList[i];
				var bbcode = imgrow.bbcode; 
				var imgdom = (imgrow && imgrow.img) ? imgrow.img:"";
				var search_img = $(imgdom);
				cloneObj.find("img").each(function() {
					if ($(this).attr("src")==search_img.attr("src")) {
						$(this).replaceWith(bbcode);
					}
				});
			}
			
			//tagTransform
			for (var i=0; i<enabledButtons.length; i++) {
				var currow = options.allButtons[enabledButtons[i]];
				var htmlToBB = currow.htmlToBB;
				for (var matchel in htmlToBB) {
					var bbrepl = htmlToBB[matchel];
					//$.log("Match: '"+matchel+"' bb: '"+bbrepl+"'");
					cloneObj.find(matchel).each(function(idx,el) {
						var bbReplCopy = bbrepl;
						bbReplCopy = bbReplCopy.replace(/\%(.*?)\%/g,function(rpl) {
							rpl = rpl.substr(1,rpl.length-2);
							rpl = rpl.replace("this","el");
							try{
								return eval(rpl);
							}catch (e) {return $(el).html();}
						});
						$(el).replaceWith("<span>"+bbReplCopy+"</span>");
					});
				}
			}
			
			//clear mustremoved
			cloneObj.find("*[mustremoved='1']").remove();
			
			//br transform
			cloneObj.contents().each(function() {
				if (this.nodeType===3) {
					var addtext = $(this).text();
					//addtext = addtext.replace(/\n+/g,"");

					outbb+=addtext;
				}else{
					//fix problems with breakeline
					if ($(this)[0].tagName) {
						var elname = $(this)[0].tagName.toLowerCase();
						if (elname=="br") {
							outbb+="\n";
							return true;
						}
						/* else if (elname=="p") {
							if ($(this).prev()[0]) {
								outbb+="\n"; 
							}
							outbb+=transformHTMLtoBB(this); //process text
							outbb+="\n";  //after insert
							return true;
						} */
						outbb+=transformHTMLtoBB(this);
					}
					
				}
	
			});
			return outbb;
		}
		function transformBBtoHTML(bbtext) {
			var html=bbtext;
			
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
			for (var i=0; i<options.smileList.length; i++) {
				var repl = options.smileList[i];
				var smbb = repl.bbcode;
				if (repl && repl.img) {
					smbb = smbb.replace(/([^a-z0-9])/gi,"\\$1");
					var bregexp = new RegExp(smbb,"mg");
					html = html.replace(bregexp,repl.img);
				}
			}
			for (var i=0; i<enabledButtons.length; i++) {
				var currow = options.allButtons[enabledButtons[i]];
				var bbToHTML = currow.bbToHTML;

				if (!bbToHTML) {
					$.log("Create bbtHTML");
					bbToHTML = {};
					var bbkey = currow.bbOpen+"(.*?)"+currow.bbClose;
					var bbrepl = currow.htmlOpen+"$1"+currow.htmlClose;
					bbToHTML[bbkey]=bbrepl;
				}

				for (var bbreg in bbToHTML) {
					
					var repl = bbToHTML[bbreg];
					bbreg = bbreg.replace(/\*\]/g,"\\*]")
						.replace(/\[/g,"\\[")
						.replace(/\]/g,"\\]")
						.replace(/\\\[\\\[/g,"[")
						.replace(/\\\]\\\]/g,"]");
					var bregexp = new RegExp(bbreg,"gmi");
					html = bbReplace(html,bregexp,repl);
					//html = html.replace(bregexp,repl);
				}
			}
			
			//clear br's
			var resobj = $("<div>"+html+"</div>");
			resobj.find("ul > br,table > br, tr > br").each(function(idx,el) {
				$(el).remove();
			});
			
			return resobj.html();
		}
		function initSelection() {
			this.getNode = function(withTextNodes) {
				//get current selection node
				if (bbmode) {txtArea.focus();return txtArea;
				}else{
					var elem=null;
					if (window.getSelection) {
						elem = this.getRange().commonAncestorContainer;
					}else{
						//IE
						elem = this.getRange().parentElement();
					}
					elem = (!withTextNodes && elem.nodeType===3) ? elem.parentNode:elem;
					return elem;
				}
			}
			this.getNodeByRange = function (rng) {
				var elem=null;
				if (window.getSelection) {
					elem = rng.commonAncestorContainer;
				}else{
					//IE
					elem = rng.parentElement();
				}
				elem = (elem.nodeType===3) ? $(elem).parent().get(0):elem;
				return elem;
			}
			this.getText = function() {
				//get current selection text
				if (bbmode) {
					return this.getTextWithInfo().text;
				}else{
					if (window.getSelection) {
						return this.getRange().toString();
					}else{
						return this.getRange().text;
					}
				}
			}
			this.getHTML = function () {
				var userSelection;
				if (iFrameWindow.getSelection) {
					// W3C Ranges
					userSelection = iFrameWindow.getSelection();
					// Get the range:
					var range;
					if (userSelection.getRangeAt) {
						range = userSelection.getRangeAt(0);
					}else{
						range = iFrameDoc.createRange();
						range.setStart (userSelection.anchorNode, userSelection.anchorOffset);
						range.setEnd (userSelection.focusNode, userSelection.focusOffset);
					}
					// And the HTML:
					var clonedSelection = range.cloneContents();
					var div = document.createElement ('div');
					div.appendChild(clonedSelection);
					return div.innerHTML;
				} else if (iFrameDoc.selection) {
				// Explorer selection, return the HTML
					userSelection = iFrameDoc.selection.createRange();
					return userSelection.htmlText;
				} else {
					return '';
				}
			}
			this.getRange = function() {
				//work in html mode
				if (window.getSelection) {
					iFrameBody.focus();
					return iFrameWindow.getSelection().getRangeAt(0);
				}else{
					//IE
					var range = iFrameWindow.document.selection.createRange();
					if (range) {
						return range;
					}
				}
			}
			this.getTextWithInfo = function() {
				//get current selection text and info, work only in bbmode
				if('selectionStart' in txtArea && bbmode) {
					var l = txtArea.selectionEnd - txtArea.selectionStart;
					return { start: txtArea.selectionStart, end: txtArea.selectionEnd, length: l, text: txtArea.value.substr(txtArea.selectionStart, l)};
				}else if (document.selection && bbmode){
					//IE
					txtArea.focus();
					var r = document.selection.createRange();
					var tr = txtArea.createTextRange();
					var tr2 = tr.duplicate();
					tr2.moveToBookmark(r.getBookmark());
					tr.setEndPoint('EndToStart',tr2);
					if (r == null || tr == null) return { start: txtArea.value.length, end: txtArea.value.length, length: 0, text: '' };
					var text_part = r.text.replace(/[\r\n]/g,'.'); //for some reason IE doesn't always count the \n and \r in the length
					var text_whole = txtArea.value.replace(/[\r\n]/g,'.');
					var the_start = text_whole.indexOf(text_part,tr.text.length);
					return { start: the_start, end: the_start + text_part.length, length: text_part.length, text: r.text };
				}else return { start: e.value.length, end: e.value.length, length: 0, text: '' };
			};
			this.setRange = function(pos) {
				if (bbmode) {
					if (window.getSelection) {
						txtArea.selectionStart=pos;
						txtArea.selectionEnd=pos;
					}else{
						var range = txtArea.createTextRange();
						range.collapse(true);
						//range.moveStart('character', pos);
						//range.moveEnd('character', pos);
						range.move('character', pos);
						
						range.select();
					}
				}
			}
			this.overrideWithNode = function(node,rng,removeSelector) {
				if (!rng) {
					rng = this.getRange();
				}
				iFrameBody.focus();
				var w3c_selection = (window.getSelection) ? true:false;
				var sel = selection.get();
				var rootNode = this.getNodeByRange(rng);
				
				//fix if node is text
				if (typeof(node)=="string") {
					node = createElementFromString(node);
				}
				var $wnode = $(node);
				var wnode = $wnode.get(0);
				if (removeSelector) {
					//check for node override
					var containNode = getContaining(removeSelector,rng);
					if (containNode) {
						$(containNode).remove();
					}
				}
				
				if (w3c_selection) {
					rng.deleteContents();
				}
				
				if (w3c_selection) {
					
					rng.insertNode(wnode);
					rng.setStartAfter(wnode);
					rng.setEndAfter(wnode);
					
					sel.removeAllRanges();
					sel.addRange(rng);
					
				}else{
					rng.pasteHTML(wnode.outerHTML);
					rng.collapse();
					rng.select();
				}
				
				/* if ($wnode.is("div,blockquote,table")) {
					$wnode.after("<br/>");
				} */
				
				updateToolbar();
				return wnode;
			}
			this.lastRange=null;
			this.get = function() {
				return (window.getSelection) ?  iFrameWindow.getSelection():iFrameWindow.document.selection;
			}
			this.saveRange = function() {
				if (window.getSelection) {
					this.lastRange=this.getRange().cloneRange();
				}else{
					this.lastRange=this.getRange();
				}
			}
			this.getSavedRange = function() {
				return this.lastRange;
			}
			this.setSelection = function(rng,node,start,stop) {
				var sel = selection.get();
				if (!rng) {
					rng = this.getRange();
				}
				var w3c_selection = (window.getSelection) ? true:false;
				if (w3c_selection) {
					//rng.selectNodeContents(node);
					if (start && stop) {
						rng.setStart(node,start);
						rng.setEnd(node,stop);
					}else{
						rng.selectNodeContents(node);
					}
					
					sel.removeAllRanges();
					sel.addRange(rng);
					
				}else{
					if (node) {
						rng.moveToElementText(node);
						if (start>=0 && stop>=0) {
							rng.moveStart('character',start);
							rng.moveEnd ('character',stop);
						}
						rng.select();
					}
				}
			}
		}
		function sanitizeHTML(rootEl) {
			$(rootEl).find("*").filter(function() {
				var elname = $(this)[0].tagName.toLowerCase();
				if ($.inArray(elname,options.validTags)==-1) {
					$(this).after(this.innerHTML);
					return true;
				}else{
					var tag=this;
					var attributes = $.map(this.attributes, function(item) {
						return item.name;
					});
					$.each(attributes, function(i, item) {
						if (item!="href" && item!="src" && item!="class") {
							$(tag).removeAttr(item);
						}
					});
				}
				return false;
			}).remove();
			
		}
		function smileAutoDetect() {
			var smList=new Array();
			var $sm1 = $("a img[alt=':)']");
			var $sm2 = $("a img[alt=';)']");
			
			if ($sm1.size()>0 && $sm2.size()>0) {
				//find common parent
				var commonParent;
				var $sm2parents = $sm2.parents();
				$sm1.parents().each(function(idx,el) {
					$sm2parents.each(function(idx2,el2) {
						if (el==el2) {
							commonParent=el;
							return false;
						}
					});
					if (commonParent) {
						return false;
					}
				})
				
				$(commonParent).find("img[alt!='']").each(function(idx,el) {
					var title = $(el).attr("title");
					var bbcode = $(el).attr("alt");
					var imghtml = el.outerHTML;
					if (title && bbcode) {
						smList.push({title:title,img:imghtml,bbcode:bbcode});
					}
				});
			}
		
			if (smList.length>5) {
				options.smileList = smList;
			}
		}
		function smileSort() {
			var bblist = {};
			var bbcodes=new Array();
			for (var i=0; i<options.smileList.length; i++) {
				var cursm=options.smileList[i];
				
				cursm.img = cursm.img.replace(cursm.bbcode,"");
				bblist[cursm.bbcode] = cursm;
				bbcodes.push(cursm.bbcode);
			}
			bbcodes.sort(function (a,b) {
				return ((a.length > b.length) ? -1:1)
			});
			var newSmileList = new Array();
			for (var i=0; i<bbcodes.length; i++) {
				var bbcode = bbcodes[i];
				newSmileList.push(bblist[bbcode]);
			}
			options.smileList = newSmileList;
		}
		function bbReplace(str,regexp,repl) {
			while (str.match(regexp)) {
				str=str.replace(regexp,repl);
			}
			return str;
		}
		function initFormSubmit() {
			$.log("initFormSubmit");
			$txtArea.parents("form").bind("submit",function() {
				try {
					if (!bbmode) {
						if (iFrameBody && iFrameBody.lastChild && iFrameBody.lastChild.nodeName.toLowerCase()=="br") {
							$(iFrameBody.lastChild).remove();
						}
						$txtArea.val(transformHTMLtoBB(iFrameBody));
					}
					return true;
				}catch(e){
					$iFrame.after('<div style="color:red;font-siz:10px;padding:10px;">Ошибка при формировании bbcode.</div>"')
					return false;
				}
			})
		}
		function tagKnife(tree,rootSelector) {
			$.log("is is text, multievents");
							
			var nd = selection.getNode();
			var ndHTML = selection.getHTML();
			var $nd = $(nd);
			
			var rnd = Math.floor(Math.random(0,10000)*1000);
			selection.overrideWithNode(wbbStringFormat("<span sl=\"{rnd}\"></span>",{rnd:rnd}));
			
			var $rootND = $nd.closest(rootSelector);
			
			var $bf = $rootND.clone(true);
			var $af = $rootND.clone(true);
			
			if (ndHTML.indexOf(">")==-1 || ndHTML.indexOf("</")==-1) {
				//it is plain text, check for parent tags
				var txtNode = iFrameDoc.createTextNode(ndHTML);
				$nd.parents().each(function() {
					if (!$(this).is(rootSelector)) {
						$.log("Parent: "+this.tagName);
						var $p = $(this).clone().empty();
						$p.append(txtNode);
						txtNode = $p.get(0);
					}else{
						return false;
					}
				});
				ndHTML = (txtNode.nodeType==3) ? txtNode.textContent:txtNode.outerHTML;
				//$.log(ndHTML);
			}else{
				if (!$nd.is(rootSelector)) {
					ndHTML = $nd.clone().empty().append(ndHTML).get(0).outerHTML;
				}
			}
			
			
			var remove=false;
			//before remove
			$bf.contents().filter(filterCheckBefore).remove();
			function filterCheckBefore(idx) {
				if ($(this).attr("sl")==rnd) {
					remove=true;
					return true;
				}else if ($(this).find('*[sl="'+rnd+'"]').size()!=0) {
					$(this).contents().filter(filterCheckBefore).remove();
					return false;
				}
				return remove;
			}
			
			remove=true;
			//$af.contents().filter(filterCheckAfter).remove().end().find("*").contents().filter(filterCheckAfter).remove();
			$af.contents().filter(filterCheckAfter).remove();
			function filterCheckAfter(idx) {
				//$.log(this);
				if ($(this).attr("sl")==rnd) {
					//$.log("Find node: "+this);
					remove=false;
					return true;
				}else if ($(this).find('*[sl="'+rnd+'"]').size()!=0) {
					//$.log("Find parent [after]:"+this);
					$(this).contents().filter(filterCheckAfter).remove();
					return false;
				}
				return remove;
			}
			
			$rootND.before($bf).after($af).replaceWith(ndHTML);
			//selection.setSelectionAfterNode($af.get(0));
			/* $.log($bf.get(0));
			$.log($rootND.get(0));
			$.log($af.get(0)); */
			clearEmpty(iFrameBody);
		}
		function clearEmpty(root) {
			$(root).children().filter(emptyFilter).remove();
			function emptyFilter(idx) {
				if (!$(this).is("span,font")) {
					//clear empty only for span,font
					return false;
				}
				if ($(this).html().length==0) {
					return true;
				}else if ($(this).children().size()>0) {
					$(this).children().filter(emptyFilter).remove();
					if ($(this).html().length==0 && this.tagName!="BODY") {
						return true;
					}
				}
			}
		}
		function createElementFromString(nodestr,doc) {
			if (!doc) {
				doc = iFrameDoc;
			}
			if (nodestr.indexOf("<")!=-1) {
				var el = doc.createElement("SPAN");
				el.innerHTML = nodestr;
				return $(el).children().unwrap().get(0);
			}else{
				var el = doc.createTextNode(nodestr);
				return el;
			}
		}
		function btnToggle(btnSelector,toggleSelector,evt) {
			var $el = $(evt.target).closest(btnSelector);
			if ($el.attr("wbshow")) {
				//hide block
				$el.attr("title",$el.attr("titleoff")).removeAttr("titleoff");
				$el.removeClass("on").removeAttr("wbshow");
				$el.find(toggleSelector).hide();
				$(document).die("mousedown",btnToggleHideEvent);
				$iFrameBody.die('mousedown',btnToggleHideEvent);
			}else{
				//show block
				$el.attr("titleoff",$el.attr("title")).removeAttr("title");
				$el.parent().find(btnSelector).removeClass("on").find(toggleSelector).hide();
				$el.addClass("on").attr("wbshow","1");
				$el.find(toggleSelector).show();
				$(document).live("mousedown",function (e) {btnToggleHideEvent(btnSelector,toggleSelector,e);});
				$iFrameBody.live("mousedown",function (e) {btnToggleHideEvent(btnSelector,toggleSelector,e);});
			}
		}
		function btnToggleHideEvent(btnSelector,toggleSelector,e) {
			if ($(e.target).parents(btnSelector).size()==0) {
				$(window.parent.document.body).find(btnSelector).removeClass("on").find(toggleSelector).hide();
				$(document).die('mousedown',btnToggleHideEvent);
				$iFrameBody.die('mousedown',btnToggleHideEvent);
			}
		}
		function checkForBR() {
			if (!bbmode && iFrameBody && iFrameBody.lastChild && iFrameBody.lastChild.nodeName.toLowerCase()!="br") { //fix br
				$iFrameBody.append("<br/>");
			}
		}
		function colorToHex(color) {
			
			if (color.substr(0, 1) === '#') {
				return color;
			}
			if (color.indexOf("rgb")==-1) {
				//ie
				color = parseInt(color);
				color = ((color & 0x0000ff) << 16) | (color & 0x00ff00) | ((color & 0xff0000) >>> 16);
				return '#'+color.toString(16);
			}
			
			var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
			if (digits) {
				var red = parseInt(digits[2]);
				var green = parseInt(digits[3]);
				var blue = parseInt(digits[4]);
				if (red==0 && green==0 && blue==0) {return "#000000";}
				
				var rgb = blue | (green << 8) | (red << 16);
				var r = rgb.toString(16);
				if (r.length<6) {r="000000"+r;r=r.substr(r.length-6,6);}
				return '#' + r;
			}
		};
		function fileUpload(url,file,opt,err) {
			var xhr = new XMLHttpRequest(); 
			xhr.open("POST", url);
			
			xhr.onreadystatechange = function () {
				if (this.readyState == 4) {
					if(this.status == 200) {
						$.log("Post image: OK");
						var res = $.parseJSON(this.responseText);
						if (res && res.status==1) {
							//file upload sucess;
							$("#wbbModalWindow").hide();
							opt.callback({img: res.image_link, thumb: res.thumb_link});
							updateToolbar();
						}else{
							err.call();
						}
					}else{
						$.log("Post ERROR");
						err.call();
					}
				}
			}
			if($.support.fileSending) {
				// W3C (Chrome, Safari, Firefox 4+)
				$.log("Use formData");
				var formData = new FormData();
				formData.append('img', file);
				formData.append('maxwidth', opt.maxwidth);
				formData.append('maxheight', opt.maxheight);
				xhr.send(formData);
			} else if($.support.fileReading && xhr.sendAsBinary) {
				// firefox < 4      
				$.log("Use custom post");
				var boundary = "xxxxxxxxx";
				xhr.setRequestHeader("Content-Type", "multipart/form-data, boundary="+boundary);
				xhr.setRequestHeader("Cache-Control", "no-cache");						
				xhr.setRequestHeader("Content-Length", file.size);
				var body = "--" + boundary + "\r\n";
				filename = unescape(encodeURIComponent(file.name));
				body += "Content-Disposition: form-data; name='img'; filename='" + filename + "'\r\n";
				body += "Content-Type: application/octet-stream\r\n\r\n";
				body += (file.getAsBinary ? file.getAsBinary() : file.readAsBinary()) + "\r\n";
				body += "--" + boundary + "--";			
				xhr.sendAsBinary(body);
			}
		}
		function autoResize() {
			if (options.autoResize) {
				var h = $iFrame.contents().height();
				$iFrame.height((h>options.maxheight) ? options.maxheight:h);
			}
		}
		
		//shared functions
		this.getBBCode = function () {
			return (bbmode) ? $txtArea.val():transformHTMLtoBB(iFrameBody);
		}
		this.pasteEvent = function(el,evt) {
			$.log(evt);
		}
		this.insertImgWithThumb = function(img,thumb) {
			$("#wbbModalWindow").hide();
			if (bbmode) {
				if (thumb && options.allButtons["img"].uploader.useThumb) {
					bbcode = "[url="+img+"][img]"+thumb+"[/img][/url]";
				}else{
					bbcode = "[img]"+img+"[/img]";
				}
				var cursel = selection.getTextWithInfo();
				txtArea.value = txtArea.value.substr(0,cursel.start)+bbstring+txtArea.value.substr(cursel.end,(txtArea.value.length-cursel.end));
			}else{
				var elem;
				if (thumb && options.allButtons["img"].uploader.useThumb) {
					elem = createElementFromString(wbbStringFormat('<a href="{img}"><img src="{thumb}" /></a>',{img:img,thumb:thumb}),iFrameDoc);
				}else{
					elem = createElementFromString(wbbStringFormat('<img src="{img}" />',{img:img,thumb:thumb}),iFrameDoc);
				}
				selection.overrideWithNode(elem,selection.getSavedRange());
			}
			updateToolbar();
		}
		init();
		
		function wbbStringFormat(template, data) {
			return template.replace(/\{([\w\.]*)\}/g, function (str, key) {var keys = key.split("."), value = data[keys.shift()];$.each(keys, function () { value = value[this]; });return (value === null || value === undefined) ? "" : value;});
		}
		function showModalWindow(title,body) {
			var $mw = $("#wbbModalWindow");
			if ($mw.size()==0) {
				//create mw
				$mw = $(wbbStringFormat('<div id="wbbModalWindow" style="display:none"><div class="modal-title"></div><div class="modal-info"></div><div class="modal-close"><button id="wbbCloseModal" class="wbb-redbtn" style="font-size:0.9em;width:120px;margin:5px auto">Закрыть</button></div></div>'));
				$mw.find("#wbbCloseModal").click(function() {
					$mw.hide();
					$(document).unbind("mousedown",documentClickEventHandler);
				})
				$(document.body).append($mw);
			}
			
			$mw.find(".modal-title").html(title);
			$mw.find(".modal-info").html(body);
			//calculate position
			
			//top: expression(
			//	parseInt(document.documentElement.scrollTop + document.documentElement.clientHeight - this.offsetHeight, 10) + "px"
			//);
			
			$mw.css("margin-top",($mw.outerHeight()/2*(-1))+"px");
			$mw.css("margin-left",($mw.outerWidth()/2*(-1))+"px");
			$mw.css("visibility","visible").css("display","block");
			
			$(document).bind("mousedown",documentClickEventHandler);
		}
		function documentClickEventHandler(e) {
			if ($(e.target).parents("#wbbModalWindow").size()==0) {
				//click on document
				$("#wbbModalWindow").hide();
				$(document).unbind("mousedown",documentClickEventHandler);
			}
		}
	}
	$.fn.skipWBB = function(){
		return $(this).attr("mustremoved","1");
	};
	$.log = function(msg) {
		if (typeof(console)!="undefined") {
			console.log(msg);
		}
	}
	$.fn.wysibb = function(settings) {
		return this.each(function() {
			(new $.wysibb(this, settings));
		});
	}
})(jQuery);