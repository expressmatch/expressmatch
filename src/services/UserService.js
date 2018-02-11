function login() {
	return new Promise((resolve, reject) => {
		FB.login(result => {
			if (result.authResponse) {
				return fetch('http://localhost:3000/api/v1/auth/facebook', {
						access_token: result.authResponse.accessToken
					})
					.toPromise()
					.then(response => {
						var token = response.headers.get('x-auth-token');
						if (token) {
							localStorage.setItem('id_token', token);
						}
						resolve(response.json());
					})
					.catch(() => reject());
			} else {
				reject();
			}
		}, {
			scope: 'public_profile,email'
		})
	});
};

function logout() {
	localStorage.removeItem('id_token');
}

function isLoggedIn() {
	return new Promise((resolve, reject) => {
		getCurrentUser().then(user => resolve(true)).catch(() => reject(false));
	});
}

function getCurrentUser() {
	return new Promise((resolve, reject) => {
		return fetch('http://localhost:3000/api/v1/auth/me').toPromise().then(response => {
			resolve(response.json());
		}).catch(() => reject());
	});
}

const UserService = {
	login: login
};

export default UserService;