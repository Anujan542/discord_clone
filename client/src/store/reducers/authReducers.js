const initialSate = {
  userDetails: null,
};

const reducer = (state = initialSate, action) => {
  switch (action.type) {
    case "DUMMY":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default reducer;
