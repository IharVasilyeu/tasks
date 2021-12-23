import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Button, Select } from 'antd'
import { Input } from 'components/atoms'
import { Wrapper } from './SubTask.styles'

const labels = ['To Do', 'In Progres', 'Testing', 'Done']

const SubTask = ({ id, onRemove, onChange, value }) => {
  const handleRemove = useCallback(() => onRemove(id), [id, onRemove])
  const selectStyle = useMemo(() => ({ width: '100%' }), [])
  const handleSelect = useCallback((e) => {
    onChange({
      target: {
        id: `labels|${id}`,
        value: e,
      }
    })
  }, [onChange, id])
  
  return (
    <Wrapper className="subtask">
      <Input
        name={`subTask|${id}`}
        label="Sub Task Name"
        onChange={onChange}
        // value={name}
        className="create-task-form__inp"
      />
      
      <Select
        mode="multiple"
        allowClear
        style={selectStyle}
        placeholder="Please Select Label"
        value={value}
        onChange={handleSelect}
      >
        {labels.map(label => (
          <Select.Option key={label}>{label}</Select.Option>
        ))}
      </Select>
      <Button onClick={handleRemove}>Remove</Button>
    </Wrapper>
  )
}

SubTask.defaultProps = {
  value: [],
}

SubTask.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.string),
  onRemove: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SubTask
