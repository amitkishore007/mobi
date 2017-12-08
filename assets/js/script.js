$('document').ready(function(){


	toastr.options = {
	  "closeButton": true,
	  "debug": false,
	  "positionClass": "toast-top-right",
	  "onclick": null,
	  "showDuration": "1000",
	  "hideDuration": "1000",
	  "timeOut": "5000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
	};
	 $('[data-toggle="tooltip"]').tooltip();

	$(".login-btn").on('click',function(e){

		e.preventDefault();
		var email    = $('.email').val();
		var password = $('.password').val();
		var btn = $(this);
		$('.error-msg').hide();
		

		$.ajax({

			url : ajax_url+"admin_login/login",
			type: 'POST',
			data : {'login':'login',email:email,password:password},
			beforeSend :  function(){
				// $('.login-loader').show();
				btn.html('wait..');

			},

			success :function(html) {
				btn.html('Login');

				console.log(html);
				var data = JSON.parse(html);

				if (data.status=='false') {

					$('.error').html(data.msg);
					$('.error-msg').show();


				} else {

					//console.log('successfully login');

					window.location = ajax_url+'admin/';
				}

				$('.login-loader').hide();
			}


		});

	});



	$('.create-cat').on('click',function(e){

		// e.preventDefault();

		var cat_name  = $('.cat_name').val();
		var parent_id = $('.parent_cat').val();
		var cat_desc  = $('.cat_desc').summernote('code');
		var unique_id  = $('.unique_id').val();
		var variations = new Array();
		var checkbox = $('input.icheck:checked');
		var image = $('input[name="cat-img"]').val();



		// checkbox.each(function(){

		checkbox.each(function(index){

			variations.push($(this).val());
		});
		// console.log(variations);
			
		// });
	    // $('.error').html('');

	    $('.cat_name-error').html('');
		$('.parent_cat-error').html('');
		$('.cat_desc-error').html('');
		$('.unique-id-error').html('');

		

		console.log(cat_name+" "+parent_id+" "+cat_desc);
		

		$.ajax({

			url : ajax_url+"category/store_category",
			
			type: 'POST',
			
			data : {'category':'category',name:cat_name,parent_id:parent_id,description:cat_desc,variations:variations,unique_id:unique_id,image:image},
			
			beforeSend :  function(){
				// $('.form-loader').show();
				// $('.create-cat').attr('disabled','disabled');

			},

			success :function(html) {

				console.log(html);
				// $('.create-cat').removeAttr('disabled');
				// $('.form-loader').hide();

				var data = JSON.parse(html);

				if (data.status=='false') {

					$('.cat_name-error').html(data.name);
					$('.parent_cat-error').html(data.parent);
					$('.cat_desc-error').html(data.desc);
					$('.unique-id-error').html(data.unique_id);
					$('.image-error').html('Please provide a valid image !');
					toastr['error']('There was an error, try later','Error');

				  $('.category-img').fadeOut();
			      $('.category-img img').attr('src','');
			      $('input[name="cat-img"]').val('');
		  
					
				} else {
					
					$('.cat_name').val('');
					$('.parent_cat').val('');
					$('.unique_id').val('');
					$('.cat_desc').summernote('code','');
					
					toastr['success']('successfully created category','success');
					$('.success-msg').html('Successfully created category');
					$('.success-msg').show()
					$('.success-msg').fadeOut(8000)

					
				}
				
			}


		});
	});


	$('.edit-cat').on('click',function(e){

		e.preventDefault();

		var cat_id    = $(this).attr('data-catId');
		var cat_name  = $('.cat_name').val();
		var parent_id = $('.parent_cat').val();
		var cat_desc  = $('.cat_desc').summernote('code');


	    $('.cat_name-error').html('');
		$('.parent_cat-error').html('');
		$('.cat_desc-error').html('');

		

		console.log(cat_id+" "+cat_name+" "+parent_id+" "+cat_desc);
		

		$.ajax({

			url : ajax_url+"category/edit_category",
			
			type: 'POST',
			
			data : {'category':'category',cat_id:cat_id,name:cat_name,parent_id:parent_id,description:cat_desc},
			
		
			success :function(html) {

				var data = JSON.parse(html);

				console.log(html);

				if (data.status=='false') {

					$('.cat_name-error').html(data.name);
					$('.parent_cat-error').html(data.parent);
					$('.cat_desc-error').html(data.desc);
					toastr['error']('There was an error','Error');
					
				} else {
					
					toastr['success']('successfully updated category','success');
					$('.success-msg').html('Successfully updated category');
					$('.success-msg').show()
					$('.success-msg').fadeOut(8000)

					
				}
				
			}


		});
	});



	// Dropzone.options.myAwesomeDropzone = {
	//   paramName: "file", // The name that will be used to transfer the file
	//   maxFilesize: 5, // MB
	//   accept: function(file, done) {
	  
	// 	done();
	//   }
	// };


	$('.add_product').on('click',function(e){

		e.preventDefault();
		
		var product_name          = $('.product_name     ').val();
		var product_desc          = $('.add_product_desc').summernote('code');
		var product_price         = parseFloat($('.product_price    ').val());
		var product_status        = parseInt($('.product_status   ').val());
		var product_sku           = $('.product_sku      ').val();
		var product_shipping      = parseFloat($('.product_shipping ').val());
		var product_quantity      = parseInt($('.product_qty ').val());
		var product_cat           = parseInt($('.product_cat ').val());
		var product_thumb         = $('.thumbnail').val();
		var height                = '';
		var width                 = '';
		var length                = '';
		var height_unit           = '';
		var width_unit            = '';
		var length_unit           = '';
		var thickness             = '';
		var thickness_unit        = '';
		var weight                = '';
		var weight_unit           = '';
		var color                 = '';
		var color_code            = '';
		var thumbnail2            = '';
		var thumbnail3            = '';
		var thumbnail4            = '';
		var subtitle              = '';
		var brand                 = '';
		var color_code            = '';
		var color                 = '';
		var tags                  = '';
		var features              = '';
		var modal_name            = '';
		var modal_number          = '';
		var designed_for          = '';
		var suitable_for          = '';
		var warrenty              = '';
		var warrenty_summary      = '';
		var warrenty_service_type = '';
		var covered_in_warrenty   = '';
		var not_in_warrenty       = '';
		var is_fragile            = '';
		var video_url             = '';



		// console.log(product_name+" "+product_desc+" "+product_price+" "+product_status+" "+product_sku+" "+product_quantity+" "+product_shipping +" "+product_thumb+" "+product_cat);
		var variations = new Array();
		var checkboxes  = $('.variation-checkbox input.icheck:checked');
		
		var check = true;

		checkboxes.each(function(index){
			variations.push($(this).val());
		});
		console.log(variations);
		console.log($('input.icheck[name="color"]:checked').length);
			
		if ($.inArray('color',variations)!=-1) {

			//do the color select 
			if ($('input.icheck[name="color"]:checked').length==0) {

				$('.color-error').html('please choose a color !');
				check = false;
				return check;

			} else {

				color = $('input.icheck[name="color"]:checked').val();
				color_code = $('input.icheck[name="color"]:checked').attr('data-colorCode');

			}

		}

		if ($.inArray('size',variations)!=-1) {

			//do the size select
			console.log($('select.variation-size').val());
			if ($('select.variation-size').val()=='') {

			$('.variation-size-error').html('please choose a size !');
			$('.variation-size-error').show();
			check = false;
			return check;

			} else {

				size = $('select.variation-size').val();
			}


		}

		if ($.inArray('dimension',variations)!=-1) {

			//do the dimension height, width, length select 

			// height
			// height unit
			if ($('input.product-height').val()!='') {

				if ($('select.height-unit').val()=='') {
					$('.height-unit-error').html('please choose a height unit !');
					$('.height-unit-error').show();
					check = false;
					return check;
				}
			}

			// length 
			// length unit
			if ($('input.product-length').val()!='') {

				if ($('select.length-unit').val()=='') {
					$('.length-unit-error').html('please choose a length unit !');
					$('.length-unit-error').show();
					check = false;
					return check;
				}
			}
			
			// width
			// width unit

			if ($('input.product-width').val()!='') {

				if ($('select.width-unit').val()=='') {
					$('.width-unit-error').html('please choose a width unit !');
					$('.width-unit-error').show();
					check = false;
					return check;
				}
			}
			
			// thickness
			// thickness unit
			if ($('input.product-thickness').val()!='') {

				if ($('select.thickness-unit').val()=='') {
					$('.thickness-unit-error').html('please choose a thickness unit !');
					$('.thickness-unit-error').show();
					check = false;
					return check;
				}
			}
			
			thickness      = $('input.product-thickness').val();
			thickness_unit = $('select.thickness-unit').val();
			height         = $('input.product-height').val();
			height_unit    = $('select.height-unit').val();
			length         = $('input.product-length').val();
			length_unit    = $('select.length-unit').val();
			width          = $('input.product-width').val();
			width_unit     = $('select.width-unit').val();
			
		}

		if ($.inArray('weight',variations)!=-1) {

			//do the color select 
			if ($('input[name="weight"]').val()=='') {
				$('.weight-error').html('please provide product weight!');
				$('.weight-error').show();
				check = false;
				return check;
			}
			if ($('.weight-unit').val()=='') {
				$('.weight-unit-error').html('please select weight unit!');
				$('.weight-unit-error').show();
				check = false;
				return check;
			}

			weight = $('input[name="weight"]').val();
			weight_unit = $('.weight-unit').val();
		}



		$.ajax({

			url: ajax_url+"product/add_product",
			
			type: "POST",
			
			data: {
					'add_product':'add_product',
					title 		 : product_name,     
					description  : product_desc ,
					price 		 : product_price,
					status 		 : product_status,
					sku 		 : product_sku ,
					shipping 	 : product_shipping,
					quantity 	 : product_quantity,
					thumbnail 	 : product_thumb,
					category_id  : product_cat	
				},
			
			beforeSend :function(){

				$('.form-loader').show();
			},
			success :function(html) {

				$('.form-loader').hide();

				var data  = $.parseJSON(html);
				console.log(data);

				if (data.status=='false') {

					$('.name-error').html(data.product_name);
					$('.desc-error').html(data.product_desc);
					$('.category-error').html(data.category);
					$('.sku-error').html(data.product_sku);
					$('.qty-error').html(data.product_qty);
					$('.price-error').html(data.product_price);
					$('.shipping-error').html(data.product_shipping);
					$('.image-error').html(data.product_thumb);
					$('.status-error').html(data.product_status);
					toastr['error']('Error occured !','');

				
				} else {

					toastr['success']('successfully added new product','success');
					$('.product-msg').show();
					$('.add_product').attr('disabled','disabled');					
					
				}


			}


		});



		return false;
	});

$('.edit_product').on('click',function(e){

		e.preventDefault();
		
		var product_id         = $(this).attr('data-productId');
		var product_name       = $('.product_name     ').val();
		var product_desc       = $('.add_product_desc').summernote('code');
		var product_price      = parseFloat($('.product_price    ').val());
		var product_status     = parseInt($('.product_status   ').val());
		var product_sku        = $('.product_sku      ').val();
		var product_shipping   = parseFloat($('.product_shipping ').val());
		var product_quantity   = parseInt($('.product_qty ').val());
		var product_cat        = parseInt($('.product_cat ').val());
		var product_thumb      = $('.thumbnail').val();
		
		// console.log(product_name+" "+product_desc+" "+product_price+" "+product_status+" "+product_sku+" "+product_quantity+" "+product_shipping +" "+product_thumb+" "+product_cat);

		

		$.ajax({

			url: ajax_url+"product/edit_product",
			
			type: "POST",
			
			data: {
					'edit_product':'edit_product',
					product_id   : product_id,
					title 		 : product_name,     
					description  : product_desc ,
					price 		 : product_price,
					status 		 : product_status,
					sku 		 : product_sku ,
					shipping 	 : product_shipping,
					quantity 	 : product_quantity,
					thumbnail 	 : product_thumb,
					category_id  : product_cat	
				},
			
			beforeSend :function(){

				$('.form-loader').show();
			},
			success :function(html) {

				$('.form-loader').hide();

				console.log(html);
				var data  = $.parseJSON(html);

				if (data.status=='false') {

					$('.name-error').html(data.product_name);
					$('.desc-error').html(data.product_desc);
					$('.category-error').html(data.category);
					$('.sku-error').html(data.product_sku);
					$('.qty-error').html(data.product_qty);
					$('.price-error').html(data.product_price);
					$('.shipping-error').html(data.product_shipping);
					$('.image-error').html(data.product_thumb);
					$('.status-error').html(data.product_status);

					toastr['error']('Error occured','');
				
				} else {

					toastr['success']('successfully updated product','success');
					$('.product-msg').show();
					$('.edit_product').attr('disabled','disabled');					
					
				}


			}


		});



		return false;
	});



	$(document).on('change', 'form#product_image #file', function (e) {

		var progressBar = $('.progressBar'), bar = $('.progressBar .bar'), percent = $('.progressBar .percent');


		$('form#product_image').ajaxForm({
		    beforeSend: function() {
		        progressBar.fadeIn();
		        var percentVal = '0%';
		        bar.width(percentVal)
		        percent.html(percentVal);
		    },
		    uploadProgress: function(event, position, total, percentComplete) {
		        var percentVal = percentComplete + '%';
		        bar.width(percentVal)
		        percent.html(percentVal);
		    },

		    success: function(html, statusText, xhr, $form) {   
		
			console.log(html);
		    obj = $.parseJSON(html);  
		    if(obj.status){   
		      var percentVal = '100%';
		      bar.width(percentVal)
		      percent.html(percentVal);
		      $('#product_image').fadeOut();
		      $('.progressBar').fadeOut();
		      $('.thumbnail').val(obj.name);
		      $(".uploaded_image").prop('src',ajax_url+'uploads/'+obj.name);     
		    
		    }else{
		    	toastr['error'](obj.error,'Error');
		      // alert(obj.error);
		    }
		    },
		  complete: function(xhr) {
		    progressBar.fadeOut();      
		  } 
		}).submit();    

	});



$(".delete-product").on("confirmed.bs.confirmation",function(){


	var product_id = $(this).attr('data-productId');

	$(this).after("<img class='ajax-loader' src='"+ajax_url+"assets/img/ajax-loader.gif'>");

	$.ajax({

		url  : ajax_url+"product/delete",
		type : 'POST',
		data : {'delete':'DELETE',product_id:product_id},
		
		success : function(html){

			console.log(html);
			var data = $.parseJSON(html);

			if (data.status=='true') {

				toastr['success']('Successfully deleted product ','success');

				$('tr#row_'+product_id).fadeOut();

			
			} else {
				toastr['error']('Error occured, try later','');

				$('.ajax-loader').hide();

			}
		}

	});

});





$(".delete-category").on("click",function(){


	var cat_id = $(this).attr('data-id');

	$(this).after("<img class='ajax-loader' src='"+ajax_url+"assets/img/ajax-loader.gif'>");

	$.ajax({

		url  : ajax_url+"category/delete",
		type : 'POST',
		data : {'delete':'DELETE',category_id:cat_id},
		
		success : function(html){

			console.log(html);
			var data = $.parseJSON(html);

			if (data.status=='true') {

				toastr['success']('Successfully deleted category ','success');

				$('#row_'+cat_id).fadeOut();

			
			} else {

				toastr['error']('Error occured, try later','');
				$('.ajax-loader').hide();

			}
		}

	});

	return false;

});


$('.create-vandor').on('click',function(e){

		e.preventDefault();

		var vandor_name     = $('.vandor_name').val();
		var vandor_email    = $('.vandor_email').val();
		var vandor_password = $('.vandor_password').val();
		var vandor_retype   = $('.vandor_retype').val();


	    // $('.error').html('');

		$('.vandor_name-error').html('');
		$('.vandor_email-error').html('');
		$('.vandor_password-error').html('');
		$('.vandor_retype-error').html('');

		if (vandor_password!=vandor_retype) {

			$('.vandor_retype-error').html('Password did not matched !');

			return;
		}
		

		// console.log(cat_name+" "+parent_id+" "+cat_desc);
		

		$.ajax({

			url : ajax_url+"admin/create_vandor",
			
			type: 'POST',
			
			data : {'vandor':'create',username:vandor_name,email:vandor_email,password:vandor_password},
			
			success :function(html) {

				console.log(html);
				// $('.create-cat').removeAttr('disabled');
				// $('.form-loader').hide();

				var data = JSON.parse(html);

				if (data.status=='false') {

					$('.vandor_name-error').html(data.name);
					$('.vandor_email-error').html(data.email);
					$('.vandor_password-error').html(data.password);
					toastr['error']('There was an error, try later','Error');
					
				} else {
				
					
					toastr['success']('successfully created category','success');
					$('.success-msg').html('Successfully created category');
					$('.success-msg').show();
					$('.success-msg').fadeOut(8000);
					$('.vandor_name').val('');
					$('.vandor_email').val('');
					$('.vandor_password').val('');
					$('.vandor_retype').val('');


					
				}
				
			}


		});
	});



$(".delete-vandor").on("confirmed.bs.confirmation",function(){


	var vandor_id = $(this).attr('data-vandorId');

	$(this).after("<img class='ajax-loader' src='"+ajax_url+"assets/img/ajax-loader.gif'>");

	$.ajax({

		url  : ajax_url+"admin/delete_vandor",
		type : 'POST',
		data : {'delete':'DELETE',id:vandor_id},
		
		success : function(html){

			console.log(html);
			var data = $.parseJSON(html);

			if (data.status=='true') {

				toastr['success']('Successfully deleted vandor ','success');

				$('tr#row_'+vandor_id).fadeOut();

			
			} else {
				toastr['error']('Error occured, try later','');

				$('.ajax-loader').hide();

			}
		}

	});

});



$('.create_about').on('click',function(){

		var title  = $('.about_title').val();
	
		var content  = $('.about_content').summernote('code');


	    // $('.error').html('');

	    $('.title-error').html('');
		$('.about_content-error').html('');

		

		console.log(title+" "+content);
		

		$.ajax({

			url : ajax_url+"about/create_about",
			
			type: 'POST',
			
			data : {'about':'about',title:title,content:content},
			

			success :function(html) {

				 console.log(html);
				
				var data = JSON.parse(html);

				if (data.status=='false') {

					$('.title-error').html(data.title);
					$('.about_content-error').html(data.content);
					
					toastr['error']('There was an error, try later','Error');
					
				} else {
					
					toastr['success']('successfully created About page','success');
					$('.success-msg').html('Successfully created About page');
					$('.success-msg').show();
					$('.success-msg').fadeOut(8000);

					
				}
				
			}


		});

});


$('.create_privacy').on('click',function(){

		var title  = $('.privacy_title').val();
	
		var content  = $('.privacy_content').summernote('code');


	    // $('.error').html('');

	    $('.title-error').html('');
		$('.privacy_content-error').html('');

		

		console.log(title+" "+content);
		

		$.ajax({

			url : ajax_url+"privacy/create_privacy",
			
			type: 'POST',
			
			data : {'privacy':'privacy',heading:title,content:content},
			

			success :function(html) {

				 console.log(html);
				
				var data = JSON.parse(html);

				if (data.status=='false') {

					$('.title-error').html(data.title);
					$('.privacy_content-error').html(data.content);
					
					toastr['error']('There was an error, try later','Error');
					
				} else {
					
					toastr['success']('successfully created privacy policy','success');
					$('.success-msg').html('Successfully created privacy policy');
					$('.success-msg').show();
					$('.success-msg').fadeOut(8000);

					
				}
				
			}


		});

});


$('.edit_about').on('click',function(){

		var title  = $('.about_title').val();
	
		var content  = $('.about_content').summernote('code');

		var id = $(this).attr('data-aboutId');


	    // $('.error').html('');

	    $('.title-error').html('');
		$('.about_content-error').html('');

		

		console.log(title+" "+content);
		

		$.ajax({

			url : ajax_url+"about/store",
			
			type: 'POST',
			
			data : {'edit':'edit',title:title,content:content,id:id},
			

			success :function(html) {

				 console.log(html);
				
				var data = JSON.parse(html);

				if (data.status=='false') {

					$('.title-error').html(data.title);
					$('.about_content-error').html(data.content);
					
					toastr['error']('There was an error, try later','Error');
					
				} else {
					
					toastr['success']('successfully update About page','success');
					$('.success-msg').html('Successfully update About page');
					$('.success-msg').show();
					$('.success-msg').fadeOut(8000);

					
				}
				
			}


		});

});


$('.edit_privacy').on('click',function(){

		var title  = $('.privacy_title').val();
	
		var content  = $('.privacy_content').summernote('code');

		var id = $(this).attr('data-privacyId');


	    // $('.error').html('');

	    $('.title-error').html('');
		$('.privacy_content-error').html('');

		

		console.log(title+" "+content);
		

		$.ajax({

			url : ajax_url+"privacy/store",
			
			type: 'POST',
			
			data : {'edit':'edit',heading:title,content:content,id:id},
			

			success :function(html) {

				 console.log(html);
				
				var data = JSON.parse(html);

				if (data.status=='false') {

					$('.title-error').html(data.title);
					$('.privacy_content-error').html(data.content);
					
					toastr['error']('There was an error, try later','Error');
					
				} else {
					
					toastr['success']('successfully update Privacy policy','success');
					$('.success-msg').html('Successfully update privacy policy');
					$('.success-msg').show();
					$('.success-msg').fadeOut(8000);

					
				}
				
			}


		});

});


$('.about_status').click(function() {
   
   if($(this).is(':checked')) { 

   	var id = $(this).attr('data-aboutId');

   	change_status_checkbox(id,ajax_url+"about/change_status",'active','successfully updated the about status','Error occured, try later');  	

   }

});


$('.privacy_status').click(function() {
   
   if($(this).is(':checked')) { 

   	var id = $(this).attr('data-privacyId');

   	change_status_checkbox(id,ajax_url+"privacy/change_status",'active','successfully updated the privacy policy status','Error occured, try later');  	

   }

});


$(".delete-logo").on("confirmed.bs.confirmation",function(){


	var logo_id = $(this).attr('data-logoId');

	$(this).after("<img class='ajax-loader' src='"+ajax_url+"assets/img/ajax-loader.gif'>");

	delete_image(logo_id,ajax_url+"logo/delete",'successfully deleted the logo','Error occured, try later');


});

$(".delete-slide").on("confirmed.bs.confirmation",function(){


	var slide_id = $(this).attr('data-slideId');

	$(this).after("<img class='ajax-loader' src='"+ajax_url+"assets/img/ajax-loader.gif'>");

	delete_image(slide_id,ajax_url+"slider/delete",'successfully deleted the slide','Error occured, try later');


});



$('.logo_status').click(function() {
   
   if($(this).is(':checked')) { 

   	var id = $(this).attr('data-logoId');
 	
 	change_status_checkbox(id,ajax_url+"logo/change_status",'active','successfully activated the logo','Error occured, try later');  	
   

   }

});


$('.slide_status').click(function() {
   
   	var id = $(this).attr('data-slideId');
   
   if($(this).is(':checked')) { 

   	// set status = 1

   	change_status_checkbox(id,ajax_url+"slider/change_status",'active','successfully activated the slide','Error occured, try later');
  

   } else {

   	// set status = 0
	change_status_checkbox(id,ajax_url+"slider/change_status",'inactive','successfully deactivated the slide','Error occured, try later');

   }

});

$('.banner_status').click(function() {
   
   	var id = $(this).attr('data-bannerId');
   
   if($(this).is(':checked')) { 

   	// set status = 1

   	change_status_checkbox(id,ajax_url+"banner/change_status",'active','successfully activated the banner','Error occured, try later');
  

   } else {

   	// set status = 0
	change_status_checkbox(id,ajax_url+"banner/change_status",'inactive','successfully deactivated the banner','Error occured, try later');

   }

});


$(".delete-banner").on("confirmed.bs.confirmation",function(){


	var banner_id = $(this).attr('data-bannerId');

	$(this).after("<img class='ajax-loader' src='"+ajax_url+"assets/img/ajax-loader.gif'>");

	delete_image(banner_id,ajax_url+"banner/delete",'Successfully deleted the banner','Error occured, try later');


});

	$('.banner-position').on('change',function(){

		var location = $(this).val();
		var id = $(this).attr('data-bannerId');
		$(this).after("<img class='ajax-loader' src='"+ajax_url+"assets/img/ajax-loader.gif'>");


		$.ajax({

	   		url : ajax_url+"banner/set_location",
	   		type :'POST',
	   		data : {'location':'change' ,location:location,id:id},

	   		success :function (html) {

	   			console.log(html);
	   			$('.ajax-loader').hide();

	   			if (html=='success') {

	   				toastr['success']('successfully updated the banner','success');

	   			} else {

	   				toastr['error']('Error occured, try later !','Error');

	   			}

	   		}
	   	});

	});




	$('.view-order').on('blur',function(){

		var banner_id = $(this).attr('data-bannerId');
		var order     = $(this).val();

	    $(this).after("<img class='ajax-loader' src='"+ajax_url+"assets/img/ajax-loader.gif'>");


		
	$.ajax({

		url  : ajax_url+'banner/set_order',
		type : 'POST',
		data : {'order_view':'update',banner_id:banner_id,order:order},
		
		success : function(html){

			console.log(html);
			
			$('.ajax-loader').hide();

			if (html=='success') {

				toastr['success']('successfully updated the order','success');

		
			} else {
				toastr['error']('Error occured, try later !','Error');

				

			}
		}

	});


	});


	$('.home-category').on('change',function(){

		var type = $(this).attr('data-type');
		var number = $(this).attr('data-number');
		var cat_id = $(this).val();

		$(this).after("<img class='ajax-loader' src='"+ajax_url+"assets/img/ajax-loader.gif'>");



		console.log(type+" "+number+" "+cat_id);

		$.ajax({

		url  : ajax_url+"category/set_home_category",
		type : 'POST',
		data : {'home_category':'set',type:type,number:number,cat_id:cat_id},
		
		success : function(html){

			console.log(html);
			
			$('.ajax-loader').hide();

			if (html=='success') {

				toastr['success']('successfully updated category','success');
			
			} else {

				toastr['error']('successfully updated category','Error');


			}
		}

	});


	});


	$('.hot-sale').on('switchChange.bootstrapSwitch', function(e, state) { 

		var product_id = $(this).attr('data-productId');
		$(this).after("<img class='ajax-loader' src='"+ajax_url+"assets/img/ajax-loader.gif'>");


		if (state==true) {

			//set hot sale to 1

			change_status_checkbox(product_id,ajax_url+"product/set_hot_sale",'active','successfully added product in hot sale','Error occured')

		} else {

			// set hot sale to 0
			change_status_checkbox(product_id,ajax_url+"product/set_hot_sale",'inactive','successfully removed product from hot sale','Error occured')


		}

		$('.ajax-loader').hide();
		
	});


	$('.product-status').on('switchChange.bootstrapSwitch', function(e, state) { 

		var product_id = $(this).attr('data-productId');
		
		$(this).after("<img class='ajax-loader' src='"+ajax_url+"assets/img/ajax-loader.gif'>");


		if (state==true) {

			//set hot sale to 1

			change_status_checkbox(product_id,ajax_url+"product/change_status",'active','successfully updated product status','Error occured')

			$('#status_'+product_id).html('Published');
			$('#status_'+product_id).removeClass('text-danger').addClass('text-success');
		

		} else {

			// set hot sale to 0
			change_status_checkbox(product_id,ajax_url+"product/change_status",'inactive','successfully updated product status','Error occured')
			
			$('#status_'+product_id).html('Not published');
			$('#status_'+product_id).removeClass('text-success').addClass('text-danger');


		}

		$('.ajax-loader').hide();
		
	});



	$('.addColor').on('click',function(){

		var name  = $('.colorName').val();
		var colorCode  = $('.colorCode').val();
		var btn = $(this);

		console.log(name+ " "+colorCode);

		$.ajax({

			url : ajax_url+'color/addColor',
			type : 'POST',
			data : {name:name,colorCode:colorCode},
			beforeSend : function() {

				btn.html('<i class="fa fa-check"></i> Wait..');
				$('.error-name').html('');
				$('.error-code').html('');
			} ,

			success  : function(html) {

				btn.html('<i class="fa fa-check"></i> Submit');

				console.log(html);
				var data = $.parseJSON(html);


				if (data.status=='success') {

					toastr['success']('successfully added new color','success');

				} else {

					$('.error-name').html(data.name);
					$('.error-code').html(data.code);
					toastr['error']('Error occured, try later','error')

				}


			}

		});

		return false;


	});


	$('.editColor').on('click',function(){

		var name  = $('.colorName').val();
		var colorId = $(this).attr('data-colorId');
		var colorCode  = $('.colorCode').val();
		var btn = $(this);

		console.log(name+ " "+colorCode);

		$.ajax({

			url : ajax_url+'color/editColor',
			type : 'POST',
			data : {colorId:colorId,name:name,colorCode:colorCode},
			beforeSend : function() {

				btn.html('<i class="fa fa-check"></i> Wait..');
				$('.error-name').html('');
				$('.error-code').html('');
			} ,

			success  : function(html) {

				btn.html('<i class="fa fa-check"></i> Submit');

				console.log(html);
				var data = $.parseJSON(html);


				if (data.status=='success') {

					toastr['success']('successfully updated color','success');

				} else {

					$('.error-name').html(data.name);
					$('.error-code').html(data.code);
					$('.error-color').html(data.color);
					toastr['error']('Error occured, try later','error')

				}


			}

		});

		return false;


	});



$(".delete-color").on("confirmed.bs.confirmation",function(){


	var color_id = $(this).attr('data-colorId');

	$(this).after("<img class='ajax-loader' src='"+ajax_url+"assets/img/ajax-loader.gif'>");

	$.ajax({

		url  : ajax_url+"color/delete_color",
		type : 'POST',
		data : {'delete':'DELETE',color_id:color_id},
		
		success : function(html){

			console.log(html);
		

			if (html=='success') {

				toastr['success']('Successfully deleted color ','success');

				$('tr#row_'+color_id).fadeOut();

			
			} else {

				toastr['error']('Error occured, try later','');

				$('.ajax-loader').hide();

			}
		}

	});

});

// $("[class*='variation-']").hide();


$('.product_cat').on('change',function(){

	var cat_id = parseInt($(this).val());

	$.ajax({
		type : 'POST',
		url : ajax_url+"category/get_variations",
		data : {cat_id:cat_id},
		beforeSend : function() {
			$('.product-add-div').css({ 'opacity' : 0.4 });
			$('.product-add-div').addClass('disabled');
			$("[class*='variation-']").hide();
			$(".product-loader").show();
			$('input[type="checkbox"]').iCheck('uncheck');
			

		},
		success : function(html) {

			$(".product-loader").hide();
			$('.product-add-div').removeClass('disabled');
			$('.product-add-div').css({ 'opacity' : 1 });
			
			var data  = $.parseJSON(html);

			if (data.status=='success') {

				// variations available
				var result  = data.result;

				$.each(result,function(index,element){

					console.log(element.cat_id+" "+element.variation);

					if (element.variation=='dimension') {

						$('.variation-height').slideDown();
						$('.variation-width').slideDown();
						$('.variation-length').slideDown();
						$('.variation-thickness').slideDown();
						$('input[type="checkbox"].dimension').iCheck('check');
						} else {

						$('.variation-'+element.variation).slideDown();

						$('input[type="checkbox"].'+element.variation).iCheck('check');
					}

				});
			}

			if (data.status=='no') {
				console.log('variation not available');
				//no variation available
			}
		}
	});




});


	$('.modal#ajax').on('click','.image img',function(e){

		// e.preventDefault();

		console.log($(this).attr('data-input'));
	});


	$('.form-body .upload-excel-btn').on('click',function(){

		var category = $('.category-list').val();

		var excel_file = $('.excel-file').val();
		$('.category-error').html('');
		$('.excel-file-error').html('');

		// console.log(category+" "+excel_file);

		if (category=='') {

			$('.category-error').html('Please select a cartegory');
			return false;
		}

		if (excel_file=='') {

			$('.excel-file-error').html('Please select a Excel file');
			return false;

		}

		$.ajax({

			type: "POST",
			url: ajax_url+"product/uploadExcel",
			data : {category:category,excel_file:excel_file},
			error : function(jqXHR,exception) {
				console.log(jqXHR.responseText);
				var msg = '';
		        if (jqXHR.status === 0) {
		            msg = 'Not connect.\n Verify Network.';
		        } else if (jqXHR.status == 404) {
		            msg = 'Requested page not found. [404]';
		        } else if (jqXHR.status == 500) {
		            msg = 'Internal Server Error [500].';
		        } else if (exception === 'parsererror') {
		            msg = 'Requested JSON parse failed.';
		        } else if (exception === 'timeout') {
		            msg = 'Time out error.';
		        } else if (exception === 'abort') {
		            msg = 'Ajax request aborted.';
		        } else {
		            msg = 'Uncaught Error.\n' + jqXHR.responseText;
		        }
		        alert(msg);
			},
			beforeSend:function() {
				$('.product-ajax-loader').show();
			},
			success:function(html) {

			var data = $.parseJSON(html);
			$('.product-ajax-loader').hide();

			if (data.status==true) {

				toastr['success']('Successfully uploaded !');
				setTimeout(function(){
					window.location = ajax_url+'product';
				},3000);
			} else {
				toastr['error']('!!Error occured, try later !');
			}

			}

		});
	});


$('.form-body form .excel-upload').on('change', function (e) {

		var progressBar = $('.progressBar'), bar = $('.progressBar .bar'), percent = $('.progressBar .percent');


		$('.form-body form#uploadExelFile').ajaxForm({
		    beforeSend: function() {
		        progressBar.fadeIn();
		        var percentVal = '0%';
		        bar.width(percentVal)
		        percent.html(percentVal);
		    },
		    uploadProgress: function(event, position, total, percentComplete) {
		        var percentVal = percentComplete + '%';
		        bar.width(percentVal)
		        percent.html(percentVal);
		    },

		    success: function(html, statusText, xhr, $form) {   
		
			// console.log(html);
			console.log(html);
		    obj = $.parseJSON(html);  
			// console.log(obj.header);
			
			console.log(obj.file);
		    if(obj.status){   
		      var percentVal = '100%';
		      bar.width(percentVal)
		      percent.html(percentVal);
		      $('#product_image').fadeOut();
		      $('.progressBar').fadeOut();
		      $('.form-body input.excel-file').val(obj.file);
		    
		    }else{
		    	toastr['error'](obj.error,'Error');
		      // alert(obj.error);
		    }
		    },
		  complete: function(xhr) {
		    progressBar.fadeOut();      
		  } 
		}).submit();    

	});



$('form#upload-category-image .image-upload').on('change', function (e) {

		var progressBar = $('.progressBar'), bar = $('.progressBar .bar'), percent = $('.progressBar .percent');


		$('.form-body form#upload-category-image').ajaxForm({
		    beforeSend: function() {
		        progressBar.fadeIn();
		        var percentVal = '0%';
		        bar.width(percentVal)
		        percent.html(percentVal);
		    },
		    uploadProgress: function(event, position, total, percentComplete) {
		        var percentVal = percentComplete + '%';
		        bar.width(percentVal)
		        percent.html(percentVal);
		    },

		    success: function(html, statusText, xhr, $form) {   
		
			// console.log(html);
			console.log(html);
		    obj = $.parseJSON(html);  
			// console.log(obj.header);
			
			// console.log(obj.file);
		    if(obj.status){   
		      var percentVal = '100%';
		      bar.width(percentVal)
		      percent.html(percentVal);
		      $('.category-img').fadeIn();
		      $('.progressBar').fadeOut();
		      $('.category-img img').attr('src',ajax_url+'uploads/'+obj.name);
		      $('input[name="cat-img"]').val(obj.name);
		    
		    }else{
		    	toastr['error'](obj.error,'Error');
		      // alert(obj.error);
		    }
		    },
		  complete: function(xhr) {
		    progressBar.fadeOut();      
		  } 
		}).submit();    

	});


	$('.top-cat-list label').on('click',function(){


			var cat_id = $(this).find('input').attr('data-cat-id');
			//make checked
			
		if($(this).find('input').is(':checked')){
			
			change_status_checkbox(cat_id,ajax_url+'category/top_category','active',success='Success',error='Error occured ')
			
			
		} else {

			//make unchecked
			change_status_checkbox(cat_id,ajax_url+'category/top_category','inactive',success='Success',error='Error occured ')
		

		}

	});

	$('.order-wrapper').on('change','.order-status',function(){

		var select = $(this);
		var order_id  = select.attr('data-orderId');
		var status  = select.val();

		console.log(order_id+" "+status)

		if (order_id=='' || status=='') {

			toastr['error']('Error occured !','');
			return false;
		}

		$.ajax({

			url : ajax_url+"order/change_status",
			type : 'POST',
			data : {order_id:order_id,status:status},
			beforeSend: function() {
				select.after('<img class="ajax-loader" src="'+ajax_url+'assets/img/ajax-loader.gif" />');

			},
			error : function(jqXHR,exception) {
				console.log(jqXHR.responseText);
				var msg = '';
		        if (jqXHR.status === 0) {
		            msg = 'Not connect.\n Verify Network.';
		        } else if (jqXHR.status == 404) {
		            msg = 'Requested page not found. [404]';
		        } else if (jqXHR.status == 500) {
		            msg = 'Internal Server Error [500].';
		        } else if (exception === 'parsererror') {
		            msg = 'Requested JSON parse failed.';
		        } else if (exception === 'timeout') {
		            msg = 'Time out error.';
		        } else if (exception === 'abort') {
		            msg = 'Ajax request aborted.';
		        } else {
		            msg = 'Uncaught Error.\n' + jqXHR.responseText;
		        }
		        alert(msg);
			},
			success : function(html) {

				$('.ajax-loader').hide();
				console.log(html);
				if (html=='success') {


					toastr['success']('Success','');

					if (status=='new_order') {
						var tr = select.closest('tr');
						
						$('.new-order-table tbody').prepend(tr);

					}


				} else {

					toastr['error']('There was en error, try later !')
				}
			}

		});




	});


	// get notification


	setInterval(get_notification,3000);


	$('#header_notification_bar').on('click',function(){

		var bar = $(this);
		if (!bar.hasClass('open')) {

			// perform the ajax to get the notification

			$.ajax({

				url : ajax_url+'order/get_notification',
				type : "POST",
				data :{'notify':'notify'},
				beforeSend : function() {

						$('.noti-loader').show();
				},

				success: function(html) {

						$('.noti-loader').hide();
					if (html!=='') {

						 
					    
						   $('.notification-list').html(html);
							 var elems = $('.notification-list').children('li').remove();
							    elems.sort(function(a,b){
							        return parseInt($(a).attr('data-orderdate')) < parseInt($(b).attr('data-orderdate'));
							    });
							    $('.notification-list').append(elems);
							$('.noti-loader').hide();

					} else {

						$('.notification-list').html('<li><a href="javascript:void(0);">You have No notification !</a></li>');

					}
				}
			});
		}

	});


	// ,
	// 		error : function(jqXHR,exception) {
	// 			console.log(jqXHR.responseText);
	// 			var msg = '';
	// 	        if (jqXHR.status === 0) {
	// 	            msg = 'Not connect.\n Verify Network.';
	// 	        } else if (jqXHR.status == 404) {
	// 	            msg = 'Requested page not found. [404]';
	// 	        } else if (jqXHR.status == 500) {
	// 	            msg = 'Internal Server Error [500].';
	// 	        } else if (exception === 'parsererror') {
	// 	            msg = 'Requested JSON parse failed.';
	// 	        } else if (exception === 'timeout') {
	// 	            msg = 'Time out error.';
	// 	        } else if (exception === 'abort') {
	// 	            msg = 'Ajax request aborted.';
	// 	        } else {
	// 	            msg = 'Uncaught Error.\n' + jqXHR.responseText;
	// 	        }
	// 	        alert(msg);
	// 		},

	$('.submit-address').on('click',function() {

		
		var btn      = $(this);
		var country  = $('.country').val();
		var state    = $('.state').val();
		var city     = $('.city').val();
		var address  = $('.seller-address').val();
		var landmark = $('.landmark').val();
		var pincode  = $('.pincode').val();
		
		

		$.ajax({

			url : ajax_url+'admin/change_address',
			type : 'POST',
			data : {
				country  : country ,
				state    : 	state   ,
				city     : 	city    ,
				address  : 	address ,
				landmark : 	landmark,
				zipcode  : 	pincode				
			},
			beforeSend : function() {

				btn.html(' Wait..');

				$('.error').html('');
				
			} ,

			success  : function(html) {

				btn.html('Submit');

				console.log(html);
				var data = $.parseJSON(html);


				if (data.status=='true') {

					toastr['success']('successfully updated address','success');

				} else {

					$('.country-error').html(data.country);
					$('.state-error').html(data.state);
					$('.city-error').html(data.city);
					$('.address-error').html(data.address);
					$('.landmark-error').html(data.landmark);
					$('.pincode-error').html(data.zipcode);
					
					toastr['error']('Error occured, try later','error')

				}


			}

		});

	});


	$('.submit-bank').on('click',function() {

		
		var btn            = $(this);
		var account_holder_name = $('.holder_name').val();
		var account_number      = $('.account_number').val();
		var bank_name           = $('.bank_name').val();
		var branch              = $('.branch').val();
		var ifsc                = $('.ifsc').val();
		var business_pan        = $('.business_pan').val();
		var pan                 = $('.pan').val();
		var state               = $('.bank_state').val();
		var city                = $('.bank_city').val();
		
		

		$.ajax({

			url : ajax_url+'admin/change_bank',
			type : 'POST',
			data : {

				account_holder_name    : account_holder_name   ,
				account_number         : account_number,
				bank_name              : bank_name     ,
				branch                 : branch        ,
				ifsc                   : ifsc          ,
				business_pan           : business_pan  ,
				pan                    : pan           ,
				state                  : state         ,
				city                   : city          
			},
			beforeSend : function() {

				btn.html(' Wait..');

				$('.error').html('');
				
			} ,

			success  : function(html) {

				btn.html('Submit');

				console.log(html);
				var data = $.parseJSON(html);


				if (data.status=='true') {

					toastr['success']('successfully updated address','success');

				} else {

					$('.business_pan-error').html(data.business_pan);
					$('.pan-error').html(data.pan);
					$('.ifsc-error').html(data.ifsc);
					$('.branch-error').html(data.branch);
					$('.bank_name-error').html(data.bank_name);
					$('.account_number-error').html(data.account_number);
					$('.holder_name-error').html(data.account_holder_name);
					$('.state-error').html(data.state);
					$('.city-error').html(data.city);
					
					toastr['error']('Error occured, try later','error')

				}


			}

		});

	});

	$('.submit-personal-info').on('click',function() {

		
		var btn            = $(this);
		var username = $('input.username').val();
		var fname    = $('.fname').val();
		var lname    = $('.lname').val();
		var gender   = $('#gender').val();
		

		$.ajax({

			url : ajax_url+'admin/change_personal_info',
			type : 'POST',
			data : {

				username : username,
				fname    : fname   ,
				lname    : lname   ,
				gender   : gender  
			},
			beforeSend : function() {

				btn.html(' Wait..');

				$('.error').html('');
				
			} ,

			success  : function(html) {

				btn.html('Submit');

				console.log(html);
				var data = $.parseJSON(html);


				if (data.status=='true') {

					toastr['success']('successfully updated address','success');

				} else {

					$('.username-error').html(data.username);
					$('.fname-error').html(data.fname);
					$('.lname-error').html(data.lname);
					$('.gender-error').html(data.gender);
					
					
					toastr['error']('Error occured, try later','error')

				}


			}

		});

	});

	// $(function(){
 //    var elems = $('ul').children('li').remove();
 //    elems.sort(function(a,b){
 //        return parseInt($(a).attr('data-num')) > parseInt($(b).attr('data-num'));
 //    });
 //    $('ul').append(elems);
	// });



	$('form#upload-attachment input#attachment').on('change', function (e) {

		var progressBar = $('.progressBar'), bar = $('.progressBar .bar'), percent = $('.progressBar .percent');


		$('form#upload-attachment').ajaxForm({
		    beforeSend: function() {
		        progressBar.fadeIn();
		        var percentVal = '0%';
		        bar.width(percentVal)
		        percent.html(percentVal);
		    },
		    uploadProgress: function(event, position, total, percentComplete) {
		        var percentVal = percentComplete + '%';
		        bar.width(percentVal)
		        percent.html(percentVal);
		    },

		    success: function(html, statusText, xhr, $form) {   
		
			// console.log(html);
			console.log(html);
		    obj = $.parseJSON(html);  
			// console.log(obj.header);
			
			// console.log(obj.file);
		    if(obj.status){   
		      var percentVal = '100%';
		      bar.width(percentVal)
		      percent.html(percentVal);
		     
		      $('.progressBar').fadeOut();
		   
		      $('.attachment-data').val(obj.name);
		    
		    }else{
		    	toastr['error'](obj.error,'Error');
		      // alert(obj.error);
		    }
		    },
		  complete: function(xhr) {
		    progressBar.fadeOut();      
		  } 
		}).submit();    

	});


	$('.seller-support-submit').on('click',function() {

		
		var btn            = $(this);
		var issue_type = $('select.issue-type').val();
		var subject    = $('input.subject').val();
		var details    = $('textarea.details').val();
		var attachment = $('input.attachment-data').val();
		var callback   = $('input.callback ').val();
		
		console.log(issue_type);
		console.log(subject);
		console.log(details);
		console.log(attachment);
		console.log(callback);

		$.ajax({

			url : ajax_url+'admin/submit_seller_support',
			type : 'POST',
			data : {

				issue_id : issue_type ,
				subject    : subject    ,
				details    : details    ,
				attachment : attachment ,
				phone   : callback   
			},
			beforeSend : function() {

				btn.html(' Wait..');

				$('.error').html('');
				
			} ,

			success  : function(html) {

				btn.html('Submit');

				console.log(html);
				var data = $.parseJSON(html);


				if (data.status=='true') {

					toastr['success']('successfully updated address','success');

				} else {

					$('.issue-error').html(data.issue_type);
					$('.subject-error').html(data.subject);
					$('.details-error').html(data.details);
					$('.callback-error').html(data.callback);
					
					
					toastr['error']('Error occured, try later','error')

				}


			}

		});

	});





});




function delete_image(id,url,success='',error='') {
	$.ajax({

		url  : url,
		type : 'POST',
		data : {'delete':'DELETE',id:id},
		
		success : function(html){

			console.log(html);
			

			if (html=='success') {

				toastr['success'](success,'success');

				$('tr#row_'+id).fadeOut();

			
			} else {
				toastr['error'](error,'');

				$('.ajax-loader').hide();

			}
		}

	});
}

function change_status_checkbox(id,url,status,success='',error='') {

		$.ajax({

   		url : url,
   		type :'POST',
   		data : {'change':status ,id:id},
   		beforeSend: function() {
   			$('.loader-overlay').show();
   		},
   		success :function (html) {

   			$('.loader-overlay').hide();
   			// console.log(html);

   			if (html=='true') {

   				toastr['success'](success,'success');

   			} else {

   				toastr['error'](error,'Error');

   			}

   		}
   	});

}


function get_notification() {

	$.ajax({
		type : 'POST',
		url  : ajax_url+'order/get_notification_count',
		data : {'get_notification':'notification'},

		success : function(html) {

			if (html!=0) {

				$('.notification-count').html(html);
				$('.notification-pending').html('You have <strong>'+html+' pending</strong> notification');
				$('.notification-pending').show();
				$('.notification-count').show();

			} else {

				$('.notification-count').hide();
				$('.notification-pending').hide();

			}

		}
	});

}