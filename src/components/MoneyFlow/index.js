import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { FaUpload, FaDownload, FaPiggyBank, FaMoneyCheckAlt } from 'react-icons/fa';
import TransferModal from '../Modal/TransferModal';
import ExpensesModal from '../Modal/ExpensesModal';
import IncomesModal from '../Modal/IncomesModal';
import SavingModal from '../Modal/SavingModal';

const MoneyFlow = () => {
  const [transferVisible, setTransferVisible] = useState(false);
  const [expensesVisible, setExpensesVisible] = useState(false);
  const [icomesVisible, setIncomesVisible] = useState(false);
  const [savingVisible, setSavingVisible] = useState(false);

  return (
    <div className='money-flow'>
      <Space>
        <Button
          type='primary'
          icon={<FaMoneyCheckAlt />}
          title='Transfer'
          style={{ background: 'red' }}
          onClick={() => setTransferVisible(true)}
        ></Button>
        <Button
          type='primary'
          icon={<FaPiggyBank />}
          title='Saving'
          onClick={() => setSavingVisible(true)}
        ></Button>
        <Button
          type='primary'
          icon={<FaUpload />}
          title='Expenses'
          style={{ background: 'orange' }}
          onClick={() => setExpensesVisible(true)}
        ></Button>
        <Button
          type='primary'
          icon={<FaDownload />}
          style={{ background: 'green' }}
          title='Incomes'
          onClick={() => setIncomesVisible(true)}
        ></Button>
      </Space>
      <div>
        <TransferModal visible={transferVisible} setVisible={setTransferVisible} />
        <ExpensesModal visible={expensesVisible} setVisible={setExpensesVisible} />
        <IncomesModal visible={icomesVisible} setVisible={setIncomesVisible} />
        <SavingModal visible={savingVisible} setVisible={setSavingVisible} />
      </div>
    </div>
  );
};
export default MoneyFlow;
