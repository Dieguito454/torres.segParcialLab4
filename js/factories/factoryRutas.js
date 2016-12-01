angular
  .module('app')
  .factory('factoryRutas', function (){
  	var objeto = {};

    objeto.nombre = "Factory de rutas";

    objeto.RutaProductos = 'http://localhost/Torres.SPLab42016/ws1/productos/';

    objeto.RutaUsuarios = 'http://localhost/Torres.SPLab42016/ws1/usuarios/';

    objeto.RutaFotos = 'http://localhost/Torres.SPLab42016/ws1/servidor/nexoFoto.php';

    return objeto;


    
  })