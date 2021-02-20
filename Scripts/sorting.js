var lists = document.getElementById('List');

lists.addEventListener('click',function(list){
    if(list.target.tagName === 'LI')
    list.target.classList.toggle('checked');
});

// Making Variables for calling Markings
var allBooks = document.getElementById('marking');
var completed = document.getElementById('marking-1');
var reading = document.getElementById('marking-2');




// Function for Completed Only
completed.onclick = function(){
    var liTags = document.querySelectorAll('#List > li');

    /* I am using this function in every */
    Array.from(liTags).forEach(function(list){
        list.style.display = 'block';
    });
    /* to reset the lists as it has a bug
    It selects from existing only thus giving
    no if not all books was selected first*/

    Array.from(liTags).forEach(function(list){
        if(list.className != 'checked')
        list.style.display = 'none';
    });
}


// Function for Currently Reading
reading.onclick = function(){
    var liTags = document.querySelectorAll('#List > li');
    Array.from(liTags).forEach(function(list){
        list.style.display = 'block';
    });
    Array.from(liTags).forEach(function(list){
        if(list.className === 'checked')
        list.style.display = 'none';
    });
}


//FUnction for All Books
allBooks.onclick = function(){
    var liTags = document.querySelectorAll('#List > li');
    Array.from(liTags).forEach(function(list){
        list.style.display = 'block';
    });
}

