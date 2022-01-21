// archivo para controlar la funcion usuarios de usuarios routes
const { response } = require('express');


const usuariosGet = (req = request, res = response) => {

  const query = req.query;

    res.json({
      msg: "get API - controlador",
      query
    });
  };

const usuariosPut = (req, res) => {

  const id = req.params.id;

    res.status(400).json({
      msg: "put API - controlador",
      id
    });
  };
  
const usuariosPost = (req, res) => {

  const { nombre, edad } = req.body;

    res.json({
      msg: "post API - controlador",
      nombre, edad
    });
  };  

  const usuariosPatch = (req, res) => {
    res.json({
      msg: "patch API - controlador",
    });
  };

  const usuariosDelete = (req, res) => {
    res.json({
      msg: "delete API - controlador",
    });
  };

  module.exports = {
      usuariosGet,
      usuariosPut,
      usuariosPost,
      usuariosPatch,
      usuariosDelete
  }