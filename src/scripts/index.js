require ('./../scss/style.scss');


$(document).ready(function(){
         $(".board-section-button").click(function(e){
             let buttonAttr = $(e.target).attr('data-value');
             $('.sticker-section[data-target='+buttonAttr+']').append('<p></p>');
             $('p').addClass('sticker');
             $('.sticker').draggable({
                revert: 'invalid',
                cursor: "move",
                cursorAt: { top: 50, left: 50 },
                 drag: function(event, ui) {
                    $('.sticker-section')
                 }
              });
              $('.sticker-section' ).droppable({
                 accept: '.sticker',
                 drop: function(event, ui) {
                  $(this)
                  .append(ui.draggable.css({
                    position: 'relative',
                    left: '0px',
                    top: '0px',
                 }))
               }
              });
             $('p').change(function (e) {
                if ($.trim($(e.target).val()).length < 1) {       
                   $(e.target).remove()
                } else {        
                    $(e.target).show()
                }
            });
            $('p').on('blur', '', function(e) {
                if ($.trim($(e.target).val()).length < 1) {
                    $(e.target).remove()  
                }
                else {
                    $(e.target).show()
                }
              });
         }); 
});

