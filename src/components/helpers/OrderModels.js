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


module.exports = {
	ProductModel:ProductModel,
	ShippingModel:ShippingModel,
	PaymentModel:PaymentModel
}