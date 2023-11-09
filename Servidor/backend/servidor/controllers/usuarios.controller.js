/**
 * @author Daniel Arteaga
 * @version 1.0.0
 * 
 * Controlador de usuarios
 * En este metodo se definen los metodos de usuario
 */

const { PrismaClient } = require('@prisma/client');
const {response, request }=require('express');
const { crearJWT, encriptar, desencriptar } = require('../middlewares/validar-jwt');

const prisma=new PrismaClient();

const MostrarUsuarios = async(req=request, res=response)=>{
    const usuarios = await prisma.user.findMany()
    .catch((e)=>{
        return e.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        usuarios
    })

}

const AgregarUsuario = async(req=request, res=response)=>{

    let { email,  password} = req.body.user;
    
    password=encriptar(password);
    
    const result = await prisma.user.create({
        data: {
            email,
            password
        }
    }).catch((e)=>{
        return e.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));
    
    res.json({
        result
    })
}

const ActualizarUsuarios = async(req=request, res=response)=>{
    
    const {id} = req.params;

    let { email,  password} = req.body;

    password=encriptar(password);

    const result = await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: {
            email,
            password
        }
    }).catch((e)=>{
        return e.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));
    
    res.json({
        msg: 'actualizado',
        result
    })
}

const EliminarUsuario =async(req=request, res=response)=>{
    const {id} = req.params;
    const result = await prisma.user.delete({
        where: {
            id: Number(id)
        }
    }).catch((e)=>{
        return e.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    res.json({
        msg: 'Eliminado',
        result
    })
}

const iniciarSesion = async(req=request, res=response) =>{
    let {email, password}=req.body.user;
    console.log(req.body);
    const usuario= await prisma.user.findFirst({
        where: {
            email: email,
        },
    })
    .catch((e)=>{
        return e.message;
    }).finally((async ()=>{
        await prisma.$disconnect();
    }));

    let usuarioJWT=null;

    if((usuario) && (desencriptar(usuario.password)==password)){
        usuarioJWT = await encriptar(crearJWT(usuario));
        
    } 

    res.json({
        usuario,
        usuarioJWT,
    })

    


    
}

module.exports = {
    MostrarUsuarios,
    AgregarUsuario,
    ActualizarUsuarios,
    EliminarUsuario,
    iniciarSesion
}