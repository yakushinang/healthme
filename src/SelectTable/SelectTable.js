import React from 'react';
import styles from './SelectTable.module.css';
import FlexSelectRow from '../FlexSelectRow/FlexSelectRow'
import {useSelectTable} from './hooks'
import {generateKey} from './helpers'
import { table_data } from './consts';
import { cn } from '../helpers/helpers';
// Assuming the data was fetch as json



const SelectTable = ()=>{
    const {onCheck, selectedItems,mergeList} =  useSelectTable(table_data)

    const generateRow = (item) =>{
        const key = generateKey(item)
        const selected = selectedItems[key]? true : false
        const disabled  = Object.keys(selectedItems).length === 6 && !selected
        return <FlexSelectRow classes={{container: styles.tableRow}} data={item} key={key} onCheck={onCheck} checked={selected} disabled={disabled}/>
    }

    return(
        <div className={cn(styles.tableContainer)}>
            <FlexSelectRow classes={{container: cn(styles.tableRow, styles.tableHead)}} data={["","Rank","Brand Name"]} />
            {mergeList.map((item)=>generateRow(item))}
        </div>
    )
}

export default SelectTable