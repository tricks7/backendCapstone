
exports.up = function(knex, Promise) {
    return knex.schema.createTable("products", products => {
        products.increments();
        products.string("title");
        products.string("location");
        products.string("price");
        products.string("imgUrl");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("products");
};
