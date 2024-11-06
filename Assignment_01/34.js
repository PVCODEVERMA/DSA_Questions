// Write a code that takes a dictionary as input and return a sorted version of it based on the values. you can choose whether to sort in ascending or descending order .


// let dict = {
//     'apple': 5,
//     'banana': 2,
//     'cherry': 8,
//     'date': 6
//   };

//output:- Sorted in Ascending order: { banana: 2, apple: 5, date: 6, cherry: 8 }
//output:- Sorted in Descending order: { cherry: 8, date: 6, apple: 5, banana: 2 }

function sortDictionaryByValues(dict,ascending = true){

    let items = Object.entries(dict);

    items.sort((a,b) => {
        return ascending ? a[1] - b[1] : b[1] - a[1];
    });
    let sortedDict = {};
    items.forEach(([key,value]) => {
        sortedDict[key] = value;
    });
    return sortedDict;


}


let dict = {
    'apple': 5,
    'banana': 2,
    'cherry': 8,
    'date': 6
};

let sortedAsc = sortDictionaryByValues(dict, true);
console.log("Sorted in Ascending order:",sortedAsc);

let sortedDesc = sortDictionaryByValues(dict, false);
console.log("Sorted in Descending order:", sortedDesc);
