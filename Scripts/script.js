var addBtn = document.getElementById("btn");
var listings = document.getElementsByClassName('DEL');
var currentIndex = listings.length;


//-----------------------------------------------------------
// For Clicking
addBtn.addEventListener('click', () => {
    if (document.getElementById("AddBook").value === "")
        window.alert("Field Must Not Be Empty!!!");
    else
        addingBooks();
});

var inputBox = document.getElementById("AddBook");
inputBox.addEventListener("keypress", function (event) {
    if (event.key === 'Enter')
        if (document.getElementById("AddBook").value === "")
            window.alert("Field Must Not Be Empty!!!");
        else
            addingBooks();
});


// Main Function to be called 
function addingBooks() {
    // For Input Data
    var addBook = document.getElementById("AddBook");
    var nameOfBook = addBook.value;

    // Creating Name Tag
    var span = document.createElement('span');
    span.innerText = nameOfBook;
    span.className = "Books";

    //Creating Delete Button
    var Button = document.createElement('button');
    Button.innerText = "DELETE";
    Button.className = "DEL";
    Button.id = `${currentIndex + 1}`;

    // Creating a list containing both Name and Delete
    var list = document.createElement('li');
    list.appendChild(span);
    list.appendChild(Button);

    //Adding in the html file
    document.getElementById('List').appendChild(list);
    addBook.value = ""; //Resetting the input box

    currentIndex = listings.length;

    let msg = document.getElementById('data-sent');
    msg.style.display = 'block';

    setTimeout(() => {
        msg.style.display = 'none';
    }, 3000);
    clearTimeout();

}


//-------------------------------------------------------------



//---------------------------------------------------------------
//////////////Deleting Node
var listTable = document.getElementById('List');

//Id not changed Need to work on.

listTable.addEventListener('mouseover', () => {
    deL();
});

function deL() {
    Array.from(listings).forEach(function (list) {
        list.onclick = function () {
            this.parentElement.remove();
            currentIndex = listings.length;

            let msg = document.getElementById('data-del');
            msg.style.display = 'block';

            setTimeout(() => {
                msg.style.display = 'none';
            }, 3000);
        }
    });
}

//-----------------------------------------------

//-------------------------------------------------

var searchBar = document.getElementById('Searching');

searchBar.addEventListener('keyup', () => {
    result();
});

function result() {
    var search = searchBar.value.toLowerCase();
    var books = document.getElementsByClassName("Books");
    Array.from(books).forEach(function (book) {
        var title = book.innerText.toLowerCase();
        if (title.indexOf(search) === -1)
            book.parentElement.style.display = "none";
        else {
            book.parentElement.style.display = "block";
        }
    });
    console.log(search);

}