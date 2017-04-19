console.log("main.js");


var blogPost = [
	"This is where the blog post will go. This was done manipulating the DOM with JavaScript. I'm very proud of myself right now."
	"<br>"
	"My next blog post will also be done with JavaScript."
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