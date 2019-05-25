module.exports = function(application){
    
    application.get('/', (req, res) => {
        application.app.controllers.usuariosController.index(application, req, res);
    });

}