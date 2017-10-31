var todolist = /** @class */ (function () {
    function todolist() {
        this.todos = new Array();
    }
    todolist.prototype.addTodo = function (item) {
        this.todos.push(item);
    };
    todolist.prototype.completeTodo = function (key) {
        this.todos[key].status = "Complete";
        this.display();
    };
    todolist.prototype.deleteTodo = function (key) {
        this.todos[key].status = "Delete";
        this.display();
    };
    todolist.prototype.editTodo = function (newtext, key) {
        this.todos[key].name = newtext;
    };
    todolist.prototype.display = function () {
        var ActiveList = document.getElementById('todoListActive');
        ActiveList.innerHTML = "";
        var CompletedList = document.getElementById('todoListCompleted');
        CompletedList.innerHTML = "";
        var DeletedList = document.getElementById('todoListDeleted');
        DeletedList.innerHTML = "";
        if (ActiveList || CompletedList || DeletedList) {
            for (var key = 0; key < this.todos.length; key++) {
                if (this.todos[key].status == "Active") {
                    var Element = document.createElement('div');
                    var namediv = document.createElement('div');
                    namediv.setAttribute("id", "div" + key);
                    namediv.innerText = this.todos[key].name;
                    var Editbutton = document.createElement('button');
                    Editbutton.setAttribute("id", "button" + key);
                    Editbutton.innerText = "Update";
                    Editbutton.setAttribute("onclick", "EditTodo(" + key + ")");
                    var markbutton = document.createElement('button');
                    markbutton.innerText = "Complete";
                    markbutton.setAttribute("class", "marktodo");
                    markbutton.setAttribute("onclick", "CompleteTodo(" + key + ")");
                    var deletebutton = document.createElement('button');
                    deletebutton.innerText = "Delete";
                    deletebutton.setAttribute("class", "marktodo");
                    deletebutton.setAttribute("onclick", "DeletedTodo(" + key + ")");
                    ActiveList.appendChild(Element);
                    ActiveList.appendChild(namediv);
                    ActiveList.appendChild(Editbutton);
                    ActiveList.appendChild(markbutton);
                    ActiveList.appendChild(deletebutton);
                }
                if (this.todos[key].status == "Complete") {
                    var Element = document.createElement('div');
                    var name = document.createTextNode(this.todos[key].name);
                    var deletebutton = document.createElement('button');
                    deletebutton.innerText = "Delete";
                    deletebutton.setAttribute("class", "marktodo");
                    deletebutton.setAttribute("onclick", "DeletedTodo(" + key + ")");
                    CompletedList.appendChild(name);
                    CompletedList.appendChild(deletebutton);
                    CompletedList.appendChild(Element);
                }
                if (this.todos[key].status == "Delete") {
                    var Element = document.createElement('div');
                    var name = document.createTextNode(this.todos[key].name);
                    DeletedList.appendChild(name);
                    DeletedList.appendChild(Element);
                }
            }
        }
    };
    return todolist;
}());
var newtodo = new todolist();
function Additem(value, sta) {
    newtodo.addTodo({ name: value, status: sta });
}
function CompleteTodo(k) {
    newtodo.completeTodo(k);
    console.log(newtodo.todos);
}
function DeletedTodo(key) {
    newtodo.deleteTodo(key);
    console.log(newtodo.todos);
}
function SaveTodo(key) {
    var Edittodo = document.getElementById("div" + key);
    newtodo.todos[key].name = Edittodo.innerText;
    var EDIT = document.getElementById("button" + key);
    EDIT.innerText = "Update";
    EDIT.setAttribute("onclick", "EditTodo(" + key + ")");
}
function EditTodo(key) {
    var edit = document.getElementById("div" + key);
    edit.contentEditable = "" + true;
    edit.style.border = "" + true;
    var save = document.getElementById("button" + key);
    save.innerText = "save";
    save.setAttribute("onclick", "SaveTodo(" + key + ")");
}
function Display() {
    newtodo.display();
}
