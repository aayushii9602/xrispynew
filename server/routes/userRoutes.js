import express from "express"
const router = express.Router()

import { isLoggedIn } from "../middlewares/userMiddlewares.js"
import { customRole } from "../middlewares/userMiddlewares.js"

// import controllers
import {signUp,login,logout,getLoggedInUserDetails,addShop, updateShop, deleteshop, getAllShops} from "../controllers/userController.js"

router.route("/signup").post(signUp)
router.route("/login").post(login)
router.route("/logout").get(logout)

// admin routes
router.route("/adminDashboard").get(isLoggedIn,customRole("admin"), getLoggedInUserDetails)
router.route("/adminDashboard/addShop").post(isLoggedIn,customRole("admin"), addShop)
router.route("/adminDashboard/shops").get(getAllShops)
router.route("/adminDashboard/shops/:id")
.put(isLoggedIn,customRole("admin"), updateShop)
.delete(isLoggedIn,customRole("admin"), deleteshop)


// .get(isLoggedIn,customRole("admin"), adminGetOneUser)
// .delete(isLoggedIn,customRole("admin"), adminDeleteAnyUser)
// router.route("/retrieveUser/:id").get(retrieveUser)


export default router;


