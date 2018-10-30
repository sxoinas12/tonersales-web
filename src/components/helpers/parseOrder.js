const models = require('../helpers/Models.js');


class OrderService {

	constructor(products,shipping,payment) {
		this.products = products;
		this.shipping = shipping;
		this.payment = payment;
		this.order = [
			this.products,
			this.shipping,
			this.order
		]
	}


	send(order){
		console.log("sending Order")
		console.log(order);
	}

	watchOrder(){
		//console.log("watching Order")
	}

}

module.exports = new OrderService();