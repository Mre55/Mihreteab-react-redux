import axios from "axios";

const actionDispatch = (incomingData, dispatch) => {
  dispatch({ type: "FETCH_PRODUCT", payload: incomingData });
  return incomingData;
};

export const changeCategory = (incomingData, dispatch) => {
  dispatch({ type: "CATEGORY_TYPE", payload: incomingData });
  return incomingData;
};

export const fetchProducts = (dispatch, categoryId) => {
  axios
    .get(
      `https://aveosoft-react-assignment.herokuapp.com/products?categoryId=${categoryId || 0}`
    )
    .then((response) => {
      const dataFromAPI = response.data;
      actionDispatch(dataFromAPI, dispatch);
    });
};

const initialState = {
  product: [],
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
      return { ...state, product: action.payload };

    case "CATEGORY_TYPE":
      return { ...state, categoryId: action.payload };

    default:
      return state;
  }
};
