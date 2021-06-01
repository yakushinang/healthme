
export function mergeDataItems(allItems, selectedItems){
    const filteredAllItems = allItems.filter(item => !selectedItems[generateKey(item)] )
    const selectedItemsList = Object.keys(selectedItems).map(item => ({ rank:selectedItems[item].rank , brandName:selectedItems[item].brandName})).sort(compareItems)
    return [...selectedItemsList, ...filteredAllItems]
} 

function compareItems(a,b){
    return a.rank-b.rank
}

export function generateKey(item){
    return item.rank+item.brandName
}

export function cn(){
    const args = [...arguments];
    const cn = args.reduce((acc,value)=>{
        acc += value ? " " + value : " "
        return acc
    }, "")
    return cn.trim();
}