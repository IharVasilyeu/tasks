import React, { useCallback, useState } from 'react'
import { useFormik } from 'formik'
import { v4 as uuidv4 } from 'uuid'
import * as Yup from 'yup'
import { Button } from 'antd'
import { Input } from 'components/atoms'
// import PropTypes from 'prop-types'
import SubTask from '../SubTask/SubTask'
import { Wrapper } from './CreateForm.styles'
import { useDispatch } from 'react-redux'
import { actionCreateTask } from 'store/reducers/taskReducer/actionTypes'

const taskCreationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
})

const subTask = () => ({
  id: `${uuidv4()}`,
  name: '',
  title: '',
  labels: [],
})

const CreateForm = () => {
  const dispatch = useDispatch()

  const [subTasks, setSubtasks] = useState([subTask()])

  const addSubtask = useCallback(() => {
    setSubtasks([...subTasks, subTask()])
  }, [subTasks])

  const handleFormSubmit = useCallback((e) => {
    const id = uuidv4()
      const dto = {
        task: {
          id: `task|${id}`,
          title: e.name,
        },
        subTasks: {
          id: `sub|${id}`,
          data: Object.keys(e).reduce((acc, current) => {
            if (current.includes('labels') || current.includes('subTask')) {
              acc[current] = e[current]
            }
            
            return acc
          }, {})
        },
      }

      dispatch(actionCreateTask(dto))
  }, [dispatch])

  const { handleChange, handleSubmit, setValues, values, errors } = useFormik({
    initialValues: {},
    validationSchema: taskCreationSchema,
    onSubmit: handleFormSubmit,
  })

  const removeSubtask = useCallback(
    id => {
      setSubtasks(subTasks.filter(item => item.id !== id))
      const newValues = JSON.parse(JSON.stringify(values))

      delete newValues[`labels|${id}`]
      delete newValues[`subTask|${id}`]
      setValues(newValues)
    },

    [subTasks, setValues, values],
  )

  return (
    <Wrapper className="create-task-form" onSubmit={handleSubmit}>
      <div className="create-task-form__head">Task Creation</div>
      <div className="create-task-form__body">
        <div className="create-task-form__row">
          <Input
            name="name"
            isError={!!errors.name}
            label="Task Name"
            onChange={handleChange}
            value={values.name}
            className="create-task-form__inp"
          />
        </div>
        <div className="create-task-form__row">
          <div className="create-task-form__subtasks">
            {subTasks.map(({ id }) => (
              <SubTask
                value={values[`labels|${id}`]}
                key={id}
                id={id}
                onRemove={removeSubtask}
                onChange={handleChange}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="create-task-form__foter">
        <Button htmlType="submit">Submit</Button>
        <Button type="button" onClick={addSubtask}>
          Add Subtask
        </Button>
      </div>
    </Wrapper>
  )
}

CreateForm.propTypes = {}

export default CreateForm
