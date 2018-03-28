const urlProd = "/products/specific?val="; //serach products
const urlLogin = "/user/login"; //login section
const urlRegister = "/user/register";
const urlGoogle = "/auth/google";


//this is the local ip 
//it will change from network to network
const ip = "http://localhost:5000" ;



const url = {
	products:ip+urlProd,
	login:ip+urlLogin,
	register:ip+urlRegister,
	google:ip+urlGoogle
}


module.exports = {
	Url: url
}