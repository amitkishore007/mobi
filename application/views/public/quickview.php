
<?php //print_r($quick_product); ?>
	 <!-- product single -->
	 <?php  ?>
	 <div class='single-product full-width'>
<div id="content" class="site-content" tabindex="-1">
	<div class="container">

		<nav class="woocommerce-breadcrumb">
			&nbsp;
		</nav><!-- /.woocommerce-breadcrumb -->

		<div id="primary" class="content-area">
			<main id="main" class="site-main">

				<div class="product">

					<div class="single-product-wrapper">
						<div class="product-images-wrapper">
							<!-- <span class="onsale">Sale!</span> -->
							 <div class="images electro-gallery">
	<div class="thumbnails-single owl-carousel">
		<?php if($quick_product->upload_type=='excel'): ?>
			<a href="<?php echo $quick_product->thumbnail; ?>" class="zoom" title="" data-rel="prettyPhoto[product-gallery]">
				<img data-echo="<?php echo $quick_product->thumbnail; ?>" class="wp-post-image" alt="">
			</a>

			<a href="<?php echo $quick_product->thumbnail2; ?>" class="zoom" title="" data-rel="prettyPhoto[product-gallery]">
				<img data-echo="<?php echo $quick_product->thumbnail2; ?>" class="wp-post-image" alt="">
			</a>

			<a href="<?php echo $quick_product->thumbnail3; ?>" class="zoom" title="" data-rel="prettyPhoto[product-gallery]">
				<img data-echo="<?php echo $quick_product->thumbnail3; ?>" class="wp-post-image" alt="">
			</a>

			<a href="<?php echo $quick_product->thumbnail4; ?>" class="zoom" title="" data-rel="prettyPhoto[product-gallery]">
				<img data-echo="<?php echo $quick_product->thumbnail4; ?>" class="wp-post-image" alt="">
			</a>

			<?php else: ?>

				<a href="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail; ?>" class="zoom" title="" data-rel="prettyPhoto[product-gallery]">
				<img data-echo="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail; ?>" class="wp-post-image" alt="">
			</a>

			<a href="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail2; ?>" class="zoom" title="" data-rel="prettyPhoto[product-gallery]">
				<img data-echo="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail2; ?>" class="wp-post-image" alt="">
			</a>

			<a href="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail3; ?>" class="zoom" title="" data-rel="prettyPhoto[product-gallery]">
				<img data-echo="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail3; ?>" class="wp-post-image" alt="">
			</a>

			<a href="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail4; ?>" class="zoom" title="" data-rel="prettyPhoto[product-gallery]">
				<img data-echo="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail4; ?>" class="wp-post-image" alt="">
			</a>

	<?php endif; ?>

	</div><!-- .thumbnails-single -->

	<div class="thumbnails-all columns-5 owl-carousel">
	<?php if($quick_product->upload_type=='excel'): ?>
		<a href="<?php echo $quick_product->thumbnail; ?>" class="first" title="">
			<img data-echo="<?php echo $quick_product->thumbnail; ?>" class="wp-post-image" alt="">
		</a>

		<a href="<?php echo $quick_product->thumbnail2; ?>" class="" title="">
			<img data-echo="<?php echo $quick_product->thumbnail2; ?>" class="wp-post-image" alt="">
		</a>

		<a href="<?php echo $quick_product->thumbnail3; ?>" class="" title="">
			<img data-echo="<?php echo $quick_product->thumbnail3; ?>" class="wp-post-image" alt="">
		</a>

		<a href="<?php echo $quick_product->thumbnail4; ?>" class="" title="">
			<img data-echo="<?php echo $quick_product->thumbnail4; ?>" class="wp-post-image" alt="">
		</a>

		<?php else: ?>
			<a href="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail; ?>" class="first" title="">
			<img data-echo="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail; ?>" class="wp-post-image" alt="">
		</a>

		<a href="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail2; ?>" class="" title="">
			<img data-echo="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail2; ?>" class="wp-post-image" alt="">
		</a>

		<a href="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail3; ?>" class="" title="">
			<img data-echo="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail3; ?>" class="wp-post-image" alt="">
		</a>

		<a href="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail4; ?>" class="" title="">
			<img data-echo="<?php echo base_url('uploads'); ?><?php echo $quick_product->thumbnail4; ?>" class="wp-post-image" alt="">
		</a>
	<?php endif; ?>
	</div><!-- .thumbnails-all -->
</div><!-- .electro-gallery -->								</div><!-- /.product-images-wrapper -->

						<div class="summary entry-summary">

	<span class="loop-product-categories">
		<a href="<?php echo base_url('shop/category/'.$quick_product->category_id); ?>" rel="tag"><?php echo $quick_product->category; ?></a>
	</span><!-- /.loop-product-categories -->

	<h1 itemprop="name" class="product_title entry-title"><?php echo htmlentities($quick_product->title); ?></h1>

	<div class="woocommerce-product-rating">
		<div class="star-rating" title="Rated 4.33 out of 5">
			<span style="width:86.6%">
				<strong itemprop="ratingValue" class="rating">4.33</strong>
				out of <span itemprop="bestRating">5</span>				based on
				<span itemprop="ratingCount" class="rating">3</span>
				customer ratings
			</span>
		</div>

		<a href="#reviews" class="woocommerce-review-link">
			(<span itemprop="reviewCount" class="count">3</span> customer reviews)
		</a>
	</div><!-- .woocommerce-product-rating -->

	<div class="brand">
		<a href="<?php echo base_url('shop/category/'.$quick_product->category_id); ?>">
			
		</a>
	</div><!-- .brand -->

	<div class="availability in-stock">
		Availablity: <span><?php echo ($quick_product->quantity > 0) ? 'In stock' : 'Out of stock' ?> </span>
	</div><!-- .availability -->

	<hr class="single-product-title-divider" />

	<div class="action-buttons">

		<a href="#" class="add_to_wishlist" >
		        Wishlist
		</a>


		</div><!-- .action-buttons -->

	<div itemprop="description">
		
		<?php $features =  explode("::", $quick_product->features); ?>
		 <ul>
            <?php if(count($features)): ?>
            	<?php foreach ($features as $feature): ?>
                <li><span class="a-list-item"><?php echo htmlentities($feature); ?></span></li>
                <?php endforeach; ?>
            <?php endif; ?>
          </ul>

		<p><strong>SKU</strong>: <?php echo $quick_product->sku; ?></p>
	</div><!-- .description -->

	<div itemprop="offers" itemscope itemtype="http://schema.org/Offer">

		<p class="price"><span class="electro-price">
		<ins><span class="amount">Rs.<?php echo $quick_product->price; ?></span></ins>
		<?php if(isset($quick_product->compare_price)): ?>
			 <del><span class="amount">Rs.<?php echo $quick_product->compare_price; ?></span></del>
		<?php endif; ?>
		 </span></p>
	</div><!-- /itemprop -->

	<form class="variations_form cart" method="post">

	<table class="variations">
		<tbody>
			<tr>
				<td class="label color-label"><label>Color: </label> <span class="item-color" style="background-color:<?php echo substr($quick_product->color_code,0,4); ?> ;"></span></td>
				
			</tr>
		</tbody>
	</table>


	<div class="single_variation_wrap">
		<div class="woocommerce-variation single_variation"></div>
		<div class="woocommerce-variation-add-to-cart variations_button">
			<!-- <div class="quantity">
				<label>Quantity:</label>
				<input type="number" name="quantity" value="1" title="Qty" class="input-text qty text"/>
			</div> -->
			<button type="button" data-productId='<?php echo $quick_product->id; ?>' data-productQty='1' class="single_add_to_cart_button button addToCart">Add to cart</button>
			</div>
	</div>
</form>


</div><!-- .summary -->
					</div><!-- /.single-product-wrapper -->


					<div class="woocommerce-tabs wc-tabs-wrapper">
						<ul class="nav nav-tabs electro-nav-tabs tabs wc-tabs" role="tablist">
							<!-- <li class="nav-item accessories_tab">
								<a href="#tab-accessories" data-toggle="tab">Accessories</a>
							</li> -->

							<li class="nav-item description_tab">
								<a href="#tab-description" class="active" data-toggle="tab">Description</a>
							</li>

							<li class="nav-item specification_tab">
								<a href="#tab-specification" data-toggle="tab">Specification</a>
							</li>

							<li class="nav-item reviews_tab">
								<a href="#tab-reviews" data-toggle="tab">Reviews</a>
							</li>
						</ul>

						<div class="tab-content">
							

							<div class="tab-pane active in panel entry-content wc-tab" id="tab-description">
								<div class="electro-description">

	
								<?php echo $quick_product->description; ?>
								</div><!-- /.electro-description -->

<div class="product_meta">
	<span class="sku_wrapper">SKU: <span class="sku" itemprop="sku"><?php echo $quick_product->sku; ?></span></span>


	<span class="posted_in">Category:
		 <a href="<?php echo base_url('shop/category/'.$quick_product->category_id); ?>"><?php echo $quick_product->category; ?></a>
	</span>

	

</div><!-- /.product_meta -->
							</div>

							<div class="tab-pane panel entry-content wc-tab" id="tab-specification">
								<h3>Technical Specifications</h3>
<table class="table">
	<tbody>
		<tr>
			<td>Brand</td>
			<td>Apple</td>
		</tr>
		<tr>
			<td>Item Height</td>
			<td>18 Millimeters</td>
		</tr>
		<tr>
			<td>Item Width</td>
			<td>31.4 Centimeters</td>
		</tr>
		<tr>
			<td>Screen Size</td>
			<td>13 Inches</td>
		</tr>
		<tr class="size-weight">
			<td>Item Weight</td>
			<td>1.6 Kg</td>
		</tr>
		<tr class="size-weight">
			<td>Product Dimensions</td>
			<td>21.9 x 31.4 x 1.8 cm</td>
		</tr>
		<tr class="item-model-number">
			<td>Item model number</td>
			<td>MF841HN/A</td>
		</tr>
		<tr>
			<td>Processor Brand</td>
			<td>Intel</td>
		</tr>
		<tr>
			<td>Processor Type</td>
			<td>Core i5</td>
		</tr>
		<tr>
			<td>Processor Speed</td>
			<td>2.9 GHz</td>
		</tr>
		<tr>
			<td>RAM Size</td>
			<td>8 GB</td>
		</tr>
		<tr>
			<td>Hard Drive Size</td>
			<td>512 GB</td>
		</tr>
		<tr>
			<td>Hard Disk Technology</td>
			<td>Solid State Drive</td>
		</tr>
		<tr>
			<td>Graphics Coprocessor</td>
			<td>Intel Integrated Graphics</td>
		</tr>
		<tr>
			<td>Graphics Card Description</td>
			<td>Integrated Graphics Card</td>
		</tr>
		<tr>
			<td>Hardware Platform</td>
			<td>Mac</td>
		</tr>
		<tr>
			<td>Operating System</td>
			<td>Mac OS</td>
		</tr>
		<tr>
			<td>Average Battery Life (in hours)</td>
			<td>9</td>
		</tr>
	</tbody>
</table>
							</div><!-- /.panel -->

							<div class="tab-pane panel entry-content wc-tab" id="tab-reviews">
								<div id="reviews" class="electro-advanced-reviews">
	<div class="advanced-review row">
		<div class="col-xs-12 col-md-6">
			<h2 class="based-title">Based on 3 reviews</h2>
			<div class="avg-rating">
				<span class="avg-rating-number">4.3</span> overall
			</div>

			<div class="rating-histogram">
				<div class="rating-bar">
					<div class="star-rating" title="Rated 5 out of 5">
						<span style="width:100%"></span>
					</div>
					<div class="rating-percentage-bar">
						<span style="width:33%" class="rating-percentage">

						</span>
					</div>
					<div class="rating-count">1</div>
				</div><!-- .rating-bar -->

				<div class="rating-bar">
					<div class="star-rating" title="Rated 4 out of 5">
						<span style="width:80%"></span>
					</div>
					<div class="rating-percentage-bar">
						<span style="width:67%" class="rating-percentage"></span>
					</div>
					<div class="rating-count">2</div>
				</div><!-- .rating-bar -->

				<div class="rating-bar">
					<div class="star-rating" title="Rated 3 out of 5">
						<span style="width:60%"></span>
					</div>
					<div class="rating-percentage-bar">
						<span style="width:0%" class="rating-percentage"></span>
					</div>
					<div class="rating-count zero">0</div>
				</div><!-- .rating-bar -->

				<div class="rating-bar">
					<div class="star-rating" title="Rated 2 out of 5">
						<span style="width:40%"></span>
					</div>
					<div class="rating-percentage-bar">
						<span style="width:0%" class="rating-percentage"></span>
					</div>
					<div class="rating-count zero">0</div>
				</div><!-- .rating-bar -->

				<div class="rating-bar">
					<div class="star-rating" title="Rated 1 out of 5">
						<span style="width:20%"></span>
					</div>
					<div class="rating-percentage-bar">
						<span style="width:0%" class="rating-percentage"></span>
					</div>
					<div class="rating-count zero">0</div>
				</div><!-- .rating-bar -->
			</div>
		</div><!-- /.col -->

		<div class="col-xs-12 col-md-6">
			<div id="review_form_wrapper">
				<div id="review_form">
					<div id="respond" class="comment-respond">
						<h3 id="reply-title" class="comment-reply-title">Add a review
							<small><a rel="nofollow" id="cancel-comment-reply-link" href="#" style="display:none;">Cancel reply</a>
							</small>
						</h3>

						<form action="#" method="post" id="commentform" class="comment-form">
							<p class="comment-form-rating">
								<label>Your Rating</label>
							</p>

							<p class="stars">
								<span><a class="star-1" href="#">1</a>
									<a class="star-2" href="#">2</a>
									<a class="star-3" href="#">3</a>
									<a class="star-4" href="#">4</a>
									<a class="star-5" href="#">5</a>
								</span>
							</p>

							<p class="comment-form-comment">
								<label for="comment">Your Review</label>
								<textarea id="comment" name="comment" cols="45" rows="8" aria-required="true"></textarea>
							</p>

							<p class="form-submit">
								<input name="submit" type="submit" id="submit" class="submit" value="Add Review" />
								<input type='hidden' name='comment_post_ID' value='2452' id='comment_post_ID' />
								<input type='hidden' name='comment_parent' id='comment_parent' value='0' />
							</p>

							<input type="hidden" id="_wp_unfiltered_html_comment_disabled" name="_wp_unfiltered_html_comment_disabled" value="c7106f1f46" />
							<script>(function(){if(window===window.parent){document.getElementById('_wp_unfiltered_html_comment_disabled').name='_wp_unfiltered_html_comment';}})();</script>
						</form><!-- form -->
					</div><!-- #respond -->
				</div>
			</div>

		</div><!-- /.col -->
	</div><!-- /.row -->

	<div id="comments">

		<ol class="commentlist">
			<li itemprop="review" class="comment even thread-even depth-1">

				<div id="comment-390" class="comment_container">

					<img alt='' src="assets/images/blog/avatar.jpg" class='avatar' height='60' width='60' />
					<div class="comment-text">

						<div class="star-rating" title="Rated 4 out of 5">
							<span style="width:80%"><strong itemprop="ratingValue">4</strong> out of 5</span>
						</div>


						<p class="meta">
							<strong>John Doe</strong> &ndash;
							<time itemprop="datePublished" datetime="2016-03-03T14:13:48+00:00">March 3, 2016</time>:
						</p>



						<div itemprop="description" class="description">
							<p>Fusce vitae nibh mi. Integer posuere, libero et ullamcorper facilisis, enim eros tincidunt orci, eget vestibulum sapien nisi ut leo. Cras finibus vel est ut mollis. Donec luctus condimentum ante et euismod.
							</p>
						</div>


						<p class="meta">
							<strong itemprop="author">John Doe</strong> &ndash; <time itemprop="datePublished" datetime="2016-03-03T14:13:48+00:00">March 3, 2016</time>
						</p>


					</div>
				</div>
			</li><!-- #comment-## -->

			<li class="comment odd alt thread-odd thread-alt depth-1">

				<div class="comment_container">

					<img alt='' src="assets/images/blog/avatar.jpg" class='avatar' height='60' width='60' />
					<div class="comment-text">

						<div itemprop="reviewRating" itemscope itemtype="http://schema.org/Rating" class="star-rating" title="Rated 5 out of 5">
							<span style="width:100%"><strong itemprop="ratingValue">5</strong> out of 5</span>
						</div>

						<p class="meta">
							<strong>Anna Kowalsky</strong> &ndash;
							<time itemprop="datePublished" datetime="2016-03-03T14:14:47+00:00">March 3, 2016</time>:
						</p>


						<div itemprop="description" class="description">
							<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eget facilisis odio. Duis sodales augue eu tincidunt faucibus. Etiam justo ligula, placerat ac augue id, volutpat porta dui.
							</p>
						</div>

						<p class="meta">
							<strong itemprop="author">Anna Kowalsky</strong> &ndash; <time itemprop="datePublished" datetime="2016-03-03T14:14:47+00:00">March 3, 2016</time>
						</p>

					</div>
				</div>
			</li><!-- #comment-## -->

			<li class="comment odd alt thread-odd thread-alt depth-1">

				<div class="comment_container">

					<img alt='' src="assets/images/blog/avatar.jpg" class='avatar' height='60' width='60' />
					<div class="comment-text">

						<div itemprop="reviewRating" class="star-rating" title="Rated 5 out of 5">
							<span style="width:100%"><strong itemprop="ratingValue">5</strong> out of 5</span>
						</div>

						<p class="meta">
							<strong>Anna Kowalsky</strong> &ndash;
							<time itemprop="datePublished" datetime="2016-03-03T14:14:47+00:00">March 3, 2016</time>:
						</p>


						<div itemprop="description" class="description">
							<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse eget facilisis odio. Duis sodales augue eu tincidunt faucibus. Etiam justo ligula, placerat ac augue id, volutpat porta dui.
							</p>
						</div>

						<p class="meta">
							<strong itemprop="author">Anna Kowalsky</strong> &ndash; <time itemprop="datePublished" datetime="2016-03-03T14:14:47+00:00">March 3, 2016</time>
						</p>

					</div>
				</div>
			</li><!-- #comment-## -->
		</ol><!-- /.commentlist -->

	</div><!-- /#comments -->

	<div class="clear"></div>
</div><!-- /.electro-advanced-reviews -->
							</div><!-- /.panel -->
						</div>
					</div><!-- /.woocommerce-tabs -->

					
				</div><!-- /.product -->

			</main><!-- /.site-main -->
		</div><!-- /.content-area -->
	</div><!-- /.container -->
</div><!-- /.site-content -->
</div>

	 <!-- product single:end -->