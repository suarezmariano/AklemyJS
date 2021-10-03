const db = require("../database/models/index");
const Op = db.Sequelize.Op

const apiMovements = {
    all: function (req, res) {
        db.Movement.findAll().then((movements) => {
            return res.status(200).json({
                total: movements.length,
                data: movements,
                status: 200
            });
        });    
    },

    show: function (req, res) {
        db.Movement.findByPk(req.params.idMovement).then((movements) => {
            return res.status(200).json({
                data: movements,
                status: 200
            });
        });    
    },

    create: function (req, res) {
        db.Movement.create(req.body).then((movement) => {
            return res.status(200).json({
                data: movement,
                status: 200,
                created: "ok"
            });
        }) 
    },

    delete: function (req, res) {
        db.Movement.destroy({
            where: { id_movement: req.params.idMovement }
            }).then((movements) => {
                return res.status(200).json({
                    data: movements,
                    status: 200
                });
        }) 
    },

    modify: function (req, res) {
        db.Movement.update({
            where: { id_movement: req.params.idMovement }
            }).then((movement) => {
                return res.status(200).json({
                    data: movement,
                    status: 200,
                });
            });
    },

    search: function (req, res) {
        db.Movement.findAll({
            where: { concept: { [Op.like]: "%" + req.query.keyword + "%"} }
            }).then((movements) => {
                return res.status(200).json(movements)
        });
           
    },
}

module.exports = apiMovements;