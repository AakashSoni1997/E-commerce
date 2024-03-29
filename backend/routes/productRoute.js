const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReview,
  deleteReview,
  getAdminProducts,
} = require("../controller/productController");
const { isAuthenticatedUser , authorizeRoles} = require("../middleware/auth");

const router = express.Router();

router.route("/products").get( getAllProduct);
router.route("/admin/products").get( isAuthenticatedUser, authorizeRoles("admin"),getAdminProducts)
router.route("/product/new").post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
router.route("/product/:id").put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct);
router.route("/product/:id").delete(isAuthenticatedUser, deleteProduct);
router.route("/product/:id").get(getProductDetails);
router.route("/review").put( isAuthenticatedUser,createProductReview)
router.route("/reviews").get(getProductReview).delete(isAuthenticatedUser,deleteReview)



module.exports = router;
