module.exports.index = function(application, req, res){
  
    var Chamado = application.config.database.models.Chamado;
    var Usuario = application.config.database.models.Usuario;

    /*
    Chamado.buscarPorIdUsuario(1, Usuario)
    .then(chamados => {
        //console.log(chamados);
        Usuario.buscarTodos()
        .then(usuarios => {
            //console.log(usuarios);
            res.render('home', {usuarios: usuarios, chamados: chamados});
        })
        .catch(err => {
            console.log('erro: ' + err);
            res.json(err);
        })
    })
    .catch(err => {
        console.log('erro: ' + err);
        res.json(err);
    });
*/
    const chamados = Chamado.buscarTodos();
    const usuarios = Usuario.buscarTodos();
    Promise.all([chamados, usuarios]).then((results) =>{
        //console.log(results[0]);
        //console.log(results[1]);
        res.render('home', {usuarios: results[1], chamados: results[0]});
    }).catch(err => {
        console.log('erro: ' + err);
        res.json(err);
    });
    

    /*
    Chamado.buscarPorIdUsuario(1, Usuario)
    .then(result => {
        res.json(result);
    })
    .catch(err => {
        console.log('erro: ' + err);
        res.json(err);
    });
    */
}

module.exports.adicionar = function(application, req, res){

    var Chamado = application.config.database.models.Chamado;

    Chamado.adicionar('Chamado de teste', 1)
    .then(result =>{
        res.json(result);
    })
    .catch(err => {
        console.log(err);
    })

}