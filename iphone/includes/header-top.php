<section class="section section_padding dd-header">
	<div class="dd-burg-wrap">
		<div class="dd-burg">
			<img src="img/burg.png" alt="">
		</div>
	</div>
	<div class="my-container">

		<div class="dd-main-menu" id="menu">
			<ul>
				<li><a href="#product">Товары</a></li>
				<li><a href="#about">О нас</a></li>
				<li><a href="#testimon">Отзывы</a></li>
				<li><a href="#contacts">Контакты</a></li>
			</ul>
		</div>
		


		<div class="dd-apple dd-dis-none">
			<img src="img/apple.png" alt="">
		</div>

		<div class="dd-title dd-dis-none">
			<h2>Продажа Оригинальных </h2>
			<h2>iphone в Санкт Петербурге</h2>
		</div>

		<div class="dd-phone dd-dis-none">
			<img class="img-responsive" src="img/ph.jpg" alt="">
		</div>

		<!-- slider -->
		<div class="dd-slide-wrap">
			<div id="slider">
				
				<div class="item">
					<img class="img-responsive" src="img/p1.png" alt="">
				</div>	



				<div class="item">
					<img class="img-responsive" src="img/p1.png" alt="">
				</div>

				<div class="item">
					<img class="img-responsive" src="img/p2.png" alt="">
				</div>
				
			</div>

		</div>
		<!-- end slider -->

		<div class="dd-our-wrap our-wrap">
			<div class="dd-title dis-block">
				<div class="dd-img_apple_2">
					<img src="img/ap2.png" alt="">
				</div>
				<h2>Продажа Оригинальных </h2>
				<h2>iphone в Санкт Петербурге</h2>
			</div>
			<div class="dd-box_h">
				<span></span><br>
				<span class="dd-sp_1">Более 7 лет на рынке</span><br>
				<span class="dd-kr"></span><br>
				<span class="dd-sp_1">Цены ниже чем</span><br>
				<span class="dd-sp_1">чем у официальных представителей</span>
			</div>	
			<div class="dd-timer_my">
				<span class="dd-timer-title">успей сделать заказ</span>
				<div class="dd-times">
					<div class="dd-div">
						<span class="dd-hours dd-hours1">0</span>
						<span class="dd-hours dd-hours2">0</span>
						<br>
					</div>
					<div class="dd-div dd-div-margin">
						<span class="dd-min dd-min1">1</span>
						<span class="dd-min dd-min2">1</span><br>
					</div>
					<div class="dd-div dd-div-margin">
						<span class="dd-sec dd-sec1">1</span>
						<span class="dd-sec dd-sec2">7</span><br>
					</div>
				</div>
				<span class="dd-timer-bot">и получи подарок!</span>
			</div>
			<div class="dd-but-wrap">
				<a href="#js-form1" name="js-modal" class="button2 ">Заказать</a>
			</div>
		</div>
		<div class="clearfix"></div>

	</div>
</section>


<script>
		/* Slider
		=====================*/
		var owl2 = $("#slider");
		owl2.owlCarousel({
			loop:true,
			nav:true, 
			autoplay:true,
			smartSpeed:1000,
			margin:25,
        center:false,     //если нужны обрезаные края
        navText:['<span class="nav-left"></span>','<span class="nav-right"></span>'],
        responsive:{
        	0:{
        		items:1
        	},
        	480:{
        		items:1 
        	},
        	990:{
        		items:1
        	},      

        	1248:{
        		items:1
        	}
        }
    });
</script>
<script>
	$('.dd-burg').click(function(){
		$('.dd-main-menu').slideToggle(500);
	});
</script>