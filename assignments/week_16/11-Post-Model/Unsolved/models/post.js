module.exports = function(sequelize, DataTypes) {
  // Add code here to create a Post model
  // This model needs a title, a body, and a category
  // Don't forget to 'return' the post after defining
  var Post = sequelize.define({
    property: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
      len:[1]
      }
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    },
    body: {
      type: DataTypes,
      allowNull: false,
      validate: {
        len:[1]
      }
    },
    datastamps: false
  });
  return Post;
};
