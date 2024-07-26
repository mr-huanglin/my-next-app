/*
 * @Date: 2024-07-26 15:57:09
 * @LastEditTime: 2024-07-26 17:19:32
 */
'use client'
import { Button, Form, Input, DatePicker } from 'antd'
const { RangePicker } = DatePicker
const { Item } = Form

const ComSearch = ({ onSubmit, searchColumns }) => {
  const [form] = Form.useForm()

  const onFinish = (values) => {
    if (onSubmit) onSubmit(values)
    console.log('Success:', values)
  }
  const onReset = () => {
    form.resetFields()
    if (onSubmit) onSubmit({})
  }
  return (
    <Form
      form={form}
      layout='inline'
      className='grid grid-cols-5 gap-[16px]'
      onFinish={onFinish}
    >
      {searchColumns.map((item, index) => (
        <Item key={item.prop ?? index} name={item.prop}>
          {item.type === 'input' ? (
            <Input placeholder={item.label} />
          ) : item.type === 'date' ? (
            <RangePicker />
          ) : (
            ''
          )}
        </Item>
      ))}
      <Item>
        <Button type='primary' htmlType='submit'>
          查询
        </Button>
        <Button className='ml-[15px]' onClick={onReset}>
          重置
        </Button>
      </Item>
    </Form>
  )
}

export default ComSearch
