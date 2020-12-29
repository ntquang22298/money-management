import { actionType } from '../consts/income';
const initialState = {
  status: '',
  incomes: {},
  monthlyIncome: '',
};

const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_INCOME:
      return {
        ...state,
        status: action.status,
      };
    case actionType.GET_ALL_INCOMES:
      return {
        ...state,
        monthlyIncome: action.monthlyIncome,
        allIncomes: action.allIncomes,
      };
    default:
      return {
        ...state,
      };
  }
};
export default incomeReducer;
