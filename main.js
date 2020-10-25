fetch ("http://aguacate.dk/profile/wp-json/wp/v2/posts"
)
.then(function(response){
	return response.json();
	  
	  })
.then (callback)

function callback(data){
	console.log(data)
}

function showPost(post){
	const template=document.querySelector("template#post-template").content;
	const clone= template.colneNode(true);
	clone.querySelector("h1").textContent= post.tiltle.rendered;
	
	clone.querySelector(".content").innerHTML = post.content.rendered;
	
	document.querySelector("main").appendChild(clone);
	
}