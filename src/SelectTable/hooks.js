import  {useState }from "react";
import {mergeDataItems, generateKey} from './helpers'


export const useSelectTable = (tableData) =>{
    const [selectedItems, setSelectedItems] = useState({})

    const onCheck = (itemData) => {
        const {rank, brandName} = itemData
        const key = generateKey(itemData)
        setSelectedItems({...selectedItems, [key]:{rank:rank,brandName:brandName}})
        if(selectedItems[key] ){
            const deleteItem = {...selectedItems}
            delete deleteItem[key]
            setSelectedItems(deleteItem)
         }
    }

    const mergeList = mergeDataItems(tableData, selectedItems)

    return{
        onCheck,
        selectedItems,
        mergeList
    }
}
