import { Radio } from 'antd'

const { Group } = Radio
const ComTabGroup = ({
  options,
  customClass,
  size = 'large',
  defaultValue = '1',
  onSubmit
}) => {
  const onChange = ({ target }) => {
    onSubmit(target.value)
  }
  return (
    <div className={customClass}>
      <Group
        size={size}
        defaultValue={defaultValue}
        options={options}
        optionType='button'
        buttonStyle='solid'
        onChange={onChange}
      ></Group>
    </div>
  )
}

export default ComTabGroup
