import { Modal, Form, Select, Input, Space, Button } from 'antd';
import React from 'react';
import header from '../../images/income.png';
const tailLayout = {
  wrapperCol: { offset: 16, span: 16 },
};
const IncomesModal = (props) => {
  const handleCancel = () => {
    props.setVisible(false);
  };
  const handleTransfer = () => {
    props.setVisible(false);
  };
  return (
    <div>
      <Modal visible={props.visible} closable={false}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src={header} style={{ width: 500 }} loading='lazy' alt='income' />
        </div>
        <Form layout='vertical'>
          <Form.Item label='Source'>
            <Select>
              <Select.Option value='cash'>Cash</Select.Option>
              <Select.Option value='vcb'>VCB</Select.Option>
              <Select.Option value='bidv'>BIDV</Select.Option>
              <Select.Option value='agribank'>Agribank</Select.Option>
              <Select.Option value='momo'>Momo</Select.Option>
              <Select.Option value='airpay'>Airpay</Select.Option>
              <Select.Option value='zalopay'>Zalo pay</Select.Option>
              <Select.Option value='vnpay'>VNPAY Wallet</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='Amount'>
            <Input />
          </Form.Item>
          <Form.Item label='Description'>
            <Input />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button type='primary' onClick={handleTransfer}>
                Receive
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default IncomesModal;
