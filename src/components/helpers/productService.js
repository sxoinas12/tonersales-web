import Net from './methods'

class ProductService {
	constructor() {
		this.url = "/products/";
	}

	getById (id){
		console.log(this.url+id)
		return Net.get(this.url+id)
		    .then(response => response.json())
		    .catch(error => error);
		}
}

export default ProductService;