import { Modal, Form, Select, Input, Space, Button } from 'antd';
import React from 'react';
import header from '../../images/money-transfer.png';
const tailLayout = {
  wrapperCol: { offset: 16, span: 16 },
};
const TransferModal = (props) => {
  const handleCancel = () => {
    props.setVisible(false);
  };
  const handleTransfer = () => {
    props.setVisible(false);
  };
  return (
    <div className='transfer-modal'>
      <Modal visible={props.visible} closable={false}>
        <img src={header} />
        <Form layout='vertical'>
          <Form.Item label='From'>
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
          <Form.Item label='To'>
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
          <Form.Item {...tailLayout}>
            <Space>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button type='primary' onClick={handleTransfer}>
                Transfer
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default TransferModal;
