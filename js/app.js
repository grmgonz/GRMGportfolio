//button for port
    $('.button-wrap').on("click", function() {
      $(this).toggleClass('button-active');
      $(".menu").toggleClass("closed");
      $("body").toggleClass("overlay");
      $(".title").hide();
      $(".view").hide();
      if ($(".menu").hasClass("closed")) {
        $(".main.button").text("View Portfolio");
        $(".title").show();
        $(".view").show();
      } else {
        $(".main.button").text("Close");
      }
    });
    //Open About Page
    function openNav() {
      document.getElementById("aboutPage").style.left = "0";
      $('.menu1').hide();
    }
    //Close About Page
    function closeNav() {
      document.getElementById("aboutPage").style.left = "-100%";
      $('.menu1').show();
    }
    //hamburger nav function
    $('.menu1 a').click(function() {
      $('.trigger').toggle();
      $('.menu1').toggleClass('round');
      $('.close').toggle();
      $('.drop-down').toggleClass('down');
      $('.menu').hide();
    });
    $('.menu1 .close').click(function() {
      $('.menu').show();
    });
    $('#about, #home, #ski, #cont').click(function() {
      $('.trigger').toggle();
      $('.menu1').toggleClass('round');
      $('.close').toggle();
      $('.drop-down').toggleClass('down');
      $('.menu').show();
    });
    //Title function
    function theWord(string) {
      $(string).each(function() {
        var theWord = $(this).text();
        theWord = theWord.split("");
        var splitPart = '';
        for (var i = 0, lengthyLength = theWord.length; i <
          lengthyLength; i++) {
          splitPart += '<span class="blurrr-' + i + '">' + theWord[i] +
            '</span>';
        }
        $(this).html(splitPart);
      });
    }
    $('document').ready(function() {
      var getThis = $('.continuous');
      theWord(getThis);
    });

    var modal1 = document.getElementById('modal1');
    var modal2 = document.getElementById('modal2');
    var modal3 = document.getElementById('modal3');
    var modal4 = document.getElementById('modal4');
    var modal5 = document.getElementById('modal5');
    var modal6 = document.getElementById('modal6');
    var modal7 = document.getElementById('modal7');
    // Get the button that opens the modal
    var btn1 = document.getElementById("myBtn1");
    var btn2 = document.getElementById("myBtn2");
    var btn3 = document.getElementById("myBtn3");
    var btn4 = document.getElementById("myBtn4");
    var btn5 = document.getElementById("myBtn5");
    var btn6 = document.getElementById("myBtn6");
    var btn7 = document.getElementById("myBtn7");
    // Get the <span> element that closes the modal
    var span1 = document.getElementsByClassName("closeModal1")[0];
    var span2 = document.getElementsByClassName("closeModal2")[0];
    var span3 = document.getElementsByClassName("closeModal3")[0];
    var span4 = document.getElementsByClassName("closeModal4")[0];
    var span5 = document.getElementsByClassName("closeModal5")[0];
    var span6 = document.getElementsByClassName("closeModal6")[0];
    var span7 = document.getElementsByClassName("closeModal7")[0];
    // When the user clicks on the button, open the modal
    btn1.onclick = function() {
      modal1.style.display = "block";
    }
    btn2.onclick = function() {
      modal2.style.display = "block";
    }
    btn3.onclick = function() {
      modal3.style.display = "block";
    }
    btn4.onclick = function() {
      modal4.style.display = "block";
    }
    btn5.onclick = function() {
      modal5.style.display = "block";
    }
    btn6.onclick = function() {
      modal6.style.display = "block";
    }
    btn7.onclick = function() {
      modal7.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span1.onclick = function() {
      modal1.style.display = "none";
    }
    span2.onclick = function() {
      modal2.style.display = "none";
    }
    span3.onclick = function() {
      modal3.style.display = "none";
    }
    span4.onclick = function() {
      modal4.style.display = "none";
    }
    span5.onclick = function() {
      modal5.style.display = "none";
    }
    span6.onclick = function() {
      modal6.style.display = "none";
    }
    span7.onclick = function() {
      modal7.style.display = "none";
    }
    // Get the modal
    var modalG = document.getElementById('popupEmail');
    // Get the button that opens the modal
    var btnG = document.getElementById("buttonG");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closeG")[0];
    // When the user clicks on the button, open the modal
    btnG.onclick = function() {
      modalG.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modalG.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modalG) {
        modalG.style.display = "none";
      }
    }
    $(document).ready(function() {
      $('[data-toggle="tooltip"]').tooltip();
    });


