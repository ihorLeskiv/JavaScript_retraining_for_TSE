var todoListAPP = todoListAPP || {};

todoListAPP.addTodo = function () {
    //creating list with todo items - > li > inputValue > a >X -- begin
        var liElTextNode = '',
            closeButton = '';
        
        input = document.getElementById("myInput").value;
        liEl = document.createElement('li'),
        liElTextNode = document.createTextNode(input);
        liEl.appendChild(liElTextNode);
        closeButton = document.createTextNode(' X ');
        aEl = document.createElement('a');
        aEl.appendChild(closeButton);
        liEl.appendChild(aEl);
        //creating list with todo items - > li > inputValue > a >X -- end

        //cheking if tag input is not empty and adding to the result wrapper -- begin
        if (input !== "") {
            document.getElementById("result").appendChild(liEl); 
            document.getElementById("myInput").value = ""; //reset input field;
        };
        //cheking if tag input is not empty and adding to the result wrapper -- end
};
//attaching events -- begin
todoListAPP.attachEvents = function() {
    document.getElementsByTagName("button")[0].addEventListener("click", function(event) {
        event.preventDefault();
        todoListAPP.addTodo();
    });

    document.getElementById("result").addEventListener("click", function(e) {
        if(e.target && e.target.nodeName == "A") {
            console.log("test");
            var el = e.target.parentNode;
            //removeTodo(el);
            todoListAPP.removeTodo(el);
        }
    });
}

todoListAPP.initialization = function() {
    todoListAPP.attachEvents();
}
//attaching events -- end

// remove elemnt from list -- begin 
todoListAPP.removeTodo = function (el) {
    el.parentNode.removeChild(el); //remove item form todolist
}    
// remove elemnt from list -- end

todoListAPP.initialization(); //runing addTodo fucntionality 