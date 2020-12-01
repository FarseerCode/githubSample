import React from "react";
import Admin from "./admin"

const RemoteComponent = (props) => {

	const {route = "default"} = props;

	if(route==="admin"){
		return <Admin {...props}/>
	} else {
		return <div>Hello Remote World!</div>;
	}
};

export default RemoteComponent;