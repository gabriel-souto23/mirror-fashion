var	banners	=	["img/destaque-home.png",	"img/destaque-home-2.png"];
var	bannerAtual	=	0;
function	trocaBanner() {
                bannerAtual	=	(bannerAtual	+	1)	%	2;
                document.querySelector('.destaque	img').src	=	banners[bannerAtual];
}
setInterval(trocaBanner,	4000);

$('.novidades').addClass('painel-compacto');
$('.novidades	button').click(function() {
    $('.novidades').removeClass('painel-compacto');
});