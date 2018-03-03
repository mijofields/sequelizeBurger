module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING, allowNull: false, validate: { len: [1] }
      },
    createdAt: { type: DataTypes.DATE, allowNull: false },
    updatedAt: { type: DataTypes.DATE, allowNull: true },
    devoured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },

 
  });
  return Burgers;
};



// Node Dependency
// var orm = require('../config/orm.js');


// // create the code that will call the ORM functions using burger specific input for the ORM.
// var burger = {

//   selectAll: function(callback){
//     orm.selectAll(function(res){
//       callback(res);
//     });
//   },

//   insertOne: function(burger_name, callback){
//     orm.insertOne(burger_name, function(res){
//       callback(res);
//     });
//   },

//   updateOne: function(burger_id, callback){
//     orm.updateOne(burger_id, function(res){
//       callback(res);
//     });
//   }

// };



// module.exports = burger;