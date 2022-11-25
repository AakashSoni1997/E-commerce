const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controller/productController");
const { isAuthenticatedUser , authorizeRoles} = require("../middleware/auth");

const router = express.Router();

router.route("/products").get(isAuthenticatedUser,authorizeRoles("admin"), getAllProduct);
router.route("/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router.route("/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
router.route("/product/:id").delete(isAuthenticatedUser, deleteProduct);
router.route("/product/:id").get(getProductDetails);

module.exports = router;
