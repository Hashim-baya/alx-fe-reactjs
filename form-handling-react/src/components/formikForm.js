import React from 'react';
import {Formik, Field, ErrorMessage, Form} from 'formik';
import * as Yup from 'yup'

const ValidationSchema = Yup.object({
    username: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    email: Yup.string().email('Invalid Email address').required('Required'),
    password: Yup.string().required('Required').min(8, 'Must be atleast 8 characters'),


});

 const FormikForm = () =>{
    return(
    <Formik 
        initialValues={{
            username: '',
            email: '',
            password: '',
        }}
        validationSchema = {ValidationSchema}
        onSubmit={(values, {setSubmitting}) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false)
            }, 400)
            
        }}
    >
        {({isSubmitting}) => (
            <Form>
                <label htmlFor='username'>Username</label>
                <Field 
                    type='text'
                    name='username'
                    id='username'
                />
                <ErrorMessage name='username' component='div' />

                <label htmlFor='email'>Email</label>
                <Field 
                    type='email'
                    name='email'
                    id='email'
                />
                <ErrorMessage name='email' component='div' />

                <label htmlFor='password'>Password</label>
                <Field 
                    type='password'
                    name='password'
                    id='password'
                />
                <ErrorMessage name='password' component='div' />

                <button type='submit' disabled={isSubmitting}>Submit</button>
            </Form>
        )}
            
        

    </Formik>
)}

export default FormikForm;
