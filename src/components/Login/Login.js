import { Formik, Form, Field, ErrorMessage } from "formik"

const initialValues = {
    login: '',
    password: ''
};

const onSubmit = values => {
    console.log(values.login);
};

const validate = values => {
    let errors = {}

    if (!values.login) {
        errors.login = 'reqiured'
    }
    if (!values.password) {
        errors.password = 'reqiured'
    }

    return errors;
};


const LoginForm = (props) => {

    return <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
        <Form>
            <label htmlFor="login">Login</label>
            <Field type={'text'}
                id={'login'}
                name={'login'} />
            <ErrorMessage name={'login'} />
            <label htmlFor="password">Password</label>
            <Field type={'text'}
                id={'password'}
                name={'password'} />
            <ErrorMessage name={'password'}/>
            <button type="submit">Login</button>
        </Form>
    </Formik>
}





const LoginPage = (props) => {
    return <div>
        <h1>Login</h1>
        <LoginForm />
    </div>
}

export default LoginPage;