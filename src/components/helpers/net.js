const urlProd = "/products/specific?val="; //serach products
const homeProd= "/products/home";
const urlLogin = "/user/login"; //login section
const urlRegister = "/user/register";
const urlGoogle = "/auth/google";


//this is the local ip 
//it will change from network to network
const ip = "http://localhost:5000" ;



const url = {
	products:urlProd,
	homeprod:homeProd,
	login:urlLogin,
	register:urlRegister,
	google:urlGoogle
}

class Net {
   	constructor(BaseUrl){
   		this.BaseUrl = BaseUrl;
   		this.urls = url;
   	}
   	get(url){
		return fetch(this.BaseUrl +url,{
	      method:"GET",
	      headers:{
	        "Content-Type": "application/json"
	      }
	    })
	    .then(response => response.json())
	    .catch(error => error)
	}



	post(url,reqBody){
		return fetch(this.BaseUrl +url,{
			method:"POST",
			headers:{
				"Content-Type":"application/json"
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
