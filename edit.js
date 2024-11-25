const API = 'http://127.0.0.1:5500/javascript/projectjs6/product.json' 

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search)
       console.log(urlParams.toString())
    const productId = urlParams.get('id')
    // const product = await fetchProductById(productId)
    console.log(productId);

    const title = document.getElementById('title').value
	const description = document.getElementById('description').value
	const price = document.getElementById('price')
	const img = document.getElementById('img').value
      console.log(title, description, price, img);
      const editForm = document.getElementById('form')
      editForm.addEventListener('submit', () => {
        e.preventDefault()
        const updatedProduct = {
            id: productId,
            title,
            description,
            price: Number(price),
            img
        }
          })
    
})