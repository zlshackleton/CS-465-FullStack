var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));
//del later
//var header = JSON.parse(fs.readFileSync('./data/header.json','utf8'));

/* GET travel view */
const travel = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', trips});
};
//Module 3 shows its not best practice to run a JSON file everytime and we may need to adjust latr

module.exports = {
    travel
};