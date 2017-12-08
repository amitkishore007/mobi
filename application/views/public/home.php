 <div id="content" class="site-content" tabindex="-1">
    <div class="container">
        <div id="primary" class="content-area">
            <main id="main" class="site-main">
                <div class="home-v3-slider" >
	<!-- ========================================== SECTION – HERO : END========================================= -->

	<?php if(isset($slides)): ?>
	<div id="owl-main" class="owl-carousel owl-inner-nav owl-ui-sm">
		<?php foreach($slides as $slide): ?>
		<div class="item" style="background-image: url(<?php echo base_url(); ?>uploads/<?php echo $slide->slide; ?>);">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="caption vertical-center text-left">
							<div class="hero-subtitle-v2 fadeInDown-1">
								<!-- shop to get what you loves -->
							</div>

							<div class="hero-2 fadeInDown-2">
								<!-- Timepieces that make a statement up to <strong>40% Off</strong> -->
 							</div>

							<!-- <div class="hero-action-btn fadeInDown-3">
								<a href="#" class="big le-button ">Start Buying</a>
							</div> -->
						</div><!-- /.caption -->
					</div><!-- /.col -->
				</div>
			</div><!-- /.container -->
		</div><!-- /.item -->
	<?php endforeach; ?>
	</div><!-- /.owl-carousel -->
<?php endif; ?>

<!-- ========================================= SECTION – HERO : END ========================================= -->


</div><!-- /.home-v1-slider -->





<section style=" margin-top:-40px;" class='recharge-section'> 

<div class="payment">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12  text-center">
            <!-- <p class="mobile"> -->

            <span>Mobile Recharge or Bill Payment</span>
            	<ul class='rechrarge-option'>
			
				<li> 
					<label>
                   	 <input type="radio" class='recharge_type' name="optionsRadios" id="optionsRadios1" value="prepaid" > Mobile Prepaid </label>
                    </li>
				<li>
					<label>
                   	 <input type="radio" class='recharge_type' name="optionsRadios" id="optionsRadios1" value="prepaid" > Mobile Postpaid </label>
				</li>
				<li>
                   	 <label>
                   	 <input type="radio" class='recharge_type' name="optionsRadios" id="landline_payment" value="landline" > Landline bill payment  </label>
				</li>
				<li>
                   	 <label>
                   	 <input type="radio" class='recharge_type' name="optionsRadios" id="optionsRadios1" value="prepaid" > DTH  </label>
				</li>
				<li>
					<label>
                   	 <input type="radio" class='recharge_type' name="optionsRadios" id="optionsRadios1" value="prepaid" > Electricity payment </label>
				</li>
				<li>
					<label>
                   	 <input type="radio" class='recharge_type' name="optionsRadios" id="optionsRadios1" value="prepaid" > Gas payment</label>
				</li>
				<li>
					<label>
                   	 <input type="radio" class='recharge_type' name="optionsRadios" id="optionsRadios1" value="prepaid" > Insurance </label>
                   	 
</li>
				<li>
                   	 <label>
                   	 <input type="radio" class='recharge_type' name="optionsRadios" id="optionsRadios1" value="prepaid" > Broadband bill payment </label>
				</li>
				
				</ul>
            <!-- </p> -->
        </div>
    </div>
    <!-- <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

            <div class="radio">
                <label>
                    <input type="radio" class='recharge_type' name="optionsRadios" id="optionsRadios1" value="prepaid" checked> Prepaid </label>
                <label>
                    <input type="radio" class='recharge_type' name="optionsRadios" id="optionsRadios2" value="postpaid"> Postpaid </label>
                <span class="text-danger recharge-error"></span>
            </div>
        </div>
    </div>
 -->
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-9 col-xs-9 text-center  recharge-numbers">
            <ul>
                <li>
                    <div class="form-group">

                        <input type="number" class="form-control1 phone_number" id="exampleInputAmount" placeholder="Mobile no.">
                    </div>
                </li>
                <li>
                    <div class="">

                       <select name="operators" id="" class="form-control">
                       	<option value="">Select operator</option>
                       	<option value="">Airtel</option>
						<option value="">Idea</option>
						<option value="">Aircel</option>
						<option value="">MTS</option>
						<option value="">Reliance GSM</option>
						<option value="">Tata Indicom</option>
						<option value="">TATA Docomo Normal</option>
						<option value="">TATA Docomo special</option>
						<option value="">BSNL TopUp</option>
						<option value="">BSNL (Validity / Specia</option>l)
						<option value="">Vodafone</option>
						<option value="">Uninor</option>
						<option value="">MTNL TopUp</option>
						<option value="">MTNL Special</option>
						<option value="">Reliance Cdma</option>
						<option value="">Videocon mobile Special</option>
						<option value="">Videocon Mobile TopUp  </option>   

                       </select>
                    </div>
                </li>
               <li>
                    <div class="">

                       <select name="circles" id="" class="form-control">
                       	<option value="">Select Circle</option>
<option value="1">Andhra Pradesh</option>
<option value="2">Assam</option>
<option value="3"> Bihar & Jharkhand</option>
<option value="4">Chennai</option>
<option value="5">Delhi & NCR</option>
<option value="6"> Gujarat</option>
<option value="7">Haryana</option>

<option value="8">Himachal Pradesh</option> 
<option value="9">Jammu & Kashmir</option> 
<option value="10"> Karnataka</option> 
<option value="11"> Kerala</option> 
<option value="12"> Kolkata</option> 
<option value="13">Maharashtra & Goa</option> 
<option value="14"> MP & Chattisgarh</option> 
<option value="15"> Mumbai</option> 
<option value="16"> North East</option> 
<option value="17"> Orissa</option> 
<option value="18"> Punjab</option> 
<option value="19"> Rajasthan</option> 
<option value="20"> Tamilnadu</option> 
<option value="21"> UP(EAST)</option> 
<option value="22"> UP(WEST) & Uttarakhand</option> 
<option value="23"> West Bengal</option> 
<option value="51"> All India </option> 

                       </select>
                    </div>
                </li>
                <li>
                    <input type="number" class="form-control1 recharge-amount" id="exampleInputAmount" placeholder="Amount">
                </li>
                <li class="Update">
                
				 <button type="button" class="btn btn-primary btn-lg btn-block do_recharge">

                Proceed to Pay</button>
                </li>
            </ul>
        </div>

        <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
          


           
        </div>
    </div>
</div>
</setion >






                <div class="home-v3-features-block animate-in-view fadeIn animated" data-animation="fadeIn">
	<div class="features-list columns-5">
		<div class="feature">
			<div class="media">
				<div class="media-left media-middle feature-icon">
					<i class="ec ec-transport"></i>
				</div>
				<div class="media-body media-middle feature-text">
					<strong>Free Delivery</strong> from Rs.50
				</div>
			</div>
		</div><!-- .feature -->

		<div class="feature">
			<div class="media">
				<div class="media-left media-middle feature-icon">
					<i class="ec ec-customers"></i>
				</div>
				<div class="media-body media-middle feature-text">
					<strong>99% Positive</strong> Feedbacks
				</div>
			</div>
		</div><!-- .feature -->

		<div class="feature">
			<div class="media">
				<div class="media-left media-middle feature-icon">
					<i class="ec ec-returning"></i>
				</div>
				<div class="media-body media-middle feature-text">
					<strong>365 days</strong> for free return
				</div>
			</div>
		</div><!-- .feature -->

		<div class="feature">
			<div class="media">
				<div class="media-left media-middle feature-icon">
					<i class="ec ec-payment"></i>
				</div>
				<div class="media-body media-middle feature-text">
					<strong>Payment</strong> Secure System
				</div>
			</div>
		</div><!-- .feature -->

		<div class="feature">
			<div class="media">
				<div class="media-left media-middle feature-icon">
					<i class="ec ec-tag"></i>
				</div>
				<div class="media-body media-middle feature-text">
					<strong>Only Best</strong> Brands
				</div>
			</div>
		</div><!-- .feature -->
	</div><!-- .features-list -->
</div><!-- .home-v3-features-block -->  


              <div class="home-v3-ads-block animate-in-view fadeIn animated" data-animation=" animated fadeIn">
	<div class="ads-block row">
       <?php  if(isset($banners)): ?>
    		<?php foreach ($banners as $banner): ?>
            <?php if($banner->page_location=='below_slider'): ?>
                <div class="ad ad-banner col-xs-12 col-sm-6">
        			<div class="media">
                        <div class="media-left media-middle">
        				<?php if (filter_var($banner->banner, FILTER_VALIDATE_URL)): ?>
                            <img data-echo="<?php echo $banner->banner; ?>" src="<?php echo base_url(); ?>assets/public/images/blank.gif" alt="">
                        <?php else: ?>
        					<img data-echo="<?php echo base_url('uploads/'.$banner->banner);  ?>" src="<?php echo base_url(); ?>assets/public/images/blank.gif" alt="">

                        <?php endif; ?>
        				</div>
        			
        			</div>
        		</div><!-- /.col -->
            <?php endif; ?>
           <?php endforeach; ?>
        <?php endif; ?>

		
	</div><!-- /.row -->
</div><!-- /.home-v3-ads-block -->         

<section class="products-carousel-tabs animate-in-view fadeIn animated" data-animation="fadeIn">
	<h2 class="sr-only">Product Carousel Tabs</h2>
	<ul class="nav nav-inline text-xs-left home-ajax-cat">
	
		<?php if(isset($home_categories)): ?>
				<?php $i=1; ?>							
		<?php foreach ($home_categories as $home_category) : ?>
			<?php if($home_category->type=='one'): ?>

		<li class="nav-item">
			<a class="nav-link <?php echo ($i==1) ? 'active' : ''; ?>" data-category-id="<?php echo $home_category->cat_id; ?>" href='javascript:void(0);'><?php echo $home_category->name; ?></a>
		</li>
			<?php endif; ?>
		<?php $i++; endforeach; ?>

		<?php endif; ?>
		
	</ul><!-- /.nav -->

	<div class="tab-content ajax-content">
		<!-- <div class="tab-pane active" id="tab-products-1" role="tabpanel">
			<section class="section-products-carousel" >
				<div class="home-v3-owl-carousel-tabs">
					<div class="woocommerce columns-4">
                         <div class="products owl-carousel home-carousel-tabs products-carousel columns-4 product-cat-one">
                         
					 </div>
					</div>
				</div>
			</section>
		</div> -->
        <!-- /.tab-pane -->
        <?php if(isset($home_categories)): ?>
        <?php $i=1; ?>                          
        <?php foreach ($home_categories as $home_category) : ?>
            <?php if($home_category->type=='one'): ?>
                <div class="tab-pane <?php echo ($i==1) ? 'active' : ''; ?>" id="tab-products-<?php echo $home_category->cat_id; ?>" role="tabpanel">
        			<section class="section-products-carousel">
        				<div class="home-v3-owl-carousel-tabs">
        					<div class="woocommerce columns-4">
                                <div class="products owl-carousel home-carousel-tabs products-carousel columns-4 product-cat-two">


        			
            					</div><!-- /.products -->
        					</div>
        				</div>
        			</section>
        		</div><!-- /.tab-pane -->
        <?php endif; ?>
        <?php $i++; endforeach; ?>

        <?php endif; ?>
        
		

	</div><!-- /.tab-content -->
</section><!-- /.products-carousel-tabs -->
 
 <section class="products-carousel-with-image animate-in-view fadeIn animated" style="background-size: cover; background-position: center center; background-image: url( <?php echo base_url(); ?>assets/public/images/home-v3-bg.jpg);" data-animation="fadeIn">
	<h2 class="sr-only">Products Carousel</h2>
	<div class="container">
		<div class="row">
			<div class="image-block col-xs-12 col-sm-6">
			<?php if(isset($third_category)): ?>
				<?php if(isset($third_category->image)): ?>
					<img data-echo="<?php echo base_url(); ?>uploads/<?php echo $third_category->image; ?>" >
				<?php else: ?>
					<img data-echo="<?php echo base_url(); ?>assets/img/placeholder.jpg" >
				<?php endif; ?>
			<?php endif; ?>
			</div><!-- /.image-block -->

			<div class="products-carousel-block col-xs-12 col-sm-6">
				<section class="home-v2-categories-products-carousel section-products-carousel" >

					<header>
					<?php if(isset($third_category)): ?>
                        <h2 class="h1"><?php echo ucwords(htmlentities($third_category->name)); ?></h2>
					<?php endif; ?>
                        <div class="owl-nav">
							<a href="#products-carousel-prev" data-target="#products-carousel-with-umage" class="slider-prev"><i class="fa fa-angle-left"></i></a>
							<a href="#products-carousel-next" data-target="#products-carousel-with-umage" class="slider-next"><i class="fa fa-angle-right"></i></a>
						</div>

					</header>

					<div id="products-carousel-with-umage">
						<div class="woocommerce columns-4">


		<div class="products owl-carousel home-carousel-tabs products-carousel columns-4">


        <?php if(isset($third_category_product)): ?>
            <?php $i=1; ?>
            <?php foreach ($third_category_product as $product): ?>
                    <div class="product <?php echo $i==1 ? 'first' : ''; echo $i==4 ? 'last' : ''; ?>">
                    <div class="product-outer">
                    <div class="product-inner">
                    <span class="loop-product-categories">
                    
                    <a href="<?php echo base_url('shop/search_product/?category='.$third_category->id.'&name='); ?>" rel="tag"><?php echo ucwords(htmlentities($third_category->name)); ?></a>
                    
                    </span>
                    <a href="<?php echo base_url('shop/quickview/'.$product->id); ?>">
                    <h3><?php echo $product->title; ?></h3>
                    <div class="product-thumbnail">
                    
                    <?php if (isset($product->thumbnail)): ?>
                        
                            <?php if ($product->upload_type=='excel'): ?>
                                    
                                            <img  data-echo="<?php echo $product->thumbnail; ?>" class="img-responsive">

                                    <?php else: ?>
                                            <img  data-echo="<?php echo base_url(); ?>uploads/<?php echo $product->thumbnail; ?>" class="img-responsive">

                            <?php endif ?>

                        <?php else: ?>

                        <img  data-echo="<?php echo base_url(); ?>assets/img/placeholder.jpg" class="img-responsive">
                            
                    <?php endif; ?>

                    

                    </div>
                    </a>
                    
                    <div class="price-add-to-cart">
                    <span class="price">
                    <span class="electro-price">
                    <?php if(isset($product->compare_price)): ?>
                        <ins><span class="amount">Rs.<?php echo $product->compare_price; ?> </span></ins>
                    <?php endif; ?>
                    <span class="amount"> Rs.<?php echo $product->price; ?></span>
                    </span>
                    </span>
                    <a rel="nofollow" href="javascript:void(0);" data-productId='<?php echo $product->id; ?>' data-productQty='1' class="button add_to_cart_button addToCart">Add to cart</a>
                    </div><!-- /.price-add-to-cart -->
                    
                    <div class="hover-area">
                    <div class="action-buttons">
                    
                    <a href="#" rel="nofollow" class="add_to_wishlist"> Wishlist</a>
                    
                   
                    </div>
                    </div>
                    </div><!-- /.product-inner -->
                    </div><!-- /.product-outer -->
                    </div><!-- /.product -->
                    <?php $i++; ?>
            <?php endforeach; ?>
        <?php endif; ?>
					</div><!-- /.products -->
						</div>
					</div>
				</section>
			</div><!-- /.iproducts-carousel-block -->
		</div><!-- /.row -->
	</div><!-- /.conainer -->
</section><!-- /.products-carousel-with-image-->
                <section class="section-product-cards-carousel animate-in-view fadeIn animated" data-animation="fadeIn">
	<header>
		
        <?php if(isset($fourth_category)): ?>
                        <h2 class="h1"><?php echo ucwords(htmlentities($fourth_category->name)); ?></h2>
                    <?php endif; ?>
		<div class="owl-nav">
			<a href="#products-cards-carousel-prev" data-target="#homev3-products-cards-carousel" class="slider-prev"><i class="fa fa-angle-left"></i></a>
			<a href="#products-cards-carousel-next" data-target="#homev3-products-cards-carousel" class="slider-next"><i class="fa fa-angle-right"></i></a>
		</div>
	</header><!-- /header-->


	<div id="homev3-products-cards-carousel">
		<div class="woocommerce home-v3 columns-2 product-cards-carousel">

				<ul class="products columns-2">
			<?php if(isset($fourth_category_product)): ?>
                <?php $i=1; ?>
                <?php foreach ($fourth_category_product as $product):  ?>
                <li class="product product-card <?php echo $i%2 !=0 ? 'first' :'last';?>">

                    <div class="product-outer">
                		<div class="media product-inner">

                			<a class="media-left" href="<?php echo base_url('shop/quickview/'.$product->id); ?>" title="<?php echo ucwords(htmlentities($product->title)); ?>">
                                
                                <?php if (isset($product->thumbnail)): ?>
                                    
                                        <?php if ($product->upload_type=='excel'): ?>
                                                
                                                        <img  data-echo="<?php echo $product->thumbnail; ?>" class="media-object wp-post-image img-responsive">

                                                <?php else: ?>
                                                        <img  data-echo="<?php echo base_url(); ?>uploads/<?php echo $product->thumbnail; ?>" class="media-object wp-post-image img-responsive">

                                        <?php endif ?>

                                    <?php else: ?>

                                    <img  data-echo="<?php echo base_url(); ?>assets/img/placeholder.jpg" class="media-object wp-post-image img-responsive">
                                        
                                <?php endif; ?>
                			</a>

                			<div class="media-body">
                				<span class="loop-product-categories">
                					<a href="<?php echo base_url('shop/search_product/?category='.$third_category->id.'&name='); ?>" ><?php echo ucwords(htmlentities($fourth_category->name)); ?></a>
                				</span>

                				<a href="<?php echo base_url('shop/quickview/'.$product->id); ?>">
                					<h3><?php echo htmlentities($product->title); ?></h3>
                				</a>

                				<div class="price-add-to-cart">
                					<span class="price">
                	                    <span class="electro-price">
                	                        <span class="amount"> Rs.<?php echo $product->price; ?></span>
                	                        	                            <?php if(isset($product->compare_price)): ?>
                                                                            <del><span class="amount"> Rs.<?php echo $product->compare_price; ?></span></del>
                	                                                       <?php endif; ?>
                                                                        </span>
                	                </span>

                					<a href="javascript:void(0);" data-productId='<?php echo $product->id; ?>' data-productQty='1'  class="button add_to_cart_button addToCart">Add to cart</a>
                				</div><!-- /.price-add-to-cart -->

                				<div class="hover-area">
                	                <div class="action-buttons">

                	                    <a href="javascript:void(0);" data-productId="<?php echo $product->id; ?>" class="add_to_wishlist">
                	                            Wishlist</a>

                	                   
                	                </div>
                	            </div>

                			</div>
                		</div><!-- /.product-inner -->
                	</div><!-- /.product-outer -->
                </li><!-- /.products -->
                <?php $i++; ?>
            <?php endforeach; ?>	

        <?php endif; ?>

        </ul>
					

		</div>
	</div><!-- /#homev3-products-cards-carousel-->

</section><!-- /.section-product-cards-carousel-->

<section class="products-6-1 animate-in-view fadeIn animated" data-animation="fadeIn">
	<div class="container">
		<header>
			<h2 class="h1">Bestsellers</h2>
			<ul class="nav nav-inline ajax-product-section-2">
			<?php if(isset($home_categories)): ?>
              <?php $i=1; ?>                          
                <?php foreach ($home_categories as $home_category) : ?>
                    <?php if($home_category->type=='two'): ?>

                        <li class="nav-item <?php echo ($i==1) ? 'active' : ''; ?>">
                            <a class="nav-link <?php echo ($i==1) ? 'active' : ''; ?>" data-category-id="<?php echo $home_category->cat_id; ?>" href='javascript:void(0);'><?php echo $home_category->name; ?></a>
                        </li>
    				
                    <?php $i++; endif;  ?>
                <?php endforeach; ?>
            <?php endif; ?>
				
			</ul>
		</header>

		<div class="col-md-12 product-section-2">
				<ul class="products exclude-auto-height products-6">
							
							
				</ul>
		</div><!-- /.columns-6-1 -->
	</div><!-- /.container-->
</section><!-- /.products-6-1 -->     

           <section class="home-list-categories animate-in-view fadeIn animated" data-animation="fadeIn">
	<header>
		<h2 class="h1">Top Categories</h2>
	</header>
		<ul class="categories">
			<?php if(isset($top_categories)): ?>
				<?php foreach ($top_categories as $category): ?>
				<li class="category">
				<div class="media">
				<a class="media-left" href="<?php echo base_url('shop/category/'.$category->id); ?>">
				<?php if (isset($category->image)): ?>
				
				<img data-echo="<?php echo base_url(); ?>uploads/<?php echo $category->image; ?>" src="<?php echo base_url(); ?>assets/public/images/blank.gif" >
					<?php else: ?>
				
				<img data-echo="<?php echo base_url(); ?>assets/img/placeholder.jpg" src="<?php echo base_url(); ?>assets/public/images/blank.gif" >
				<?php endif; ?>
					</a>
				
				<div class="media-body">
				<h4 class="media-heading">
				<a href="<?php echo base_url('shop/category/'.$category->id); ?>"><?php echo ucwords(htmlentities($category->name)) ?></a></h4>
				
				</div><!-- /.media-body -->
				</div><!-- /.media -->
				
				</li>
				<?php endforeach; ?>
			<?php endif; ?>
				
			</ul>
</section>            </main><!-- #main -->
        </div><!-- #primary -->
    </div><!-- .container -->
</div><!-- #content -->

            