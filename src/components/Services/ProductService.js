import Net from './NetService.js';

const PRODUCT_SERVICE_PATH = '/products';

const debug = (e) => {
	if(true){
		console.log('ProductService:');
		console.log(e);
	}
}

class ProductService {
	getById(id) {
		return Net.get(PRODUCT_SERVICE_PATH + '/' + id);
	}
	search(searchTerm, page = 1) {
		let url = PRODUCT_SERVICE_PATH + '/search/' + page + '/' + searchTerm; 
		return Net.get(url);
	}
	getHome() {
		let url = PRODUCT_SERVICE_PATH + '/home';
		return Net.get(url);
	}
}

export default new ProductService();