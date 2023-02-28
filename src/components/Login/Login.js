import { Formik, Form, Field, ErrorMessage } from "formik"
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { login } from "../../redux/auth_reducer";
import * as Yup from 'yup';
import styles from './LoginStyles.module.css'

const initialValues = {
    email: '',
    password: ''
};

const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email adress').required('Required'),
    password: Yup.string().required('Required')
})

const LoginForm = (props) => {
    return <Formik initialValues={initialValues} validateOnBlur onSubmit={props.onSubmit} validationSchema={validationSchema}>
        {({status }) => (
            <Form className={styles.form}>
                <div className={styles.error}>{status}</div>
                <label htmlFor="email">Login</label>
                <Field className={styles.input} type={'text'}
                    id={'email'}
                    name={'email'} />
                <div className={styles.error}><ErrorMessage name={'email'} /></div >
                <label htmlFor="password">Password</label>
                <Field className={styles.input} type={'password'}
                    id={'password'}
                    name={'password'} />
                <div className={styles.error}><ErrorMessage name={'password'} /></div >
                <div className={styles.checkboxCnt}>
                    <label htmlFor="rememberMe">Remember me</label>
                    <Field className={styles.checkbox} type={'checkbox'}
                        id={'rememberMe'}
                        name={'rememberMe'} />
                </div>
                <button className={styles.button} type="submit">Login</button>
            </Form>
        )}
    </Formik>
}



const LoginPage = (props) => {

    const onSubmit = (values, {setSubmitting, setStatus}) => {
        props.login(values.email, values.password, values.rememberMe, setStatus);
        setSubmitting(false)
    }
    
    if (props.isAuth) {
        return <Navigate to='/profile' />
    }

    return <div className={styles.loginPage}>
        <h1 className={styles.title}>Log into your account</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
}


const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth  
})

export default connect(mapStateToProps, {login})(LoginPage);