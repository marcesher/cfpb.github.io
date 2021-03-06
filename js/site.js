(function( $ ) {
  $( '.js-recruit-submit' ).on( 'click', function( event ) {
    var $form = $( this ).closest( '.recruit-form' );
    event.preventDefault();

    var recruitName = $form.find( '.js-recruit-name' ).val() || '';
    var recruitEmail = $form.find( '.js-recruit-email' ).val() || '';
    var discipline = $form.find( '.js-recruit-discipline' ).val() || '';
    var url = 'mailto:tech@cfpb.gov?subject=' +
              'Interested in working in tech at CFPB&body=' +
              'Full name: ' +
              recruitName +
              '%0D%0A%0D%0AEmail: ' +
              recruitEmail +
              '%0D%0A%0D%0ADiscipline: ' +
              discipline +
              '%0D%0A%0D%0ABe sure to attach your resume ' +
              'and remove this line before sending';

    window.location.href = url;
  } );

})( jQuery );
