function binarySearch(items, value) {
    var startIndex = 0;
    var endIndex = items.length - 1;
    var middle = Math.floor((startIndex + endIndex) / 2);
    
    while(items[middle] != value && startIndex < endIndex) {
        if(value < items[middle]) {
            endIndex = middle - 1;
        }
        else if (value > items[middle]) {
            startIndex = middle + 1;
        }
        middle = Math.floor((startIndex + endIndex) / 2);
    }
    return (items[middle] != value) ? -1 : middle;
    
}
