
const fs = require("fs")
const path = require('path');

const apiHandler = (req, res, next)=>{
	const subroute = req.params['0'] ? req.params['0'] : null;
	const {method} = req; //GET, POST, PUT, DEL
	if(subroute==="test"){
		res.jsonp({status:"test route"})
	} else if(subroute===null) {
		var uiComponent = path.join(__dirname, './ui/dist/main.js');
		res.sendFile(uiComponent)
	} else {
		res.jsonp({status:"no handler"})
	}
}

const unloadHandler = ()=>{
	console.log("unloadHandler");
}



module.exports = (context) => {
	const {db} = context;
	console.log("SAMPLE GITHUB PLUGIN ACTIVATED");


	
	return {
		apiHandler,
		unloadHandler
	}
}