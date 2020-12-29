import React, {useState} from 'react';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import {AuthTestType, requestAPI} from './RequestsAPI';


export const Request = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const [response, setResponse] = useState(null)

    let body: AuthTestType = {success: checked}

    const requestAuth = () => {
        debugger
        requestAPI.authTest(body).then(res => setResponse(res))

    }

    return <>
        <SuperButton onClick={requestAuth}>Request</SuperButton>

        <SuperCheckbox
            checked={checked}
            onChangeChecked={setChecked}
        >
            <span>Set success</span>
        </SuperCheckbox>
        <p >{`Response : ${response ? response : ''}`}</p>
    </>

}
