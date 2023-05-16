const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient (Db, {
    useNewUrlParser: true,
    useUnifiedTopogoly: true,
});

let _db;

module.exports = {
    connectToServer: async function (callback) {
        try {
            await client.connect();
        } catch (e) {
            console.log(e)
        }

        _db = client.db("training");

        return (_db === undefined ? false : true);

    },
    getDb: function () {
        return _db;
    },
};
