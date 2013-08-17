# jQuery plugin appendTo

Simple plugin to append in specific index position.

## Usage

Options:
* index: index position of the element
* content: element
* replace: if you wish replace the current element in the index position

```html
<div id="container">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
```
``` javascript
$(function () {
  $("#container")
    .appendAt(1, $("<p/>").html("paragraph 1"))
    .appendAt(5, $("<p/>").html("paragraph 2"))
    .appendAt(2, $("<p/>").html("paragraph 3"));
  
  // In this case the second paragraph replace the first
  $("#container")
    .appendAt(1, $("<p/>").html("paragraph 1"))
    .appendAt(1, $("<p/>").html("paragraph 2"), true);
});
```