export function getProposals(){
	return new Promise((resolve, reject) => {
		fetch('http://localhost:3004/proposals', {})
			.then((res) => res.json())
			.then((data) => resolve(data))
			.catch(err => reject(err));
	});
};
export function getProposalsByCity(){
	function processResponse(data){
		return data;
	}

	return new Promise((resolve, reject) => {
		getProposals()
			.then((res) => res.json())
			.then((data) => resolve(processResponse(data)))
			.catch(err => reject(err));
	});
}
export function getProposalsByGender(){}
export function getProposalsByKeyword(){}
export function getProposalsByCaste(){}

const ProposalService = {
	getProposals: getProposals
};

export default ProposalService;