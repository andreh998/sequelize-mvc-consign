module.exports.index = function(application, req, res){

    var Usuario = application.config.database.models.Usuario;
    //var Chamado = application.config.database.models.Chamado;

    Usuario.buscarTodos()
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log(err);
    })
}