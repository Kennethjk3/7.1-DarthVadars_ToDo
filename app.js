;(function() {
  var list = document.querySelector("[data-js=todoItems]");
  var form = document.querySelector("[data-js=form]");
  var hide = document.querySelector("[data-js=hide]");

  form.addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
     event.preventDefault();
      var entry = document.querySelector("[data-js=entry]").value
      if( entry === "") {
        alert("These are not the tasks you are looking for");
      }
      else {
        var task,
            checkbox,
            text,
            button

        task = document.createElement("li");
        task.className += "todo__item";
        list.appendChild(task);

        checkbox = document.createElement("input")
        checkbox.type = "checkbox";
        checkbox.setAttribute("for", entry)
        task.appendChild(checkbox)

        text = document.createElement("label");
        text.setAttribute("for", entry);
        text.innerHTML = entry;
        task.appendChild(text)

      }
    }
    if(list.querySelectorAll('li').length > 0) {
      hide.style.display = 'none';
    }
  });

})();
