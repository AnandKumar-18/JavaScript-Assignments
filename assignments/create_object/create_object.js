function CreateObject(arr) {
    // Write your code here
    var new_arr = {};
    //console.log(arr.length)
    i=0
    while (i< arr.length){
    new_arr[arr[i]] = arr[i+1];
    i+=2
    }
    return new_arr;
}

module.exports = CreateObject;
