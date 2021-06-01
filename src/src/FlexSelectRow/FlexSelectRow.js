import React from 'react';
import { cn } from '../helpers/helpers';
import styles from "./FlexSelectRow.module.css"


const FlexSelectRow = ({classes, data, onCheck, checked, disabled}) =>{
    return(
        <div className={cn(styles.container, classes?.container)}>
            {onCheck && <span><input type="checkbox" onChange={()=>onCheck(data)} checked={checked} disabled={disabled}/></span>}
            {Object.keys(data).map(item=><span>{data[item]}</span>)}
        </div>
    )
}

export default FlexSelectRow