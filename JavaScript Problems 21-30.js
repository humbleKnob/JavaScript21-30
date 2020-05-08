//21. countEvens
function countEvens(arr){
    var count = 0;
    for(var i = 0; i<arr.length; i++){
        if(arr[i]%2 == 0){
            count++;
        }
    }
    return count;
}
//22. countHi
function countHi(str){
    var count = 0;
    for(var i = 0; i<str.length; i++){
        if(str[i]=="h" &&str[i+1] =="i" ){
            count++;
        }
    }
    return count;
}
//23. no14
function no14(arr){
    var has1 = false;
    var has4 = false;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == 1){
            has1 = true;
        }
        if(arr[i] == 4){
            has4 = true;
        }
    }

    if(has4 == true && has1 == true){
        return false;
    } else {
        return true;
    }
}
//24. either24
function either24(arr){
    var has22 = false;
    var has44 = false;
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == 2 && arr[i+1] == 2){
            has22 = true;
        }
        if(arr[i] == 4 && arr[i+1] == 4){
            has44 = true;
        }
    }

    if((has22 == true && has44 == true)||(has22 == false && has44 == false)){
        return false;
    } else {
        return true;
    }
}

//25.makeChocolate
function makeChocolate(small, big, goal){
    var ableBig = goal/5
    if(big > ableBig){
        big = Math.floor(ableBig);
    }
    var smallNeed = goal - big*5
    if(smallNeed > small){
        return -1;
    } else {
        return smallNeed;
    }
}

//26. luckySum
function luckySum(num1, num2, num3){
    var int1 = num1;
    var int2 = num2;
    var int3 = num3;
    if(num1 == 13){
        int1 = 0;
        int2 = 0;
    }
    if(num2 == 13){
        int2 =0;
        int3 =0;
    }
    if(num3 == 13){
        int3 = 0;
    }
    return int1 + int2 + int3;
}

//27. maxBlock
function maxBlock(str){
    var count = 1;
    var i = 0;
    var count2 = 1;
    if(str.length == 0){
        return 0;
    }
    while(i < str.length - 1){
        if(str.charAt(i) == str.charAt(i +1)){
            count++;
            if(count > count2){
                count2 = count;
            }
        } else {
            count = 1;
        }
        i++;
    }
    return count2;
}
//28. linearIn
function linearIn(arr1, arr2){
    var i = 0;
    var o = 0;
    while(i < arr2.length && o < arr1.length){
        if( arr1[o] < arr2[i] ){
            o++;
        } else {
            if(arr2[i] < arr1[o]){
                return false;
            } else {
                i++;
            }
        }
    }

    if(i != arr2.length){
        return false;
    }
    return true;
}


//29. countTriple
function countTriple (str){
    var count = 0;
    for(var i = 0; i<str.length; i++){
        if(str[i] === str[i+1]&&str[i] === str[i+2]){
            count++;
        }
    }
    return count;
}

//30. sameEnds
function sameEnds(str){
    var end = str.substring(0, str.length/2)
    for(var i=0; i < str.length; i++) {
        if(end == str.substring(str.length - end.length)){
            return end;
        } else {
            end = end.substring(0, end.length -1 );
        }
    }
    return "";
}
//function that runs everything
function tester() {
    document.getElementById("output").innerHTML += countEvens([3, 2, 1, 5]);
    document.getElementById("output").innerHTML += countHi("hifourteenhi");
    document.getElementById("output").innerHTML += no14([4, 7, 9]);
    document.getElementById("output").innerHTML += either24([2, 4, 5, 1]);
    document.getElementById("output").innerHTML += makeChocolate(1, 4, 9);
    document.getElementById("output").innerHTML += luckySum(13, 3, 5);
    document.getElementById("output").innerHTML += maxBlock("gooooooop");
    document.getElementById("output").innerHTML += linearIn([1, 2, 4, 5], [-1]);
    document.getElementById("output").innerHTML += countTriple("aaatttiii");
    document.getElementById("output").innerHTML += sameEnds("xopppox");
}