document.getElementById("book-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get input values
  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;

  // Create new book object
  var book = {
    title: title,
    author: author,
  };

  // Add book to list
  addBookToList(book);

  // Clear form inputs
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
});

function addBookToList(book) {
  var list = document.getElementById("book-list");

  // Create list item
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.innerHTML = `<strong>${book.title}</strong> by ${book.author} <button class="btn btn-danger btn-sm float-right delete">Delete</button>`;

  // Add event listener to delete button
  li.querySelector(".delete").addEventListener("click", function () {
    li.remove();
  });

  // Append to list
  list.appendChild(li);
}
