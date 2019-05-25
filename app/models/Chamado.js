module.exports = (sequelize, DataType) => {
    var Chamado = sequelize.define('Chamado', {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descricao:{
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, { 
        sequelize,
        modelName: 'Chamado',
        tableName: 'chamados',
        timestamps: false
    });

    Chamado.associate = function(models){
        Chamado.belongsTo(models.Usuario, {
            foreignKey: 'id_usuario'
        });
    };

    Chamado.buscarTodos = function(){
        return Chamado.findAll()
    }

    Chamado.buscarPorIdUsuario = function(id, usuario){
        const Op = sequelize.Sequelize.Op;
         return Chamado.findAll({
            where: {
                descricao: { [Op.like]: '%' + 'capirotence' + '%' },
            },
            include: { model: usuario,  
                where: {           
                id: id
                }            
            }
        })        
    }

    return Chamado;
}
