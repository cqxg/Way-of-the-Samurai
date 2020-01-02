import React from 'react';

import style from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    105
                </div>
                <div className={style.dialog}>
                    FrinteZz
                </div>
                <div className={style.dialog}>
                    Gaming
                </div>
                <div className={style.dialog}>
                    Pominki
                </div>
                <div className={style.dialog}>
                    Side
                </div>
                <div className={style.dialog}>
                    EFsquad
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>qq all</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>gl gg wp</div>
            </div>
        </div>
    )
}

export default Dialogs;