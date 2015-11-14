console.log('newPost.js');

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
