import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Button, Input } from 'components/atoms'
// import PropTypes from 'prop-types'
import { Wrapper } from './CreateForm.styles'

const CreateForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      descr: '',
    },
    onSubmit: values => {
      console.log(JSON.stringify(values, null, 2))
    },
  })

  return (
    <Wrapper className="create-task-form" onSubmit={formik.handleSubmit}>
      <div className="create-task-form__head">Task Creation</div>
      <div className="create-task-form__body">
        <div className="create-task-form__row">
          <Input
            name="name"
            label="Task Name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="create-task-form__row">
          <Input
            name="descr"
            label="Task Description"
            onChange={formik.handleChange}
            value={formik.values.descr}
          />
        </div>
      </div>
      <div className="create-task-form__foter">
        <Button>Submit</Button>
      </div>
    </Wrapper>
  )
}

CreateForm.propTypes = {}

export default CreateForm
