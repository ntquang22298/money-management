import { actionType } from '../consts/balance';
const initialState = {
  monthlyBalance: [],
  total: {},
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_MONTHLY_BALANCE:
      return {
        ...state,
        monthlyBalance: action.monthlyBalance,
      };
    case actionType.GET_CURRENT_BALANCE:
      return {
        ...state,
        total: action.total,
      };
    default:
      return {
        ...state,
      };
  }
};
export default balanceReducer;
