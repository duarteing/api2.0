


const distributors = require('../sample.json')

export function create(req, res) {
	var newdistributor = req.body;
    distributors["distributor" + newdistributor.id] = newdistributor;
	console.log("--->After Post, distributor:\n" + JSON.stringify(distributors, null, 1));
    res.send("Post Successfully: \n" + JSON.stringify(newdistributor, null, 1));
}

export function findAll(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(distributors, null, 1));
    res.end("All distributors: \n" + JSON.stringify(distributors, null, 1));  
}

export function findOne(req, res) {
    var distributor = distributors["distributor" + req.params.id];
    console.log("--->Find distributor: \n" + JSON.stringify(distributor, null, 1));
    res.end( "Find a distributor:\n" + JSON.stringify(distributor, null, 1));
}

export function update(req, res) {
	var id = parseInt(req.params.id);
	var updatedistributor = req.body; 
	if(distributors["distributor" + id] != null){
		// update data
		distributors["distributor" + id] = updatedistributor;

		console.log("--->Update Successfully, distributor: \n" + JSON.stringify(distributors, null, 1))
		
		// return
		res.end("Update Successfully! \n" + JSON.stringify( updatedistributor, null, 1));
	}else{
		res.end("Don't Exist distributor:\n:" + JSON.stringify( updatedistributor, null, 1));
	}
}

const _delete = function (req, res) {
    var deletedistributor = distributors["distributor" + req.params.id];
    delete distributors["distributor" + req.params.id];
    console.log("--->After deletion, distributor list:\n" + JSON.stringify(distributors, null, 1));
    res.end("Deleted distributor: \n" + JSON.stringify(deletedistributor, null, 1));
};
export { _delete as delete };
