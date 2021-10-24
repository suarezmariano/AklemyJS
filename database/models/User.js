module.exports = function (sequelize,dataTypes) {

    let alias = "User";

    let cols = {
        id_user: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            
            type: dataTypes.STRING(45)
        },
        last_name: {
            
            type: dataTypes.STRING(45)
        },
        email: {
            
            type: dataTypes.STRING(45)
        },
        password: {
            
            type: dataTypes.STRING(75)
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