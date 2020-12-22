import React from 'react';
import { Form, Select, DatePicker, Button } from 'antd';
const SearchBox = () => {
  return (
    <div className='search-box'>
      <Form layout='inline'>
        <Form.Item>
          <Select placeholder='Select type'>
            <Select.Option>Travel</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <DatePicker />
        </Form.Item>

        <Form.Item>
          <DatePicker />
        </Form.Item>

        <Form.Item>
          <Button>Start searching</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default SearchBox;
