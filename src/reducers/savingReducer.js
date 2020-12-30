import { actionType } from '../consts/saving';
const initialState = {
  monthlySaving: '',
  annualSaving: [],
  totalThisYear: '',
  goals: {},
};

const savingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.CREATE_SAVING:
      return {
        ...state,
        status: action.status,
      };
    case actionType.GET_ALL_SAVING:
      return {
        ...state,
        monthlySaving: action.monthlySaving,
      };
    case actionType.GET_ANNUAL_SAVING:
      return {
        ...state,
        annualSaving: action.annualSaving,
        totalThisYear: action.totalThisYear,
        goals: action.goals,
      };

    default:
      return {
        ...state,
      };
  }
};
export default savingReducer;
