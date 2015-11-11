console.log('newPost.js');

// Submit
function createNewPost() {

}

// function createNewPostAjax() {
//   console.log('createNewPostAjax');
//   $.ajax({
//     method: "POST",
//     url: "/newpost",
//     data: {
//       testValue: $('#test-field').val()
//     }
//   });
// }

/*
    Flow:
    Click the button submit button
    Submit the data
    If successful, show the success message
    If not, show the error message
*/

// Listen for events
$('#new-post').submit(function(evt) {
  console.log('creating new post!');
});
