/*! WysiBB - WYSIWYG BBCode editor - v1.2.2 - 2012-10-26
* http://www.wysibb.com
* Copyright (c) 2012 Vadim Dobroskok; Licensed MIT, GPL */
"use strict"
if (typeof (WBBLANG)=="undefined") {var WBBLANG = {};}
var CURLANG = {
	bold: "Полужирный",
	italic: "Курсив",
	underline: "Подчеркнутый",
	strike: "Зачеркнутый",
	link: "Ссылка",
	img: "Изображение",
	sup: "Надстрочный текст",
	sub: "Подстрочный текст",
	justifyleft: "Текст по левому краю",
	justifycenter: "Текст по центру",
	justifyright: "Текст по правому краю",
	table: "Вставить таблицу",
	bullist: "Обычный список",
	numlist: "Нумерованный список",
	quote: "Цитата",
	offtop: "Оффтоп",
	code: "Код",
	spoiler: "Сворачиваемый текст",
	fontcolor: "Цвет текста",
	fontsize: "Размер текста",
	fontfamily: "Шрифт текста",
	fs_verysmall: "Очень маленький",
	fs_small: "Маленький",
	fs_normal: "Нормальный",
	fs_big: "Большой",
	fs_verybig: "Очень большой",
	smilebox: "Вставить смайл",
	video: "Вставить видео",
	removeFormat: "Удалить форматирование",

	modal_link_title: "Вставить ссылку",
	modal_link_text: "Отображаемый текст",
	modal_link_url: "URL ссылки",
	modal_email_text: "Отображаемый эл.адрес",
	modal_email_url: "Email",
	modal_link_tab1: "Вставить URL",

	modal_img_title: "Вставить изображение",
	modal_img_tab1: "Ввести URL",
	modal_img_tab2: "Загрузить файл",
	modal_imgsrc_text: "Введите адрес изображения",
	modal_img_btn: "Выберите файл для загрузки",
	add_attach: "Добавить вложение",

	modal_video_text: "Введите URL видео",

	close: "Закрыть",
	save: "Сохранить",
	cancel: "Отмена",
	remove: "Удалить",

	validation_err: "Введенные данные некорректны",
	error_onupload: "Ошибка во время загрузки файла или такое расширение файла не поддерживается",

	fileupload_text1: "Перетащите файл сюда",
	fileupload_text2: "или",

	loading: "Загрузка",
	auto: "Авто",
	views: "Просмотров",
	downloads: "Скачиваний",

	//smiles
	sm1: "Улыбка",
	sm2: "Смех",
	sm3: "Подмигивание",
	sm4: "Спасибо, класс",
	sm5: "Ругаю",
	sm6: "Шок",
	sm7:"Злой",
	sm8: "Огорчение",
	sm9: "Тошнит"


};
var wbbdebug=true;
(function($) {
	'use strict';
	$.wysibb = function(txtArea,settings) {
		$(txtArea).data("wbb",this);

		if (settings && settings.deflang && typeof(WBBLANG[settings.deflang])!="undefined") {CURLANG = WBBLANG[settings.deflang];}
		if (settings && settings.lang && typeof(WBBLANG[settings.lang])!="undefined") {CURLANG = WBBLANG[settings.lang];}

		this.txtArea=txtArea;
		this.$txtArea=$(txtArea);
		var id = this.$txtArea.attr("id") || this.setUID(this.txtArea);
		this.options = {
			bbmode:				false,
			onlyBBmode:			false,
			themeName:			"default",
			bodyClass:			"",
			lang:				"ru",
			tabInsert:			true,
//			toolbar:			false,
			//img upload config
			imgupload:			true,
			img_uploadurl:		"/iupload.php",
			img_maxwidth:		800,
			img_maxheight:		800,
			hotkeys:			true,
			showHotkeys:		true,
			autoresize:			true,
			resize_maxheight:	800,
			loadPageStyles:		true,
			traceTextarea:		false,
//			direction:			"ltr",
			smileConversion:	true,

			//END img upload config
			buttons: 			"bold,italic,underline,strike,sup,sub,|,img,link,|,bullist,numlist,smilebox,|,fontcolor,fontsize,fontfamily,|,justifyleft,justifycenter,justifyright,|,quote,code,offtop,table,removeFormat",
			allButtons: {
				bold : {
					title: CURLANG.bold,
					buttonHTML: '<span class="ve-tlb-bold"></span>',
					excmd: 'bold',
					hotkey: 'ctrl+b',
					transform : {
						'<b>{SELTEXT}</b>':"[b]{SELTEXT}[/b]",
						'<strong>{SELTEXT}</strong>':"[b]{SELTEXT}[/b]"
					}
				},
				italic : {
					title: CURLANG.italic,
					buttonHTML: '<span class="ve-tlb-italic"></span>',
					excmd: 'italic',
					hotkey: 'ctrl+i',
					transform : {
						'<i>{SELTEXT}</i>':"[i]{SELTEXT}[/i]",
						'<em>{SELTEXT}</em>':"[i]{SELTEXT}[/i]"
					}
				},
				underline : {
					title: CURLANG.underline,
					buttonHTML: '<span class="ve-tlb-underline"></span>',
					excmd: 'underline',
					hotkey: 'ctrl+u',
					transform : {
						'<u>{SELTEXT}</u>':"[u]{SELTEXT}[/u]"
					}
				},
				strike : {
					title: CURLANG.strike,
					buttonHTML: '<span class="ve-tlb-strike"></span>',
					excmd: 'strikeThrough',
					transform : {
						'<strike>{SELTEXT}</strike>':"[s]{SELTEXT}[/s]",
						'<s>{SELTEXT}</s>':"[s]{SELTEXT}[/s]"
					}
				},
				sup : {
					title: CURLANG.sup,
					buttonHTML: '<span class="ve-tlb-sup"></span>',
					excmd: 'superscript',
					transform : {
						'<sup>{SELTEXT}</sup>':"[sup]{SELTEXT}[/sup]"
					}
				},
				sub : {
					title: CURLANG.sub,
					buttonHTML: '<span class="ve-tlb-sub"></span>',
					excmd: 'subscript',
					transform : {
						'<sub>{SELTEXT}</sub>':"[sub]{SELTEXT}[/sub]"
					}
				},
				link : {
					title: CURLANG.link,
					buttonHTML: '<span class="ve-tlb-link"></span>',
					hotkey: 'ctrl+shift+2',
					modal: {
						title: CURLANG.modal_link_title,
						width: "500px",
						tabs: [
							{
								input: [
									{param: "SELTEXT",title:CURLANG.modal_link_text},
									{param: "URL",title:CURLANG.modal_link_url,validation: '^http(s)?://'}
								]
							}
						]
					},
					transform : {
						'<a href="{URL}">{SELTEXT}</a>':"[url={URL}]{SELTEXT}[/url]"
					}
				},
				img : {
					title: CURLANG.img,
					buttonHTML: '<span class="ve-tlb-img"></span>',
					hotkey: 'ctrl+shift+1',
					modal: {
						title: CURLANG.modal_img_title,
						width: "600px",
						tabs: [
							{
								title: CURLANG.modal_img_tab1,
								input: [
									{param: "SRC",title:CURLANG.modal_imgsrc_text,validation: '^http(s)?://.*?\.(jpg|png|gif|jpeg)$'}
								]
							},
							{
								title: CURLANG.modal_img_tab2,
								html: '<div id="imguploader"> <form id="fupform" class="upload" action="{img_uploadurl}" method="post" enctype="multipart/form-data" target="fupload"><input type="hidden" name="iframe" value="1"/><input type="hidden" name="idarea" value="'+id+'" /><div class="fileupload"><input id="fileupl" class="file" type="file" name="img" /><button id="nicebtn" class="wbb-button">'+CURLANG.modal_img_btn+'</button> </div> </form> </div><iframe id="fupload" name="fupload" src="about:blank" frameborder="0" style="width:0px;height:0px;display:none"></iframe></div>'
							}
						],
						onLoad: this.imgLoadModal
					},
					transform : {
						'<img src="{SRC}" />':"[img]{SRC}[/img]",
						'<img src="{SRC}" width="{WIDTH}" height="{HEIGHT}"/>':"[img width={WIDTH},height={HEIGHT}]{SRC}[/img]"
					}
				},
				bullist : {
					title: CURLANG.bullist,
					buttonHTML: '<span class="ve-tlb-list"></span>',
					excmd: 'insertUnorderedList',
					transform : {
						'<ul>{SELTEXT}</ul>':"[list]{SELTEXT}[/list]",
						'<li>{SELTEXT}</li>':"[*]{SELTEXT}[/*]"
					}
				},
				numlist : {
					title: CURLANG.numlist,
					buttonHTML: '<span class="ve-tlb-numlist"></span>',
					excmd: 'insertOrderedList',
					transform : {
						'<ol>{SELTEXT}</ol>':"[list=1]{SELTEXT}[/list]",
						'<li>{SELTEXT}</li>':"[*]{SELTEXT}[/*]"
					}
				},
				quote : {
					title: CURLANG.quote,
					buttonHTML: '<span class="ve-tlb-quote"></span>',
					hotkey: 'ctrl+shift+3',
					//subInsert: true,
					transform : {
						'<div class="quote"><blockquote>{SELTEXT}</blockquote></div>':"[quote]{SELTEXT}[/quote]"
					}
				},
				code : {
					title: CURLANG.code,
					buttonText: '[code]',
					hotkey: 'ctrl+shift+4',
					onlyClearText: true,
					transform : {
						'<div class="codewrap"><div class="codetop" contenteditable="false">Код:</div><div class="codemain">{SELTEXT}</div></div>':"[code]{SELTEXT}[/code]"
					}
				},
				offtop : {
					title: CURLANG.offtop,
					buttonText: 'offtop',
					transform : {
						'<span style="font-size:10px;color:#ccc">{SELTEXT}</span>':"[offtop]{SELTEXT}[/offtop]"
					}
				},
				fontcolor: {
					type: "colorpicker",
					title: CURLANG.fontcolor,
					excmd: "foreColor",
					valueBBname: "color",
					subInsert: true,
					colors: "#000000,#444444,#666666,#999999,#b6b6b6,#cccccc,#d8d8d8,#efefef,#f4f4f4,#ffffff,-, \
							 #ff0000,#980000,#ff7700,#ffff00,#00ff00,#00ffff,#1e84cc,#0000ff,#9900ff,#ff00ff,-, \
							 #f4cccc,#dbb0a7,#fce5cd,#fff2cc,#d9ead3,#d0e0e3,#c9daf8,#cfe2f3,#d9d2e9,#ead1dc, \
							 #ea9999,#dd7e6b,#f9cb9c,#ffe599,#b6d7a8,#a2c4c9,#a4c2f4,#9fc5e8,#b4a7d6,#d5a6bd, \
							 #e06666,#cc4125,#f6b26b,#ffd966,#93c47d,#76a5af,#6d9eeb,#6fa8dc,#8e7cc3,#c27ba0, \
							 #cc0000,#a61c00,#e69138,#f1c232,#6aa84f,#45818e,#3c78d8,#3d85c6,#674ea7,#a64d79, \
							 #900000,#85200C,#B45F06,#BF9000,#38761D,#134F5C,#1155Cc,#0B5394,#351C75,#741B47, \
							 #660000,#5B0F00,#783F04,#7F6000,#274E13,#0C343D,#1C4587,#073763,#20124D,#4C1130",
					transform: {
						'<font color="{COLOR}">{SELTEXT}</font>':'[color={COLOR}]{SELTEXT}[/color]'
					}
				},
				table: {
					type: "table",
					title: CURLANG.table,
					cols: 10,
					rows: 10,
					cellwidth: 15,
					transform: {
						'<td>{SELTEXT}</td>': '[td]{SELTEXT}[/td]',
						'<tr>{SELTEXT}</tr>': '[tr]{SELTEXT}[/tr]',
						'<table class="wbb-table">{SELTEXT}</table>': '[table]{SELTEXT}[/table]'
					},
					skipRules: true
				},
				fontsize: {
					type: 'select',
					title: CURLANG.fontsize,
					options: "fs_verysmall,fs_small,fs_normal,fs_big,fs_verybig"
				},
				fontfamily: {
					type: 'select',
					title: CURLANG.fontfamily,
					excmd: 'fontName',
					valueBBname: "font",
					options: [
						{title: "Arial",exvalue: "Arial"},
						{title: "Comic Sans MS",exvalue: "Comic Sans MS"},
						{title: "Courier New",exvalue: "Courier New"},
						{title: "Georgia",exvalue: "Georgia"},
						{title: "Lucida Sans Unicode",exvalue: "Lucida Sans Unicode"},
						{title: "Tahoma",exvalue: "Tahoma"},
						{title: "Times New Roman",exvalue: "Times New Roman"},
						{title: "Trebuchet MS",exvalue: "Trebuchet MS"},
						{title: "Verdana",exvalue: "Verdana"}
					],
					transform: {
						'<font face="{FONT}">{SELTEXT}</font>':'[font={FONT}]{SELTEXT}[/font]'
					}
				},
				smilebox: {
					type: 'smilebox',
					title: CURLANG.smilebox,
					buttonHTML: '<span class="ve-tlb-smilebox"></span>'
				},
				justifyleft: {
					title: CURLANG.justifyleft,
					buttonHTML: '<span class="ve-tlb-textleft"></span>',
					transform: {
						'<div align="left">{SELTEXT}</div>': '[left]{SELTEXT}[/left]'
					}
				},
				justifyright: {
					title: CURLANG.justifyright,
					buttonHTML: '<span class="ve-tlb-textright"></span>',
					transform: {
						'<div align="right">{SELTEXT}</div>': '[right]{SELTEXT}[/right]'
					}
				},
				justifycenter: {
					title: CURLANG.justifycenter,
					buttonHTML: '<span class="ve-tlb-textcenter"></span>',
					transform: {
						'<div align="center">{SELTEXT}</div>': '[center]{SELTEXT}[/center]'
					}
				},
				video: {
					title: CURLANG.video,
					buttonHTML: '<span class="ve-tlb-video"></span>',
					modal: {
						title: CURLANG.video,
						width: "600px",
						tabs: [
							{
								title: CURLANG.video,
								input: [
									{param: "SRC",title:CURLANG.modal_video_text}
								]
							}
						],
						onSubmit: function(cmd,opt,queryState) {
							var url = this.$modal.find('input[name="SRC"]').val();
							var a = url.match(/^http:\/\/www\.youtube\.com\/watch\?.*?v=([a-z0-9_]+)/i);
							if (a && a.length==2) {
								var code = a[1];
								this.insertAtCursor(this.getCodeByCommand(cmd,{src:code}));
							}
							this.closeModal();
							return false;
						}
					},
					transform: {
						'<iframe src="http://www.youtube.com/embed/{SRC}" width="640" height="480" frameborder="0"></iframe>':'[video]{SRC}[/video]'
					}
				},

				//select options
				fs_verysmall: {
					title: CURLANG.fs_verysmall,
					buttonText: "fs1",
					excmd: 'fontSize',
					exvalue: "1",
					transform: {
						'<font size="1">{SELTEXT}</font>':'[size=50]{SELTEXT}[/size]'
					}
				},
				fs_small: {
					title: CURLANG.fs_small,
					buttonText: "fs2",
					excmd: 'fontSize',
					exvalue: "2",
					transform: {
						'<font size="2">{SELTEXT}</font>':'[size=85]{SELTEXT}[/size]'
					}
				},
				fs_normal: {
					title: CURLANG.fs_normal,
					buttonText: "fs3",
					excmd: 'fontSize',
					exvalue: "3",
					transform: {
						'<font size="3">{SELTEXT}</font>':'[size=100]{SELTEXT}[/size]'
					}
				},
				fs_big: {
					title: CURLANG.fs_big,
					buttonText: "fs4",
					excmd: 'fontSize',
					exvalue: "4",
					transform: {
						'<font size="4">{SELTEXT}</font>':'[size=150]{SELTEXT}[/size]'
					}
				},
				fs_verybig: {
					title: CURLANG.fs_verybig,
					buttonText: "fs5",
					excmd: 'fontSize',
					exvalue: "6",
					transform: {
						'<font size="6">{SELTEXT}</font>':'[size=200]{SELTEXT}[/size]'
					}
				},

				removeformat: {
					title: CURLANG.removeFormat,
					buttonHTML: '<span class="ve-tlb-removeformat"></span>',
					excmd: "removeFormat"
				}
			},
			systr: {
				'<br/>':"\n",
				'<span class="wbbtab">{SELTEXT}</span>': '   {SELTEXT}'
			},
			customRules: {
				td: [["[td]{SELTEXT}[/td]",{seltext: {rgx:false,attr:false,sel:false}}]],
				tr: [["[tr]{SELTEXT}[/tr]",{seltext: {rgx:false,attr:false,sel:false}}]],
				table: [["[table]{SELTEXT}[/table]",{seltext: {rgx:false,attr:false,sel:false}}]]
				//blockquote: [["   {SELTEXT}",{seltext: {rgx:false,attr:false,sel:false}}]]
			},
			smileList: [
				{title:CURLANG.sm1, img: '<img src="{themePrefix}{themeName}/img/smiles/sm1.png" class="sm">', bbcode:":)"},
				{title:CURLANG.sm8 ,img: '<img src="{themePrefix}{themeName}/img/smiles/sm8.png" class="sm">', bbcode:":("},
				{title:CURLANG.sm1, img: '<img src="{themePrefix}{themeName}/img/smiles/sm2.png" class="sm">', bbcode:":D"},
				{title:CURLANG.sm3, img: '<img src="{themePrefix}{themeName}/img/smiles/sm3.png" class="sm">', bbcode:";)"},
				{title:CURLANG.sm4, img: '<img src="{themePrefix}{themeName}/img/smiles/sm4.png" class="sm">', bbcode:":up:"},
				{title:CURLANG.sm5, img: '<img src="{themePrefix}{themeName}/img/smiles/sm5.png" class="sm">', bbcode:":down:"},
				{title:CURLANG.sm6, img: '<img src="{themePrefix}{themeName}/img/smiles/sm6.png" class="sm">', bbcode:":shock:"},
				{title:CURLANG.sm7, img: '<img src="{themePrefix}{themeName}/img/smiles/sm7.png" class="sm">', bbcode:":angry:"},
				{title:CURLANG.sm9, img: '<img src="{themePrefix}{themeName}/img/smiles/sm9.png" class="sm">', bbcode:":sick:"}
			],
			attrWrap: ['src','color','href'] //use becouse FF and IE change values for this attr, modify [attr] to _[attr]
		}

		//FIX for Opera. Wait while iframe loaded
		this.inited=this.options.onlyBBmode;

		//init css prefix, if not set
		if (!this.options.themePrefix) {
			$('link').each($.proxy(function(idx, el) {
				var sriptMatch = $(el).get(0).href.match(/(.*\/)(.*)\/wbbtheme\.css.*$/);
				if (sriptMatch !== null) {
					this.options.themeName = sriptMatch[2];
					this.options.themePrefix = sriptMatch[1];
				}
			},this));
		}

		//check for preset
		if (typeof(WBBPRESET)!="undefined") {
			if (WBBPRESET.allButtons) {
				//clear transform
				$.each(WBBPRESET.allButtons,$.proxy(function(k,v) {
					if (v.transform && this.options.allButtons[k]) {
						delete this.options.allButtons[k].transform;
					}
				},this));
			}
			$.extend(true,this.options,WBBPRESET);
		}

		if (settings && settings.allButtons) {
			$.each(settings.allButtons,$.proxy(function(k,v) {
				if (v.transform && this.options.allButtons[k]) {
					delete this.options.allButtons[k].transform;
				}
			},this));
		}
		$.extend(true,this.options,settings);
		this.init();
	}

	$.wysibb.prototype = {
		lastid : 1,
		init:	function() {
			$.log("Init",this);
			//check for mobile
			this.isMobile = function(a) {(/android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|meego.+mobile|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a))}(navigator.userAgent||navigator.vendor||window.opera);

			//use bbmode on mobile devices
			if (this.isMobile) {this.onlyBBmode=this.bbmode=true}

			//create array of controls, for queryState
			this.controllers = [];

			//convert button string to array
			this.options.buttons = this.options.buttons.toLowerCase().split(",");

			//init system transforms
			this.options.allButtons["_systr"] = {transform: this.options.systr};

			this.smileFind();
			this.initTransforms();
			this.build();
			this.initModal();
			if (this.options.hotkeys===true && !this.isMobile) {
				this.initHotkeys();
			}
			//sort smiles
			this.options.smileList.sort(function(a,b) {
				return (b.bbcode.length-a.bbcode.length);
			})

			this.$txtArea.parents("form").bind("submit",$.proxy(function() {
				//this.$txtArea.val(this.getBBCode());
				return this.sync();
			},this));

			$.log(this);

			// $.log("Clear paste test");
			// var $tmp = $("<div>").html("<h1>test</h1>");
			// this.clearPaste($tmp);
			// $.log($tmp.html());

			//$.log($('<span>').html('[table]<tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr>[/table]')[0].outerHTML);
			//$.log(this.toBB('<table><tr><td>1</td><td>2</td></tr><tr><td>3</td><td>4</td></tr></table>'));


			/* var $tbl = $('<span>').html('[table]<tr><td>11</td><td>11</td></tr>[/table]</span>');
			$.log($tbl);
			$tbl.find('td').each(function() {
				$.log(this);
			}); */
			//this.printObjectInIE(this.options.rules);
			//this.checkFilter('2<SPAN style="COLOR: #ccc; FONT-SIZE: 10px"> 3</SPAN>','span[style*="color: #ccc"][style*="font-size: 10px"]');
			//var $test = $('<span>').append('[table]<span><tr><td>﻿1</td><td>2﻿</td></tr><tr><td>﻿3</td><td>﻿4</td></tr></span>[/table]');
			//var $test = $('<span>').append('<table><tr>[td]2323[/td]</tr></table>');
			//$.log($test);
		},
		initTransforms: function() {
			$.log("Create rules for transform HTML=>BB");
			var o = this.options;
			//need to check for active buttons
			if (!o.rules) {o.rules={};}
			var  btnlist = o.buttons.slice();

			//add system transform
			btnlist.push("_systr");
			for (var bidx=0; bidx<btnlist.length; bidx++) {
				var ob = o.allButtons[btnlist[bidx]];
				if (!ob ) {continue;}
				//add transforms to option list
				if (ob.type=="select" && typeof(ob.options)=="string") {
					var olist = ob.options.split(",");
					$.each(olist,function(i,op) {
						if ($.inArray(op,btnlist)==-1) {
							btnlist.push(op);
						}
					});
				}
				if (ob.transform && ob.skipRules!==true) {
					for (var bhtml in ob.transform) {
						var orightml = bhtml;
						var bbcode = ob.transform[bhtml];
						//wrap attributes
						$.each(o.attrWrap,function(i,a) {
							bhtml = bhtml.replace(a+'="','_'+a+'="');
						});

						var $bel = $('<div/>').append(this.elFromString(bhtml,document));
						var rootSelector = this.filterByNode($bel.children());

						//check if current rootSelector is exist, create unique selector for each transform (1.2.2)
						if (rootSelector.match(/^div$/i) || o.rules[rootSelector]) {
							//create unique selector
							$.log("create unique selector: "+rootSelector);
							this.setUID($bel.children());
							rootSelector = this.filterByNode($bel.children());

							//replace transform with unique selector
							var nhtml2 = $bel.html();
							ob.transform[nhtml2]=bbcode;
							delete ob.transform[bhtml];
							bhtml=nhtml2;
						}

						//create root selector for isContain
						if (!ob.excmd) {
							if (!ob.rootSelector) {ob.rootSelector=[];}
							ob.rootSelector.push(rootSelector);
						}
						if (!ob.bbSelector) {ob.bbSelector=[];}
						if ($.inArray(bbcode,ob.bbSelector)==-1) {
							ob.bbSelector.push(bbcode);
						}
						//check for rules on this rootSeletor
						if (typeof(o.rules[rootSelector])=="undefined") {
							o.rules[rootSelector]=[];
						}
						var crules={};

						if (bhtml.match(/\{\S+?\}/)) {
							$bel.find('*').each($.proxy(function(idx,el) {
								//check attributes

								var attributes = this.getAttributeList(el);
								$.each(attributes,$.proxy(function(i, item) {
									var attr = $(el).attr(item);
									if (item.substr(0,1)=='_') {
										item = item.substr(1);
									}

									var r = attr.match(/\{\S+?\}/g);
									if (r) {
										for (var a=0; a<r.length; a++) {
											var rname = r[a].substr(1,r[a].length-2);
												rname = rname.replace(this.getValidationRGX(rname),"");
											var p = this.relFilterByNode(el,rootSelector);
											var regRepl = (attr!=r[a]) ? this.getRegexpReplace(attr,r[a]):false;
											crules[rname.toLowerCase()]={sel:(p) ? $.trim(p):false,attr:item,rgx:regRepl}
										}
									}
								},this));

								//check for text
								var  sl=[];
								if (!$(el).is("iframe")) {
									$(el).contents().filter(function() {return this.nodeType===3}).each($.proxy(function(i,rel) {
										var txt = rel.textContent || rel.data;
										if (typeof(txt)=="undefined") {return true;}
										var r = txt.match(/\{\S+?\}/g)
										if (r) {
											for (var a=0; a<r.length; a++) {
												var rname = r[a].substr(1,r[a].length-2);
												var p = this.relFilterByNode(el,rootSelector);
												var regRepl = (txt!=r[a]) ? this.getRegexpReplace(txt,r[a]):false;
												var sel = (p) ? $.trim(p):false;
												if ($.inArray(sel,sl)>-1 || $(rel).parent().contents().size()>1) {
													//has dublicate and not one children, need wrap
													var nel = $("<span>").html("{"+rname+"}");
													this.setUID(nel,"wbb");
													var start = (txt.indexOf(rname)+rname.length)+1;
													var after_txt = txt.substr(start,txt.length-start);
													//create wrap element
													rel.data = txt.substr(0,txt.indexOf(rname)-1);
													$(rel).after(this.elFromString(after_txt,document)).after(nel);

													sel=((sel) ? sel+" ":"")+this.filterByNode(nel);
													regRepl=false;
												}

												crules[rname.toLowerCase()]={sel:sel,attr:false,rgx:regRepl}
												sl[sl.length]=sel;
											}
										}
									},this));
								}
								sl=null;
								var nbhtml = $bel.html();
								//UnWrap attributes
								$.each(o.attrWrap,function(i,a) {
									nbhtml = nbhtml.replace('_'+a+'="',a+'="');
								});
								if (bhtml!=nbhtml) {
									//if we modify html, replace it
									delete ob.transform[bhtml];
									ob.transform[nbhtml]=bbcode;
									bhtml=nbhtml;
								}

							},this));
						}
						o.rules[rootSelector].push([bbcode,crules]);

						//check for onlyClearText
						if (ob.onlyClearText===true) {
							if (!this.cleartext) {this.cleartext={};}
							this.cleartext[rootSelector]=btnlist[bidx];
						}
					}


					var htmll = $.map(ob.transform,function(bb,html) {return html}).sort(function(a,b) {
							return ((b[0] || "").length-(a[0] || "").length)
					});
					ob.bbcode = ob.transform[htmll[0]];
					ob.html = htmll[0];
				}
			};

			this.options.btnlist=btnlist; //use for transforms, becouse select elements not present in buttons

			//add custom rules, for table,tr,td and other
			$.extend(o.rules,this.options.customRules);
			//add system codes
			/* $.each(o.systr,$.proxy(function(html,bb) {
				if (!html.match(/\{\S+?\}/)) {
					//without params
					var rs = this.filterByNode(this.elFromString(html,document));
					o.rules[rs]=[];
					o.rules[rs].push([bb,{}]);
				}
			},this)); */
			//this.options.btnlist.push("_systr");

			//smile rules
			o.srules={};
			if (this.options.smileList) {
				$.each(o.smileList,$.proxy(function(i,sm) {
					var $sm = $(this.strf(sm.img,o));
					var f = this.filterByNode($sm);
					o.srules[f]=[sm.bbcode,sm.img];
				},this));
			}
			//sort transforms by bbcode length desc
			for (var rootsel in o.rules) {
				this.options.rules[rootsel].sort(function(a,b) {
					return (b[0].length-a[0].length)
				});
			}


		},

		//BUILD
		build: function() {
			$.log("Build editor");

			//this.$editor = $('<div class="wysibb">');
			this.$editor = $('<div>').addClass("wysibb");

			//set direction if defined
			$.log(this.options);
			if (this.options.direction) {this.$editor.css("direction",this.options.direction)}

			this.$editor.insertAfter(this.txtArea).append(this.txtArea);

			this.startHeight = this.$txtArea.outerHeight();
			this.$txtArea.addClass("wysibb-texarea");
			this.buildToolbar();
			//Build iframe if needed
			this.$txtArea.wrap('<div class="wysibb-text">');

			if (this.options.onlyBBmode===false) {
				var height = this.$txtArea.outerHeight();
				var iframeSrc = /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank';
				this.$iFrame = $(this.strf('<iframe src="'+iframeSrc+'" class="wysibb-text-iframe" frameborder="0" style="height:{height}px;"></iframe>',{height:height}));
				this.$txtArea.hide();

				//load iframe
				this.$iFrame.bind('load',$.proxy(function() {
					$.log("Frame loaded");

					this.framewindow = this.$iFrame.get(0).contentWindow;
					this.doc = this.framewindow.document;
					this.body = this.doc.body;
					this.$body = $(this.doc.body);
					var ihead=this.doc.getElementsByTagName('head')[0];
					this.$body.addClass("wysibb-body "+this.options.bodyClass);

					//set direction if defined
					if (this.options.direction) {this.$body.css("direction",this.options.direction)}


					//load stylesheets
					if (this.options.loadPageStyles===true) {
						$("link[rel='stylesheet']").each(function(idx,el) {
							$(ihead).append($(el).clone()[0].outerHTML);
						});
						$("style").each(function(idx,el) {
							$(ihead).append($(el).clone()[0].outerHTML);
						});
					}

					if ('contentEditable' in this.body) {
						this.body.contentEditable=true;
						this.doc.designMode = "on";
						try{
							//fix for mfirefox
							//this.doc.execCommand('enableObjectResizing', false, 'false'); //disable iage resizing
							this.doc.execCommand('StyleWithCSS', false, false);
						}catch(e) {}
					}else{
						//use onlybbmode
						this.options.onlyBBmode=this.options.bbmode=true;
					}

					//check for exist content in textarea
					if (this.txtArea.value.length>0) {
						this.txtAreaInitContent();
					}


					//clear html on paste from external editors
					$(this.doc).bind('keydown', $.proxy(function(e) {
						if ((e.which == 86 && (e.ctrlKey==true || e.metaKey==true)) || (e.which == 45 && (e.shiftKey==true || e.metaKey==true))) {
							if (!this.$pasteBlock) {
								this.lastRange = this.getRangeClone();
								//this.$pasteBlock = $(this.doc.createElement('DIV')).html("\uFEFF");
								this.$pasteBlock = $(this.elFromString('<div style="opacity:0;" contenteditable="true">\uFEFF</div>'));

								this.$pasteBlock.appendTo(this.body);
								if ($.browser.msie) {this.$pasteBlock.focus();} //IE 7,8 FIX
								//.bind('paste',$.proxy(function(e) {
									setTimeout($.proxy(function() {
										this.clearPaste(this.$pasteBlock);
										var rdata = '<span>'+this.$pasteBlock.html()+'</span>';
										this.$body.attr("contentEditable","true");
										this.$pasteBlock.blur().remove();
										this.body.focus();

										if (this.cleartext) {
											if (this.isInClearTextBlock()) {
												rdata = this.toBB(rdata).replace(/\n/g,"<br/>").replace(/\s{3}/g,'<span class="wbbtab"></span>');
											}
										}
										this.selectRange(this.lastRange);
										this.insertAtCursor(rdata,false);
										this.lastRange=false;
										this.$pasteBlock=false;
									}
									,this), 1);
								//},this));
								this.selectNode(this.$pasteBlock[0]);
							}
							return true;
						}
					},this));

					//insert BR on press enter
					$(this.doc).bind('keydown',$.proxy(function(e) {
						if (e.which == 13) {
							var isLi = this.isContain(this.getSelectNode(),'li');
							if (!isLi) {
								if (e.preventDefault) {e.preventDefault();}
								this.checkForLastBR(this.getSelectNode());
								this.insertAtCursor('<br/>',false);
							}
						}
					},this));

					//tabInsert
					if (this.options.tabInsert===true) {
						$(this.doc).bind('keydown', $.proxy(this.pressTab,this));
					}



					//add event listeners
					$(this.doc).bind('mousedown',$.proxy(function(e) {this.checkForLastBR(e.target)},this));

					//trace Textarea
					if (this.options.traceTextarea===true) {
						$(document).bind("click",$.proxy(this.traceTextareaEvent,this));
						this.$txtArea.val("");
					}

					//attach hotkeys
					if (this.options.hotkeys===true) {
						$(this.doc).bind('keydown',$.proxy(this.presskey,this));
					}

					//smileConversion
					if (this.options.smileConversion===true) {
						$(this.doc).bind('keyup',$.proxy(this.smileConversion,this));
					}

					this.inited=true;
				},this)).insertAfter(this.$txtArea);
			}

			this.$editor.append('<span class="powered">Powered by <a href="http://www.wysibb.com" target="_blank">WysiBB<a/></span>');

			//attach hotkeys
			if (this.options.hotkeys===true) {
				$(document).bind('keydown',$.proxy(this.presskey,this));
			}
		},
		buildToolbar: function() {
			if (this.options.toolbar === false) {return false;}

			//this.$toolbar = $('<div class="wysibb-toolbar">').prependTo(this.$editor);
			this.$toolbar = $('<div>').addClass("wysibb-toolbar").prependTo(this.$editor);

			var $btnContainer;
			$.each(this.options.buttons,$.proxy(function(i,bn) {
				var opt = this.options.allButtons[bn];
				if (i==0 || bn=="|" || bn=="-") {
					if (bn=="-") {
						this.$toolbar.append('<div class="wysibb-toolbar-newline">');
					}
					$btnContainer = $('<div class="wysibb-toolbar-container">').appendTo(this.$toolbar);
				}
				if (opt) {
					if (opt.type=="colorpicker") {
						this.buildColorpicker($btnContainer,bn,opt);
					}else if (opt.type=="table") {
						this.buildTablepicker($btnContainer,bn,opt);
					}else if (opt.type=="select") {
						this.buildSelect($btnContainer,bn,opt);
					}else if (opt.type=="smilebox") {
						this.buildSmilebox($btnContainer,bn,opt);
					}else{
						this.buildButton($btnContainer,bn,opt);
					}
				}
			},this));

			//fix for hide tooltip on quick mouse over
			this.$toolbar.find(".btn-tooltip").hover(function () {$(this).parent().css("overflow","hidden")},function() {$(this).parent().css("overflow","visible")});

			//build bbcode switch button
			//var $bbsw = $('<div class="wysibb-toolbar-container modeSwitch"><div class="wysibb-toolbar-btn" unselectable="on"><span class="btn-inner ve-tlb-bbcode" unselectable="on"></span></div></div>').appendTo(this.$toolbar);
			var $bbsw = $('<div/>').addClass("wysibb-toolbar-container modeSwitch").html('<div class="wysibb-toolbar-btn mswitch" unselectable="on"><span class="btn-inner ve-tlb-bbcode" unselectable="on"></span></div>').appendTo(this.$toolbar);
			$bbsw.children(".wysibb-toolbar-btn").click($.proxy(function(e) {
				$(e.currentTarget).toggleClass("on");
				this.modeSwitch();
			},this));

			if ($.browser.msie) {this.$toolbar.find("*").attr("unselectable","on");} //fix for ie8 and lower

		},
		buildButton: function(container,bn,opt) {
			if (typeof(container)!="object") {
				container = this.$toolbar;
			}
			var btnHTML = (opt.buttonHTML) ? $(this.strf(opt.buttonHTML,this.options)).addClass("btn-inner") : this.strf('<span class="btn-inner btn-text">{text}</span>',{text:opt.buttonText.replace(/</g,"&lt;")});
			var hotkey = (this.options.hotkeys===true && this.options.showHotkeys===true && opt.hotkey) ? (' <span class="tthotkey">['+opt.hotkey+']</span>'):""
			var $btn = $('<div class="wysibb-toolbar-btn wbb-'+bn+'">').appendTo(container).append(btnHTML).append(this.strf('<span class="btn-tooltip">{title}<ins/>{hotkey}</span>',{title:opt.title,hotkey:hotkey}));

			//if ($.browser.msie) {$btn.attr("unselectable","on").find("*").attr("unselectable","on");} //fix for ie8 and lower
			//attach events
			this.controllers.push($btn);
			$btn.bind('queryState',$.proxy(function(e) {
				$(e.currentTarget)[this.queryState(bn)?'addClass':'removeClass']("on");
			},this));
			$btn.click($.proxy(function(e) {
				this.execCommand(bn,opt.exvalue || false);
				$(e.currentTarget).trigger('queryState');
			},this));
			$btn.mousedown(function(e) {
				if (e.preventDefault) e.preventDefault();
			});

		},
		buildColorpicker: function(container,bn,opt) {
			var $btn = $('<div class="wysibb-toolbar-btn wbb-dropdown wbb-cp">').appendTo(container)
                .append('<div class="ve-tlb-colorpick"><span class="cp-line"></span></div><ins class="ar"/>')
                .append(this.strf('<span class="btn-tooltip">{title}<ins/></span>',{title:opt.title}));
			var $cpline = $btn.find(".cp-line");
			//if ($.browser.msie) {$btn.attr("unselectable","on").find("*").attr("unselectable","on");} //fix for ie8 and lower

			var $dropblock = $('<div class="wbb-list">').appendTo($btn);
			$dropblock.append('<div class="nc">'+CURLANG.auto+'</div>');
			var colorlist = (opt.colors) ? opt.colors.split(","):[];
			for (var j=0; j<colorlist.length; j++) {
				colorlist[j] = $.trim(colorlist[j]);
				if (colorlist[j]=="-") {
					//insert padding
					$dropblock.append('<span class="pl"></span>');
				}else{
					$dropblock.append(this.strf('<div class="sc" style="background:{color}" title="{color}"></div>',{color:colorlist[j]}));
				}
			}
			var basecolor = $(document.body).css("color");
			//attach events
			this.controllers.push($btn);
			$btn.bind('queryState',$.proxy(function(e) {
				//queryState
				$cpline.css("background-color",basecolor);
				var r = this.queryState("fontcolor",true);
				if (r) {
					$cpline.css("background-color",(this.options.bbmode) ? r.color:r);
				}
			},this));
			$btn.click($.proxy(function(e) {
				this.dropdownclick(".wbb-cp",".wbb-list",e);
			},this));
			$btn.find(".sc").click($.proxy(function(e) {
				var c = $(e.currentTarget).attr("title");
				this.execCommand("fontcolor",c);
				$btn.trigger('queryState');
				//if ($.browser.msie) {this.lastRange=false;} //IE 7 FIX
			},this));
			$btn.find(".nc").click($.proxy(function(e) {
				this.execCommand("fontcolor",basecolor);
				$btn.trigger('queryState');
			},this));
			$btn.mousedown(function(e) {
				if (e.preventDefault) e.preventDefault();
			});
		},
		buildTablepicker: function(container,bn,opt) {
			var $btn = $('<div class="wysibb-toolbar-btn wbb-dropdown wbb-tbl">').appendTo(container).append('<span class="btn-inner ve-tlb-table"></span><ins class="ar"/>').append(this.strf('<span class="btn-tooltip">{title}<ins/></span>',{title:opt.title}));
			//if ($.browser.msie) {$btn.attr("unselectable","on").find("*").attr("unselectable","on");} //fix for ie8 and lower
			var $dropblock = $('<div class="wbb-list">').appendTo($btn);
			var rows = opt.rows || 10;
			var cols = opt.cols || 10;
			var allcount = rows*cols;
			$dropblock.css("width",(cols*opt.cellwidth+2)+"px").css("height",(rows*opt.cellwidth+2)+"px");
			for (var j=1; j<=cols; j++) {
				for (var h=1; h<=rows; h++) {
					//var html = this.strf('<div class="tbl-sel" style="width:{width}px;height:{height}px;z-index:{zindex}" title="{row},{col}"></div>',{width: (j*opt.cellwidth),height: (h*opt.cellwidth),zindex: --allcount,row:h,col:j});
					var html = '<div class="tbl-sel" style="width:'+(j*opt.cellwidth)+'px;height:'+(h*opt.cellwidth)+'px;z-index:'+(--allcount)+'" title="'+h+','+j+'"></div>';
					$dropblock.append(html);
				}
			}
			//this.debug("Attach event on: tbl-sel");
			$btn.find(".tbl-sel").click($.proxy(function(e) {
				var t = $(e.currentTarget).attr("title");
				var rc = t.split(",");
				var code = (this.options.bbmode) ? '[table]':'<table class="wbb-table" cellspacing="5" cellpadding="0">';
				for (var i=1; i<=rc[0]; i++) {
					code += (this.options.bbmode) ? ' [tr]\n':'<tr>';
					for (var j=1; j<=rc[1]; j++) {
						code += (this.options.bbmode) ? '  [td][/td]\n':'<td>\uFEFF</td>';
					}
					code += (this.options.bbmode) ? '[/tr]\n':'</tr>';
				}
				code += (this.options.bbmode) ? '[/table]':'</table>';
				this.insertAtCursor(code);
				this.lastRange=false;
			},this));
			//this.debug("END Attach event on: tbl-sel");
			$btn.click($.proxy(function(e) {
				this.dropdownclick(".wbb-tbl",".wbb-list",e);
			},this));

		},
		buildSelect: function(container,bn,opt) {
			var $btn = $('<div class="wysibb-toolbar-btn wbb-select wbb-'+bn+'">').appendTo(container)
                .append(this.strf('<span class="val">{title}</span><ins class="sar"/>',opt))
                .append(this.strf('<span class="btn-tooltip">{title}<ins/></span>',{title:opt.title}));
			var $sblock = $('<div class="wbb-list">').appendTo($btn);
			var $sval = $btn.find("span.val");
			//if ($.browser.msie) {$btn.attr("unselectable","on").find("*").attr("unselectable","on");} //fix for ie8 and lower

			var olist = ($.isArray(opt.options)) ? opt.options:opt.options.split(",");
			//$.log(this.printObjectInIE(olist));
			for (var i=0; i<olist.length; i++) {
				var oname = olist[i];
				if (typeof(oname)=="string") {
					var option = this.options.allButtons[oname];
					if (option) {
						//$.log("create: "+oname);
						if (option.html) {
							$('<span>').addClass("option").attr("oid",oname).attr("cmdvalue",option.exvalue).appendTo($sblock).append(this.strf(option.html,{seltext:option.title}));
						}else{
							$sblock.append(this.strf('<span class="option" oid="'+oname+'" cmdvalue="'+option.exvalue+'">{title}</span>',option));
						}
					}
				}else{
					//build option list from array
					var params = {
						seltext: oname.title
					}
					params[opt.valueBBname]=oname.exvalue;
					$('<span>').addClass("option").attr({"oid":bn,"cmdvalue":oname.exvalue}).appendTo($sblock).append(this.strf(opt.html,params));
				}
			}
			this.controllers.push($btn);
			$btn.bind('queryState',$.proxy(function(e) {
				//queryState
				$sval.text(opt.title);
				$btn.find(".option.selected").removeClass("selected");
				$btn.find(".option").each($.proxy(function(i,el){
					var $el = $(el);
					var r = this.queryState($el.attr("oid"),true);
					var cmdvalue = $el.attr("cmdvalue");
					if ((cmdvalue && r==$el.attr("cmdvalue")) || (!cmdvalue && r)) {
						$sval.text($el.addClass("selected").text());
						return false;
					}
				},this));
			},this));
			$btn.click($.proxy(function(e) {
				this.dropdownclick(".wbb-select",".wbb-list",e);
			},this));
			$btn.find(".option").click($.proxy(function(e) {
                var tar = $(e.currentTarget);
				var oid = tar.attr("oid");
				var cmdvalue = tar.attr("cmdvalue");
				var opt = this.options.allButtons[oid];
				this.execCommand(oid,opt.exvalue || cmdvalue || false);
				tar.trigger('queryState');
				//if (this.lastRange) this.lastRange=false; //IE 7 FIX
			},this));
		},
		buildSmilebox: function(container,bn,opt) {
			var $btnHTML = $(this.strf(opt.buttonHTML,opt)).addClass("btn-inner");
			var $btn = $('<div class="wysibb-toolbar-btn wbb-smilebox wbb-'+bn+'">').appendTo(container)
                .append($btnHTML).append(this.strf('<span class="btn-tooltip">{title}<ins/></span>',{title:opt.title}));
			var $sblock = $('<div class="wbb-list">').appendTo($btn);
			if ($.isArray(this.options.smileList)) {
				$.each(this.options.smileList,$.proxy(function(i,sm){
					$('<span>').addClass("smile").appendTo($sblock).append($(this.strf(sm.img,this.options)).attr("title",sm.title));
				},this));
			}
			$btn.click($.proxy(function(e) {
				this.dropdownclick(".wbb-smilebox",".wbb-list",e);
			},this));
			$btn.find('.smile').click($.proxy(function(e) {
				this.insertAtCursor((this.options.bbmode) ? this.toBB(e.currentTarget):$(e.currentTarget).html());
				this.lastRange=false;
			},this))
		},
		updateUI: function(e) {
			if (!e || ((e.which>=8 && e.which<=46) || e.which>90 || e.type=="mouseup")) {
				$.each(this.controllers,$.proxy(function(i,$btn) {
					$btn.trigger('queryState');
				},this));
			}
			if (this.options.autoresize===true) {
				this.autoresize();
			}
			//check for onlyClearText
			if (this.isInClearTextBlock()) {
				this.$toolbar.find(".wysibb-toolbar-btn:not(.on,.mswitch)").addClass("dis");
			}else{
				this.$toolbar.find(".wysibb-toolbar-btn.dis").removeClass("dis");
			}
		},
		initModal: function() {
			this.$modal=$("#wbbmodal");
			if (this.$modal.size()==0) {
				$.log("Init modal");
				this.$modal = $('<div>').attr("id","wbbmodal").prependTo(document.body)
					.html('<div class="wbbm"><div class="wbbm-title"><span class="wbbm-title-text"></span><span class="wbbclose" title="'+
                        CURLANG.close+'">×</span></div><div class="wbbm-content"></div><div class="wbbm-bottom"><button id="wbbm-submit" class="wbb-button">'+
                        CURLANG.save+'</button><button id="wbbm-cancel" class="wbb-cancel-button">'+CURLANG.cancel+'</button><button id="wbbm-remove" class="wbb-remove-button">'+
                        CURLANG.remove+'</button></div></div>').hide();

				this.$modal.find('#wbbm-cancel,.wbbclose').click($.proxy(this.closeModal,this));
				this.$modal.bind('click',$.proxy(function(e) {
					if ($(e.target).parents(".wbbm").size()==0) {
						this.closeModal();
					}
				},this));

				$(document).bind("keydown",$.proxy(this.escModal,this)); //ESC key close modal
				if (this.options.onlyBBmode!==true) {
					$(this.doc).bind("keyup",$.proxy(this.escModal,this)); //ESC key close modal
				}
			}
		},
		initHotkeys: function() {
			$.log("initHotkeys");
			this.hotkeys=[];
			var klist = "0123456789       abcdefghijklmnopqrstuvwxyz";
			$.each(this.options.allButtons,$.proxy(function(cmd,opt) {
				if (opt.hotkey) {
					var keys = opt.hotkey.split("+");
 					if (keys && keys.length>=2) {
						var metasum=0;
						var key = keys.pop();
						$.each(keys,function(i,k) {
							switch($.trim(k.toLowerCase())) {
								case "ctrl": {metasum+=1;break;}
								case "shift": {metasum+=4;break;}
								case "alt": {metasum+=7;break;}
							}
						})
						//$.log("metasum: "+metasum+" key: "+key+" code: "+(klist.indexOf(key)+48));
						if (metasum>0) {
							if (!this.hotkeys["m"+metasum]) {this.hotkeys["m"+metasum]=[];}
							this.hotkeys["m"+metasum]["k"+(klist.indexOf(key)+48)]=cmd;
						}
					}
				}
			},this))
		},
		presskey: function(e) {
			if (e.ctrlKey==true || e.shiftKey==true || e.altKey==true) {
				var  metasum = ((e.ctrlKey==true) ? 1:0)+((e.shiftKey==true) ? 4:0)+((e.altKey==true) ? 7:0);
				if (this.hotkeys["m"+metasum] && this.hotkeys["m"+metasum]["k"+e.which]) {
					this.execCommand(this.hotkeys["m"+metasum]["k"+e.which],false);
					e.preventDefault();
					return false;
				}
			}
		},

		//COMMAND FUNCTIONS
		execCommand: function(command,value) {
			$.log("execCommand: "+command);
			var opt = this.options.allButtons[command];
			var queryState = this.queryState(command,value);

			//check for onlyClearText
			var skipcmd = this.isInClearTextBlock();
			if (skipcmd && skipcmd!=command) {return;}


			if (opt.excmd) {
				//use NativeCommand
				if (this.options.bbmode) {
					$.log("Native command in bbmode: "+command);
					if (queryState && opt.subInsert!=true) {
						//remove bbcode
						this.wbbRemoveCallback(command,value);
					}else{
						//insert bbcode
						var v = {};
						if (opt.valueBBname && value) {
							v[opt.valueBBname]=value;
						}
						this.insertAtCursor(this.getBBCodeByCommand(command,v));
					}
				}else{
					this.execNativeCommand(opt.excmd,value || false);
				}
			}else if (!opt.cmd) {
				//wbbCommand
				//this.wbbExecCommand(command,value,queryState,$.proxy(this.wbbInsertCallback,this),$.proxy(this.wbbRemoveCallback,this));
				this.wbbExecCommand.call(this,command,value,queryState);
			}else{
				//user custom command
				opt.cmd.call(this,command,value,queryState);
			}
		},
		queryState: function(command,withvalue) {
			var opt = this.options.allButtons[command];
			//if (opt.subInsert===true && opt.type!="colorpicker") {return false;}
			if (this.options.bbmode) {
				//bbmode
				for (var i=0; i<opt.bbSelector.length; i++) {
					var b = this.isBBContain(opt.bbSelector[i]);
					if (b) {
						return this.getParams(b,opt.bbSelector[i],b[1]);
					}
				}
				return false;
			}else{
				if (opt.excmd) {
					//native command
					if (withvalue) {
						try {
							//Firefox fix
							var v = (this.doc.queryCommandValue(opt.excmd)+"").replace(/\'/g,"");
							if (opt.excmd=="foreColor") {
								v = this.rgbToHex(v);
							}
							//return (v==value);
							return v;
						}catch(e) {return false;}
					}else{
						try {
							//Firefox fix, exception while get queryState for UnorderedList
							return this.doc.queryCommandState(opt.excmd);
						}catch(e) {return false;}
					}
				}else{
					//custom command
					for (var i=0; i<opt.rootSelector.length; i++) {
						var n = this.isContain(this.getSelectNode(),opt.rootSelector[i]);
						if (n) {
							return this.getParams(n,opt.rootSelector[i]);
						}
					}
					return false;
				}
			}
		},
		wbbExecCommand: function(command,value,queryState) { //default command for custom bbcodes
			$.log("wbbExecCommand");
			var opt = this.options.allButtons[command];
			if (opt) {
				if (opt.modal) {
					if ($.isFunction(opt.modal)) {
						//custom modal function
						//opt.modal(command,opt.modal,queryState,new clbk(this));
						opt.modal.call(this,command,opt.modal,queryState);
					}else{
						this.showModal.call(this,command,opt.modal,queryState);
					}
				}else{
					if (queryState && opt.subInsert!=true) {
						//remove formatting
						//removeCallback(command,value);
						this.wbbRemoveCallback(command);
					}else{
						//insert format
						this.wbbInsertCallback(command,value)
					}
				}
			}
		},
		wbbInsertCallback: function(command,paramobj) {
			if (typeof(paramobj)!="object") {paramobj={}};
			$.log("wbbInsertCallback: "+command);
			var data = this.getCodeByCommand(command,paramobj);
			this.insertAtCursor(data);

			if (this.seltextID && data.indexOf(this.seltextID)!=-1) {
				this.selectNode(this.$body.find("#"+this.seltextID)[0]);
				this.seltextID=false;
			}
		},
		wbbRemoveCallback: function(command,clear) {
			$.log("wbbRemoveCallback: "+command);
			var opt = this.options.allButtons[command];
			if (this.options.bbmode) {
				//bbmode
				//REMOVE BBCODE
				var pos = this.getCursorPosBB();
				var stextnum=0;
				$.each(opt.bbSelector,$.proxy(function(i,bbcode) {
					var stext = bbcode.match(/\{[\s\S]+?\}/g);
					$.each(stext,function(n,s) {
						if (s.toLowerCase()=="{seltext}") {stextnum=n;return false}
					});
					var a = this.isBBContain(bbcode);
					if (a) {
						this.txtArea.value = this.txtArea.value.substr(0,a[1])+this.txtArea.value.substr(a[1],this.txtArea.value.length-a[1]).replace(a[0][0],(clear===true) ? '':a[0][stextnum+1]);
						this.setCursorPosBB(a[1]);
						return false;
					}
				},this));
			}else{
				var node = this.getSelectNode();
				$.each(opt.rootSelector,$.proxy(function(i,s) {
					var root = this.isContain(node,s);
					var $root = $(root);
					var cs = this.options.rules[s][0][1];
					if ($root.is("span[wbb]") || !$root.is("span,font")) { //remove only blocks
						if (clear===true) {
							$root.remove();
						}else{
							if (cs && cs["seltext"] && cs["seltext"]["sel"]) {
								var htmldata = $root.find(cs["seltext"]["sel"]).html();
								if (opt.onlyClearText===true) {
									htmldata = this.getHTML(htmldata,true,true);
									htmldata = htmldata.replace(/\&#123;/g,"{").replace(/\&#125;/g,"}");
								}
								$root.replaceWith(htmldata);
							}else{
								var htmldata = $root.html();
								if (opt.onlyClearText===true) {
									htmldata = this.getHTML(htmldata,true);
									htmldata = htmldata.replace(/\&lt;/g,"<").replace(/\&#123;/g,"{").replace(/\&#125;/g,"}");
								}
								$root.replaceWith(htmldata);
							}
						}
						return false;
					}else{
						//span,font - extract select content from this span,font
						var rng = this.getRange();
						var shtml = this.getSelectText();
						var rnode = this.getSelectNode();
						$.log("selHTML: "+shtml);
						if (shtml=="") {
							shtml="\uFEFF";
						}else{
							shtml = this.clearFromSubInsert(shtml,command);
						}
						var ins = this.elFromString(shtml);

						var before_rng = (window.getSelection) ? rng.cloneRange():this.body.createTextRange();
						var after_rng = (window.getSelection) ? rng.cloneRange():this.body.createTextRange();

						if (window.getSelection) {
							this.insertAtCursor('<span id="wbbdivide"></span>');
							var div = $root.find('span#wbbdivide').get(0);
							before_rng.setStart(root.firstChild,0);
							before_rng.setEndBefore(div);
							after_rng.setStartAfter(div);
							after_rng.setEndAfter(root.lastChild);
						}else{
							before_rng.moveToElementText(root);
							after_rng.moveToElementText(root);
							before_rng.setEndPoint('EndToStart',rng);
							after_rng.setEndPoint('StartToEnd',rng);
						}
						var bf = this.getSelectText(false,before_rng);
						var af = this.getSelectText(false,after_rng);
						if (af!="") {
							var $af = $root.clone().html(af);
							$root.after($af);
						}
						if (clear!==true) $root.after(ins); //insert select html
						if (window.getSelection) {
							$root.html(bf);
							if (clear!==true) this.selectNode(ins);
						}else{
							$root.replaceWith(bf);
						}
						return false;
					}
				},this));
			}
			return this.updateUI()
		},
		execNativeCommand: function(cmd,param) {
			//$.log("execNativeCommand: '"+cmd+"' : "+param);
			this.body.focus(); //set focus to frame body
			if (cmd=="insertHTML" && !window.getSelection) { //IE does't support insertHTML
				var r = (this.lastRange) ? this.lastRange:this.doc.selection.createRange(); //IE 7,8 range lost fix
				r.pasteHTML(param);
				var txt = $('<div>').html(param).text(); //for ie selection inside block
				var brsp = txt.indexOf("\uFEFF");
				if (brsp>-1) {
					r.moveStart('character',(-1)*(txt.length-brsp));
					r.select();
				}
				this.lastRange=false;
			}else if (cmd=="insertHTML") { //fix webkit bug with insertHTML
				var sel = this.getSelection();
				var e = this.elFromString(param);
				var rng = (this.lastRange) ? this.lastRange:this.getRange();
				rng.deleteContents();
				rng.insertNode(e);
				rng.collapse(false);
				sel.removeAllRanges();
				sel.addRange(rng);
			}else{
				if (typeof param == "undefined") {param=false;}
				if (this.lastRange) {
					$.log("Last range select");
					this.selectRange(this.lastRange);
					this.lastRange=false;
				}
				this.doc.execCommand(cmd, false, param);
			}
		},
		getCodeByCommand: function(command,paramobj) {
			return (this.options.bbmode) ? this.getBBCodeByCommand(command,paramobj):this.getHTMLByCommand(command,paramobj);
		},
		getBBCodeByCommand: function(command,params) {
			if (!this.options.allButtons[command]) {return "";}
			if (typeof(params)=="undefined") {params={};}
			params = this.keysToLower(params);
			if (!params["seltext"]) {
				//get selected text
				params["seltext"] = this.getSelectText(true);
			}

			var bbcode = this.options.allButtons[command].bbcode;
			//bbcode = this.strf(bbcode,params);
			bbcode = bbcode.replace(/\{(.*?)(\[.*?\])*\}/g,function(str,p,vrgx) {
				if (vrgx) {
					var vrgxp;
					if (vrgx) {
						vrgxp = new RegExp(vrgx+"+","i");
					}
					if (typeof(params[p.toLowerCase()])!="undefined" && params[p.toLowerCase()].toString().match(vrgxp)===null) {
						//not valid value
						return "";
					}
				}
				return (typeof(params[p.toLowerCase()])=="undefined") ? "":params[p.toLowerCase()];
			});

			//insert first with max params
			var rbbcode=null;
			var tr=[];
			$.each(this.options.allButtons[command].transform,function(html,bb) {
				tr.push(bb);
			});
			tr=this.sortArray(tr,-1);
			$.each(tr,function(i,v) {
				var valid=true;
				v = v.replace(/\{(.*?)(\[.*?\])*\}/g,function(str,p,vrgx) {
					var vrgxp;
					if (vrgx) {
						vrgxp = new RegExp(vrgx+"+","i");
					}
					if (typeof(params[p.toLowerCase()])=="undefined" || (vrgx && params[p.toLowerCase()].toString().match(vrgxp)===null)) {valid=false;};
					return (typeof(params[p.toLowerCase()])=="undefined") ? "":params[p.toLowerCase()];
				});
				if (valid) {rbbcode = v;return false;}
			});
			return rbbcode || bbcode;
		},
		getHTMLByCommand: function(command,params) {
			if (!this.options.allButtons[command]) {return "";}
			params = this.keysToLower(params);
			if (typeof(params)=="undefined") {params={};}
			if (!params["seltext"]) {
				//get selected text
				params["seltext"] = this.getSelectText(false);
				//$.log("seltext: '"+params["seltext"]+"'");
				if (params["seltext"]=="") {params["seltext"]="\uFEFF";}
				else{
					//clear selection from current command tags
					params["seltext"] = this.clearFromSubInsert(params["seltext"],command);

					//toBB if params onlyClearText=true
					if (this.options.allButtons[command].onlyClearText===true) {
						params["seltext"] = this.toBB(params["seltext"]).replace(/\</g,"&lt;").replace(/\n/g,"<br/>").replace(/\s{3}/g,'<span class="wbbtab"></span>');
					}

				}
			}

			if (command!="link" && command!="img") {
				this.seltextID = "wbbid_"+(++this.lastid);
				params["seltext"] = '<span id="'+this.seltextID+'">'+params["seltext"]+'</span>'; //use for select seltext
			}
			var html = this.options.allButtons[command].html;
			html = html.replace(/\{(.*?)(\[.*?\])*\}/g,function(str,p,vrgx) {
				if (vrgx) {
					var vrgxp = new RegExp(vrgx+"+","i");
					if (typeof(params[p.toLowerCase()])!="undefined" && params[p.toLowerCase()].toString().match(vrgxp)===null) {
						//not valid value
						return "";
					}
				}
				return (typeof(params[p.toLowerCase()])=="undefined") ? "":params[p.toLowerCase()];
			});

			//insert first with max params
			var rhtml=null;
			var tr=[];
			$.each(this.options.allButtons[command].transform,function(html,bb) {
				tr.push(html);
			});
			tr=this.sortArray(tr,-1);
			$.each(tr,function(i,v) {
				var valid=true;
				v = v.replace(/\{(.*?)(\[.*?\])*\}/g,function(str,p,vrgx) {
					var vrgxp;
					if (vrgx) {
						vrgxp = new RegExp(vrgx+"+","i");
					}
					if (typeof(params[p.toLowerCase()])=="undefined" || (vrgx && params[p.toLowerCase()].toString().match(vrgxp)===null)) {valid=false;};
					return (typeof(params[p.toLowerCase()])=="undefined") ? "":params[p.toLowerCase()];
				});
				if (valid) {rhtml = v;return false;}
			});
			return rhtml || html;
		},

		//SELECTION FUNCTIONS
		getSelection: function() {
			if (window.getSelection) {
				return (this.options.bbmode) ? window.getSelection():this.framewindow.getSelection();
			}else if (document.selection) {
				return (this.options.bbmode) ? document.selection.createRange():this.doc.selection.createRange();
			}
		},
		getSelectText: function(fromTxtArea,range) {
			if (fromTxtArea) {
				//return select text from textarea
				this.txtArea.focus();
				if('selectionStart' in this.txtArea) {
					var l = this.txtArea.selectionEnd - this.txtArea.selectionStart;
					return this.txtArea.value.substr(this.txtArea.selectionStart, l);
				}else{
					//IE
					var r = document.selection.createRange();
					return r.text;
				}
			}else{
				//return select html from body
				this.body.focus();
				if (!range)  {range=this.getRange()};
				if (this.framewindow.getSelection) {
					//w3c
					if (range) {
						return $('<div>').append(range.cloneContents()).html();
					}
				}else{
					//ie
					return range.htmlText;
				}
			}
			return "";
		},
		getRange: function() {
			if (window.getSelection) {
				var sel = this.getSelection();
				if (sel.getRangeAt && sel.rangeCount>0) {
					return sel.getRangeAt(0);
				}else if (sel.anchorNode) {
					var range = (this.options.bbmode) ? document.createRange() : this.doc.createRange();
					range.setStart (sel.anchorNode, sel.anchorOffset);
					range.setEnd (sel.focusNode, sel.focusOffset);
					return range;
				}
			}else{
				return (this.options.bbmode===true) ? document.selection.createRange():this.doc.selection.createRange();
			}
		},
		insertAtCursor: function(code,forceBBMode) {
			if (typeof(code)!="string") {code = $("<div>").append(code).html();}
			if ((this.options.bbmode && typeof(forceBBMode)=="undefined") || forceBBMode===true) {
				var clbb = code.replace(/.*(\[\/\S+?\])$/,"$1");
				var p = this.getCursorPosBB()+code.indexOf(clbb);
				if (document.selection) {
					//IE
					this.txtArea.focus();
					this.getSelection().text=code;
				}else if (this.txtArea.selectionStart || this.txtArea.selectionStart == '0') {
					this.txtArea.value = this.txtArea.value.substring(0, this.txtArea.selectionStart) + code + this.txtArea.value.substring(this.txtArea.selectionEnd, this.txtArea.value.length);
				}
				if (p<0) {p=0;}
				this.setCursorPosBB(p);
			}else{
				this.execNativeCommand("insertHTML",code);
				var node = this.getSelectNode();
				if (!$(node).closest("table,tr,td")) {
					this.splitPrevNext(node);
				}
			}
			return this.updateUI()
		},
		getSelectNode: function(rng) {
			this.body.focus();
			if (!rng) {rng=this.getRange();}
			if (!rng) {return this.$body;}
			return (window.getSelection) ? rng.commonAncestorContainer:rng.parentElement();
		},
		getCursorPosBB: function() {
			var pos=0;
			if ('selectionStart' in this.txtArea) {
				pos = this.txtArea.selectionStart;
			}else{
				this.txtArea.focus();
				var r = this.getRange();
				var rt = document.body.createTextRange();
				rt.moveToElementText(this.txtArea);
				rt.setEndPoint('EndToStart',r);
				pos = rt.text.length;
			}
			return pos;
		},
		setCursorPosBB: function(pos) {
			if (this.options.bbmode) {
				if (window.getSelection) {
					this.txtArea.selectionStart=pos;
					this.txtArea.selectionEnd=pos;
				}else{
					var range = this.txtArea.createTextRange();
					range.collapse(true);
					range.move('character', pos);
					range.select();
				}
			}
		},
		selectNode: function(node,rng) {
			if (!rng) {rng = this.getRange();}
			if (!rng) {return;}
			if (window.getSelection) {
				var sel = this.getSelection();
				rng.selectNodeContents(node)
				sel.removeAllRanges();
				sel.addRange(rng);
			}else{
				rng.moveToElementText(node);
				rng.select();
			}
		},
		selectRange: function(rng) {
			if (rng) {
				if (!window.getSelection) {
					rng.select();
				}else{
					var sel = this.getSelection();
					sel.removeAllRanges();
					sel.addRange(rng);
				}
			}
		},
		cloneRange: function(rng) {
			if (rng) {
				if (!window.getSelection) {
					return rng.duplicate();
				}else{
					return rng.cloneRange();
				}
			}
		},
		getRangeClone: function() {
			return this.cloneRange(this.getRange());
		},

		//TRANSFORM FUNCTIONS
		filterByNode: function(node) {
			var $n = $(node);
			var tagName = $n.get(0).tagName.toLowerCase();
			var filter=tagName;
			var attributes = this.getAttributeList($n.get(0));
			$.each(attributes, $.proxy(function(i, item) {
				var v = $n.attr(item);
				/* $.log("v: "+v);
				if ($.inArray(item,this.options.attrWrap)!=-1) {
					item = '_'+item;
				} */
				if (v && !v.match(/\{.*?\}/)) {
					if (item=="style") {
						var v = $n.attr(item);
						var va = v.split(";");
						$.each(va,function(i,f) {
							if (f && f.length>0) {
								filter+='['+item+'*="'+$.trim(f)+'"]';
							}
						});
					}else{
						filter+='['+item+'="'+v+'"]';
					}
				}else if (v && item=="style") {
					var vf = v.substr(0,v.indexOf("{"));
					if (vf && vf!="") {
						var v = v.substr(0,v.indexOf("{"));
						var va = v.split(";");
						$.each(va,function(i,f) {
							filter+='['+item+'*="'+f+'"]';
						});
						//filter+='['+item+'*="'+v.substr(0,v.indexOf("{"))+'"]';
					}
				}else{ //1.2.2
					if (item.substr(0,1)=="_") {item=item.substr(1,item.length)}
					filter+='['+item+']';
				}
			},this));

			//index
			var idx = $n.parent().children(filter).index($n);
			if (idx>0) {
				filter+=":eq("+$n.index()+")";
			}
			return filter;
		},
		relFilterByNode: function(node,stop) {
			var p="";
			$.each(this.options.attrWrap,function(i,a) {
				stop = stop.replace('['+a,'[_'+a);
			});
			while (node && node.tagName!="BODY" && !$(node).is(stop)) {
				p=this.filterByNode(node)+" "+p;
				if (node) {node = node.parentNode;}
			}
			return p;
		},
		getRegexpReplace: function(str,validname) {
			str = str.replace(/(\(|\)|\[|\]|\.|\*|\?|\:|\\)/g,"\\$1")
				.replace(/\s+/g,"\\s+")
				.replace(validname.replace(/(\(|\)|\[|\]|\.|\*|\?|\:|\\)/g,"\\$1"),"(.+)")
				.replace(/\{\S+\}/g,".*");
			return (str);
		},
		getBBCode: function() {
			if (!this.options.rules) {return this.$txtArea.val();}
			if (this.options.bbmode) {return this.$txtArea.val();}
			this.clearEmpty();
			this.removeLastBodyBR();
			return this.toBB(this.$body.html());
		},
		toBB: function(data) {
			if (!data) {return "";};
			//.replace(/\[/g,"&#91;").replace(/\]/g,"&#93;")
			var $e = (typeof(data)=="string") ? $('<span>').html(data):$(data);

			//remove last BR
			$e.find("div,blockquote,p").each(function() {
				if (this.nodeType!=3 && this.lastChild && this.lastChild.tagName=="BR") {
					$(this.lastChild).remove();
				}
			})
			if ($e.is("div,blockquote,p") && $e[0].nodeType!=3 && $e[0].lastChild && $e[0].lastChild.tagName=="BR") {
				$($e[0].lastChild).remove();
			}
			//END remove last BR

			//Remove BR
			$e.find("ul > br, table > br, tr > br").remove();
			//IE

			var outbb="";

			//transform smiles
			$.each(this.options.srules,$.proxy(function(s,bb) {
				$e.find(s).replaceWith(bb[0]);
			},this));

			$e.contents().each($.proxy(function(i,el) {
				var $el = $(el);
				if (el.nodeType===3) {
					outbb+=el.data.replace(/\n+/,"").replace(/\t/g,"   ");
					//outbb+=el.data.replace(/\t/g,"   ");
				/* }else if (el.tagName=="BR") {
					outbb+="\n"; */
				}else{
					//process html tag
					var rpl,processed=false;
					for (var rootsel in this.options.rules) {
						if ($el && $el.is(rootsel)) {
							//it is root sel
							var rlist = this.options.rules[rootsel];
							for (var i=0; i<rlist.length; i++) {
								var bbcode = rlist[i][0];
								var crules = rlist[i][1];
								var skip=false,keepElement=false,keepAttr=false;
								if (!$el.is("br")) {
									bbcode = bbcode.replace(/\n/g,"<br>");
								}
								bbcode = bbcode.replace(/\{(.*?)(\[.*?\])*\}/g,$.proxy(function(str,s,vrgx) {
									var c = crules[s.toLowerCase()];
									//if (typeof(c)=="undefined") {$.log("Param: {"+s+"} not found in HTML representation.");skip=true;return s;}
									if (typeof(c)=="undefined") {$.log("Param: {"+s+"} not found in HTML representation.");skip=true;}
									var $cel = (c.sel) ? $(el).find(c.sel):$(el);
									if (c.attr && !$cel.attr(c.attr)) {skip=true;return s;} //skip if needed attribute not present, maybe other bbcode
									var cont = (c.attr) ? $cel.attr(c.attr):$cel.html();
									if (typeof(cont)=="undefined" || cont==null) {skip=true;return s;}
									var regexp = c.rgx;

									//style fix
									if (regexp && c.attr=="style" && regexp.substr(regexp.length-1,1)!=";") {
										regexp+=";";
									}
									if (c.attr=="style" && cont && cont.substr(cont.length-1,1)!=";") {cont+=";"}
									//prepare regexp
									var rgx = (regexp) ? new RegExp(regexp,""):false;
									if (rgx) {
										if (cont.match(rgx)) {
											var m = cont.match(rgx);
											if (m && m.length==2) {
												cont=m[1];
											}
										}else{
											cont="";
										}
									}

									//if it is style attr, then keep tag alive, remove this style
									if (c.attr && skip===false) {
										if (c.attr=="style") {
											keepElement=true;
											var nstyle="";
											var r = c.rgx.replace(/^\.\*\?/,"").replace(/\.\*$/,"").replace(/;$/,"");
											$($cel.attr("style").split(";")).each(function(idx,style) {
												if (style && style!="") {
													if (!style.match(r)) {
														nstyle+=style+";";
													}
												}
											});
											if (nstyle=="") {
												$cel.removeAttr("style");
											}else{
												$cel.attr("style",nstyle);
											}
										}else if (c.rgx===false){
											keepElement=true;
											keepAttr=true;
											$cel.removeAttr(c.attr);
										}
									}
									if ($el.is('table,tr,td,font')) {keepElement=true;}

									return cont || "";
								},this));

								if (skip) {continue;}
								if ($el.is("img,br,hr")) {
									//replace element
									outbb+=bbcode;
									$el=null;
									break;
								}else{
									if (keepElement) {
										if ($.browser.msie) {
											$el.empty().append($('<span>').html(bbcode));
										}else{
											$el.empty().html('<span>'+bbcode+'</span>');
										}
									}else{
										if ($el.is("iframe")) {
											outbb+=bbcode;
										}else{
											$el.empty().html(bbcode);
										}
										break;
									}
								}
							}
						}
					}
					if (!$el || $el.is("iframe,img")) {return true;}
					outbb+=this.toBB($el);
				}
			},this));
			return outbb;
		},
		getHTML: function(bbdata,init,skiplt) {
			if (!this.options.bbmode && !init) {return this.$body.html()}

			if (!skiplt) {bbdata = bbdata.replace(/</g,"&lt;").replace(/\{/g,"&#123;").replace(/\}/g,"&#125;");}
			bbdata = bbdata.replace(/\[code\]([\s\S]*?)\[\/code\]/g,function(s) {
				s = s.substr("[code]".length,s.length-"[code]".length-"[/code]".length).replace(/\[/g,"&#91;").replace(/\]/g,"&#93;");
				return "[code]"+s+"[/code]";
			});



			//transform smiles
			/* $.each(this.options.smileList,$.proxy(function(i,row) {
				//bbdata = bbdata.replace(new RegExp(this.prepareRGX(row.bbcode),"g"),this.strf(row.img,this.options));
				bbdata = bbdata.replace(new RegExp(this.prepareRGX(row.bbcode),"g"),"_WBBSM"+i+"_");
			},this));
			bbdata = bbdata.replace(/_WBBSM(\d+)_/g,$.proxy(function(s,i) {
				return this.strf(this.options.smileList[i].img,this.options);
			},this)); */



			$.each(this.options.btnlist,$.proxy(function(i,b){
				if (b!="|" && b!="-") {
					var find=true;
					if (!this.options.allButtons[b] || !this.options.allButtons[b].transform) {
						return true;
					}
					$.each(this.options.allButtons[b].transform,$.proxy(function(html,bb) {
						html = html.replace(/\n/g,""); //IE 7,8 FIX
						var a=[];
						bb = bb.replace(/(\(|\)|\[|\]|\.|\*|\?|\:|\\|\\)/g,"\\$1");
							//.replace(/\s/g,"\\s");
						bb = bb.replace(/\{(.*?)(\\\[.*?\\\])*\}/gi,$.proxy(function(str,s,vrgx) {
							a.push(s);
							if (vrgx) {
								//has validation regexp
								vrgx = vrgx.replace(/\\/g,"");
								return "("+vrgx+"*?)";
							}
							return "([\\s\\S]*?)";
						},this));
						var n=0,am;
						while ((am = (new RegExp(bb,"mgi")).exec(bbdata)) != null) {
							if (am) {
								var r={};
								$.each(a,$.proxy(function(i,k) {
									r[k]=am[i+1];
								},this));
								var nhtml = html;
								nhtml = nhtml.replace(/\{(.*?)(\[.*?\])\}/g,"{$1}");
								nhtml = this.strf(nhtml,r);
								bbdata = bbdata.replace(am[0],nhtml);
							}
						}
					},this));
				}
			},this));

			//transform system codes
			$.each(this.options.systr,function(html,bb) {
				bb = bb.replace(/(\(|\)|\[|\]|\.|\*|\?|\:|\\|\\)/g,"\\$1")
					.replace(" ","\\s");
				bbdata = bbdata.replace(new RegExp(bb,"g"),html);
			});


			var $wrap = $(this.elFromString("<div>"+bbdata+"</div>"));
			//transform smiles
			$wrap.contents().filter(function() {return this.nodeType==3}).each($.proxy(smilerpl,this)).end().find("*").contents().filter(function() {return this.nodeType==3}).each($.proxy(smilerpl,this));

			function smilerpl(i,el) {
				var ndata = el.data;
				$.each(this.options.smileList,$.proxy(function(i,row) {
					var fidx = ndata.indexOf(row.bbcode);
					if (fidx!=-1) {
						var afternode_txt = ndata.substring(fidx+row.bbcode.length,ndata.length);
						var afternode = document.createTextNode(afternode_txt);
						el.data = el.data.substr(0,fidx);
						$(el).after(afternode).after(this.strf(row.img,this.options));
					}
				},this));
			}


			return $wrap.html();
		},
		//UTILS
		setUID: function(el,attr) {
			var id = "wbbid_"+(++this.lastid);
			$(el).attr(attr || "id",id);
			return id;
		},
		keysToLower: function(o) {
			$.each(o,function(k,v) {
				if (k!=k.toLowerCase()) {
					delete o[k];
					o[k.toLowerCase()]=v;
				}
			});
			return o;
		},
		strf: function(str,data) {
			data = this.keysToLower($.extend({},data));
			return str.replace(/\{([\w\.]*)\}/g, function (str, key) {key = key.toLowerCase();var keys = key.split("."), value = data[keys.shift().toLowerCase()];$.each(keys, function () { value = value[this]; }); return (value === null || value === undefined) ? "" : value;});
		},
		elFromString: function(str,doc) {
			if (typeof(doc)=="undefined") {
				doc=this.doc;
			}
			if (str.indexOf("<")!=-1 && str.indexOf(">")!=-1) {
				//create tag
				var wr = doc.createElement("SPAN");
				$(wr).html(str);
				this.setUID(wr,"wbb");
				return ($(wr).contents().size()>1) ? wr:wr.firstChild;
			}else{
				//create text node
				return doc.createTextNode(str);
			}
		},
		isContain: function(node,sel) {
			while (node && node.tagName!="BODY") {
				if ($(node).is(sel)) {return node};
				if (node) {node = node.parentNode;}
				else{return null;}
			}
		},
		isBBContain: function(bbcode) {
			var pos=this.getCursorPosBB();
			var b = this.prepareRGX(bbcode);
			var bbrgx = new RegExp(b,"g");
			var a;
			var lastindex=0;
			while ((a=bbrgx.exec(this.txtArea.value))!=null) {
				var p = this.txtArea.value.indexOf(a[0],lastindex);
				if (pos>p && pos<(p+a[0].length)) {
					return [a,p];
				}
				lastindex=p+1;
			}
		},
		prepareRGX: function(r) {
			return r.replace(/(\[|\]|\)|\(|\.|\*|\?|\:|\||\\)/g,"\\$1").replace(/\{.*?\}/g,"([\\s\\S]*?)");
			//return r.replace(/([^a-z0-9)/ig,"\\$1").replace(/\{.*?\}/g,"([\\s\\S]*?)");
		},
		checkForLastBR: function(node) {
			if (!node) {$node = this.body;}
			if (node.nodeType==3) {node=node.parentNode;}
			var $node = $(node);
			if ($node.is("span[id*='wbbid']")) {$node = $node.parent();}
			if (this.options.bbmode===false && $node.is('div,blockquote,code') && $node.contents().size()>0) {
				var l = $node[0].lastChild;
				if (!l || (l && l.tagName!="BR")) {$node.append("<br/>");}
			}
			if (this.$body.contents().size()>0 && this.body.lastChild.tagName!="BR") {
				this.$body.append('<br/>');
			}
		},
		getAttributeList: function(el) {
			var a=[];
			$.each(el.attributes,function(i,attr) {
				if (attr.specified) {
					a.push(attr.name);
				}
			});
			return a;
		},
		clearFromSubInsert: function(html,cmd) {
			var $wr = $('<div>').html(html);
			$.each(this.options.allButtons[cmd].rootSelector,$.proxy(function(i,s) {
				var seltext = this.options.rules[s][0][1]["seltext"]["sel"];
				var res=true;
				$wr.find("*").each(function() { //work with find("*") and "is", becouse in ie7-8 find is case sensitive
					if ($(this).is(s)) {
						if (seltext && seltext["sel"]) {
							$(this).replaceWith($(this).find(seltext["sel"].toLowerCase()).html());
						}else{
							$(this).replaceWith($(this).html());
						}
						res=false;
					}
				});
				return res;
			},this));
			return $wr.html();
		},
		splitPrevNext: function(node) {
			if (node.nodeType==3) {node = node.parentNode};
			var f = this.filterByNode(node).replace(/\:eq.*$/g,"");
			if ($(node.nextSibling).is(f)) {
				$(node).append($(node.nextSibling).html());
				$(node.nextSibling).remove();
			}
			if ($(node.previousSibling).is(f)) {
				$(node).prepend($(node.previousSibling).html());
				$(node.previousSibling).remove();
			}
		},
		modeSwitch: function() {
			if (this.options.bbmode) {
				//to HTML
				this.$body.html(this.getHTML(this.$txtArea.val()));
				this.$txtArea.hide().removeAttr("wbbsync").val("");
				this.$iFrame.show();
				this.$body.focus();
			}else{
				//to bbcode
				this.$txtArea.val(this.getBBCode());
				this.$iFrame.hide();
				this.$txtArea.show().focus();
			}
			this.options.bbmode=!this.options.bbmode;
		},
		clearEmpty: function () {
			this.$body.children().filter(emptyFilter).remove();
			function emptyFilter() {
				if (!$(this).is("span,font,a")) {
					//clear empty only for span,font
					return false;
				}
				if (!$(this).hasClass("wbbtab") && $.trim($(this).html()).length==0) {
					return true;
				}else if ($(this).children().size()>0) {
					$(this).children().filter(emptyFilter).remove();
					if ($(this).html().length==0 && this.tagName!="BODY") {
						return true;
					}
				}
			}
		},
		dropdownclick: function(bsel,tsel,e) {
			//this.body.focus();
			//if (!window.getSeletion && $.browser.msie) this.lastRange=this.getRange(); //IE 7 FIX
			var $btn = $(e.currentTarget).closest(bsel);
			if ($btn.hasClass("dis")) {return;}
			if ($btn.attr("wbbshow")) {
				//hide dropdown
				$btn.removeAttr("wbbshow");
				$(document).unbind("mousedown",this.dropdownhandler);
				if (this.doc) {
					$(this.doc).unbind("mousedown",this.dropdownhandler);
				}
			}else{
				this.lastRange=this.getRange();
				this.$editor.find("*[wbbshow]").each(function(i,el) {
					$(el).removeClass("on").find($(el).attr("wbbshow")).hide().end().removeAttr("wbbshow");
				})
				$btn.attr("wbbshow",tsel);
				$(document.body).bind("mousedown",$.proxy(function(evt) {this.dropdownhandler($btn,bsel,tsel,evt)},this));
				if (this.$body) {
					this.$body.bind("mousedown",$.proxy(function(evt) {this.dropdownhandler($btn,bsel,tsel,evt)},this));
				}
			}
			$btn.find(tsel).toggle();
			$btn.toggleClass("on");
		},
		dropdownhandler: function($btn,bsel,tsel,e) {
			if ($(e.target).parents(bsel).size()==0) {
				$btn.removeClass("on").find(tsel).hide();
				$(document).unbind('mousedown',this.dropdownhandler);
				if (this.$body) {
					this.$body.unbind('mousedown',this.dropdownhandler);
				}
			}
		},
		rgbToHex: function(rgb) {
			if (rgb.substr(0, 1)=='#') {return rgb;}
			//if (rgb.indexOf("rgb")==-1) {return rgb;}
			if (rgb.indexOf("rgb")==-1) {
				//IE
				var color=parseInt(rgb);
				color = ((color & 0x0000ff) << 16) | (color & 0x00ff00) | ((color & 0xff0000) >>> 16);
				return '#'+color.toString(16);
			}
			var digits = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/.exec(rgb);
			return "#"+this.dec2hex(parseInt(digits[2]))+this.dec2hex(parseInt(digits[3]))+this.dec2hex(parseInt(digits[4]));
		},
		dec2hex: function(d) {
			if(d>15) {
				return d.toString(16);
			}else{
				return "0"+d.toString(16);
			}
		},
		sync: function() {
			if (this.options.bbmode) {
				this.$body.html(this.getHTML(this.txtArea.value,true));
			}else{
				this.$txtArea.attr("wbbsync",1).val(this.getBBCode());
			}
		},
		clearPaste: function(el) {
			var $block = $(el);
			//clear paste
			//$.log("clearPaste");
			$.each(this.options.rules,$.proxy(function(s,bb) {
				$block.find(s).attr("wbbkeep",1);
			},this));
			//replace div and p without last br to html()+br
			$block.find("*[wbbkeep!='1']").each($.proxy(function(i,el) {
				var $this = $(el);
				if ($this.is('div,p') && ($this.children().size()==0 || el.lastChild.tagName!="BR")) {
					$this.after("<br/>").after($this.contents()).remove();
				}else{
					$this.after($this.contents()).remove();
				}
			},this));
			$block.find("*[wbbkeep]").removeAttr("wbbkeep").removeAttr("style");
			/* $block.contents().filter(function(i,el) {return el.nodeType===3}).each(function() {
				//$.log(this);
				if (this.data.match(/\t/)) {
					//$.log("repl");
					this.data = this.data.replace(/\t/g,"   ");
				}
			}); */
			//$.log($block);
		},
		sortArray: function(ar,asc) {
			ar.sort(function(a,b) {
				return (a.length-b.length)*(asc || 1);
			});
			return ar;
		},
		smileFind: function() {
			if (this.options.smilefind) {
				var $smlist = $(this.options.smilefind).find('img[alt]');
				if ($smlist.size()>0) {
					this.options.smileList=[];
					$smlist.each($.proxy(function(i,el) {
						var $el=$(el);
						this.options.smileList.push({title:$el.attr("title"),bbcode:$el.attr("alt"),img:$el.removeAttr("alt").removeAttr("title")[0].outerHTML});
					},this));
				}
			}
		},
		destroy: function() {
			this.$editor.replaceWith(this.$txtArea);
			this.$txtArea.removeClass("wysibb-texarea").show();
			this.$modal.remove();
			this.$txtArea.data("wbb",null);
		},
		autoresize: function() {
			clearTimeout(this.resizeTimer);
			this.resizeTimer=setTimeout($.proxy(function() {
				var wh = this.$iFrame.outerHeight();
				var ih = this.$body.outerHeight();
                if (ih>this.options.resize_maxheight) {ih=this.options.resize_maxheight;}
/* 					this.lastRange=this.getRange();
                this.$iFrame.animate({
                    height: (ih+30)+"px"
                },100,$.proxy(function() {
                    this.selectRange(this.lastRange);
                },this));
                this.$iFrame.select(); */
                //this.selectRange(this.lastRange);
                this.$iFrame.height(ih+"px");
                this.$txtArea.height(ih+"px");
			},this),200);
		},
		pressTab: function(e) {
			if (e && e.which == 9) {
				//insert tab
				if (e.preventDefault) {e.preventDefault();}
				if (this.options.bbmode) {
					this.insertAtCursor('   ',false);
				}else{
					this.insertAtCursor('<span class="wbbtab">\uFEFF</span>',false);
					//this.execNativeCommand("indent",false);
				}
			}
		},
		removeLastBodyBR: function() {
			$.log("removeLastBodyBR");
			if (this.body.lastChild && this.body.lastChild.nodeType!=3 && this.body.lastChild.tagName=="BR") {
				this.body.removeChild(this.body.lastChild);
				this.removeLastBodyBR();
			}
		},
		traceTextareaEvent: function(e) {
			var data = this.$txtArea.val();
			if (this.options.bbmode===false && data!="" && $(e.target).closest("div.wysibb").size()==0 && !this.$txtArea.attr("wbbsync")) {
				this.insertAtCursor(this.getHTML(data,true));
				this.$txtArea.val("");
			}
		},
		txtAreaInitContent: function() {
			this.$body.html(this.getHTML(this.txtArea.value,true));
		},
		getValidationRGX: function(s) {
			if (s.match(/\[\S+\]/)) {
				return s.replace(/.*(\\*\[\S+\]).*/,"$1");
			}
			return "";
		},
		smileConversion: function() {
			var snode = this.getSelectNode();
			if (snode.nodeType==3) {
				var ndata = snode.data;
				if (ndata.length>=2 && !this.isInClearTextBlock(snode) && $(snode).parents("a").size()==0) {
					$.each(this.options.srules,$.proxy(function(i,sar) {
						var smbb = sar[0];
						var fidx = ndata.indexOf(smbb);
						if (fidx!=-1) {
							var afternode_txt = ndata.substring(fidx+smbb.length,ndata.length);
							var afternode = document.createTextNode(afternode_txt);
							var afternode_cursor = document.createElement("SPAN");
							snode.data = snode.data.substr(0,fidx);
							$(snode).after(afternode).after(afternode_cursor).after(this.strf(sar[1],this.options));
							this.selectNode(afternode_cursor);
							return false;
						}
					},this));
				}
			}
		},
		isInClearTextBlock: function(snode) {
			if (this.cleartext && this.options.bbmode===false) {
				if (!snode) {snode = this.getSelectNode();}
				var find=false;
				$.each(this.cleartext,$.proxy(function(sel,command) {
					if (this.isContain(snode,sel)) {
						find=command;
						return false;
					}
				},this))
				return find;
			}
			return false;
		},

		//MODAL WINDOW
		showModal: function(cmd,opt,queryState) {
			$.log("showModal: "+cmd);
			var $cont = this.$modal.find(".wbbm-content").html("");
			var $wbbm = this.$modal.find(".wbbm").removeClass("hastabs");
			this.$modal.find("span.wbbm-title-text").html(opt.title);
			if (opt.tabs && opt.tabs.length>1) {
				//has tabs, create
				$wbbm.addClass("hastabs");
				var $ul = $('<div class="wbbm-tablist">').appendTo($cont).append("<ul>").children("ul");
				$.each(opt.tabs,$.proxy(function(i,row) {
					if (i==0) {row['on']="on"}
					$ul.append(this.strf('<li class="{on}" onClick="$(this).parent().find(\'.on\').removeClass(\'on\');$(this).addClass(\'on\');$(this).parents(\'.wbbm-content\').find(\'.tab-cont\').hide();$(this).parents(\'.wbbm-content\').find(\'.tab'+i+'\').show()">{title}</li>',row));

				},this))
			}
			if (opt.width) {
				$wbbm.css("width",opt.width);
			}
			var $cnt = $('<div class="wbbm-cont">').appendTo($cont);
			$wbbm.find('#wbbm-remove')[queryState?'show':'hide']();
			$.each(opt.tabs,$.proxy(function(i,r) {
				var $c = $('<div>').addClass("tab-cont tab"+i).attr("tid",i).appendTo($cnt);
				if (i>0) {$c.hide();}
				if (r.html) {
					$c.html(this.strf(r.html,this.options));
				}else{
					$.each(r.input,$.proxy(function(j,inp) {
						inp["value"]=queryState[inp.param.toLowerCase()];
						if (inp.param.toLowerCase()=="seltext" && (!inp["value"] || inp["value"]=="")) {
							inp["value"] = this.getSelectText(this.options.bbmode);
						}
						if (inp["value"] && inp["value"].indexOf("<span id='wbbid")==0 && $(inp["value"]).is("span[id*='wbbid']")) {
							inp["value"] = $(inp["value"]).html();
						}
						$c.append(this.strf('<div class="wbbm-inp-row"><label>{title}</label><input class="modal-text" type="text" name="{param}" value="{value}"/></div>',inp));
					},this));
				}
			},this));

			this.lastRange=this.getRange();

			if ($.isFunction(opt.onLoad)) {
				opt.onLoad.call(this,cmd,opt,queryState);
			}
			$wbbm.find('#wbbm-submit').click($.proxy(function() {
				if ($.isFunction(opt.onSubmit)) { //custom submit function, if return false, then don't process our function
					var r = opt.onSubmit.call(this,cmd,opt,queryState);
					if (r===false) {return;}
				}
				var params={};
				var valid=true;
				this.$modal.find(".wbbm-inperr").remove();
				this.$modal.find(".wbbm-brdred").removeClass("wbbm-brdred");
				$.each(this.$modal.find(".tab-cont:visible input"),$.proxy(function(i,el) {
					var tid = $(el).parents(".tab-cont").attr("tid");
					var pname = $(el).attr("name").toLowerCase();
					var pval = $(el).val();
					var validation = opt.tabs[tid]["input"][i]["validation"];
					if (typeof(validation)!="undefined") {
						if (!pval.match(new RegExp(validation,"i"))) {
							valid=false;
							$(el).after('<span class="wbbm-inperr">'+CURLANG.validation_err+'</span>').addClass("wbbm-brdred");
						}
					}
					params[pname]=pval;
				},this));
				if (valid) {
					if (this.lastRange) this.selectRange(this.lastRange);
					//clbk.insert(params);
					//insert callback
					if (queryState) {
						this.wbbRemoveCallback(cmd,true);
					}
					this.wbbInsertCallback(cmd,params);
					//END insert callback

					this.closeModal();
				}
			},this));
			$wbbm.find('#wbbm-remove').click($.proxy(function() {
				//clbk.remove();
				this.wbbRemoveCallback(cmd); //remove callback
				this.closeModal();
			},this));

			$(document.body).css("overflow","hidden"); //lock the screen, remove scroll on body
			if ($(document.body).height()>$(window).height()) { //if body has scroll, add padding-right 20px
				$(document.body).css("padding-right","20px");
			}
			this.$modal.show();
			//if (window.getSelection)
			$wbbm.css("margin-top",($(window).height()-$wbbm.outerHeight())/3+"px");
			setTimeout($.proxy(function() {this.$modal.find("input:visible")[0].focus()},this),10);
		},
		escModal: function(e) {
			if (e.which==27) {this.closeModal();}
			return this;
		},
		closeModal: function() {
			$(document.body).css({"overflow":"auto","padding-right":0}).unbind("keyup",this.escModal); //ESC key close modal;
			this.$modal.find('#wbbm-submit,#wbbm-remove').unbind('click');
			this.$modal.hide();
			this.lastRange=false;
			return this;
		},
		getParams: function(src,s,offset) {
			var params={};
			if (this.options.bbmode) {
				//bbmode
				var stext = s.match(/\{[\s\S]+?\}/g);
				s = this.prepareRGX(s);
				var rgx = new RegExp(s,"g");
				var val = this.txtArea.value;
				if (offset>0) {
					val = val.substr(offset,val.length-offset);
				}
				var a = rgx.exec(val);
				if (a) {
					$.each(stext,function(i,n) {
						params[n.replace(/\{|\}/g,"").replace(/"/g,"'").toLowerCase()] = a[i+1];
					});
				}
			}else{
				var rules = this.options.rules[s][0][1];
				$.each(rules,$.proxy(function(k,v) {
					var value="";
					if (v.attr!==false) {
						value=$(src).attr(v.attr);
					}else if (v.sel!==false) {
						value=$(src).find(v.sel).html();
					}else{
						value=$(src).html();
					}
					if (value) {
						if (v.rgx!==false) {
							var m = value.match(new RegExp(v.rgx));
							if (m && m.length==2) {
								value = m[1];
							}
						}
						params[k]=value.replace(/"/g,"'");
					}
				},this))
			}
			return params;
		},


		//imgUploader
		imgLoadModal: function() {
			$.log("imgLoadModal");
			if (this.options.imgupload===true) {
				this.$modal.find("#imguploader").dragfileupload({
					url: this.strf(this.options.img_uploadurl,this.options),
					extraParams: {
						maxwidth: this.options.img_maxwidth,
						maxheight: this.options.img_maxheight
					},
					themePrefix: this.options.themePrefix,
					themeName: this.options.themeName,
					success: $.proxy(function(data) {
						this.$txtArea.insertImage(data.image_link,data.thumb_link);

						this.closeModal();
					},this)
				});

				if ($.browser.msie) {
					//ie not posting form by security reason, show default file upload
					$.log("IE not posting form by security reason, show default file upload");
					this.$modal.find("#nicebtn").hide();
					this.$modal.find("#fileupl").css("opacity",1);
				}

				this.$modal.find("#fileupl").bind("change",function() {
					$("#fupform").submit();
				});
				this.$modal.find("#fupform").bind("submit",$.proxy(function(e) {
					$(e.target).parents("#imguploader").hide().after('<div class="loader"><img src="'+this.options.themePrefix+'/'+this.options.themeName+'/img/loader.gif" /><br/><span>'+CURLANG.loading+'</span></div>').parent().css("text-align","center");
				},this))

			}else{
				this.$modal.find(".hastabs").removeClass("hastabs");
				this.$modal.find("#imguploader").parents(".tab-cont").remove();
				this.$modal.find(".wbbm-tablist").remove();
			}
			return this;
		},
		imgSubmitModal: function() {
			$.log("imgSubmitModal");
		},
		//DEBUG
		printObjectInIE: function(obj) {
			try{
			$.log(JSON.stringify(obj));
			}catch(e) {}
		},
		checkFilter: function(node,filter) {
			$.log("node: "+$(node).get(0).outerHTML+" filter: "+filter+" res: "+$(node).is(filter.toLowerCase()));
		},
		debug: function(msg) {
			if (this.options.debug===true) {
				var time = (new Date()).getTime();
				if (typeof(console)!="undefined") {
					console.log((time-this.startTime)+" ms: "+msg);
				}else{
					$("#exlog").append('<p>'+(time-this.startTime)+" ms: "+msg+'</p>');
				}
				this.startTime=time;
			}
		}
	}

	$.log = function(msg) {
		if (typeof(wbbdebug)!="undefined" && wbbdebug===true) {
			if (typeof(console)!="undefined") {
				console.log(msg);
			}else{
				$("#exlog").append('<p>'+msg+'</p>');
			}
		}
	}
	$.fn.wysibb = function(settings) {
		return this.each(function() {
			var data = $(this).data("wbb");
			if (!data) {
				new $.wysibb(this, settings);
			}
		});
	}

	//API
	$.fn.getDoc = function() {
		return this.data('wbb').doc;
	}
	$.fn.getSelectText = function(fromTextArea) {
		return this.data('wbb').getSelectText(fromTextArea);
	}
	$.fn.bbcode = function(data) {
		if (typeof(data)!="undefined") {
			this.data('wbb').$txtArea.val(data);
			return this;
		}else{
			return this.data('wbb').getBBCode();
		}
	}
	$.fn.htmlcode = function(data) {
		if (!this.data('wbb').options.onlyBBMode && this.data('wbb').inited===true) {
			if (typeof(data)!="undefined") {
				this.data('wbb').$body.html(data);
				return this;
			}else{
				return this.data('wbb').getHTML(this.data('wbb').$txtArea.val());
			}
		}
	}
	$.fn.getBBCode = function() {
		return this.data('wbb').getBBCode();
	}
	$.fn.getHTML = function() {
		var wbb = this.data('wbb');
		return wbb.getHTML(wbb.$txtArea.val());
	}
	$.fn.getHTMLByCommand = function(command,params) {
		return this.data("wbb").getHTMLByCommand(command,params);
	}
	$.fn.getBBCodeByCommand = function(command,params) {
		return this.data("wbb").getBBCodeByCommand(command,params);
	}
	$.fn.insertAtCursor = function(data,forceBBMode) {
		this.data("wbb").insertAtCursor(data,forceBBMode);
		return this.data("wbb");
	}
	$.fn.execCommand = function(command,value) {
		this.data("wbb").execCommand(command,value);
		return this.data("wbb");
	}
	$.fn.insertImage = function(imgurl,thumburl) {
		var editor = this.data("wbb");
		var code = (thumburl) ? editor.getCodeByCommand('link',{url:imgurl,seltext: editor.getCodeByCommand('img',{src:thumburl})}): editor.getCodeByCommand('img',{src:imgurl});
		this.insertAtCursor(code);
		return editor;
	}
	$.fn.sync = function() {
		this.data("wbb").sync();
		return this.data("wbb");
	}
	$.fn.destroy = function() {
		this.data("wbb").destroy();
	}


	$.fn.queryState = function(command) {
		return this.data("wbb").queryState(command);
	}
})(jQuery);


//Drag&Drop file uploader
(function($) {
	'use strict';

	$.fn.dragfileupload = function(options) {
		return this.each(function() {
			var upl = new FileUpload(this, options);
			upl.init();
		});
	};

	function FileUpload(e, options) {
		this.$block=$(e);

		this.opt = $.extend({
			url: false,
			success: false,
			extraParams: false,
			fileParam: 'img',
			validation: '\.(jpg|png|gif|jpeg)$',

			t1: CURLANG.fileupload_text1,
			t2: CURLANG.fileupload_text2
		},options);
	}

	FileUpload.prototype = {
		init: function() {
			if (window.FormData != null) {
				this.$block.addClass("drag");
				this.$block.prepend('<div class="p2">'+this.opt.t2+'</div>');
				this.$block.prepend('<div class="p">'+this.opt.t1+'</div>');

				this.$block.bind('dragover', function() {$(this).addClass('dragover');return false;});
				this.$block.bind('dragleave', function() {$(this).removeClass('dragover');return false;});

				//upload progress
				var uploadProgress = $.proxy(function(e) {
					var p = parseInt(e.loaded/e.total*100, 10);
					this.$loader.children("span").text(CURLANG.loading+': '+ p+'%');

				}, this);
				var xhr = jQuery.ajaxSettings.xhr();
				if (xhr.upload) {
					xhr.upload.addEventListener('progress', uploadProgress, false);
				}
				this.$block[0].ondrop = $.proxy(function(e) {
					e.preventDefault();
					this.$block.removeClass('dragover');
					var ufile = e.dataTransfer.files[0];
					if (this.opt.validation && !ufile.name.match(new RegExp(this.opt.validation))) {
						this.error(CURLANG.validation_err);
						return false;
					}
					var fData = new FormData();
					fData.append(this.opt.fileParam, ufile);

					if (this.opt.extraParams) { //check for extraParams to upload
						$.each(this.opt.extraParams,function(k,v) {
							fData.append(k, v);
						});
					}

					this.$loader = $('<div class="loader"><img src="'+this.opt.themePrefix+'/'+this.opt.themeName+'/img/loader.gif" /><br/><span>'+CURLANG.loading+'</span></div>');
					this.$block.html(this.$loader);

					$.ajax({
						type: 'POST',
						url: this.opt.url,
						data: fData,
						processData: false,
						contentType: false,
						xhr: function() {return xhr},
						dataType: 'json',
						success: $.proxy(function(data) {
							if (data && data.status==1) {
								this.opt.success(data);
							}else{
								this.error(data.msg || CURLANG.error_onupload);
							}
						},this),
						error: $.proxy(function (xhr, txt, thr) {this.error(CURLANG.error_onupload)},this)
					});
				},this);

			}
		},
		error: function(msg) {
			this.$block.find(".upl-error").remove().end().append('<span class="upl-error">'+msg+'</span>').addClass("wbbm-brdred");
		}
	}
})(jQuery);