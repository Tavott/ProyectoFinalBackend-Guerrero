import { request } from "express";
import UserService from "../services/userService.js";
import CartsService from "../services/cartsService.js";
import TicketService from "../services/ticketService.js";

const userService = new UserService;
const cartsService = new CartsService;
const ticketService = new TicketService;

class PaymentController {

    paymentIntent = async (req = request, res) => {
        try {
            let user = await userService.getUser(req.session);
            
            let ticket = await ticketService.createTicket(user.cart, user.email);
            req.logger.info(ticket);

            // Envía el monto del ticket como respuesta
            res.send({ amount: ticket.amount, currency: 'usd' });
        } catch (error) {
            req.logger.error(error);
            res.status(500).send({ status: 'error', message: 'Error al obtener el monto del ticket.' });
        }
    }
}

export default PaymentController;
