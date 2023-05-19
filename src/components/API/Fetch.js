var siteurl = "https://techsgeeks.in/tgsapi/";
export const api = (data,url) => {
	//console.log(url, data);
	return fetch(siteurl+url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: "application/json",

		}
	})
		.then(res => res.json())
		.catch(e => console.log(e));
}

export const get = (data,url) => {
	console.log('hello',url, data);
	return fetch(siteurl+url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Accept: "application/json",
		}
	})
		.then(res => res.json())
		.catch(e => console.log(e));
}

export const apiemail = (data,url) => {
	//console.log(url, data);
	return fetch('http://theartandfashion.in/batchemailapi/send_email.php', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: "application/json",

		}
	})
		.then(res => res.json())
		.catch(e => console.log(e));
}


export const url = (data,url) => {
	//console.log(url, data);
	return fetch('http://theartandfashion.in/batchapi/student/get-register-student-image', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: "application/json",

		}
	})
		.then(res => res.json())
		.catch(e => console.log(e));
}

export const api_update = (data,url) => {
	console.log(data);
	return fetch('batchapi/'+url, {
		method: 'PUT',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: "application/json",

		}
	})
		.then(res => res.json())
		.catch(e => console.log(e));
}

export const api_delete = (data,url) => {
	console.log(data);
	return fetch('batchapi/'+url, {
		method: 'DELETE',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: "application/json",

		}
	})
		.then(res => res.json())
		.catch(e => console.log(e));
}

export const login = (data,url) => {
	console.log(data);
	return fetch('batchapi/'+url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
			Accept: "application/json",

		}
	})
		.then(res => res.json())
		.catch(e => console.log(e));
}

