import { request } from "express";
import { generateProduct } from "../utils/faker.js";


class MockingController {
    getMocks = async (req = request, res) => {
        try {
            const numProductsToGenerate = 10; // Limitar la cantidad de productos generados
            const products = [];

            for (let i = 0; i < numProductsToGenerate; i++) {
                const product = generateProduct();
                products.push(product);
            }

            res.status(200).json({
                status: 'success',
                message: 'Datos ficticios generados con éxito',
                payload: products
            });
        } catch (error) {
            console.error('Error al generar datos ficticios:', error);
            res.status(500).json({
                status: 'error',
                message: 'Ocurrió un error al generar datos ficticios'
            });
        }
    }
}

export default MockingController;
