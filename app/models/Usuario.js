module.exports = (sequelize, DataType) => {
    var Usuario = sequelize.define('Usuario', {
        id:{
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome:{
            type: DataType.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, { 
        sequelize, 
        modelName: 'Usuario',
        tableName: 'usuarios',
        timestamps: false
    });
    
    Usuario.associate = function(models){
        Usuario.hasMany(models.Chamado, {
            foreignKey: 'id_usuario'
        });
    };

    Usuario.buscarTodos = ()=>{
        return Usuario.findAll({});
    }

    return Usuario;
}
