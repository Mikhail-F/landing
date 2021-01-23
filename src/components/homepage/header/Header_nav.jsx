import React from 'react'
import styles from './header.module.sass'

const HeaderNav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.nav_circle}><span className={styles.circle_inner_text}>A</span></div>
            <div className={styles.burger}>
                <span className={styles.burger_line}/>
                <span className={styles.burger_line}/>
                <span className={styles.burger_line}/>
            </div>
        </div>
    )
}

export default HeaderNav