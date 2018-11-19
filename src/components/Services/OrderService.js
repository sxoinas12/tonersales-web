import Net from './NetService.js';

const ORDER_SERVICE_PATH = '/Orders/search';

const debug = (e) => {
	if(true){
		console.log('OrderService:');
		console.log(e);
	}
}

class OrderService {
	getById(id) {
		return Net.get(ORDER_SERVICE_PATH + '/' + id);
	}
	search(searchTerm, page = 1) {
		let url = ORDER_SERVICE_PATH + '/search/' + page + '/' + searchTerm; 
		return Net.get(url);
	}
}

export default new OrderService();