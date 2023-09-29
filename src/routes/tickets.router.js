import RouterClass from "./Router.class.js";
import { getAllTickets } from '../controllers/ticket.controller.js'

class TicketRouterClass extends RouterClass {
  init() {
    this.get("/total", getAllTickets);
  }
}

export default TicketRouterClass;
