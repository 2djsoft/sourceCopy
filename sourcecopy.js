(function($) {
    $(function() {

        var setCopySelecter = $('.ns-wrap table.w td > *, .cp');
        var setOneCopySelecter = $('#ckon02');


        var styleset = '<style type="text/css">body.cpset {padding-bottom: 400px}body.cpset .fxoneclick {position: fixed; top:0; right: 0px; padding: 15px; border-bottom:1px solid #000;border-left:1px solid #000; background: #f9f9f9;}body.cpset .copyset {position: fixed;bottom: 0; left: 0;right: 0; z-index: 99; background: #fff; border-top:1px solid #000; box-shadow: 0 -4px 4px rgba(0,0,0,0.1)}body.cpset .copyset .ns-inner {background: #fff;}body.cpset .copybtn, body.cpset .copyclose {cursor:pointer; background:#444; color:#fff; width:76px; height:30px; vertical-align:middle;display:inline-block; margin-left:2px; text-align:center; line-height:30px;}body.cpset .copyclose {background: #222;}body.cpset .row.cp > div {border:1px solid #ddd;}body.cpset .copyset .code {border:1px solid #111; background: #2e2e2e; padding:20px;}body.cpset .copyset code {white-space: pre-line; font-family:"나눔고딕","나눔 고딕","맑은고딕","맑은 고딕",Helvetica,"Apple SD Gothic Neo", sans-serif, "dotum";  color:#fff;}.ns-wrap table.w td > *,.cpset .cp,.cpset .cp *{cursor:url(copybtn.gif), auto !important}</style>';
        $('html head').append(styleset);
        $('body').addClass('cpset').append('<div class="copyset ns-wrap"><div class="ns-inner"></div></div>');
        setCopySelecter.unbind('click').bind('click', function(event) {
            var oneclickaction = setOneCopySelecter.prop('checked');
            var souce = $(this).clone().removeClass('cp')[0].outerHTML;
            var outSouce = souce.escapeHTML().editorColor();
            if (oneclickaction) {
                prompt("[Ctrl + c]를 눌러 복사하세요:", souce)
            } else {
                $('body .copyset .ns-inner').empty().append('<div style="margin:10px 0 20px; padding:10px;">' + souce + '<div class="mt20 pt10" style="border-top:1px solid #ddd;"><a class="copybtn">소스복사</a><a class="copyclose">닫기</a><p class="pt20 pb10">소스미리보기</p><div class="code"><code>' + outSouce + '</code></div></div></div>');
                $('.copybtn').unbind('click').bind('click', function(event) {
                    prompt("[Ctrl + c]를 눌러 복사하세요:", $(this).parent().prev().clone()[0].outerHTML)
                });
                $('.copyclose').unbind('click').bind('click', function(event) {
                    $('body .copyset .ns-inner').empty()
                })
            }
        })
    });
    String.prototype.escapeHTML = function() {
        return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
    };
    String.prototype.editorColor = function() {
        return this.replace(/=&quot;/g, '=<span style="color:#e7db74">&quot;').replace(/&quot; /g, '&quot;</span> ').replace(/&quot;&gt;/g, '&quot;</span>&gt;').replace(/class=/g, '<span style="color:#6abf2b">class=</span>').replace(/&lt;/g, '&lt;<span style="color:#f92467">').replace(/&gt;/g, '</span>&gt;').replace(/id=/g, '<span style="color:#6abf2b">id=</span>').replace(/for=/g, '<span style="color:#6abf2b">for=</span>').replace(/type=/g, '<span style="color:#6abf2b">type=</span>')
    }
})(jQuery);