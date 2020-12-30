import React, { useEffect } from 'react';
import { Row, Col, Statistic } from 'antd';
import { FaUpload, FaDownload, FaDollarSign, FaPiggyBank, FaMoneyCheckAlt } from 'react-icons/fa';
import * as action from '../../actions/ledger';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../consts/ledger';
const History = () => {
  const dispatch = useDispatch();
  const ledgerReducer = useSelector((state) => state.ledger);
  useEffect(() => {
    dispatch(action.getLatesLedger());
  }, [dispatch]);

  const getIcon = (type) => {
    switch (type) {
      case types.DEBIT:
        return <FaUpload style={{ color: 'orange' }} />;
      case types.CREDIT:
        return <FaDownload style={{ color: 'green' }} />;
      case types.SAVING:
        return <FaPiggyBank style={{ color: '#40A9FF' }} />;
      case types.TRANSFER:
        return <FaMoneyCheckAlt style={{ color: 'red' }} />;
    }
  };
  const getStaticStyle = (type) => {
    switch (type) {
      case types.DEBIT:
        return 'orange';
      case types.CREDIT:
        return 'green';
      case types.SAVING:
        return '#40A9FF';
      case types.TRANSFER:
        return 'red';
    }
  };
  return (
    <div className='history'>
      <p className='title'>History</p>
      <ul>
        {ledgerReducer.ledgers.docs &&
          ledgerReducer.ledgers.docs.map((doc) => (
            <li key={doc.id}>
              <Row>
                <Col xs={4} className='icon'>
                  {getIcon(doc.data().type)}
                </Col>
                <Col xs={12}>
                  <p>{doc.data().description}</p>
                  <small>
                    {doc.data().date}/{doc.data().month + 1}/{doc.data().year}
                  </small>
                </Col>
                <Col xs={8}>
                  <Statistic
                    value={doc.data().amount}
                    valueStyle={{ color: getStaticStyle(doc.data().type) }}
                    prefix={<FaDollarSign style={{ fontSize: 15 }} />}
                  />
                </Col>
              </Row>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default History;
