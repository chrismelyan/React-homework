import React from 'react'
import s from './Navlinks.module.css'

function Error404() {
    return (
        <div className={s.errorPage}>
            <div>
                <img
                    src={'https://ubiq.co/tech-blog/wp-content/uploads/2020/11/How-to-Make-a-Custom-404-Page.jpg'}/>
            </div>
        </div>
    )
}

export default Error404
