export const SETUSERDATA = "@user/setData";
export const CLOSEUSERSESION = "@user/closeSesion"

const initialValues = {
  token: "",
  isLogged: false,
};

export const userReducer = (state=initialValues, action) => {
  switch (action.type) {
    case SETUSERDATA:
      return {
        ...state,
        token: action.payload.data,
        isLogged: true
      };
    case CLOSEUSERSESION:
      return {
        ...state,
        isLogged: false
      }
    default:
      return state;
  }
};
