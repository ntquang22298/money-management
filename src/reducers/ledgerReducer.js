import { actionTypes } from '../consts/ledger';
const initialState = {
  ledgers: [],
};

const ledgerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_LATES_LEDGERS:
      return {
        ...state,
        ledgers: action.ledgers,
      };

    default:
      return {
        ...state,
      };
  }
};
export default ledgerReducer;
