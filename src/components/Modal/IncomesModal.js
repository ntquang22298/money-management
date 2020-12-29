import { Modal, Form, Select, Input, InputNumber, Space, Button } from 'antd';
import React from 'react';
import header from '../../images/income.png';
import { useDispatch } from 'react-redux';
import * as action from '../../actions/incomes';
const tailLayout = {
  wrapperCol: { offset: 16, span: 16 },
};

const { TextArea } = Input;
const IncomesModal = (props) => {
  const dispatch = useDispatch();
  const handleCancel = () => {
    props.setVisible(false);
  };
  const handleIncome = (value) => {
    dispatch(action.createIncome(value));
    props.setVisible(false);
  };

  return (
    <div>
      <Modal centered visible={props.visible} closable={false}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img src={header} style={{ width: 400 }} loading='lazy' alt='income' />
        </div>
        <Form layout='vertical' name='expenseForm' onFinish={(value) => handleIncome(value)}>
          <Form.Item
            label='Source'
            name='source'
            rules={[
              {
                required: true,
                message: 'Please select source',
              },
            ]}
          >
            <Select placeholder='Source'>
              <Select.Option value='salary'>Salary</Select.Option>
              <Select.Option value='investment'>Investment</Select.Option>
              <Select.Option value='other'>Other</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label='Target'
            name='target'
            rules={[
              {
                required: true,
                message: 'Please select type',
              },
            ]}
          >
            <Select placeholder='Target'>
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
          <Form.Item
            label='Amount'
            name='amount'
            rules={[
              {
                required: true,
                message: 'Please enter amount',
              },
            ]}
          >
            <InputNumber
              placeholder='Amount'
              formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
            />
          </Form.Item>
          <Form.Item label='Description' name='description'>
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Space>
              <Button onClick={handleCancel}>Cancel</Button>
              <Button type='primary' htmlType='submit'>
                Save
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};
export default IncomesModal;
