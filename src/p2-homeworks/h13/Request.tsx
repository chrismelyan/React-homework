import React, {useState} from 'react'
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import {requestsAPI} from "./RequestsAPI";

function Request() {
    const [success, setSuccess] = useState<boolean>(false)
    const [data, setData] = useState<string>('')

    const request = () => {
        requestsAPI.request(success)
            .then(res => setData(res.data.errorText))
            .catch(er => setData(er.response.data.errorText))
    }

    return (
        <div>
            <div style={{color: "#FE1100"}}>
                {data}
            </div>

            <SuperCheckbox checked={success} onChangeChecked={setSuccess}/>
            <SuperButton onClick={request}>Request</SuperButton>

        </div>
    )
}

export default Request
