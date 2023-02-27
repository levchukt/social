import { Formik, Form, Field, ErrorMessage } from "formik"
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth_reducer";

const initialValues = {
    email: '',
    password: ''
};

const validate = values => {
    let errors = {}

    if (!values.email) {
        errors.email = 'reqiured'
    }
    if (!values.password) {
        errors.password = 'reqiured'
    }

    return errors;
};


const LoginForm = (props) => {
    return <Formik initialValues={initialValues} onSubmit={props.onSubmit} validate={validate}>
        <Form>
            <label htmlFor="email">Login</label>
            <Field type={'text'}
                id={'email'}
                name={'email'} />
            <ErrorMessage name={'email'} />
            <label htmlFor="password">Password</label>
            <Field type={'password'}
                id={'password'}
                name={'password'} />
            <ErrorMessage name={'password'} />
            <label htmlFor="rememberMe">Remember me</label>
            <Field type={'checkbox'}
                id={'rememberMe'}
                name={'rememberMe'} />
            <button type="submit">Login</button>
        </Form>
    </Formik>
}



const LoginPage = (props) => {

    const onSubmit = (values) => {
        props.login(values.email, values.password, values.rememberMe)
    }
    
    if (props.isAuth) {
        return <Navigate to='/profile' />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth  
})

export default connect(mapStateToProps, {login})(LoginPage);