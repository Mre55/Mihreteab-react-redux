import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { FETCH_LAPTOPS } from "../action/laptopsAction";
// import { FETCH_MOBILES } from "../action/mobileAction";

const laptoFetchTwo = (par, dispatch) => {
  dispatch({ type: "FETCH_PRODUCT", payload: par });
  return par;
};

export const changeCategory = (par, dispatch) => {
  dispatch({ type: "CATEGORY_TYPE", payload: par });
  return par;
};

export const laptopFetch = (dispatch, categoryId) => {
  axios
    .get(
      `https://aveosoft-react-assignment.herokuapp.com/products?categoryId=${categoryId}`
    )
    .then((response) => {
      const lap = response.data;
      laptoFetchTwo(lap, dispatch);
    });
};

export const categoryFetch = (dispatch, categoryId) => {
  axios
    .get(
      `https://aveosoft-react-assignment.herokuapp.com/products?categoryId=${categoryId}`
    )
    .then((response) => {
      const lap = response.data;
      laptoFetchTwo(lap, dispatch);
    });
};

const initialState = {
  product: [],
  categoryId: 0,
  categories: [
    {
      id: 0,
      name: "Laptops",
    },
    {
      id: 1,
      name: "Mobiles",
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      return { ...initialState, product: action.payload };

    case "FETCH_CATEGORIES":
      return { ...initialState, categories: action.payload };

    case "CATEGORY_TYPE":
      console.log("CATEGORY_TYPE ");
      return { ...initialState, categoryId: action.payload };
      
    default:
      return initialState;
  }
};
