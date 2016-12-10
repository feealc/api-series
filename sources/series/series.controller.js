var Series = require('./series.model.js')

//

const noShowFields = '-__v'

module.exports = {
	list,
	create,
}

function list(req, res) {

	// res.json({message:'oiiiiiii'})
	Series
		.find({}, noShowFields)
		.then(series => res.json(series))

}

function create(req, res) {

	// console.log('create func')
	// console.log(req.body)
	// res.json({message: 'ok'})

	const serie = new Series(req.body)

	serie
		.save()
		.then(() => {
			return res
				.status(200)
				.json({message: 'created'})
		})
		.catch((err) => {
			// console.log(err)
			return res
				.status(400)
				.json({message: 'error to create new serie'})
		})
}
