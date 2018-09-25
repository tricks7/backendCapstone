
exports.up = function(knex, Promise) {
    return knex.schema.createTable("products", products => {
        products.increments();
        products.string("itemName");
        products.integer("quantity");
        products.string("imgUrl");
        products.string("location");
        products.string("claimed");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("products");
};
