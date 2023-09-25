import { MongoProductManager } from "../dao/mongo/mongoProductManager.js";
import {ProductsDTO} from "../DTO/productsDTO.js";
import UserService from "./userService.js";
const productsDTO = new ProductsDTO()
const mongoProductManager = new MongoProductManager

const userService = new UserService
class ProductsService {
    async getProducts(limit){
        return await mongoProductManager.getProducts(limit)
    }
    async getProductsWithOutPaginate(){
        return await mongoProductManager.getProductsWithOutPaginate()
    }

    async getProductById(pid){
        return await mongoProductManager.getProductById(pid)
    }

    async addProduct({title, description, price, thumbnail, code, stock, category, owner}){
        let user = await userService.getUser(owner)
        if (!user) {
            console.log('el usuario no se encuentra registrado por lo que no puede ser dueño de este producto')
            return -1
        }
        let product = await productsDTO.addProduct({title, description, price, thumbnail, code, stock, category, owner})
        console.log("producto: ",product)
        return await mongoProductManager.addProduct(product)
    }

    async updateProduct(pid, obj){
        return await mongoProductManager.updateProduct(pid, obj)
    }

    async deleteProduct(pid){
        return await mongoProductManager.deleteProduct(pid)
    }
}

export default ProductsService


// import { MongoProductManager } from "../dao/mongo/mongoProductManager.js";
// import {ProductsDTO} from "../DTO/productsDTO.js";
// import UserService from "./userService.js";
// import faker from 'faker'; // Importa Faker


// const productsDTO = new ProductsDTO()
// const mongoProductManager = new MongoProductManager

// const userService = new UserService
// class ProductsService {
//     async getProducts(limit){
//         return await mongoProductManager.getProducts(limit)
//     }
//     async getProductsWithOutPaginate(){
//         return await mongoProductManager.getProductsWithOutPaginate()
//     }

//     async getProductById(pid){
//         return await mongoProductManager.getProductById(pid)
//     }

//     async addProduct({ owner }) {
//         let user = await userService.getUser(owner);
//         if (!user) {
//             console.log('El usuario no se encuentra registrado, por lo que no puede ser dueño de este producto');
//             return -1;
//         }

//         // Genera datos ficticios para el producto utilizando Faker
//         const fakeProduct = {
//             title: faker.commerce.productName(),
//             description: faker.lorem.sentences(2), // Puedes personalizar los datos ficticios según tus necesidades
//             price: faker.commerce.price(),
//             thumbnail: faker.image.imageUrl(),
//             code: faker.random.number(),
//             stock: faker.random.number(),
//             category: faker.commerce.department(),
//             owner,
//         };

//         console.log("Producto ficticio generado:", fakeProduct);

//         // Agrega el producto ficticio a la base de datos
//         return await mongoProductManager.addProduct(fakeProduct);
//     }

//     async updateProduct(pid, obj){
//         return await mongoProductManager.updateProduct(pid, obj)
//     }

//     async deleteProduct(pid){
//         return await mongoProductManager.deleteProduct(pid)
//     }
// }

// export default ProductsService