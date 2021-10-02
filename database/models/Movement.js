module.exports = function (sequelize,dataTypes) {

    let alias = "Movement";

    let cols = {
        id_movement: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        movement_type: {
            type: dataTypes.STRING(45)
        },
        date: {
            type: dataTypes.DATEONLY
        },
        amount: {
            type: dataTypes.INTEGER(11)
        },
        concept: {
            type: dataTypes.STRING(16)
        },
        comment: {
            type: dataTypes.STRING(75)
        }
    }

    let config = {
        tablename: "movements",
        timestamps: false
    }

    const Movement = sequelize.define(alias, cols, config);

    return Movement;

}