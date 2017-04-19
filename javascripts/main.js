console.log("main.js");


var blogPost = [
<<<<<<< HEAD
	"This is where the blog post will go. This was done manipulating the DOM with JavaScript. I'm very proud of myself right now."
	"<br>"
	"My next blog post will also be done with JavaScript."
=======
	"This is where the blog post will go. This was done manipulating the DOM with JavaScript. I'm very proud of myself right now. ",
>>>>>>> f05060a1ad9c1cfef89bea37ddc62e91f71cfe5b
];

var newBlogPosts = document.getElementById("blog-post");

for(newPost in blogPost){
	`<div id="blog-post">
	<arcticle class="entry">
		<h5 class="blog-title"></h5>
		<p class="post"></p>
	</artcle>
	</div>`
};

newBlogPosts.innerHTML += blogPost;