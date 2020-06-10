$(function() {$('#featureModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var heading = button.data('heading') // Extract info from data-* attributes
  var content1 = button.data('content1')
  var content2 = button.data('content2')
  var contentImage = button.data('image')
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text(heading)
  modal.find('.content-1').text(content1)
  modal.find('.content-2').text(content2)
  modal.find('#modal-image').attr("src", "Images/b2b/features/" + contentImage)
});
})