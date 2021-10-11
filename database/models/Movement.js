module.exports = function (sequelize,dataTypes) {

    let alias = "Movement";

    let cols = {
        id_movement: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        movement_type: {
            allowNull: false,
            type: dataTypes.STRING(45)
        },
        date: {
            allowNull: false,
            type: dataTypes.DATEONLY
        },
        amount: {
            allowNull: false,
            type: dataTypes.INTEGER(11)
        },
        concept: {
            allowNull: false,
            type: dataTypes.STRING(75)
        },
        comment: {
            type: dataTypes.STRING(75)
        },
        id_user: {
            allowNull: false,
            type: dataTypes.INTEGER(11)
        }
    }

    let config = {
        tablename: "movements",
        timestamps: false
    }

    const Movement = sequelize.define(alias, cols, config);

    Movement.associate = function(models) {
        Movement.belongsTo(models.User, {
            as: "users",
            foreignKey: "id_user" 
        });
    }

    return Movement;

}