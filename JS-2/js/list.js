function newElement(){
    const textInput = document.getElementById("task");
    const text = textInput.value;
    const newItem = document.getElementById("list");
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(text));
    newItem.appendChild(listItem);
    textInput.value = "";   

    
    console.log(text)

}