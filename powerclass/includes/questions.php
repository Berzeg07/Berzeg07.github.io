<section class="section section_padding questions">
	<div class=" container">
		<div class="row">
			<div class="col-md-12">
				<div class="in">
					<h2>Остались вопросы?</h2>
					<p>Оставьте ваш номер телефона и наш <span>менеджер свяжется с вами</span> <span>в течение <em class="first">15</em><em class="second">30</em> мин.</span></p>
					<div class="form-wrap">
						<form class="form1" action="#" method="post">
							<div class="input-wrap">
								<input class="dd-input phone" name="phone" type="tel" value="" placeholder="Введите ваш телефон" required >
							</div>	
							

							<span class="ripplelink forinputripple">
								<input class="button-1 dd-submit" onclick="ga ('send', 'event', 'popup', 'ostalis_voprosy'); yaCounter38724665.reachGoal('ostalis_voprosy');roistatGoal.reach(is_need_callback: '1')" type="submit" value="Перезвоните мне" placeholder="">
							</span>						

							<input type="hidden" name="theme" value="Остались вопросы">

							<input type="hidden" name="source" class="source" value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : '' ;?>" />
							<input type="hidden" name="term" class="term" value="<?php echo isset($_GET['utm_term']) ? $_GET['utm_term'] : '' ;?>" />
						</form>		
					</div>
					<p>Или позвоните сами по номеру</p>
					<span class="phonede">
						<a href="#log-in-1" name="modal"><span class="db-tel detel ">+7 (495) 133 29 67</span></a>

						<!-- <em class="second">7 495 133 29 67</em></span> -->
						<a href="tel:+74951332967"><span class="telmob">+7 495 133 29 67</span></a>
					</div>
				</div>
			</div>
		</section>


		<div id="mask"></div>

		<!-- Pop-1 -->
		<!-- /////////////////////////// -->
		<div id="log-in-1" class="window">
			<div class="dd-form-wrap">

				<form class="form1" action="#" method="post">

					<div class="form-wrap-main">

						<div class="dd-close"></div>

						<div class="dd-title-1">
							<span>Оставьте заявку и менеджер PowerClass</span><br>
							<span>свяжется с вами в течение 30 минут</span>
						</div>

						<div class="dd-el_wrap">	

							<div class="dd-el-1 dd-el-1_txt">

								<div class="dd-img-wrap-1">

									<div class="dd-img fl-left">
										<img src="img/bel.png" alt="">
									</div>

									<div class="dd-img-txt-1 fl-left">
										<span class="dd-bold-title_pop">Белла</span><br>
										<span class="dd-small-title_pop">Эксперт по здоровому </span><br>
										<span class="dd-small-title_pop">питанию PowerClass</span>
									</div>
									<div class="clearfix"></div>

								</div>

								<div class="dd-main-txt-1">
									<p class="dd-small-txt_pop">
										Всего за 2 минуты телефонного разговора я помогу вам определиться с тарифом на основе ваших целей, потребностей и возможностей, а также отвечу на любые вопросы.
									</p>
								</div>

							</div>

							<div class="dd-el-1 dd-el-1_inp">
								<input class="dd-input dd-input_pop" type="text" name="uname" placeholder="Введите ваше имя" required>
								<input class="dd-input dd-input_pop phone" name="phone"  type="tel" placeholder="Введите ваш телефон" required>
								<input class="button-1 dd-submit ripplelink" onclick="ga ('send', 'event', 'popup', 'obratny_zvonok_verh'); yaCounter38724665.reachGoal('obratny_zvonok_verh');roistatGoal.reach({is_need_callback: '1'})" type="submit" name="submit" value="перезвоните мне">
								<input class="theme_m" type="hidden" name="theme" value="Заказать звонок" >

								<input type="hidden" name="source" class="source" value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : '' ;?>" />
								<input type="hidden" name="term" class="term" value="<?php echo isset($_GET['utm_term']) ? $_GET['utm_term'] : '' ;?>" />
							</div>
							<div class="clearfix"></div>

						</div>

					</div>

				</form>

			</div>
		</div>

		<!-- Pop-2 -->
		<!-- /////////////////////////// -->
		<div id="log-in-2" class="window">

			<div class="dd-form-wrap">

				<form id="dd-first-messege" class="form1 dd-bg" action="#" method="post">

					<div class="dd-img-2">
						<img src="img/bag.png" alt="">	
					</div>

					<div class="form-wrap-main form-wrap-main-2">

						<div class="dd-close"></div>

						<div class="dd-el-1 dd-el-1_inp pr28">
							<div class="dd-title-2_wrap">
								<span class="dd-title-2">
									Заказать комплект питания
								</span>
								<span class="dd-bold-title_pop"><b class="tarif_name"> Спорт плюс</b>, <span><i class="dd-kal">3 500</i> ккал/день</span></span><br>
								<span class="dd-grey-txt"><i class="dd-much_1">5</i>-разовое питание, на <i class="dd-much_2">5</i> дней</span><br>
								<span class="dd-main-txt-2">Сумма заказа: <span><i class="dd-price">7 400</i> руб.</span></span>
							</div>
							<input class="dd-input dd-input_pop unamejs" type="text" name="uname" placeholder="Введите ваше имя" required>
							<input class="dd-input dd-input_pop phone phonejs" name="phone" type="tel" placeholder="Введите ваш телефон" required>
							<input class="button-1 ripplelink dd-submit ripplelink" onclick="roistatGoal.reach()" type="submit" name="submit" value="оформить по телефону">

							<!-- Hidden -->
							<input class="tarif_name_hide" name="tarif" type="hidden" value="empty">
							<input class="tarif_price" name="tarif_price" type="hidden" value="empty">
							<input class="tarif_kalory" name="tarif_kalory" type="hidden" value="empty">
							<input class="how_much" name="how_much" type="hidden" value="empty">
							<input class="how_much_day" name="how_much_day" type="hidden" value="empty">
							<input class="theme_m" type="hidden" name="theme" value="empty">
							<input type="hidden" name="theme" value="Заказать комплект питания">

							<input type="hidden" name="source" class="source" value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : '' ;?>" />
							<input type="hidden" name="term" class="term" value="<?php echo isset($_GET['utm_term']) ? $_GET['utm_term'] : '' ;?>" />
							<!-- end hidden -->

							<div class="dd-but_online">
								<a class="button-2  online-replace" name="" href="#log-in-5">Оформить онлайн</a>							
							</div>	
						</div>
						
						<div class="clearfix"></div>
					</div>
					<div class="clearfix"></div>

				</form>

			</div>
		</div>

		<!-- Pop-3 -->
		<!-- /////////////////////////// -->
		<div id="log-in-3" class="window">

			<div class="dd-form-wrap">

				<form class="form1 dd-bg" action="#" method="post">

					<div class="dd-img-2">
						<img src="img/bag.png" alt="">	
					</div>

					<div class="form-wrap-main form-wrap-main-2">

						<div class="dd-close"></div>

						<div class="dd-el-1 dd-el-1_inp pr28">

							<div class="dd-title-2_wrap">
								<span class="dd-title-2">
									Заказать комплект питания
								</span>
								<span class="dd-bold-title_pop"><b>Спорт плюс,</b> <span>3 500 ккал/день</span></span><br>
							</div>

							<label class="dd-label">
								<input class="checkbox checkbox-js jscheked" type="radio" value="Выбран тариф пробный день" name="checkbox" >
								<span class="checkbox-custom"></span>
								<span class="dd-txt-radio dd-txt-radio-js">Пробный день</span><br>
								<span class="dd-grey-txt dd-grey-txt_2">(<i>Четверг</i>)</span>

								<span class="label"></span>
							</label>
							<label class="dd-label mb25">
								<input class="checkbox checkbox-js" type="radio" value="Выбран тариф на неделю" name="checkbox" checked>
								<span class="checkbox-custom"></span>
								<span class="dd-txt-radio dd-txt-radio-js activeRed">На неделю</span>
								<span class="label"></span>
							</label>
							<div class="clearfix"></div>
							<input class="dd-input dd-input_pop" type="text" name="uname" placeholder="Введите ваше имя" required>
							<input class="dd-input dd-input_pop phone" name="phone" type="tel" placeholder="Введите ваш телефон" required >
							<input class="button-1 dd-submit ripplelink" onclick="ga ('send', 'event', 'form', 'probnik'); yaCounter38724665.reachGoal('probnik');roistatGoal.reach()" type="submit" name="submit" value="Заказать питание">

							<input type="hidden" class="jsnametarifpop" name="tarif">
							<input type="hidden" class="jskkalpop" name="tarif_kalory">
							<input type="hidden" class="jsdayweekpop" name="daytest">
							<input type="hidden" class="js3days" name="js3days">
							<input type="hidden" class="js5days" name="js5days">
							<input type="hidden" name="theme" value="Заказать комплект питания">
							
							<input type="hidden" name="source" class="source" value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : '' ;?>" />
							<input type="hidden" name="term" class="term" value="<?php echo isset($_GET['utm_term']) ? $_GET['utm_term'] : '' ;?>" />

						</div>

						<div class="clearfix"></div>
					</div>
					<div class="clearfix"></div>

				</form>

			</div>
		</div>

		<!-- Pop-4 -->
		<!-- /////////////////////////// -->
		<div id="log-in-4" class="window">

			<div class="dd-form-wrap">

				<form class="form1" action="#" method="post">
					<div class="form-wrap-main form-wrap-main_bg">

						<div class="dd-close"></div>

						<div class="dd-el-1 dd-el-1_inp pr28">

							<div class="dd-title-2_wrap">
								<span class="dd-title-2">
									Начните питаться 
									сбалансированной пищей 
									5 раз в день, и ваше тело 
									скажет вам «Спасибо» 
								</span>
							</div>
							<input class="dd-input dd-input_pop" type="text" name="uname" placeholder="Введите ваше имя" required>
							<input class="dd-input dd-input_pop phone" name="phone"  type="tel" placeholder="Введите ваш телефон" required>
							<input class="button-1 dd-submit ripplelink" onclick="ga ('send', 'event', 'popup', 'begin_now'); yaCounter38724665.reachGoal('begin_now');" type="submit" name="submit" value="Заказать питание">
							<input type="hidden" name="theme" value="Начните питаться сбалансированной пищей 5 раз в день, и ваше тело скажет вам «Спасибо» ">



							<input type="hidden" name="source" class="source" value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : '' ;?>" />
							<input type="hidden" name="term" class="term" value="<?php echo isset($_GET['utm_term']) ? $_GET['utm_term'] : '' ;?>" />
						</div>

						<div class="clearfix"></div>
					</div>

				</form>

			</div>
		</div>


		<!-- Pop-5 оплата заказа с селектами win_2-->
		<!-- /////////////////////////// -->
		<div id="log-in-5" class="window "> 

			<div class="dd-form-wrap">

				<form class="form1" action="#" method="post" id="formvalid">
					<div class="form-wrap-main form-wrap-main_5">

						<div class="dd-close"></div>

						<div class="dd-el-1">

							<div class="dd-title-2_wrap">
								<span class="dd-title-2">
									Укажите точный адрес доставки
								</span>
							</div>


							<input class="dd-input dd-input_pop dd-pop_left_5" type="text" name="city" value="Москва" required>
							<input class="dd-input dd-input_pop dd-pop_right_5" type="text" name="ylica" placeholder="Улица..." required>
							<input class="dd-input dd-input_pop dd-inp-small mr_inp" type="text" name="house" placeholder="Дом..." required>

							<input class="dd-input dd-input_pop dd-inp-small mr_inp" type="text" name="podezd" placeholder="Подъезд...">
							<input class="dd-input dd-input_pop dd-inp-small mr_inp" type="text" name="domofon" placeholder="Домофон...">
							<input class="dd-input dd-input_pop dd-inp-small_2 mr_inp" type="text"  name="etaj"  placeholder="Этаж...">
							<input class="dd-input dd-input_pop dd-inp-small ddlastchild" type="text" name="numberkv"  placeholder="Кв/Офис...">
							<div class="dd-dost ddmobiledost">
								<span class="dd-dost_span">О доставке</span>


								<div class="dd-podskazka">
									<div class="dd-p-span">
										<div class="dd-kr"><span>X</span></div>	
										<span>Доставка осуществляется после Вашей оплаты заказа, по согласованию с Вами.
											<br><br>
											После оформления заказа с Вами обязательно свяжется оператор и уточнит более подробно условия доставки. В день доставки с Вами свяжется курьер и сообщит о точном времени приезда. Если у Вас нет возможности принять заказ в ранее оговоренное с время, просьба сообщить об этом.
										</span>
									</div>
								</div>
							<!-- 	<div class="about2">        
									<a href="#littlepop2" name="modal" class="about-in2">О доставке</a> 
										<span class="dd-dost_span">О доставке</span>
									<div class="has-tooltip2 dfshowtoggle window" id="littlepop2">
										<div class="dd-close"></div>
										<p>Доставка осуществляется после Вашей оплаты заказа, по согласовыванию с Вами</p>
										<p>После оформления заказа с Вами обязательно свяжется оператор и уточнит более подробно условия доставки. В день доставки с Вами свяжется курьер и сообщит о точном времени приезда. Если у Вас нет возможности принять заказ в ранее оговоренное время, просьба сообщить об этом</p>
									</div>          
								</div> -->
							</div>

							<!-- Hidden -->
							<input class="tarif_name_hide" name="tarif" type="hidden" value="empty">
							<input class="tarif_price" name="tarif_price" type="hidden" value="empty">
							<input class="tarif_kalory" name="tarif_kalory" type="hidden" value="empty">
							<input class="how_much" name="how_much" type="hidden" value="empty">
							<input class="how_much_day" name="how_much_day" type="hidden" value="empty">
							<input type="hidden" name="theme" value="Точный адрес доставки">
							<!-- end hidden -->
							
							<!-- hidden-input -->
							<input class="dd-hid-name" type="hidden" name="uname" value="test">
							<input class="dd-hid-phone" type="hidden" name="phone"  value="test">

							<input type="hidden" name="source" class="source" value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : '' ;?>" />
							<input type="hidden" name="term" class="term" value="<?php echo isset($_GET['utm_term']) ? $_GET['utm_term'] : '' ;?>" />
							<!-- end hidden-input -->

							<div class="clearfix"></div>
						</div>

						<div class="clearfix"></div>

						<div class="dd-select">

							<label class="dd-select-box pt-label">
								<input class="checkbox checkbox_2" type="checkbox" name="checkbox2" value="Нужен пропуск на территорию">
								<span class="checkbox-custom checkbox-custom_2"></span>
								<span class="dd-chek">Нужен пропуск на территорию</span>
								<span class="label"></span>
							</label>

							<div class="dd-select-box">

								<div class="dd-select-txt floats">
									<span class="dd-chek line-height26">День 1-й доставки: </span>
								</div>

								<div  class="floats">
									<select name="whatday" id="">
										<option value="Воскресенье">Вс</option>
										<option value="Понедельник">Пн</option>
										<option value="Среда">Ср</option>
									</select>
									<div class="clearfix"></div>
								</div>

								<div class="clearfix"></div>
							</div>

							<div class="dd-select-box dd-select-box_last">

								<div class="dd-select-txt floats">
									<span class="dd-chek line-height26">Время: </span>
								</div>

								<div  class="floats">
									<select name="timepackage" id="">
										<option value="19:00">19:00</option>
										<option value="19:15">19:15</option>
										<option value="19:30">19:30</option>
										<option value="19:45">19:45</option>
										<option value="20:00">20:00</option>
										<option value="20:15">20:15</option>
										<option value="20:30">20:30</option>
										<option value="21:45">21:45</option>
										<option value="22:00">22:00</option>
										<option value="22:15">22:15</option>
										<option value="22:30">22:30</option>
										<option value="22:45">22:45</option>
										<option value="23:00">23:00</option>
									</select>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="clearfix"></div>

							<div class="dd-select-but">
								<input class="button-1 dd-submit ripplelink" onclick="roistatGoal.reach()" type="submit" name="submit" value="Оплатить онлайн">
							</div>

							<div class="dd-dost">
								<span class="dd-dost_span">О доставке</span>
								<div class="dd-podskazka">
									<div class="dd-p-span">
										<span>Доставка осуществляется после Вашей оплаты заказа, по согласованию с Вами.
											<br><br>
											После оформления заказа с Вами обязательно свяжется оператор и уточнит более подробно условия доставки. В день доставки с Вами свяжется курьер и сообщит о точном времени приезда. Если у Вас нет возможности принять заказ в ранее оговоренное с время, просьба сообщить об этом.
										</span>
									</div>
								</div>
							</div>
							<div class="clearfix"></div>

							<div class="dd-payments">
								<img src="img/pay.png" alt="">
							</div>

						</div>
					</div>

				</form>

			</div>
		</div>

		<!-- Тарифы -->

<div id="log-in-6" class="window">
			<div class="dd-form-tariff">
				<div class="dd-close"></div>
				<div class="dd-title_tr">
					<span class="dd-title_tr_sp">Тарифы PowerClass</span>
				</div>	
				<table class="dd-table_pop">
					<tr class="tr-title">
						<td class="border-none">
						</td>

						<td>
							<span class="dd-table-title">Фит</span><br>
							<span class="tr-title">1 400 ккал/день</span>
						</td>

						<td>
							<span class="dd-table-title">Фит <i>Плюс</i></span><br>
							<span class="tr-title">1 700 ккал/день</span>
						</td>

						<td>
							<span class="dd-table-title">Спорт</span><br>
							<span class="tr-title">2 500 ккал/день</span>
						</td>

						<td>
							<span class="dd-table-title">Спорт <i>Плюс</i></span><br>
							<span class="tr-title">3 500 ккал/день</span>
						</td>

					</tr>

					<tr>
						<td class="border-none">
							<span class="dd-days">Пн - Пт</span><br>
							<span class="dd-days_2"><b>3</b> из <b>5</b> Приемов<br> в сутки</span>
						</td>
						<td>
							<span class="dd-table-title  dd-table-title_red">690 <span>руб/день</span></span><br>
							<span  class="dd-price_td">3 450 руб.</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">760 <span>руб/день</span></span><br>
							<span class="dd-price_td">3 800 руб.</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">920 <span>руб/день</span></span><br>
							<span class="dd-price_td">4 600 руб.</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">1130 <span>руб/день</span></span><br>
							<span class="dd-price_td">5 650 руб.</span>
						</td>

					</tr>

					<tr>
						<td class="border-none">
							<span class="dd-days">Пн - Пт</span><br>
							<span class="dd-days_2"><b>5</b> из <b>5</b> Приемов<br> в сутки</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">840 <span>руб/день</span></span><br>
							<span class="dd-price_td">4 200 руб.</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">940 <span>руб/день</span></span><br>
							<span class="dd-price_td">4 700 руб.</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">1170 <span>руб/день</span></span><br>
							<span class="dd-price_td">5 850 руб.</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">1480 <span>руб/день</span></span><br>
							<span class="dd-price_td">7 400 руб.</span>
						</td>

					</tr>

					<tr>
						<td class="border-none">
							<span class="dd-days">Пн - Вс</span><br>
							<span class="dd-days_2"><b>3</b> из <b>5</b> Приемов<br> в сутки</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">686 <span>руб/день</span></span><br>
							<span class="dd-price_td">4 802 руб.</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">757 <span>руб/день</span></span><br>
							<span class="dd-price_td">5 300 руб.</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">915 <span>руб/день</span></span><br>
							<span class="dd-price_td">6 405 руб.</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">1130 <span>руб/день</span></span><br>
							<span class="dd-price_td">7 910 руб.</span>
						</td>

					</tr>

					<tr>
						<td class="border-none">
							<span class="dd-days">Пн - Вс</span><br>
							<span class="dd-days_2"><b>5</b> из <b>5</b> Приемов<br> в сутки</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">836 <span>руб/день</span></span><br>
							<span class="dd-price_td">5 852 руб.</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">943 <span>руб/день</span></span><br>
							<span class="dd-price_td">6 600 руб.</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">1172 <span>руб/день</span></span><br>
							<span class="dd-price_td">8 204 руб.</span>
						</td>

						<td>
							<span class="dd-table-title dd-table-title_red">1472 <span>руб/день</span></span><br>
							<span class="dd-price_td">10 304 руб.</span>
						</td>

					</tr>
				</table>


			</div>
			<div class="dd-tarif-form">

				<form class="form1" action="#" method="post">
					<div class="dd-form_box table_left">
						<span>Оставьте заявку,</span><br>
						<span>и менеджер PowerClass поможет<br>
							вам выбрать подходящий тариф
						</span>
					</div>
					<div class="dd-form_input table_left">
						<label>
							<input class="phone dd-input dd-input_tr" type="tel" name="phone"   placeholder="Введите ваш телефон"  required>
							<input class="button-1 dd-submit ripplelink" onclick="ga ('send', 'event', 'popup', 'podobrat_tarif'); yaCounter38724665.reachGoal('podobrat_tarif');roistatGoal.reach({is_need_callback: '1'})" type="submit" value="подобрать персональный тариф">
							<input type="hidden" name="theme" value="Тарифы пауер класс">

							<input type="hidden" name="source" class="source" value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : '' ;?>" />
							<input type="hidden" name="term" class="term" value="<?php echo isset($_GET['utm_term']) ? $_GET['utm_term'] : '' ;?>" />

						</label>
					</div>
					<div class="clearfix"></div>
				</form>
			</div>
		</div>

		<!-- Тарифы мобильная -->
		<div id="log-in-7" class="window window_2">

			<div class="dd-form-tariff dd-form-tariff_mobile">
				<div class="dd-close"></div>
				<div class="dd-title_tr">
					<span class="dd-title_tr_sp">Тарифы PowerClass</span>
				</div>	
				<table class="dd-table_pop">
					<tr class="tr-title">

						<td>
							<span class="dd-table-title">Фит</span><br>
							<span class="tr-title">1 400 ккал/день</span>
						</td>

						<td>
							<span class="dd-table-title">Фит <i>Плюс</i></span><br>
							<span class="tr-title">1 700 ккал/день</span>
						</td>

						<td>
							<span class="dd-table-title">Спорт</span><br>
							<span class="tr-title">2 500 ккал/день</span>
						</td>

						<td>
							<span class="dd-table-title">Спорт <i>Плюс</i></span><br>
							<span class="tr-title">3 500 ккал/день</span>
						</td>

					</tr>

					<tr>
			<!-- 	<td class="border-none">
					<span class="dd-days">Пн - Пт</span><br>
					<span class="dd-days_2"><b>3</b> из <b>5</b> Приемов<br> в сутки</span>
				</td> -->
				<td>
					<span class="dd-days">Пн - Пт</span><br>
					<span class="dd-days_2"><b>3</b> из <b>5</b></span><br>
					<span class="dd-table-title  dd-table-title_red">690 <span>руб/день</span></span><br>
					<span  class="dd-price_td">3 450 руб.</span>
				</td>

				<td>
					<span class="dd-days">Пн - Пт</span><br>
					<span class="dd-days_2"><b>3</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">760 <span>руб/день</span></span><br>
					<span class="dd-price_td">3 800 руб.</span>
				</td>

				<td>
					<span class="dd-days">Пн - Пт</span><br>
					<span class="dd-days_2"><b>3</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">920 <span>руб/день</span></span><br>
					<span class="dd-price_td">4 600 руб.</span>
				</td>

				<td>
					<span class="dd-days">Пн - Пт</span><br>
					<span class="dd-days_2"><b>3</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">1130 <span>руб/день</span></span><br>
					<span class="dd-price_td">5 650 руб.</span>
				</td>
				
			</tr>

			<tr>
			<!-- 	<td class="border-none">
					<span class="dd-days">Пн - Пт</span><br>
					<span class="dd-days_2"><b>5</b> из <b>5</b> Приемов<br> в сутки</span>
				</td> -->

				<td>
					<span class="dd-days">Пн - Пт</span><br>
					<span class="dd-days_2"><b>5</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">840 <span>руб/день</span></span><br>
					<span class="dd-price_td">4 200 руб.</span>
				</td>

				<td>
					<span class="dd-days">Пн - Пт</span><br>
					<span class="dd-days_2"><b>5</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">940 <span>руб/день</span></span><br>
					<span class="dd-price_td">4 700 руб.</span>
				</td>

				<td>
					<span class="dd-days">Пн - Пт</span><br>
					<span class="dd-days_2"><b>5</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">1170 <span>руб/день</span></span><br>
					<span class="dd-price_td">5 850 руб.</span>
				</td>

				<td>
					<span class="dd-days">Пн - Пт</span><br>
					<span class="dd-days_2"><b>5</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">1480 <span>руб/день</span></span><br>
					<span class="dd-price_td">7 400 руб.</span>
				</td>
				
			</tr>

			<tr>
			<!-- 	<td class="border-none">
					<span class="dd-days">Пн - Вс</span><br>
					<span class="dd-days_2"><b>3</b> из <b>5</b> Приемов<br> в сутки</span>
				</td> -->

				<td>
					<span class="dd-days">Пн - Вс</span><br>
					<span class="dd-days_2"><b>3</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">686 <span>руб/день</span></span><br>
					<span class="dd-price_td">4 802 руб.</span>
				</td>

				<td>
					<span class="dd-days">Пн - Вс</span><br>
					<span class="dd-days_2"><b>3</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">757 <span>руб/день</span></span><br>
					<span class="dd-price_td">5 300 руб.</span>
				</td>

				<td>
					<span class="dd-days">Пн - Вс</span><br>
					<span class="dd-days_2"><b>3</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">915 <span>руб/день</span></span><br>
					<span class="dd-price_td">6 405 руб.</span>
				</td>

				<td>
					<span class="dd-days">Пн - Вс</span><br>
					<span class="dd-days_2"><b>3</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">1130 <span>руб/день</span></span><br>
					<span class="dd-price_td">7 910 руб.</span>
				</td>
				
			</tr>
			
			<tr>
			<!-- 	<td class="border-none">
					<span class="dd-days">Пн - Вс</span><br>
					<span class="dd-days_2"><b>5</b> из <b>5</b> Приемов<br> в сутки</span>
				</td> -->

				<td>
					<span class="dd-days">Пн - Вс</span><br>
					<span class="dd-days_2"><b>5</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">836 <span>руб/день</span></span><br>
					<span class="dd-price_td">5 852 руб.</span>
				</td>

				<td>
					<span class="dd-days">Пн - Вс</span><br>
					<span class="dd-days_2"><b>5</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">943 <span>руб/день</span></span><br>
					<span class="dd-price_td">6 600 руб.</span>
				</td>

				<td>
					<span class="dd-days">Пн - Вс</span><br>
					<span class="dd-days_2"><b>5</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">1172 <span>руб/день</span></span><br>
					<span class="dd-price_td">8 204 руб.</span>
				</td>

				<td>
					<span class="dd-days">Пн - Вс</span><br>
					<span class="dd-days_2"><b>5</b> из <b>5</b></span><br>
					<span class="dd-table-title dd-table-title_red">1472 <span>руб/день</span></span><br>
					<span class="dd-price_td">10 304 руб.</span>
				</td>
				
			</tr>
		</table>

		
	</div>
	<div class="dd-tarif-form">

		<form class="form1" action="#" method="post">
			<div class="dd-form_box ">
				<span>Оставьте заявку,</span><br>
				<span>и менеджер PowerClass поможет<br>
					вам выбрать подходящий тариф
				</span>
			</div>
			<div class="dd-form_input ">
				<label>
					<input class="phone dd-input dd-input_tr" type="tel" name="phone"   placeholder="Введите ваш телефон" required>
					<input class="button-1 dd-submit ripplelink" onclick="ga ('send', 'event', 'popup', 'podobrat_tarif'); yaCounter38724665.reachGoal('podobrat_tarif');roistatGoal.reach({is_need_callback: '1'})" type="submit" value="подобрать персональный тариф">
					<input type="hidden" name="theme" value="Тарифы пауер класс">
				</label>

				<input type="hidden" name="source" class="source" value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : '' ;?>" />
				<input type="hidden" name="term" class="term" value="<?php echo isset($_GET['utm_term']) ? $_GET['utm_term'] : '' ;?>" />
			</div>
			<div class="clearfix"></div>
		</form>
	</div>
</div>


