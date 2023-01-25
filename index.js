const findItemByAnyIndex = (items, index) => {
  const length = items.length
  
  if(index < length && index > -1) return items[index]

  if(index >= length) {
    const convertedIndex = index - length
    
    return index > length 
       ? findItemByAnyIndex(items, convertedIndex)
       : items[convertedIndex]
  } 
  
  if(index < 0) {
    const convertedIndex = length + index
    
    return index < -length 
      ? findItemByAnyIndex(items, convertedIndex)
      : items[convertedIndex]
  }
}

console.log(findItemByAnyIndex([1, 2, 3], -1)) // return: 3
console.log(findItemByAnyIndex([1, 2, 3], 4)) // return: 1
