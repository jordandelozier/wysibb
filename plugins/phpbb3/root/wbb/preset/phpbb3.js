WBBPRESET = {
	bodyClass: "content content-phpbb3",
	buttons: 'bold,italic,underline,|,quote,code,bullist,numlist,|,img,link,smilebox,fontsize,fontcolor',
	allButtons: {
		quote: {
			transform: {
				'<blockquote class="uncited"><div>{SELTEXT}</div></blockquote>':'[quote]{SELTEXT}[/quote]',
				'<blockquote><div><cite>{AUTHOR} писал(а):</cite>{SELTEXT}</div></blockquote>':'[quote="{AUTHOR}"]{SELTEXT}[/quote]'
			}
		},
		code: {
			transform: {
				'<dl class="codebox"><dt>Код: <a href="#">Выделить всё</a></dt><dd><code>{SELTEXT}</code></dd></dl>':'[code]{SELTEXT}[/code]'
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