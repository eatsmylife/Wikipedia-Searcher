$(document).ready(function () {
  // Handler for .ready() called.
  $(".line4").hide();

  $(".fa-search").click(function () {
    $(".line3").fadeOut(1, function () {
      $(".line4").fadeIn();
    });
  });

  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&formatversion=2&generator=prefixsearch&gpslimit=10&prop=pageimages|pageterms&piprop=thumbnail&pithumbsize=50&pilimit=10&redirects=&wbptterms=description',
    data: { gpssearch: 'omg', format: 'json' },
    dataType: 'jsonp',
    success: function (x) {
      //console.log(x.query.pages[0].pageid, x.query.pages[1].pageid);

      for (i = 0; i < x.query.pages.length; i++) {
        console.log(x.query.pages[i].title, x.query.pages[i].pageid);
      }

    }
  });

});