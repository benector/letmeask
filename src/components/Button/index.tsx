import {ButtonHTMLAttributes } from "react";

import './styles.scss'

type ButtonProps =ButtonHTMLAttributes<HTMLButtonElement> & {
    isOutlined?:boolean;
    classes?:string;
};

export function Button({isOutlined = false, classes,...props} : ButtonProps){
    return(
        <button className={classes + ` button ${isOutlined && 'outlined'}`} {...props}/>
    )
}

