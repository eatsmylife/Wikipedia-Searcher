$(document).ready(function () {
  // Handler for .ready() called.
  $(".line4").hide();

  $(".fa-search").click(function () {
    $(".line3").fadeOut(1, function () {
      $(".line4").fadeIn();
    });
  }); 

});

function onCancel() {
  $(".main").animate({
    marginTop: "40vh"
  });
}

function onSearch() {
  $(".main").animate({
    marginTop: "10vh"
  });
  $(".line5").html("");
  var search = document.getElementById("search-bar").value;
  $.ajax({
    url: 'https://en.wikipedia.org/w/api.php?action=query&formatversion=2&generator=prefixsearch&gpslimit=10&prop=pageimages|pageterms&piprop=thumbnail&pithumbsize=50&pilimit=10&redirects=&wbptterms=description',
    data: { gpssearch: search, format: 'json' },
    dataType: 'jsonp',
    success: function (x) {
      for (i = 0; i < x.query.pages.length; i++) {
        console.log(x.query.pages[i].title, x.query.pages[i].pageid);
        $(".line5").append("<a " + "href='https://en.wikipedia.org/?curid=" + x.query.pages[i].pageid + "'" + "target = '_blank'" + "><div><h3>" + x.query.pages[i].title + "</h3></div></a>");
      }
    }
  });
}