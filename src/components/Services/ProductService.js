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
	search(searchTerm, page = 1,filters = []) {
		let search_filter = {
			'type':'search',
			'field':'name',
			'options':searchTerm
		}
		
		filters.push(search_filter)
		let url = PRODUCT_SERVICE_PATH + '/search/' + page; 
		return Net.post(url,filters);
	}
	getCartState(){
		let local = localStorage.getItem('cart_state');
		try{
		    if(local){
		      return JSON.parse(local);
		    	}
			}
			catch(e) {
				throw e;
			}
	}

	getHome() {
		let url = PRODUCT_SERVICE_PATH + '/home';
		return Net.get(url);
	}
}

export default new ProductService();