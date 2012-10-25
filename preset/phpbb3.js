WBBPRESET = {
	bodyClass: "content content-phpbb3",
	buttons: 'bold,italic,underline,|,quote,code,bullist,numlist,|,img,link,smilebox,fontsize,fontcolor,attach',
	traceTextarea: true,
	allButtons: {
		quote: {
			transform: {
				'<blockquote class="uncited"><div>{SELTEXT}</div></blockquote>':'[quote]{SELTEXT}[/quote]',
				'<blockquote><div><cite contenteditable="false">{AUTHOR} писал(а):</cite>{SELTEXT}</div></blockquote>':'[quote="{AUTHOR}"]{SELTEXT}[/quote]'
			}
		},
		code: {
			transform: {
				'<dl class="codebox"><dt contenteditable="false">Код: <a>Выделить всё</a></dt><dd><code>{SELTEXT}</code></dd></dl>':'[code]{SELTEXT}[/code]'
			}
		},
		bullist: {
			transform: {
				'<ul>{SELTEXT}</ul>':'[list]{SELTEXT}[/list]',
				'<li>{SELTEXT}</li>':'[*]{SELTEXT}\n'
			}
		},
		numlist: {
			transform: {
				'<ul>{SELTEXT}</ul>':'[list=1]{SELTEXT}[/list]',
				'<li>{SELTEXT}</li>':'[*]{SELTEXT}\n'
			}
		},
		attach: {
			buttonText: "attach",
			transform: {
				'<div class="inline-attachment" num={NUM}><dl class="file"><dt class="attach-image"><img src="/forum/download/file.php?id={NUM}" alt="{ALT}"></dt><dd>{ALT} Просмотров: 0</dd></dl></div>':'[attachment={NUM}]{ALT}[/attachment]'
			}
		}
	},
	smilefind: "#smiley-box"
}

//hide smilelist
$(document).ready(function() {
	$("#format-buttons").hide();
	$("#smiley-box").hide();
	$("#message-box").css("width","100%");
});