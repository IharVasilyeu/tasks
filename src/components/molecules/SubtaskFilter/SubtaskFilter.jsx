import React, { useCallback, useMemo, useState } from 'react'
import { Button, Select } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { actionGetTasksByLabels } from 'store/reducers/taskReducer/actionTypes'
import { getFilterLoadingFlag, getLabels } from 'store/selectors'
import { Wrapper } from './SubtaskFilter.styles'

const SubtaskFilter = () => {
  const dispatch = useDispatch()
  const { labels, loading } = useSelector(state => ({
    labels: getLabels(state),
    loading: getFilterLoadingFlag(state),
  }), shallowEqual)
  
  const [values, setValues] = useState([])

  const selectStyle = useMemo(() => ({ width: '100%' }), [])

  const handleFilterApply = useCallback(() => {
    dispatch(actionGetTasksByLabels(values))
  }, [values, dispatch])

  const handleSelect = useCallback(e => {
    setValues(e)
  }, [])

  return (
    <Wrapper>
      <Select
        mode="multiple"
        allowClear
        style={selectStyle}
        placeholder="Please Select Label"
        value={values}
        onChange={handleSelect}
      >
        {labels.map(label => (
          <Select.Option key={label}>{label}</Select.Option>
        ))}
      </Select>
      <Button loading={loading} type="primary" onClick={handleFilterApply}>
        Apply
      </Button>
    </Wrapper>
  )
}

export default SubtaskFilter
