const ProductModel = {

};

const ShippingModel = {
	ShippingMethod:"",
	FullName:"",
	Address:"",
	Town:"",
	Postcode:"",
	Mobilephone:"",
	Homephone:"",
	email:"",
	Order_instructions:"",
	Receipt_type:""
};

const PaymentModel = {
	Payment_type:"",
};

const FilterOutput = {
	ProductType:"1;2;3;4;5....",
	Category:"0;1;2;3....", //
	Price:"min_price;max_price", 
};


const FilterInput = {
	"ProductType" : {
		"1" : "Toner",
		"2" : "Inks"
	
	},
	"Category" : {
		"1" : "HP",
		"23": "Samsung"
		
	},
	Price: "0;120"
};

module.exports = {
	ProductModel:ProductModel,
	ShippingModel:ShippingModel,
	PaymentModel:PaymentModel
}