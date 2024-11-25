
const API = 'http://localhost:3000/product' 
async function fetchProduct() {
	const response = await fetch(API, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})

	const products = await response.json()
	displayProducts(products)
}

function displayProducts(products) {
	const productList = document.querySelector('.main')

		productList.innerHTML = products.map(product => `
			<div class ='product'>
				<img src="${product.img}" alt= 'Error :(' class='product__img' />
				<h2 class='product__title'>${product.title}</h2>
				<p class='product__desc'>${product.description}</p>
				<p class='product__price'>Цена: <span class='product__prici_text'>${product.price}</span> сом</p>
				<a href='edit.html?id=${product.id}'>Редактирование</a>
			</div> 
				 			
		
	`)
	
}
fetchProduct()


async function addProduct() {
	const title = document.getElementById('title').value
	const description = document.getElementById('description').value
	const price = document.getElementById('price')
	const img = document.getElementById('img').value


    const newProduct = {
		id: Date.now(),
		title,
		description,
		img,
		price:Number(price)
	}

	await fetch(API, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newProduct)
	})

	fetchProduct()
	// const date = Date.now()
	// console.log(date);
	// console.log(typeof title);
}	
