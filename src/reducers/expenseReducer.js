import { actionType } from '../consts/expense';
const initialState = {
  status: '',
  allExpenses: [],
  todayExpense: '',
  monthlyExpense: '',
  dailyExpense: [],
  expenseByType: [],
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_EXPENSE:
      return {
        ...state,
        status: action.status,
      };
    case actionType.GET_ALL_EXPENSES:
      return {
        ...state,
        monthlyExpense: action.monthlyExpense,
        allExpenses: action.allExpenses,
        expenseByType: action.expenseByType,
      };
    case actionType.GET_TODAY_EXPENSE:
      return {
        ...state,
        todayExpense: action.todayExpense,
      };
    case actionType.GET_DAILY_EXPENSE:
      return {
        ...state,
        dailyExpense: action.dailyExpense,
      };

    default:
      return {
        ...state,
      };
  }
};
export default expenseReducer;
