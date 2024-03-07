const mongoose = require('mongoose');

const getConnection = async () => {
    try{
        const url = 'mongodb://user_db:7udq2zQ4HPW1gCYM@ac-v874xyt-shard-00-00.kxing5y.mongodb.net:27017,ac-v874xyt-shard-00-01.kxing5y.mongodb.net:27017,ac-v874xyt-shard-00-02.kxing5y.mongodb.net:27017/inventarios?ssl=true&replicaSet=atlas-gswl80-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

        await mongoose.connect(url);
        console.log('Conexión exitosa');
    }catch(error){
        console.log(error);
    }
}

module.exports = { getConnection, }