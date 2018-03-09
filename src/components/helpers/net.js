const urlProd = "/products/specific?val="; //serach products
const urlLogin = "/user/login"; //login section
const urlRegister = "/user/register";



//this is the local ip 
//it will change from network to network
const ip = "http://10.0.175.150:5000" ;



const url = {
	products:ip+urlProd,
	login:ip+urlLogin,
	register:ip+urlRegister
}


module.exports = {
	Url: url
}