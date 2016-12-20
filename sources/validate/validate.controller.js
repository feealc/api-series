var validId = require('valid-objectid')

//

module.exports = {
	id,
}

function id(req, res, next, value) {
  
  if (!validId.isValid(value)) {
    
    console.log(`invalid id ${value}`)
    const message = 'invalid id'
    return res
      .status(400)
      .json({message})

  }

  next()

}