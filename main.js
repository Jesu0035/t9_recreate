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

	post._embedded['wp:featuredmedia']['0'].media_details.sizes.medium.source_url

	//const img_url =
	//post._embedded["wp:featuredmedia"]["0"].media_details.sizes.medium.source_url


	const template=document.querySelector("#bike_template").content;
	const clone = template.cloneNode(true);
	const mainElemt = document.querySelector("main")
	clone.querySelector("h1").textContent= post.title.rendered;

	//clone.querySelector(".image").src = img_url;

	clone.querySelector("h3").textContent = post.brand;
	clone.querySelector("h2").textContent = post.price;
	clone.querySelector(".stock").textContent = post.in_stock;

	clone.querySelector(".color").textContent = post.color;



	//clone.querySelector("img").img.setAttribute = post.guid.rendered;
	//const img = template.querySelector("img");
	//img.setAttribute("src",`http://aguacate.dk/t9/bike/${template.img}`);

	mainElemt.appendChild(clone);

}
