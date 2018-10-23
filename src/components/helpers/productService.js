import Net from './methods'

class ProductService {
	constructor() {
		this.url = "/products/";
	}

	getById (id){
		
		return Net.get(this.url+id)
		    .then(response => response.json())
		    .catch(error => error);
		}
}

export default ProductService;