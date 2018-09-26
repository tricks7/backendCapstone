exports.seed = function(knex, Promise) {
  return knex("products")
    .del()
    .then(() => {
      return knex("products").insert([
        {
          id: 1,
          title: "Apples",
          location: "Denver, CO",
          price: 'Offering',
          imgUrl: "https://pbs.twimg.com/profile_images/723257483276484609/oZOK5CpH_400x400.jpg",
        },
        {
          id: 2,
          title: "Beets",
          location: "Denver, CO",
          price: 'Offering',
          imgUrl: "https://images.freshop.com/00033383700700/d9bd4288eef063ae9a9d9b31b7f1cd79_medium.png",
        },
        {
          id: 3,
          title: "Apples",
          location: "Denver, CO",
          price: 'Offering',
          imgUrl: "http://images.bigoven.com/image/upload/t_recipe-256/cauliflower.jpg",
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE products_id_seq RESTART WITH 4;");
    });
};
