import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import styles from '../Common/formStyles.module.css'



const AddMessageForm = (props) => {
    const initialValues = {
        newMessage: ''
    }

    const onSubmit = values => props.onSubmit(values.newMessage);

    const validationSchema = Yup.object({
        newMessage: Yup.string().max(30, 'Must be 30 characters or less').required('Reqiured')
    })

    return <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className={styles.form}>
            <Field className={styles.input} type={'text'} name={"newMessage"} placeholder={'Enter your message'} />
            <ErrorMessage name="newMessage" />
            <button className={styles.button} type="submit">Send</button>
        </Form>
    </Formik>
}

export default AddMessageForm;