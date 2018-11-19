import Net from './NetService.js';

const USER_SERVICE_PATH = '/users';

const debug = (e) => {
	if(true){
		console.log('USERSERVICE:');
		console.log(e);
	}
}

class UserService {
	constructor() {
		this.token = null;
		this.user  = null;
		this.load().catch((err) => {});
	}
	load() {
		this.token = localStorage.getItem("token");
		return this.getMe();
	}
	getMe() {
		if(this.token) {
			//console.log("do i comre here?")
			return Net.get(USER_SERVICE_PATH + '/me').then((user) => {
				console.log("resssppp")
				this.user = user;
				this.save();
				return user;
			});
		}
		return Promise.reject('No token');
	}
	save() {
		localStorage.setItem("token", this.token);
	}

	getByToken(token) {
		this.token = token;
		return this.getMe();
	}
	getToken() { return this.token; }
	getUser() { return this.user; }
	logout() {
		this.token = null;
		this.user = null;
		localStorage.removeItem('token');
	}

	login(email, password) {
		return Net.post(USER_SERVICE_PATH + '/login', {
		  email,
		  password
		}).then((user) => {
			
			this.token = user.token;
			this.save();
			return this.getMe();
		}).catch((err) => {
			debug(err);
			throw err;
		});
	}

	register(username, email, password) {
		return Net.post(USER_SERVICE_PATH + '/register', {
			username,
			email,
			password
		})
		.then(() => this.login(email, password))
		.catch((err) => {
			debug(err);
			throw err;
		})
	}

	resetPassword(email) {
		return Net.post(USER_SERVICE_PATH + '/restore', {
			email
		});
	}
}

export default new UserService();