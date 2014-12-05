$(function () {

  /*var titles = [
    {
      "title": "Mixture. The perfect front-end development tool for Mac & Windows."
    },
    {
      "title": "Bringing together the very best tools and practices for designers &amp; developers."
    },
    {
      "title": "Your perfect Mix."
    }
  ]*/

  //$("body").prepend('<span class="maintenance">Mixture\'s online services will be down for a small period of maintenance today (April 17th) - please follow us on <a href="https://twitter.com/teammixture">Twitter for updates</a>.</span>')
  //$("span.maintenance").on("click", function () { $(this).remove(); });

  var isMacLike = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)?true:false;

  if (isMacLike) {
    $("body").prepend("<div class='warning'>If you're on the beta of Yosemite you may experience issues &mdash; we are working on support for this OS.</div>")
  }

  var titles = [
    {
      "title": "Mixture. A rapid front-end development toolset for Mac & Windows."
    },
    {
      "title": "Focus on the build not the setup."
    }
  ]

  var current = 0;

  setInterval(function() {
      current++;
      if (current > titles.length-1)
        current = 0;
      $(".line h1").fadeOut(300, function() {
        $(this).html(titles[current].title);
        $(this).fadeIn(300);
        //if (current === 2)
        //  $("#js-features").css({ "color":"#00aef0","border-color":"#00aef0" });
      });
  }, 4000);

  var quotes = [
    {
      "quote": "\"As a front-end dev, I want to follow best practices and automate as much as possible. With Mixture, I don't even have to think about those things as they're built in to the local and server environments.\" <a class='quotee' href='http://twitter.com/dandenney'>Dan Denney</a>",
      "img": "https://s3.amazonaws.com/mixture-mixed/1/6245/assets/quotes/dan-quote.png",
      "style": false
    },
    {
      "quote": "\"I have been using Mixture since the very early beta release. It quickly became an integral part of my workflow and with the introduction of Simple Mode has become indispensable. Easy to use, fully featured and time saving all in one neat package - what's not to like?\" <a class='quotee' href='https://twitter.com/keirwhitaker'>Keir Whitaker</a>",
      "img": "https://s3.amazonaws.com/mixture-mixed/1/6245/assets/quotes/keir-quote.jpg",
      "style": true
    },
    {
      "quote": "\"Mixture is by far the most powerful and feature rich front end/prototyping tool I’ve ever worked with. Built, updated and documented at a mind boggling rate. This product will undoubtedly change the way you work.\" <a class='quotee' href='http://twitter.com/benjaminparry'>Benjamin Parry</a>",
      "img": "https://s3.amazonaws.com/mixture-mixed/1/6245/assets/quotes/ben-quote.jpg",
      "style": true
    },
    {
      "quote": "\"With Mixture I don't have to bother with preprocessor compilation, CSS and JS minification or even PNG optimisation, I just open it, create or import a project and start coding. Beware, you'll get addicted to automagical live refresh and multi-device testing too!\" <a class='quotee' href='http://twitter.com/walterstephanie'>Stéphanie Walter</a>",
      "img": "https://s3.amazonaws.com/mixture-mixed/1/6245/assets/quotes/steph-quote.jpg",
      "style": true
    },
    {
      "quote": "\"We <3 Mixture. It takes the hassle out of prototyping and allows us to develop faster while easily involving the whole team – and our clients – in the process; It truly helps us build the best we can build.\" <a class='quotee' href='http://twitter.com/livmadsen'>Liv Madsen</a>",
      "img": "https://s3.amazonaws.com/mixture-mixed/1/6245/assets/quotes/liv-quote.png",
      "style": true
    },
    {
      "quote": "\"The best workflow tool I've seen. Stunningly easy to use.\" <a class='quotee' href='http://twitter.com/jameswillweb'>James Williamson</a>",
      "img": "https://s3.amazonaws.com/mixture-mixed/1/6245/assets/quotes/james-quote.jpg",
      "style": true
    },
    {
      "quote": "\"Setting up an environment to build a static site in 2013 used to be such a drag. I'm sure it still would be in 2050 if mixture didn't stroll along. No longer do you have to bash your skull into your keyboard to make the internet. You can use your fingers! It's mystical, marvelous, magical, MMMMMMM.\" <a class='quotee' href='http://twitter.com/pasql'>Pasquale D'Silva</a>",
      "img": "https://s3.amazonaws.com/mixture-mixed/1/6245/assets/quotes/pasql-quote.png",
      "style": true
    }
  ];

  var currentQuote = 0;

  setInterval(function() { rotate(); }, 8000);

  function rotate() {

    var rnd = Math.floor(Math.random()*quotes.length);

    if (currentQuote === rnd)
      return;

    var quote = quotes[rnd];
    currentQuote = rnd;

    $(".quote").addClass("hide");
    
    setTimeout(function() {
      if (quote.style)
        $(".quote .quote__img").addClass("circle");
      else
        $(".quote .quote__img").removeClass("circle");

      $(".quote p").html(quote.quote);
      $(".quote .quote__img").css("background-image", "url(" + quote.img + ")");
      $(".quote").removeClass("hide");
    }, 800);
  }

  // Mobile only
  if (/mobile/i.test(navigator.userAgent)) {
    
    $(".button--download__mac, .button--download__windows").hide();

    sizeSections();
    
    $("section").css("opacity", 1);

    $(window).resize(function() {
      sizeSections();
    });

    function sizeSections() {
      var zoomLevel = document.documentElement.clientHeight / window.innerHeight;
      var height = window.innerHeight * zoomLevel;
      var percent = height/2;
      $("section").css({ "min-height": percent, "height": "auto" });
      $("section.hero,section.download").css({ "min-height": height, "height": "auto" });
      $(".table .content").css({ "min-height": "auto", "height": "auto" });
    }
  }
  else
  {
    sizeSections();
    $(window).resize(function() {
      sizeSections();
    });
    function sizeSections() {
      $(".table").css({ "height": $(".feature").height() });
    }
  }

  /*$.fn.classy = function(c) {
    var w = $(window);

    return this.each(function() {
      var $ele = $(this), top;
      w.on('scroll', function() {
        top = $ele.offset().top;
        var percent = (w.height()/100)*70;

        console.log("top: " + top);
        console.log("pos: " + (percent + w.scrollTop()))

        if(top < (percent + w.scrollTop()))
          return $ele.addClass(c);

        $ele.removeClass(c);
      });
    });
  };*/
  
  $.fn.classy = function(c) {
    var w = $(window);
    return this.each(function() {
      var $ele = $(this), top, h, y;
      top = $ele.offset().top; h = $ele.outerHeight();
        w.on('scroll', function() {
          y = w.scrollTop() + w.height() - top;
          if(y >= 0 && y - w.height() <= h) {
            return $ele.addClass(c);
          }
          $ele.removeClass(c);
        });
    });
  };

  $('.feature').classy('yolo');
  $('.feature__animation').classy('animate');

  $("a.button--download-link").on("click", function() {
    $(".feature").addClass("yolo");
    var target_offset = $("#download").offset();
    var target_top = target_offset.top;
    $('html, body').animate({scrollTop:target_top}, 1000);
    return false;
  });

  $("a.button--features-link").on("click", function() {
    var target_offset = $(this).parent("div").parent("section").next().offset();
    var target_top = target_offset.top;
    $('html, body').animate({scrollTop:target_top}, 750);
    return false;
  });

  $("a.button--download__mac").on("click", function() {
    _gaq.push(['_trackEvent', 'App', 'Downloaded', 'Mac']);
  });

  $("a.button--download__windows").on("click", function() {
    _gaq.push(['_trackEvent', 'App', 'Downloaded', 'Windows']);
  });

  $("a.button--download__chrome").on("click", function() {
    _gaq.push(['_trackEvent', 'Extension', 'Downloaded', 'Chrome']);
  });

  $("a.read-more").on("click", function() {
    $(this).parent("div").addClass("hide").removeClass("show");
    $(this).parent("div").next("div").addClass("show").removeClass("hide");
  });

  $("a.read-less").on("click", function() {
    $(this).parent("div").prev("div").addClass("show").removeClass("hide");
    $(this).parent("div").addClass("hide");
    setTimeout(function(){
      $(this).parent("div").removeClass("show");
    }, 500);
  });
});