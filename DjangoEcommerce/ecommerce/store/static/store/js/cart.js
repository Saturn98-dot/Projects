const updateBtn = document.getElementsByClassName('update-cart')

for (i = 0; i < updateBtn.length; i++) {
	updateBtn[i].addEventListener('click', function(){
		const productId = this.dataset.product
		const action = this.dataset.action
		console.log('productId:', productId, 'Action:', action)
		console.log('USER:', user)

		if (user == 'AnonymousUser'){
			addCookieItem(productId, action)}
	    else{
            updateUserOrder(productId, action)
		}
	})
}

function addCookieItem(productId, action){
    console.log('User is not authenticated')
}

function updateUserOrder(productId, action){
	console.log('User is authenticated, sending data...')

		const url = 'http://127.0.0.1:8000/update_item/'


        fetch(url, {
			method:'post',
			headers:{
				'Content-Type':'application/json',
				'X-CSRFToken':csrftoken,
			},
			body:JSON.stringify({'productId':productId, 'action':action})
		})
		.then((response) => { return response.json();})
		.then((data) => {
		    location.reload()
		});
}