import { Router } from "express"
import { auth } from "../middleware/auth.js"
import ViewsController from "../controllers/viewsController.js"
import LoginController from "../controllers/loginController.js"
import { rollAdminVerify, rollUserVerify } from "../middleware/rollVerify.js"

const viewsController = new ViewsController
const loginController = new LoginController

const router = Router()
router.get('auth/login', loginController.loginRender)
router.get('/products', auth, viewsController.productsRender)

router.get('/carts/:cid', viewsController.cartsRender)

router.get('/realtimeproducts', viewsController.realTimeProductsRender)

router.get('/chat',rollUserVerify , viewsController.chat)

router.get('/userMonitoring', rollAdminVerify, viewsController.userMonitoring)

export default router