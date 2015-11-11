console.log('newPost.js');

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
  evt.preventDefault();
  console.log('creating new post!');
  $.ajax({
    method: "POST",
    url: "/newpost",
    data: $(this).serialize(),
    success: swal({
      title: "Success!",
      text: "Your post was submitted",
      type: "success"
    },
    function() {
      window.location = "/";
    })
  });

});
