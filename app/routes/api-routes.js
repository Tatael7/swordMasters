const connection = require("../config/connection.js");

module.exports = function(app) {
    app.get("/api/players", function(req, res) {
        let dbQuery = "SELECT * FROM players";
        connection.query(dbQuery, function(err, result) {
            if(err) throw err;
            res.json(result);
        });
    });

    
}