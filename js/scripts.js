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

//document ready
$(function() {
  var toDoList = new List();
  var fetchId = -1;
  //add todo item to list on click
  $("#input-submit").click(function(event) {
    event.preventDefault();
    var thingInput = $("input[name='to-do']").val();
    var newItem = new ToDoItem(thingInput);
    toDoList.addItem(newItem);
    console.log(toDoList);
    $("#printed-list").append("<li>" + newItem.thing + "</li>");

  });

  //modal on click
  $('#printed-list').on('click', "li", function(event){
    event.preventDefault();
    var itemText = $(this).text();
    for (i=0; i< toDoList.items.length; i++) {
      if (toDoList.items[i].thing === itemText){
        fetchId = toDoList.items[i].id;
      }
    }
    $('#editModal').modal("show");
  });

  //save modal info
  $('#submitDetails').on('click', function(event){
    event.preventDefault();
    toDoList.items[fetchId].location = $('input[name="location"]').val();
    toDoList.items[fetchId].time = $('input[name="time"]').val();
    toDoList.items[fetchId].deadline = $('input[name="deadline"]').val();
    $('#editModal').modal("hide");
    console.log(toDoList.items);
    $('#printed-list').append("<li>Location: " + toDoList.items[fetchId].location + "</li>");
    fetchId = -1;
  });
  //clear form info when modal hides
  $('#editModal').on('hidden.bs.modal', function (e) {
    $('#edit-form').trigger("reset");
  });

});
