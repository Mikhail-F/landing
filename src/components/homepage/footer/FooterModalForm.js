import React from 'react'
import {Field, reduxForm} from "redux-form";

import styles from './footer.module.sass'
import {maxLength, required} from "../../../utils/validators";
import {Input, TextArea} from "../../../hoc/Control";

const FooterModalForm = ({handleSubmit, setModalView}) => {
    return (
        <div className={styles.form_wrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.closeModal} onClick={() => setModalView(false)}>X</div>
                <h2 className={styles.modal_text}>SEND US MESSAGE</h2>
                <div>
                    <p className={styles.form_text}>Full Name</p>
                    <Field component={Input} name={'email'} validate={[required, maxLength]} type={'text'}
                           placeholder={'Your Name'}/>
                </div>
                <div>
                    <p className={styles.form_text}>Email</p>
                    <Field component={Input} name={'password'} validate={[required, maxLength]} type={'email'}
                           placeholder={'Your Email'}/>
                </div>
                <div>
                    <p className={styles.form_text}>Message</p>
                    <Field component={TextArea} name={'message'} validate={[required, maxLength]} type={'text'}
                           placeholder={'Your Message'}/>
                </div>
                <button className={styles.buttonSend}>Отправить</button>
            </form>
        </div>
    )
}

const FooterModalFormRedux = reduxForm({
    form: 'newMessage'
})(FooterModalForm)

export default FooterModalFormRedux