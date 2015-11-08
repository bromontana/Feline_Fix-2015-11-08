/*
	Overflow by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	console.log('fasdfasdf');

	$('#clickHere').on('click', function(){

		var elementId = $(this).attr('jump');
		var offset = $(elementId).offset().top;

		$('body, html').animate({
			scrollTop: offset
		}, 200);

	});

<script type="text/javascript'>
function random_3(){
    var myrandom=Math.round(Math.random()*2)
    var link1="http://www.codingforums.com"
    var link2="http://www.cssdrive.com"
    var link3="http://www.dynamicdrive.com"
    if (myrandom==0)
        window.location=link1
    else if (myrandom==1)
        window.location=link2
    else if (myrandom==2)
        window.location=link3
}
</script>
<form>
<input type="button" value="random link!" onClick="random_3()">
</form>














	var settings = {

		// Full screen header?
			fullScreenHeader: true,

		// Parallax background effect?
			parallax: true,

		// Parallax factor (lower = more intense, higher = less intense).
			parallaxFactor: 10

	};

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1080px)',
		narrow: '(max-width: 840px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		if (skel.vars.touch) {

			settings.parallax = false;
			$body.addClass('is-scroll');

		}

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Scrolly links.
			$('.scrolly-middle').scrolly({
				speed: 1000,
				anchor: 'middle'
			});

			$('.scrolly').scrolly({
				speed: 1000,
				offset: function() { return (skel.breakpoint('mobile').active ? 70 : 190); }
			});

		// Full screen header.
			if (settings.fullScreenHeader) {

				var $header = $('#header');

				if ($header.length > 0) {

					var $header_header = $header.find('header');

					$window
						.on('resize.overflow_fsh', function() {

							if (skel.breakpoint('mobile').active)
								$header.css('padding', '');
							else {

								var p = Math.max(192, ($window.height() - $header_header.outerHeight()) / 2);
								$header.css('padding', p + 'px 0 ' + p + 'px 0');

							}

						})
						.trigger('resize.overflow_fsh');

					$window.load(function() {
						$window.trigger('resize.overflow_fsh');
					});

				}

			}

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (skel.vars.browser == 'ie'
				||	skel.vars.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				var $dummy = $(), $bg;

				$window
					.on('scroll.overflow_parallax', function() {

						// Adjust background position.
							$bg.css('background-position', 'center ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');

					})
					.on('resize.overflow_parallax', function() {

						// If we're in a situation where we need to temporarily disable parallax, do so.
							if (!skel.breakpoint('wide').active
							||	skel.breakpoint('narrow').active) {

								$body.css('background-position', '');
								$bg = $dummy;

							}

						// Otherwise, continue as normal.
							else
								$bg = $body;

						// Trigger scroll handler.
							$window.triggerHandler('scroll.overflow_parallax');

					})
					.trigger('resize.overflow_parallax');
			}

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var links = this.el.find('.link');
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    };
  }  

  var accordion = new Accordion($('#accordion'), false);
});

		// Poptrox.
			$('.gallery').poptrox({
				useBodyOverflow: false,
				usePopupEasyClose: false,
				overlayColor: '#0a1919',
				overlayOpacity: (skel.vars.IEVersion < 9 ? 0 : 0.75),
				usePopupDefaultStyling: false,
				usePopupCaption: true,
				popupLoaderText: '',
				windowMargin: 10,
				usePopupNav: true
			});

	});

})(jQuery);