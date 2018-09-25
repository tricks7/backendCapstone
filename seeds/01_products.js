exports.seed = function(knex, Promise) {
  return knex("products")
    .del()
    .then(() => {
      return knex("products").insert([
        {
          id: 1,
          itemName: "Apples",
          quantity: "5",
          imgUrl: "https://pbs.twimg.com/profile_images/723257483276484609/oZOK5CpH_400x400.jpg",
          location: "Denver, CO",
          claimed: "No"
        },
        {
          id: 2,
          itemName: "Beets",
          quantity: "3",
          imgUrl: "https://images.freshop.com/00033383700700/d9bd4288eef063ae9a9d9b31b7f1cd79_medium.png",
          location: "Denver, CO",
          claimed: "No"
        },
        {
          id: 3,
          itemName: "Cauliflower",
          quantity: "2",
          imgUrl: "http://images.bigoven.com/image/upload/t_recipe-256/cauliflower.jpg",
          location: "Denver, CO",
          claimed: "Yes"
        }
      ]);
    })
    .then(() => {
      return knex.raw("ALTER SEQUENCE products_id_seq RESTART WITH 4;");
    });
};
