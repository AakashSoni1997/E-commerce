import React, { Fragment, useEffect, useState } from "react";
// import Carousel from "react-material-ui-carousel";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productActon";
// import { Rating } from "@material-ui/lab";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Button,
// } from "@material-ui/core";

// import ReviewCard from "./ReviewCard.js"
// import Loader from "../layout/loader/Loader";
// import {useAlert} from "react-alert"
// import MetaData from "../layout/MetaData";


const ProductDetails = ({ match }) => {
  // const options = {
  //   size: "large",
  //   value: product.ratings,
  //   readOnly: true,
  //   precision: 0.5,
  // };
  // const [quantity, setQuantity] = useState(1);
  // const [open, setOpen] = useState(false);
  // const [rating, setRating] = useState(0);
  // const [comment, setComment] = useState("");


  // const { product, loading, error } = useSelector(
  //   (state) => state.productDetails
  // );
  // const alert=useAlert()
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProductDetails(match.params.id));
  // }, [dispatch, match.params.id]);

  return (
<h2>heloo Products</h2>


// <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData  title={`${product.name} -- ECOMMERCE`} />
//           <div className="ProductDetails">
//             <div>
//               <Carousel>
//                 {product.images &&
//                   product.images.map((item, i) => (
//                     <img
//                       className="CarouselImage"
//                       key={i}
//                       src={item.url}
//                       alt={`${i} Slide`}
//                     />
//                   ))}
//               </Carousel>
//             </div>

//             <div>
//               <div className="detailsBlock-1">
//                 <h2>{product.name}</h2>
//                 <p>Product # {product._id}</p>
//               </div>
//               <div className="detailsBlock-2">
//                 <Rating {...options} />
//                 <span className="detailsBlock-2-span">
//                   {" "}
//                   ({product.numOfReviews} Reviews)
//                 </span>
//               </div>
//               <div className="detailsBlock-3">
//                 <h1>{`₹${product.price}`}</h1>
//                 <div className="detailsBlock-3-1">
//                   <div className="detailsBlock-3-1-1">
//                     <button onClick={decreaseQuantity}>-</button>
//                     <input readOnly type="number" value={quantity} />
//                     <button onClick={increaseQuantity}>+</button>
//                   </div>
//                   <button
//                     disabled={product.Stock < 1 ? true : false}
//                     onClick={addToCartHandler}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>

//                 <p>
//                   Status:
//                   <b className={product.Stock < 1 ? "redColor" : "greenColor"}>
//                     {product.Stock < 1 ? "OutOfStock" : "InStock"}
//                   </b>
//                 </p>
//               </div>

//               <div className="detailsBlock-4">
//                 Description : <p>{product.description}</p>
//               </div>

//               <button onClick={submitReviewToggle} className="submitReview">
//                 Submit Review
//               </button>
//             </div>
//           </div>

//           <h3 className="reviewsHeading">REVIEWS</h3>

//           <Dialog
//             aria-labelledby="simple-dialog-title"
//             open={open}
//             onClose={submitReviewToggle}
//           >
//             <DialogTitle>Submit Review</DialogTitle>
//             <DialogContent className="submitDialog">
//               <Rating
//                 onChange={(e) => setRating(e.target.value)}
//                 value={rating}
//                 size="large"
//               />

//               <textarea
//                 className="submitDialogTextArea"
//                 cols="30"
//                 rows="5"
//                 value={comment}
//                 onChange={(e) => setComment(e.target.value)}
//               ></textarea>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={submitReviewToggle} color="secondary">
//                 Cancel
//               </Button>
//               <Button onClick={reviewSubmitHandler} color="primary">
//                 Submit
//               </Button>
//             </DialogActions>
//           </Dialog>

//           {product.reviews && product.reviews[0] ? (
//             <div className="reviews">
//               {product.reviews &&
//                 product.reviews.map((review) => (
//                   <ReviewCard key={review._id} review={review} />
//                 ))}
//             </div>
//           ) : (
//             <p className="noReviews">No Reviews Yet</p>
//           )}
//         </Fragment>
//       )}
//     </Fragment>


    // <Fragment>
    //   <div className="ProductDetails">
    //     <div>
    //       <Carousel>
    //         {product.images &&
    //           product.images.map((item, i) => (
    //             <img
    //               className="CarouselImage"
    //               key={i}
    //               src={item.url}
    //               alt={`${i} Slide`}
    //             />
    //           ))}
    //       </Carousel>
    //     </div>
    //     <div>
    //       <div className="detailsBlock-1">
    //         <h2>{product.name}</h2>
    //         <p>Product # {product._id}</p>
    //       </div>
    //       <div className="detailsBlock-2">
    //         <Rating {...options} />
    //         <span className="detailsBlock-2-span">
    //           {" "}
    //           ({product.numOfReviews} Reviews)
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </Fragment>
  );
};

export default ProductDetails;
