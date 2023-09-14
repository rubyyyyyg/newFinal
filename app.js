


 $('#button').on("click", function displayPost(event){
    event.preventDefault();
   let commentInput = $('#commentSection').val() ;
   let nameInput = $('#displayName').val() ;
    newPost(commentInput,nameInput); 

    const editButton = document.getElementById("edit");
editButton.addEventListener("click", function() {
    (commentInput).contentEditable = true;
  } );
});

function newPost(name,text) {
    let post = `
        <div class="whole">
            <div class="image">
            <img src="C:/Users/rubyg/Downloads/intro2web/final project/images/avatar.jpg" alt="avatar image"></img>
            </div>
            <div class="n">
                ${text}
            </div>
            <div class="com">
            ${name}
         </div>
         <button type="submit" id="edit">Edit</button>
        </div>
    `
$('#bodyPart').append(post);

};


