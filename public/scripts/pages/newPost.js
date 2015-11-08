console.log('newPost.js');

// Submit
function createNewPost() {

}

function createNewPostAjax() {
  console.log('createNewPostAjax');
  $.ajax({
    method: "POST",
    url: "/newpost",
    data: {
      testValue: $('#test-field').val()
    }

  });
}

// Listen for events
$('#new-post').submit(function(evt) {
  console.log('creating new post!');
  createNewPostAjax();
});
