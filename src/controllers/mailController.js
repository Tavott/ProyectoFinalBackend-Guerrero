import { request } from "express";
import { createTransport } from 'nodemailer'
import config from '../config/env.js';
import { generateToken } from "../utils/jwt.js";
import UserService from "../services/userService.js";

const userService = new UserService

export class MailController {
    mailRender = async (req = request, res) => {
        res.render('mail')
    }

    sendMail = async (req = request, res) => {
        const {email} = req.body
        try {
            let user = await userService.getUser(email)

            if (!user) res.send({status: '401', message: 'el usuario no existe'})

            let token = generateToken(user)

            const transport = createTransport({
                service: 'gmail',
                port: 578,
                auth: {
                    user: config.testMail,
                    pass: config.testMailPass
                }
            })
             //Modificar SendMail   
            let result = await transport.sendMail({
                from:'Servicio de Node <guerreroagustavo@hotmail.com>',
                to: email,
                subject: 'Restablecer contraseña',
                html: `
                <div>
                    <h1>Click para restablecer contraseña</h1>
                    <a href="/changePassword/${token}">Restablecer Contraseña</a>
                </div>`
            })
    
            res.send({status: 'ok', data: result})
        } catch (error) {
            console.log(error)
        }
    }
}