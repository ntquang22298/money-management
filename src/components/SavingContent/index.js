import React from 'react';
import { Row, Col } from 'antd';

import SavingCard from '../SavingCard';
import macbook from '../../images/macbook-pro.svg';
import travel from '../../images/travel.svg';
import rings from '../../images/wedding-rings.svg';

const SavingContent = () => {
  return (
    <div className='saving-content'>
      <Row>
        <Col lg={12}>
          <SavingCard
            background='#0068FF'
            title='Macbook pro'
            src={macbook}
            progressColor='#76AEFC'
            amount={50}
            color='#082FFC'
            percent={70}
          />
        </Col>
        <Col lg={12}>
          <SavingCard
            background='#ffa500'
            title='Da Nang travel'
            src={travel}
            progressColor='#FFE2B2'
            amount={12}
            color='#FF7F00'
            percent={0}
          />
        </Col>
        <Col lg={12}>
          <SavingCard
            background='#CF75FF'
            title='Wedding rings'
            src={rings}
            progressColor='#E9C1FF'
            amount={12}
            color='#A436FC'
            percent={0}
          />
        </Col>
      </Row>
    </div>
  );
};
export default SavingContent;
