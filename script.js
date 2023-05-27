function stringeExperiments (){
    var inputText = "Hello"
     inputText = document.getElementById("htmlInputText").value
    for (let index = 0; index < inputText.length; index++) {
        document.getElementById("toDisplay").innerText = inputText[index]
        
    }
}