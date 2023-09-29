import { TICKET_REPOSITORY } from "../repository/repositoryManager.js";

export default class TicketServices {
  createTicket = async (ticket) => await TICKET_REPOSITORY.createTicket(ticket);
  getTicket = async (code) => await TICKET_REPOSITORY.getTicket(code)
  getAllTickets = async () => await TICKET_REPOSITORY.getAllTickets()
}
