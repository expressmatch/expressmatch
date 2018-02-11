export function getPosts(){
	return new Promise((resolve, reject) => {
		fetch('http://localhost:3004/posts', {})
			.then((res) => res.json())
			.then((data) => resolve(data))
			.catch(err => reject(err));
	});
};
export function getPostsByCity(){
	function processResponse(data){
		return data;
	}

	return new Promise((resolve, reject) => {
		getPosts()
			.then((res) => res.json())
			.then((data) => resolve(processResponse(data)))
			.catch(err => reject(err));
	});
}
export function getPostsByGender(){}
export function getPostsByKeyword(){}
export function getPostsByCaste(){}

export function submitPost(req){
	function processRequest(req){
		return req;
	}
	function processResponse(data){
		return data;
	}
	return new Promise((resolve, reject) => {
		fetch('http://localhost:3004/submitpost', {
		  method: 'POST',
		  body: JSON.stringify(processRequest(req))
		})
		.then((res) => res.json())
		.then((data) => resolve(processResponse(data)))
		.catch(err => reject(err));
	});
}

const PostService = {
	getPosts: getPosts,
	submitPost: submitPost
};

export default PostService;