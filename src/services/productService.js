import axios from "axios";

export function getResource(path, onSuccess, onFail, reqAuth = true) {
	let requestData = {
		method: "get",
		url: path,
	};


	axios(requestData)
		.then((res) => {
			onSuccess(res.data);
		})
		.catch((fail) => {
			onFail(fail.response);
		});
}

