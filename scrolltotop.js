<a class = "scrollToTop" title = "Back to top"  href = ""><img id = "page-up-img"  src = "http://www.lessonbid.co.uk/images/page-up-button.gif" alt = "Page Scroll Button"></a>
		<script>
			$(document).ready(function(){
				
				//Check to see if the window is top if not then display button
				$(window).scroll(function(){
					if ($(this).scrollTop() > 100) {
						$('.scrollToTop').fadeIn();
					} else {
						$('.scrollToTop').fadeOut();
					}
				});
				
				//Click event to scroll to top
				$('.scrollToTop').click(function(){
					$('html, body').animate({scrollTop : 0},800);
					return false;
				});
				
			});		
		</script>