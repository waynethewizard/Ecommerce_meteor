var productSeeds = [
  {
    "medium" : "watercolor",
    "style" : "classic",   
    "size" : "12x10",
    "description": "A beautiful watercolor portrait in the classic sense.",
    "price" : 150,
    "image" : "portrait1.jpeg",
    "inventory" : 1,
    "status" : "published",
    "published_at" : new Date(),
  },
  {
    "medium" : "oil",
    "style" : "modern",   
    "size" : "10x8",
    "description": "A modern oil painting.",
    "price" : 500,
    "image" : "portrait2.jpeg",
    "inventory" : 2,
    "status" : "published",
    "published_at" : new Date(),
  },
  {
    "medium" : "acryllic",
    "style" : "abstract",   
    "size" : "8x10",
    "description": "Acryllic abstract painting.",
    "price" : 299,
    "image" : "portrait3.jpeg",
    "inventory" : 1,
    "status" : "published",
    "published_at" : new Date(),
  },
  {
    "medium" : "charcoal",
    "style" : "classic",   
    "size" : "12x10",
    "description": "A beautiful watercolor portrait in the classic sense.",
    "price" : 49,
    "image" : "portrait4.jpeg",
    "inventory" : 1,
    "status" : "published",
    "published_at" : new Date(),
  },
  {
    "medium" : "watercolor",
    "style" : "abstract",   
    "size" : "12x10",
    "description": "A beautiful watercolor portrait in the classic sense.",
    "price" : 4500,
    "image" : "portrait5.jpg",
    "inventory" : 1,
    "status" : "published",
    "published_at" : new Date(),
  },
  {
    "medium" : "oil",
    "style" : "modern",   
    "size" : "12x10",
    "description": "A beautiful watercolor portrait in the classic sense.",
    "price" : 40,
    "image" : "portrait6.jpeg",
    "inventory" : 1,
    "status" : "published",
    "published_at" : new Date(),
  },
  {
    "medium" : "acryllic",
    "style" : "classic",   
    "size" : "12x10",
    "description": "A beautiful watercolor portrait in the classic sense.",
    "price" : 50,
    "image" : "portrait7.jpeg",
    "inventory" : 1,
    "status" : "published",
    "published_at" : new Date(),
  },
  {
    "medium" : "charcoal",
    "style" : "classic",   
    "size" : "12x10",
    "description": "A beautiful watercolor portrait in the classic sense.",
    "price" : 490,
    "image" : "portrait8.jpeg",
    "inventory" : 1,
    "status" : "published",
    "published_at" : new Date(),
  },
  {
    "medium" : "watercolor",
    "style" : "modern",   
    "size" : "12x10",
    "description": "A beautiful watercolor portrait in the classic sense.",
    "price" : 99,
    "image" : "portrait1.jpeg",
    "inventory" : 1,
    "status" : "published",
    "published_at" : new Date(),
  },
  {
    "medium" : "oil",
    "style" : "abstract",   
    "size" : "12x10",
    "description": "A beautiful watercolor portrait in the classic sense.",
    "price" : 900,
    "image" : "portrait2.jpeg",
    "inventory" : 1,
    "status" : "published",
    "published_at" : new Date(),
  }
];

if(Products.find().count() === 0){
  _.each(productSeeds, function(product){
    Products.insert(product);
    console.log("Inserted ", product.sku);
  })
}

if(Meteor.users.find().count() === 0){
  var id = Accounts.createUser({
    username : "Administrator",
    email: "admin@test.com",
    password: "admin123",
    profile: { name: "Big Admin" },
    roles : []
  });

  Roles.addUsersToRoles(id, ["Administrator"]);
  console.log("Added Admin user...");
}

if(Vendors.find().count() === 0){
  var vendors = [
    {
      id : 1,
      slug: "martian-armaments",
      name : "Martian Armaments, Ltd",
      description: "Purveyor of fine astronimical bits of warfare, specializing in Martian military needs."
    },
    {
      id : 2,
      slug: "red-planet",
      name : "Red Planet Love Machine",
      description: "Bringing you closer to the ones you love, whatever planet you're from."
    },
    {
      id : 3,
      slug: "marinaris",
      name : "Marinaris Outfitters",
      description : "Get out and get fit on Mars! Marinaris will make sure you look good in red."
    }
  ];

  _.each(vendors, function(vendor){
    Vendors.insert(vendor);
    console.log("Added ", vendor.name);
  });
}