import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import s from './Loading.module.css'
import b from '../../p1-main/m1-ui/u1-app/App.module.css'

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000);
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            <h4>Homework 10</h4>

            <div className={b.centralContainer}>
                {loading
                    ? (
                        <img className={s.spinner} src='https://www.terme-krka.com/themes/tk/images/ajax-loading.gif'
                             alt={'spinner'}/>
                    ) : (
                        <div>
                            <SuperButton onClick={setLoading}>set loading...</SuperButton>
                        </div>
                    )
                }
            </div>

            <hr/>
        </div>
    )
}

export default HW10
