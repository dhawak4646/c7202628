
let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        easing: "swing",
  
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h2");
  }
});



/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-1").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});



function registerform(){
  var name,password,email,opt;
  name=document.getElementById("name").value
  password=document.getElementById("password").value
  email=document.getElementById("email").value
  opt=prompt("Welcome " +name+" press 1 to continue" );
  if(name=="" && password=="" && email=="")
  {
    alert("Error please fill all the fields");
    return false;
  }
  else if (password=="") {
    alert("Error please fill the password");
    return false;
  }
  else if (name=="") {
    alert("Error please fill the username");
    return false;
  }
  else if (email=="") {
    alert("Error please fill the email");
    return false;
  }
  else
  {
    if (opt==1) {
    
     window.location="index.html"
     }
     else
     {
      alert('Go to index')
     }
    return false;
  }
return
}

function getstarted()
{
  window.location="index.html"
}
