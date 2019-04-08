function ToDoItem(thing, time, location, deadline) {
  this.thing = thing,
  this.time = "",
  this.location = "",
  this.deadline = "",
  this.id = 0
}

function List() {
  this.items = [],
  this.currentId = -1
}

List.prototype.addItem = function(item) {
  item.id = this.assignId();
  this.items.push(item);
}

List.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

$(function() {
  var toDoList = new List();
  $("#input-submit").click(function(event) {
    event.preventDefault();
    var thingInput = $("input[name='to-do']").val();
    var newItem = new ToDoItem(thingInput);
    toDoList.addItem(newItem);
    console.log(toDoList);
    $("#printed-list").append("<li>" + newItem.thing + "</li>");
  });
});
