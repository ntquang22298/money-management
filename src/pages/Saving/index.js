import React, { useEffect } from 'react';
import SavingContent from '../../components/SavingContent';
import SavingHeader from '../../components/SavingHeader';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../actions/saving';
const SavingPage = () => {
  const dispatch = useDispatch();
  const savingReducer = useSelector((state) => state.saving);
  useEffect(() => {
    dispatch(action.getAnnualSaving());
  }, [dispatch]);
  return (
    <div>
      <SavingHeader savingReducer={savingReducer} />
      <SavingContent savingReducer={savingReducer} />
    </div>
  );
};
export default SavingPage;
