module.exports = function(sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING, allowNull: false, validate: { len: [1] } //null not allowed length > 1
      },
    createdAt: { type: DataTypes.DATE, allowNull: false }, 
    updatedAt: { type: DataTypes.DATE, allowNull: true },
    devoured: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },

 
  });
  return burgers;
};

