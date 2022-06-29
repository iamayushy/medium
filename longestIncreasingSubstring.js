// Find the longest Increasing Subarray

function longIncSub(arr){
    let n = arr.length;
    let MAX = -999
    let c = 1 // Maximum

    for(let i = 1; i < n; i++){
        if(arr[i] > arr[i - 1]){
            c++
        }
        else{
            if(MAX < c){
                MAX = c
            }

            c = 1 // If the first loop breaks and it's lower than the last maximum
        }
    }

    if(MAX < c){
        MAX = c
    }

    return MAX
}

const arr = [65, 90, 90, 43, 44, 62, 95, 80, 24, 84, 58, 49, 84, 88]
console.log(longIncSub(arr))
