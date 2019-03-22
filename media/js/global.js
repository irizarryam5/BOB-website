function toggleForm(formId, linkId, actionLabelId, hideOnReady, hideTextString, clickSelector, speed) {
    speed = speed || "slow";
    hideTextString = hideTextString || "Hide this form";
    clickSelector = clickSelector || linkId;
    $(document).ready(function() {
        var isShown = false;
        var showText = null;
        hideOnReady && $(formId).hide();
        $(linkId).attr("href", "javascript:void(0)");
        $(clickSelector).css("cursor", "pointer");
        $(clickSelector).click(function() {
            isShown = !isShown;
            showText = showText || $(actionLabelId).text();
            $(formId).slideToggle(speed);
            $(actionLabelId).text(isShown ? hideTextString : showText);
        });
    });
}

toggleForm("#tellafriend", "#tellafriend_a", "#tellafriend_a span:first");
toggleForm("#video_embed", ".share_video a:first", ".share_video a:first", true);
toggleForm("#video", "#video_static_link", "#video_actionlabel", false, "Close this video", "#video_section h2:first", 1);

$(document).ready(function() {
    $(".slideshow > li").show();
 $(".slideshow").cycle({
    	fx:     'fade', 
    speed:  'slow',
    timeout: '5000',
    next:   '#next2', 
    prev:   '#prev2' 
});
});

