// 'use strict';
const {
    Model
} = require('sequelize');

// AUTO GENERATED - We are not using this currently
// module.exports = (sequelize, DataTypes) => {
//     class TodoItem extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//         }
//     }
//
//     TodoItem.init({
//         content: DataTypes.STRING,
//         complete: DataTypes.BOOLEAN
//     }, {
//         sequelize,
//         modelName: 'TodoItem',
//     });
//     return TodoItem;
// };

module.exports = (sequelize, DataTypes) => {
    const TodoItem = sequelize.define('TodoItem', {
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });

    TodoItem.associate = (models) => {
        TodoItem.belongsTo(models.Todo, {
            foreignKey: 'todoId',
            onDelete: 'CASCADE',
        });
    };

    return TodoItem;
};
