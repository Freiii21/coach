import {FC} from 'react';
import s from './Header.module.css'
import {English}  from '../Translation/Translation'

export const Header: FC = () => {
    return (
        <div className={s.common}>
            {English.appTitle}
        </div>
    )
}