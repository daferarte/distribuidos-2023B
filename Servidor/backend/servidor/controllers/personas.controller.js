/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Controlador de usuarios
 * En este metodo se definen los metodos de usuario
 */

const {response, request }=require('express');

const usuariosGet = (req=request, res=response)=>{
    res.send('Hola queridos Ingenieros de softeware UCC')
}

const usuariosPost = (req=request, res=response)=>{
    res.send('Hola Ingenieros de softeware UCC')
}

const usuariosPut = (req=request, res=response)=>{
    res.send('Hola UCC')
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut
}