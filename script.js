$( document ).ready(function() {
	$( ".open_mail" ).click(function() {
	$(".red_before").removeClass("hide");
	$(".red_before").addClass("animations").delay(150).queue(function(next){
		$(".orange_before").removeClass("hide");
		$(".orange_before").addClass("animations").delay(150).queue(function(next){
			$(".yellow_before").removeClass("hide");
			$(".yellow_before").addClass("animations").delay(150).queue(function(next){
				$(".green_before").removeClass("hide");
				$(".green_before").addClass("animations").delay(150).queue(function(next){
					$(".blue_before").removeClass("hide");
					$(".blue_before").addClass("animations").delay(150).queue(function(next){    
						$(".red_after").addClass("animations22").delay(150).queue(function(next){
							$(".orange_after").addClass("animations22").delay(150).queue(function(next){
								$(".yellow_after").addClass("animations22").delay(150).queue(function(next){
									$(".green_after").addClass("animations22").delay(150).queue(function(next){
										$(".blue_after").addClass("animations22").delay(500).queue(function(next){		    
										    $(".white_resume").removeClass("hide");
											$(".white_resume").addClass("second_phase_animation_margins");
											$(".white_resume").addClass("animated bounceInUp").delay(1000).queue(function(next){
												$(".rainbow_position_before, .open_mail").addClass("hide");
												$(".choice_sbs").removeClass("hide");
												$(".choice_sbs").addClass("animated zoomIn").delay(150).queue(function(next){
													$(".choice_pixel").removeClass("hide");
													$(".choice_pixel").addClass("animated zoomIn").delay(150).queue(function(next){
														$(".choice_resume").removeClass("hide");
														$(".choice_resume").addClass("animated zoomIn").delay(150).queue(function(next){
															$(".choice_wooter").removeClass("hide");
															$(".choice_wooter").addClass("animated zoomIn").delay(150).queue(function(next){
															    // if i need to continue
															    next();
															});
														next();
														});
												    next();
													});
											    next();
												});
										    next();
											});
									    next();
										});
								    next();
									});
							    next();
								});
						    next();
							});
						next();
						});
				    next();
					});
			    next();
				});
	    	next();
			});
	    next();
		});
	next();
	});		
	});




	$( ".resume" ).click(function() {
		$('.arrow_r').addClass("activate");
		$('.arrow_w').removeClass("activate");
		$(".choice_wooter").removeClass("animated zoomIn");
		$(".choice_wooter").addClass("animated fadeOutUp").delay(150).queue(function(next){
			$(".choice_resume").removeClass("animated zoomIn");
			$(".choice_resume").addClass("animated fadeOutUp").delay(150).queue(function(next){
				$(".choice_pixel").removeClass("animated zoomIn");
				$(".choice_pixel").addClass("animated fadeOutUp").delay(150).queue(function(next){
					$(".choice_sbs").removeClass("animated zoomIn");
					$(".choice_sbs").addClass("animated fadeOutUp").delay(1000).queue(function(next){
					    	$('.right_side').addClass("hide");
					    	$('.choice_wooter').addClass("hide");
					    	$('.choice_resume').addClass("hide");
					    	$('.choice_sbs').addClass("hide");
					    	$('.choice_pixel').addClass("hide");
							$('.right_side2').removeClass("hide");
							$(".right_side2").removeClass("animated fadeOut");
							$('.right_side2').addClass("animated fadeIn");
				    next();
					});
				next();
				});
			next();
			});
		next();
		});
	});

	$( ".work" ).click(function() {
		$('.arrow_w').addClass("activate");
		$('.arrow_r').removeClass("activate");
		$(".right_side2").addClass("animated fadeOut").delay(1000).queue(function(next){
			$('.right_side2').addClass("hide");
			$(".choice_sbs").removeClass("animated fadeOutUp");
			$(".choice_pixel").removeClass("animated fadeOutUp");
			$(".choice_resume").removeClass("animated fadeOutUp");
			$(".choice_wooter").removeClass("animated fadeOutUp");
			$('.right_side').removeClass("hide");
			$(".choice_sbs").removeClass("hide");
			$(".choice_sbs").addClass("animated fadeInDown").delay(150).queue(function(next){
				$(".choice_pixel").removeClass("hide");
				$(".choice_pixel").addClass("animated fadeInDown").delay(150).queue(function(next){
					$(".choice_resume").removeClass("hide");
					$(".choice_resume").addClass("animated fadeInDown").delay(150).queue(function(next){
						$(".choice_wooter").removeClass("hide");
						$(".choice_wooter").addClass("animated fadeInDown").delay(150).queue(function(next){
									
						next();
						});
					next();
					});
				next();
				});
			next();
			});
		next();
		});
	});

});

