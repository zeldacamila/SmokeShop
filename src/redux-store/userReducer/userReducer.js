export const SETUSERDATA = "@user/setData";
export const CLOSEUSERSESION = "@user/closeSesion"

const initialValues = {
  token: "",
  isLogged: false,
  isAdmin: false,
  name: ""
};

export const userReducer = (state=initialValues, action) => {
  switch (action.type) {
    case SETUSERDATA:
      return {
        ...state,
        token: action.payload.data.token,
        isAdmin: action.payload.data.isAdmin,
        name: action.payload.data.name,
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
