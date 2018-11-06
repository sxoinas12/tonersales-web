const urlProd = "/products/specific?val="; //serach products
const homeProd= "/products/home";
const urlLogin = "/users/login"; //login section
const urlRegister = "/users/register";
const urlGoogle = "/auth/google";
const urlOrder = "/orders/verify";
const urlProfile ="/profile";
const urlMyOrders = "/orders";

//this is the local ip 
//it will change from network to network
const ip = "http://localhost:5000" ;



const url = {
	products:urlProd,
	homeprod:homeProd,
	login:urlLogin,
	register:urlRegister,
	google:urlGoogle,
	orders:urlOrder,
	profile:urlProfile,
	myOrders:urlMyOrders
}

class Net {
   	constructor(BaseUrl){
   		this.BaseUrl = BaseUrl;
   		this.urls = url;
   	}
   	get(url,token){
		return fetch(this.BaseUrl +url,{
	      method:"GET",
	      headers:{
	        "Content-Type": "application/json",
	        "token":token
	      }
	    })
	    .then(response => response.json())
	    .catch(error => error)
	}



	post(url,reqBody,token){
		return fetch(this.BaseUrl +url,{
			method:"POST",
			headers:{
				"Content-Type":"application/json",
				"Token": token
			},
			body:JSON.stringify(reqBody)
		}).then(response => response.json())
		.catch(error => error)
	}

	update(url,reqBody){
		return fetch(this.BaseUrl +url,{
			method:"UPDATE",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(reqBody)
		}).then(response => response.json())
		.catch(error => error)

	}



	del(url,id){
		return fetch(this.BaseUrl +url,{
			method:"DELETE",
			headers:{
				"Content-Type":"application/json"
			},
			body:JSON.stringify(id)
		}).then(response => response.json())
		.catch(error => error)
	}
}


module.exports = new Net(ip);
