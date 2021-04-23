// b1 : tao nen mot arrat moi 
// b2 : lap qua tung phan tu cua str1 
// b3 : result =  str1.charAt(i)+str2.charAt(i)
// if s
function merge2String(str1, str2) {

    let result = "";
    let count = 0;
    for (let i = 0; i < str1.length; i++) {

        result = result + (str1.charAt(i) + str2.charAt(i));
        console.log(result)
        count++;
        console.log("count : ", count);

        // if (count == str2.length - 1) {
        //     break;
        // }

    }
    console.log("count after loop : ", count);
    console.log(str2.length)
    if (count <= str2.length - 1) {
        console.log("result before : ", result);
        console.log("substring of s2 : ", str2.substring(count, str2.length + 1))
        result = result + str2.substring(count, str2.length + 1);
        console.log("result after : ", result);

    }
    return result;



}
console.log(merge2String("abcd", "0123"));