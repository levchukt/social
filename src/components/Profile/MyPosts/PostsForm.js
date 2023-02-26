
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import styles from '../../Common/formStyles.module.css'


const PostsForm = (props) => {
    const initialValues = {
        postsText: ''
    }

    const onSubmit = values => props.onSubmit(values.postsText);

    const validationSchema = Yup.object({
        postsText: Yup.string().max(30, 'Must be 30 characters or less').required('Reqiured')
    })

    return <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className={styles.form}>
            <Field className={styles.inputSmall} type={'text'} name={"postsText"} placeholder={'Enter your message'} />
            <ErrorMessage name="postsText" />
            <button className={styles.button} type="submit">Post</button>
        </Form>
    </Formik>
}

export default PostsForm;