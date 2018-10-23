var get = function(url){
	return fetch(url,{
      method:"GET",
      headers:{
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .catch(error => error)
}



var post = function(url,reqBody){
	return fetch(url,{
		method:"POST",
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify(reqBody)
	}).then(response => response.json())
	.catch(error => error)
}

var update = function(url,reqBody){
	return fetch(url,{
		method:"UPDATE",
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify(reqBody)
	}).then(response => response.json())
	.catch(error => error)

}



var del = function(url,id){
	return fetch(url,{
		method:"DELETE",
		headers:{
			"Content-Type":"application/json"
		},
		body:JSON.stringify(id)
	}).then(response => response.json())
	.catch(error => error)
}



module.exports = {
	Get:get,
	Post:post,
	Update:update,
	Delete:del
}




