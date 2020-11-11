import React from 'react';

export default function About() {
	return (
			<div>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="description" content />
				<meta name="author" content />
				<title>Writeprint</title>
				
				{/* Header Starts */}
				<section id="Banner" className="content-section">
				<div className="container content-wrap text-center">
					<h1>Writeprint</h1>
					<h3>
					<em>Testing text samples for decades</em>
					</h3>
					<a className="btn btn-primary btn-xl smooth-scroll" href="#About">Find Out More</a>
				</div>
				<div className="overlay">
				</div>
				</section>
				{/* Header Ends */}
				{/* About Us Starts */}
				<section id="About" className="content-section">
				<div className="container text-center">
					<div className="row">
					<div className="col-lg-12">
						<div className="block-heading">
						<h2>About Us</h2>
						</div>
						<p className="lead">Writeprint is an application that allows you to check custom text samples against known authors. Our application works by checking different parameters in your text samples and comparing those to benchmarks from other well-known authors. Additionally, you can submit a custom author of your own choice, to add to the training data. The more data that is entered for this custom author, the more accurate our model can be.
						</p>
						<p className="lead">
						This application is designed mostly to discover relationships between multiple authors and their styles of writing. It can also be used in a educational setting, to compare a students work with others, to see if their writing style matches. It can be used to trace anonymous authors and try and find other works of theirs, and could also classify older text whose author is unknown, if we can compare the writing to that of authors from the same time period.
						</p>
						<video style={{ width: '100%', maxHeight: '100%' }} autoPlay loop muted>
						<source src="./images/model.mp4" type="video/mp4" />
						Your browser does not support the video tag.
						</video>
						<p className="caption">
						A model of the 3 most important characteristics in text graphed on a 3 dimensional graph to show how we characterize data
						</p>
					</div>
					</div>
				</div>
				</section>
				{/* About Us Starts */}
				<section id="Services" className="content-section text-center">
				<div className="container">
					<div className="block-heading">
					<h2>Parameters</h2>
					<p>What are the parameters we test the text for</p>
					</div>
					<div className="row">
					<div className="col-md-3 col-sm-6">
						<div className="service-box">
						<div className="service-icon yellow">
							<div className="front-content">
							<i className="fa fa-globe" aria-hidden="true" />
							<h3>Average Word Length</h3>
							</div>
						</div>
						<div className="service-content">
							<h3>Average Word Length</h3>
							<p>Since everyone uses words with different complixity levels, testing word length is a good indicator of who wrote the text </p>
						</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6">
						<div className="service-box">
						<div className="service-icon orange">
							<div className="front-content">
							<i className="fa fa-suitcase" />
							<h3>Average syllables per word</h3>
							</div>
						</div>
						<div className="service-content">
							<h3>Average syllables per word</h3>
							<p>&gt;We further see the complixity of the text by counting the number of syllables per word as it servers for a good indicator for the level or writing to see who does it match with</p>
						</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6">
						<div className="service-box ">
						<div className="service-icon red">
							<div className="front-content">
							<i className="fa fa-male" aria-hidden="true" />
							<h3>Average sentence length</h3>
							</div>
						</div>
						<div className="service-content">
							<h3>Average sentence length</h3>
							<p>The average sentence length serves as a good indicator for identifing the author as sentence length is very personal to every author</p>
						</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-6">
						<div className="service-box">
						<div className="service-icon grey">
							<div className="front-content">
							<i className="fa fa-users" />
							<h3>Frequency of Function words </h3>
							</div>
						</div>
						<div className="service-content">
							<h3>Frequency of Function words </h3>
							<p>Function words such as - and, the, to, of, in - are all used by different authors in diffrent amounts in their text and hence are a valuable indicator for the test</p>
						</div>
						</div>
					</div>
					</div>
				</div>
				</section>
				{/* Carasol */}
				<section id="Authors" className="content-section">
				<div className="container">
					<div className="row">
					<div className="col-sm-12">
						<div className="block-heading">
						<h2>Authors used</h2>
						<p>The authors we used to train the model and the texts we used for their models</p>
						</div>
						<div id="customers-testimonials" className="owl-carousel">
						<div className="item">
							<div className="shadow-effect">
							<img className="img-circle" src="images/maya_ang.jpg" alt="" />
							<p>I Know Why the Caged Bird Sings</p>
							</div>
							<div className="testimonial-name">Maya Angelou </div>
						</div>
						<div className="item">
							<div className="shadow-effect">
							<img className="img-circle" src="images/OIP.jpg" alt="" />
							<p>The Old Man and the Sea</p>
							</div>
							<div className="testimonial-name">Ernest Hemingway </div>
						</div>
						<div className="item">
							<div className="shadow-effect">
							<img className="img-circle" src="images/harper.jpg" alt="" />
							<p>To Kill a Mocking Bird</p>
							</div>
							<div className="testimonial-name">Harper Lee </div>
						</div>
						<div className="item">
							<div className="shadow-effect">
							<img className="img-circle" src="images/GeorgeOrewel.jpg" alt="" />
							<p>1984</p>
							</div>
							<div className="testimonial-name">George Orwell </div>
						</div>
						<div className="item">
							<div className="shadow-effect">
							<img className="img-circle" src="images/JK.jpg" alt="" />
							<p>The Philosopher's Stone</p>
							</div>
							<div className="testimonial-name">JK Rowling</div>
						</div>
						<div className="item">
							<div className="shadow-effect">
							<img className="img-circle" src="images/cat.png" alt="" />
							<p>And To Think I Saw It On Mulberry Street, Gerald McBoing-Boing, Hop On Pop, Oh The Places You'll Go, How The Grinch Stole Christmas</p>
							</div>
							<div className="testimonial-name">Dr. Seuss</div>
						</div>
						<div className="item">
							<div className="shadow-effect">
							<img className="img-circle" src="images/shakespeare-cartoon.jpg" alt="" />
							<p>Romeo and Juliet</p>
							</div>
							<div className="testimonial-name">William Shakespeare</div>
						</div>
						<div className="item">
							<div className="shadow-effect">
							<img className="img-circle" src="images/OIP (1).jpg" alt="" />
							<p>War and Peace</p>
							</div>
							<div className="testimonial-name">Leo Tolstoy</div>
						</div>
						<div className="item">
							<div className="shadow-effect">
							<img className="img-circle" src="images/OIP.jpg" alt="" />
							<p>The Adventures of Huckleberry Finn</p>
							</div>
							<div className="testimonial-name">Mark Twain</div>
						</div>
						</div>
					</div>
					</div>
				</div>
				</section>
			</div>
	);
}
