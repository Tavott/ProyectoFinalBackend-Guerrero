import { TICKET_DTO } from "../DTO/DTOManager.js"

export default class TicketRepository {

    constructor(DAO) {
        this.DAO = DAO;
    }

    async createTicket(ticket) {
        let ticketDBFormat = await TICKET_DTO.ticket(ticket);
        return await this.DAO.addTicket(ticketDBFormat);
    }

    async getTicket(code) {
        return await this.DAO.getTicket(code)
    }

    async getAllTickets() {
        return await this.DAO.getAllTickets();
    }
}
