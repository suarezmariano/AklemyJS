module.exports = function (sequelize,dataTypes) {

    let alias = "User";

    let cols = {
        id_user: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            allowNull: false,
            type: dataTypes.STRING(45)
        },
        last_name: {
            allowNull: false,
            type: dataTypes.STRING(45)
        },
        mail: {
            allowNull: false,
            type: dataTypes.STRING(45)
        },
        password: {
            allowNull: false,
            type: dataTypes.STRING(8)
        }
    }

    let config = {
        tablename: "users",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = function(models){
        User.hasMany(models.Movement, {
            as: "movements",
            foreignKey: "id_user"
        });
    }

    return User;

}