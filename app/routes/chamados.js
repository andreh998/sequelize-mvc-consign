module.exports = function(application){
    
    application.get('/chamados', (req, res) => {
        application.app.controllers.chamadosController.index(application, req, res);
    });

    application.get('/chamados/adicionar', (req, res) => {
        application.app.controllers.chamadosController.adicionar(application, req, res);
    });

}