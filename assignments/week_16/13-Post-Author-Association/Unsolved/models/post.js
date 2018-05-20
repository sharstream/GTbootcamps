var author = require('./author');
var Sequelize = ('sequelize');
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = models => {
    Post.belongsTo(models.Author, {
        foreignKey: {
        allowNull: false
      }
    });
  };
  // Add a belongsTo association to Authors here
  // Example: https://github.com/sequelize/express-example/blob/master/models/task.js
  return Post;
};

// module.exports = (sequelize, DataTypes) => {
//   var AuthorPost = sequelize.define('Post', {
//     author_id: {
//       type: DataTypes.UUID,
//       foreignKey: true
//     }
//   });
// return AuthorPost;
// };
