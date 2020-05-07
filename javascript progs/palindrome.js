originalString= "madam"
backUp= originalString

var temp=backUp.split("").reverse("").join("")
if (originalString==temp){
    console.log("yes, It is palindrome")
}
else(console.log("no,it is not"))