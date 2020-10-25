fetch ("http://aguacate.dk/t9/wp-json/wp/v2/bike?_embed"
)
.then(function(response){
	return response.json();

	  })
.then (callback)

function callback(data){
	console.log(data)
	data.forEach(showPost)
}

function showPost(post){
	console.log(post)

	const template=document.querySelector("#bike_template").content;
	const clone = template.cloneNode(true);
	const mainElemt = document.querySelector("main")
	clone.querySelector("h1").textContent= post.title.rendered;

	//clone.querySelector(".image").src = img_url;

	clone.querySelector("h3").textContent = post.brand;
	clone.querySelector("h2").textContent = "Price- $"+ post.price;

	clone.querySelector(".stock").textContent ="In Stock-   "+ post.in_stock;

	clone.querySelector(".color").textContent = "Colours-   "+post.color;

	clone.querySelector('.image').src = post._embedded["wp:featuredmedia"][0]['source_url']


	document.querySelector("main").appendChild(clone);


}
