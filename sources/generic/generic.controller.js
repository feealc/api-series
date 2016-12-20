module.exports = {
	getCurrentDate,
}

function getCurrentDate() {
  
  const currentDate = new Date()
  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()

  return `${year}${month}${day}`

}
