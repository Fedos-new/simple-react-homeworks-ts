import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC} from './bll/themeReducer';
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>((state) => state.themeColor.theme); // useSelector
    const dispatch = useDispatch()
    const onChangeCallback = (theme: string) => {
        dispatch(changeThemeC(theme))
    }

    // useDispatch, onChangeCallback

    return (
        <div>
            <div className={s[theme]}>
                <hr/>

                <span className={s[theme + '-text']}>
                homeworks 12
            </span>


                {/*should work (должно работать)*/}

                <div className={s.select}>
                    <SuperSelect
                        options={themes}
                        value={theme}
                        onChangeOption={onChangeCallback}

                    />

                    {/*SuperSelect or SuperRadio*/}
                </div>
                {/*<SuperRadio*/}
                {/*    name={"radio"}*/}
                {/*    options={themes}*/}
                {/*    value={theme}*/}
                {/*    onChangeOption={onChangeCallback}*/}
                {/*/>*/}
                <hr/>
            </div>
        </div>
    );
}

export default HW12;
