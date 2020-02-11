function clearStack() {
    document.getElementById("stackFrame").innerHTML = "";
}
function clearVariables() {
    document.getElementById("variableFrame").innerHTML = "";
}
function setInstructionOn () {
    document.getElementById("instructionPointer").innerHTML = ip;
}
function setAccumulator(){
    document.getElementById("accumlator").innerHTML = ACC;
}
function buildStack() {
    clearStack();
    var ul = document.createElement('ul');
    ul.setAttribute('id','proList');

    //let g = document.getElementById("stackFrame");
    document.getElementById("stackFrame").appendChild(ul);
    STACK.forEach(renderProductList);

    function renderProductList(element, index, arr) {
        var li = document.createElement('li');
        li.setAttribute('class','item');

        ul.appendChild(li);

        li.innerHTML=li.innerHTML + element;
    }
}
function buildVariables() {
    console.log(VARS)
    clearVariables();
    var ul = document.createElement('ul');
    ul.setAttribute('id','proList');

    //let g = document.getElementById("stackFrame");
    document.getElementById("variableFrame").appendChild(ul);
    VARS.forEach(renderProductList);

    function renderProductList(element, index, arr) {
        var li = document.createElement('li');
        li.setAttribute('class','item');

        ul.appendChild(li);

        li.innerHTML=li.innerHTML + element.name + ":" + element.value;
    }
}