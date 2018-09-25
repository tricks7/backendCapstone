const database = require("./database-connection");

module.exports = {
    list(){
        return database("products").select();
    },
    read(id){
        return database("products").select().where("id", id).first();
    },
    create(products){
        return database("products")
            .insert(products)
            .returning("*")
            .then(record => record[0]);
    },
    update(id, products){
        return database("products")
            .update(products)
            .where("id", id)
            .returning("*")
            .then(record => record[0]);
    },
    delete(id){
        return database("products").delete().where("id", id);
    }
};