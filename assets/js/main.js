var audioelement = $('#radiostream').get(0);
var togglePlayback = function(){
	!audioelement.paused?audioelement.pause():audioelement.play();
	$($('#playPause').find('i')).attr('class',$('#radiostream').get(0).paused?'fa fa-play':'fa fa-pause');
}

$(audioelement).bind('canplay',function(){
	$('#loading').hide();
})