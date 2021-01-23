import React from 'react'
import styles from "../components/homepage/footer/footer.module.sass";

export const Input = ({input, meta, ...props}) =>{
    let hasError = meta.touched && meta.error
    return (
        <div className={styles.footerForm}>
            <input {...input} {...props} className={styles.footerFormInput + ' ' + (hasError && styles.error)}/>
            <div>
                {hasError && <span className={styles.error}>{meta.error}</span>}
            </div>
        </div>
    )
}

export const TextArea = ({input, meta, ...props}) =>{
    let hasError = meta.touched && meta.error
    return (
        <div className={styles.footerForm}>
            <textarea {...input} {...props} className={styles.footerFormInput + ' ' + (hasError && styles.error) + ' ' + (styles.text_area_modal)}/>
            <div>
                {hasError && <span className={styles.error}>{meta.error}</span>}
            </div>
        </div>
    )
}