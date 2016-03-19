// Creates a Modal for any image in the gallery clicked

$('.thumbnail').click(function(){
    $('.modal-body').empty();
    var title = $(this).parent('a').attr("title");
    $('.modal-title').html(title);
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#myModal').modal({show:true});
});

// Automatically fits the Modal and Image to the screen.

// $('#myModal').on('show.bs.modal', function () {
//   $('.modal-content').css('height',$( window ).height()*0.8);
//   $('.img-responsive').css('height', $( ".modal-content").height()*0.8);
// });

// $('#close').on('show.bs.modal', function () {
//   $('.img-responsive').css('height', 100%);
// });

