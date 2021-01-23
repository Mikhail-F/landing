import React, {useState} from 'react'

import {NavLink} from "react-router-dom";
import FooterModalForm from "./FooterModalForm";
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

import styles from './footer.module.sass'

const Footer = () => {

    let [modalView, setModalView] = useState(false)
    let [modalMiniView, setModalMiniView] = useState(false)

    let sendMessage = (value) => {
        setModalMiniView(true)
        setModalView(false)
        enableBodyScroll(true)
    }

    if (modalMiniView || modalView) {
        disableBodyScroll(true)
    }
    else{
        enableBodyScroll(true)
    }

    return (
        <>
            {modalView && <FooterModalForm onSubmit={sendMessage} setModalView={setModalView}/>}
            {modalMiniView && <div className={styles.sendModal_wrapper}>
                <div className={styles.sendModal}> Отправлено
                    <button onClick={() => setModalMiniView(false)} className={styles.send_modal_btn}>X</button>
                </div>
            </div>}
            <div className={styles.footer}>
                <div className={styles.footer_wrapper}>
                    <div className={styles.footer_block_wrapper}>
                        <div className={styles.interesting}>
                            <h2 className={styles.title}>
                                Intersted to woek with our team?
                            </h2>
                            <h4 className={styles.subtitle}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </h4>
                        </div>
                        <button className={styles.btn} onClick={() => setModalView(true)}>Let’s Talk</button>
                    </div>
                    <div className={styles.border_top_wrapper}>
                        <div className={styles.border_top}>
                            <div className={styles.footer_block_wrapper}>
                                <div className={`${styles.block} ${styles.block_min_width800}`}>
                                    <h2 className={styles.title_block_main}>
                                        <div className={styles.nav_circle}><span
                                            className={styles.circle_inner_text}>A</span></div>
                                        Afrianska
                                    </h2>
                                    <div className={styles.block_contact}>
                                        <div className={styles.block_contact_left}>A.</div>
                                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                    </div>
                                    <div className={styles.block_contact}>
                                        <div className={styles.block_contact_left}>T.</div>
                                        <div>+62-812-7313-4321</div>
                                    </div>
                                    <div className={styles.block_contact}>
                                        <div className={styles.block_contact_left}>E.</div>
                                        <div>hello.afrian@gmail.com</div>
                                    </div>
                                </div>
                                <div className={styles.footer_block_inner_wrapper}>
                                    <div className={styles.block}>
                                        <h2 className={styles.title_block}>About US</h2>
                                        <div className={styles.links}>
                                            <div className={styles.link_wrapper}><NavLink to={'#'}
                                                                                          className={styles.link}>About</NavLink>
                                            </div>
                                            <div className={styles.link_wrapper}><NavLink to={'#'}
                                                                                          className={styles.link}>What
                                                We Do</NavLink></div>
                                            <div className={styles.link_wrapper}><NavLink to={'#'}
                                                                                          className={styles.link}>Project</NavLink>
                                            </div>
                                            <div className={styles.link_wrapper}><NavLink to={'#'}
                                                                                          className={styles.link}>How It
                                                Work With Us</NavLink></div>
                                        </div>
                                    </div>
                                    <div className={styles.block}>
                                        <h2 className={styles.title_block}>Follow US</h2>
                                        <div className={styles.links}>
                                            <div className={styles.link_wrapper}><NavLink to={'#'}
                                                                                          className={styles.link}>Instagram</NavLink>
                                            </div>
                                            <div className={styles.link_wrapper}><NavLink to={'#'}
                                                                                          className={styles.link}>Facebook</NavLink>
                                            </div>
                                            <div className={styles.link_wrapper}><NavLink to={'#'}
                                                                                          className={styles.link}>LinkedIn</NavLink>
                                            </div>
                                            <div className={styles.link_wrapper}><NavLink to={'#'}
                                                                                          className={styles.link}>Youtube</NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.footer_all_right}>2019 © Afrianska. All rights reserved.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer