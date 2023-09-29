import {
    CART_SERVICES,
    PRODUCT_SERVICES,
    TICKET_SERVICES,
  } from "../services/servicesManager.js";


  export const getAllTickets = async (request, response) => {
    // const {  } = request.params;
    let res = await TICKET_SERVICES.getAllTickets();
    res?.error
      ? response.status(404).send({ status: `error`, error: res.error })
      : response.send({ status: `success`, product: res });
  };