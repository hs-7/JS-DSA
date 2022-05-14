//String Anagram

let str1 = "hello"
let str2 = "llohe"

function CheckAnagram(str01, str02){
    if(str01.length != str02.length){
        return false
    }

    let counter = {} 
    for (const letter of str1) {
        counter[letter] = (counter[letter] || 0) + 1
    }
    for (const value of str02) {
        if(!counter[value]){
            return false
        }
        counter[value]--
    }
    return true
}

result = CheckAnagram(str1, str2)
console.log(result)