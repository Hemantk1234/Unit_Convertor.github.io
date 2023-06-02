// Created by Hemant Kumbhalkar

window.onload = function () {
  const slider = () => {
    const menu = document.getElementsByClassName("menu");
    const nav = document.getElementsByClassName("links");
    const links = document.querySelectorAll(".links li");
    menu[0].addEventListener("click", () => {
      //show or hide nav bar on screen
      nav[0].classList.toggle("nav-on-screen");
      //for animation
      links.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `fade 0.9s ease forwards ${index / 5 + 0.5}s`;
        }
      });
      //change menu to X on click
      menu[0].classList.toggle("toggle");
    });
  };

  slider();
  //stop.

  const slider2 = () => {
    const menu2 = document.getElementsByClassName("menu2");
    const nav2 = document.getElementsByClassName("links2");
    const links2 = document.querySelectorAll(".links2 li");
    menu2[0].addEventListener("click", () => {
      //show or hide nav bar on screen
      nav2[0].classList.toggle("nav-on-screen");

      //for animation
      links2.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `fade 0.5s ease forwards ${index / 4 + 1}s`;
        }
      });
      //change menu to X on click
      menu2[0].classList.toggle("toggle");
    });
  };

  slider2();

  const slider3 = () => {
    const menu3 = document.getElementsByClassName("menu3");
    const nav3 = document.getElementsByClassName("links3");
    const links3 = document.querySelectorAll(".links3 li");
    menu3[0].addEventListener("click", () => {
      //show or hide nav bar on screen
      nav3[0].classList.toggle("nav-on-screen");

      //for animation
      links3.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `fade 0.5s ease forwards ${index / 4 + 1}s`;
        }
      });

      //change menu to X on click
      menu3[0].classList.toggle("toggle");
    });
  };

  slider3();

  const slider4 = () => {
    const menu4 = document.getElementsByClassName("menu4");
    const nav4 = document.getElementsByClassName("links4");
    const links4 = document.querySelectorAll(".links4 li");
    menu4[0].addEventListener("click", () => {
      //show or hide nav bar on screen
      nav4[0].classList.toggle("nav-on-screen");

      //for animation
      links4.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `fade 0.5s ease forwards ${index / 4 + 1}s`;
        }
      });

      //change menu to X on click
      menu4[0].classList.toggle("toggle");
    });
  };

  slider4();
};

//window.onload

const go = () => {
  document.body.classList.toggle("se");
};

//main part starts

//input feild//
var nu = document.getElementById("nu");
var un = document.getElementById("un");

//option feild//
var se = document.getElementById("se");
var se2 = document.getElementById("se2");

//input id//
function num() {
  var nu = document.getElementById("nu").value;

  var un = document.getElementById("un").value;

  var se = document.getElementById("se").value;

  var se2 = document.getElementById("se2").value;
  if (nu == "") {
    document.getElementById("power").innerHTML = "";
  }
  if (se === "kg" && se2 === "gm") {
    var x = String(nu) * 1000;
    document.getElementById("un").value = x;
  } else if (se === "kg" && se2 === "mlg") {
    var y = String(nu) * 1000000;
    document.getElementById("un").value = y;
    document.getElementById("power").innerHTML =
      "Value in power" + " " + ":" + " " + String(nu) + " " + "x" + " " + "10⁶";
  } else if (se === "kg" && se2 === "kg") {
    var di = String(nu);
    document.getElementById("un").value = di;
  } else if (se === "kg" && se2 === "mcg") {
    var ma = String(nu) * 1000000000;
    document.getElementById("un").value = ma;

    document.getElementById("power").innerHTML =
      "Value in power :" + " " + String(nu) + " " + "x" + " " + "10⁹";
  } else if (se === "gm" && se2 === "kg") {
    var yi = String(nu) / 1000;
    document.getElementById("un").value = yi;
    document.getElementById("power").innerHTML =
      "Value in power :" + " " + String(nu) + " " + "x" + " " + "10-³";
  } else if (se === "gm" && se2 === "gm") {
    var di = String(nu);
    document.getElementById("un").value = di;
  } else if (se === "gm" && se2 === "mlg") {
    var ik = String(nu) * 1000;
    document.getElementById("un").value = ik;
  } else if (se === "gm" && se2 === "mcg") {
    var ikj = String(nu) * 1000000;
    document.getElementById("un").value = ikj;

    document.getElementById("power").innerHTML =
      "Value in power :" + " " + String(nu) + " " + "x" + " " + "10⁶";
  } else if (se === "mlg" && se2 === "gm") {
    var vvh = String(nu) / 1000;
    document.getElementById("un").value = vvh;
    document.getElementById("power").innerHTML =
      "Value in power :" + " " + String(nu) + " " + "x" + " " + "10-³";
  } else if (se === "mlg" && se2 === "kg") {
    var hhv = String(nu) / 1000000;
    document.getElementById("un").value = hhv;
    document.getElementById("power").innerHTML =
      "Value in power :" + " " + String(nu) + " " + "x" + " " + "10-⁶";
  } else if (se === "mlg" && se2 === "mlg") {
    var hok = String(nu);
    document.getElementById("un").value = hok;
  } else if (se === "mlg" && se2 === "mcg") {
    var hok = String(nu) * 1000;
    document.getElementById("un").value = hok;
  } else if (se === "mcg" && se2 === "gm") {
    var ain = String(nu) / 1000000;
    document.getElementById("un").value = ain;
    document.getElementById("power").innerHTML =
      "Value in power :" + " " + String(nu) + " " + "x" + " " + "10-⁶";
  } else if (se === "mcg" && se2 === "kg") {
    var stin = String(nu) / 1000000000;
    document.getElementById("un").value = stin;

    document.getElementById("power").innerHTML =
      "Value in power :" + " " + String(nu) + " " + "x" + " " + "10-⁹";
  } else if (se === "mcg" && se2 === "mcg") {
    var dii = String(nu);
    document.getElementById("un").value = dii;
  } else if (se === "mcg" && se2 === "mlg") {
    var sey = String(nu) * 1000;
    document.getElementById("un").value = sey;
  }
}

//select id //
function go2() {
  var nu = document.getElementById("nu");

  var un = document.getElementById("un");

  var se = document.getElementById("se").value;

  var se2 = document.getElementById("se2").value;

  nu.value = "";
  un.value = "";

  document.getElementById("power").innerHTML = "";

  if (se === "kg" && se2 === "gm") {
    var x = String(nu) * 1000;
    document.getElementById("un").value = x;
  } else if (se === "kg" && se2 === "mlg") {
    var y = String(nu) * 1000000;
    document.getElementById("un").value = y;
  } else if (se === "kg" && se2 === "kg") {
    var di = String(nu);
    document.getElementById("un").value = di;
  } else if (se === "kg" && se2 === "mcg") {
    var ma = String(nu) * 1000000000;
    document.getElementById("un").value = ma;
  } else if (se === "gm" && se2 === "mcg") {
    var ikj = String(nu) * 1000000;
    document.getElementById("un").value = ikj;
  }
}

function num2() {
  var so = document.getElementById("so").value;
  var os = document.getElementById("os").value;
  var op1 = document.getElementById("op1").value;
  var op2 = document.getElementById("op2").value;

  if (op1 === "me" && op2 === "cen") {
    var vv = String(so) * 100;
    document.getElementById("os").value = vv;
  } else if (op1 === "klm" && op2 === "cen") {
    var inf = String(so) * 100000;
    document.getElementById("os").value = inf;
    document.getElementById("pl").innerHTML =
      "Value in power :" + " " + String(so) + " " + "x" + " " + "10⁵";
  } else if (op1 === "cen" && op2 === "cen") {
    var nap = String(so);
    document.getElementById("os").value = nap;
  } else if (op1 === "ml" && op2 === "cen") {
    var l = String(so) * 160934;
    document.getElementById("os").value = l;
  } else if (op1 === "mlm" && op2 === "cen") {
    var x = String(so) / 10;
    document.getElementById("os").value = x;
  } else if (op1 === "mcm" && op2 === "cen") {
    var xx = String(so) / 1000;
    document.getElementById("os").value = xx;

    document.getElementById("pl").innerHTML =
      "Value in power :" + " " + String(so) + " " + "x" + " " + "10-³";
  } else if (op1 === "fo" && op2 === "cen") {
    var cc = String(so) * 30.48;
    document.getElementById("os").value = cc;
  } else if (op1 === "inc" && op2 === "cen") {
    var sh = String(so) * 2.54;
    document.getElementById("os").value = sh;
  } else if (op1 === "me" && op2 === "me") {
    var sh2 = String(so);
    document.getElementById("os").value = sh2;
  } else if (op1 === "klm" && op2 === "me") {
    var sh3 = String(so) * 1000;

    document.getElementById("os").value = sh3;
  } else if (op1 === "cen" && op2 === "me") {
    var sh4 = String(so) / 100;

    document.getElementById("os").value = sh4;
  } else if (op1 === "ml" && op2 === "me") {
    var sh5 = String(so) * 1609.344;

    document.getElementById("os").value = sh5;
  } else if (op1 === "mlm" && op2 === "me") {
    var sh6 = String(so) / 1000;

    document.getElementById("os").value = sh6;

    document.getElementById("pl").innerHTML =
      "Value in power :" + " " + String(so) + " " + "x" + " " + "10-³";
  } else if (op1 === "mcm" && op2 === "me") {
    var sh7 = String(so) / 1000000;

    document.getElementById("os").value = sh7;

    document.getElementById("pl").innerHTML =
      "Value in power :" + " " + String(so) + " " + "x" + " " + "10-⁶";
  } else if (op1 === "fo" && op2 === "me") {
    var sh8 = String(so) * 0.305;

    document.getElementById("os").value = sh8;
  } else if (op1 === "inc" && op2 === "me") {
    var sh9 = String(so) * 0.0254;

    document.getElementById("os").value = sh9;
  } else if (op1 === "me" && op2 === "klm") {
    var she = String(so) / 1000;

    document.getElementById("os").value = she;

    document.getElementById("pl").innerHTML =
      "Value in power :" + " " + String(so) + " " + "x" + " " + "10-³";
  } else if (op1 === "klm" && op2 === "klm") {
    var she2 = String(so);

    document.getElementById("os").value = she2;
  } else if (op1 === "cen" && op2 === "klm") {
    var she3 = String(so) / 100000;

    document.getElementById("os").value = she3;

    document.getElementById("pl").innerHTML =
      "Value in power :" + " " + String(so) + " " + "x" + " " + "10-⁵";
  } else if (op1 === "ml" && op2 === "klm") {
    var she4 = String(so) * 1.609;

    document.getElementById("os").value = she4;
  } else if (op1 === "mlm" && op2 === "klm") {
    var she5 = String(so) / 1000000;

    document.getElementById("os").value = she5;

    document.getElementById("pl").innerHTML =
      "Value in power :" + " " + String(so) + " " + "x" + " " + "10-⁶";
  } else if (op1 === "mcm" && op2 === "klm") {
    var she5 = String(so) / 1000000000;

    document.getElementById("os").value = she5;

    document.getElementById("pl").innerHTML =
      "Value in power :" + " " + String(so) + " " + "x" + " " + "10-⁹";
  } else if (op1 === "fo" && op2 === "klm") {
    var she6 = String(so) * 0.000305;

    document.getElementById("os").value = she6;
  } else if (op1 === "inc" && op2 === "klm") {
    var she7 = String(so) * 0.0000254;

    document.getElementById("os").value = she7;
  } else if (op1 === "me" && op2 === "ml") {
    var u = String(so) * 0.000621;

    document.getElementById("os").value = u;
  } else if (op1 === "klm" && op2 === "ml") {
    var u1 = String(so) * 0.621;

    document.getElementById("os").value = u1;
  } else if (op1 === "cen" && op2 === "ml") {
    var u2 = String(so) * 0.0000062137;

    document.getElementById("os").value = u2;
  } else if (op1 === "ml" && op2 === "ml") {
    var u3 = String(so);

    document.getElementById("os").value = u3;
  } else if (op1 === "mlm" && op2 === "ml") {
    var u4 = String(so) * 0.00000062137;

    document.getElementById("os").value = u4;

    if (String(so) == 1) {
      document.getElementById("pl").innerHTML =
        "Value in power :" + " " + "6.2137 × 10-⁷";
    } else {
      document.getElementById("pl").innerHTML = "";
      var u4 = String(so) * 0.00000062137;

      document.getElementById("os").value = u4;
    }
  } else if (op1 === "mcm" && op2 === "ml") {
    var u5 = String(so) * 0.00000000062137;

    document.getElementById("os").value = u5;
    document.getElementById("pl").innerHTML =
      "Value in power :" + " " + "6.2137 × 10-¹⁰";
  } else if (op1 === "fo" && op2 === "ml") {
    var u6 = String(so) * 0.000189;

    document.getElementById("os").value = u6;
  } else if (op1 === "inc" && op2 === "ml") {
    var u7 = String(so) * 0.0000157828;

    document.getElementById("os").value = u7;
  } else if (op1 === "me" && op2 === "mlm") {
    var ui = String(so) * 1000;

    document.getElementById("os").value = ui;
  } else if (op1 === "klm" && op2 === "mlm") {
    var ui2 = String(so) * 1000000;

    document.getElementById("os").value = ui2;

    document.getElementById("pl").innerHTML =
      "Value in power :" + " " + String(so) + " " + "x" + " " + "10-⁶";
  } else if (op1 === "cen" && op2 === "mlm") {
    var ui3 = String(so) * 10;

    document.getElementById("os").value = ui3;
  } else if (op1 === "ml" && op2 === "mlm") {
    var ui4 = String(so) * 1609344;

    document.getElementById("os").value = ui4;
  } else if (op1 === "mlm" && op2 === "mlm") {
    var ui5 = String(so);

    document.getElementById("os").value = ui5;
  } else if (op1 === "mcm" && op2 === "mlm") {
    var ui6 = String(so) * 0.001;

    document.getElementById("os").value = ui6;
  } else if (op1 === "fo" && op2 === "mlm") {
    var ui7 = String(so) * 304.8;

    document.getElementById("os").value = ui7;
  } else if (op1 === "inc" && op2 === "mlm") {
    var ui8 = String(so) * 25.4;

    document.getElementById("os").value = ui8;
  } else if (op1 === "me" && op2 === "mcm") {
    var x1 = String(so) * 1000000;

    document.getElementById("os").value = x1;

    document.getElementById("pl").innerHTML =
      "Value in power :" + " " + String(so) + " " + "x" + " " + "10⁶";
  } else if (op1 === "klm" && op2 === "mcm") {
    var x2 = String(so) * 1000000000;

    document.getElementById("os").value = x2;

    document.getElementById("pl").innerHTML =
      "Value in power :" + " " + String(so) + " " + "x" + " " + "10⁹";
  } else if (op1 === "cen" && op2 === "mcm") {
    var x3 = String(so) * 10000;

    document.getElementById("os").value = x3;
  } else if (op1 === "ml" && op2 === "mcm") {
    var x4 = String(so) * 1609344000;

    document.getElementById("os").value = x4;
  } else if (op1 === "mlm" && op2 === "mcm") {
    var x5 = String(so) * 1000;

    document.getElementById("os").value = x5;
  } else if (op1 === "mcm" && op2 === "mcm") {
    var x6 = String(so);

    document.getElementById("os").value = x6;
  } else if (op1 === "fo" && op2 === "mcm") {
    var x7 = String(so) * 304800;

    document.getElementById("os").value = x7;
  } else if (op1 === "inc" && op2 === "mcm") {
    var x8 = String(so) * 25400;

    document.getElementById("os").value = x8;
  } else if (op1 === "me" && op2 === "fo") {
    var i = String(so) * 3.280839895;

    document.getElementById("os").value = i;
  } else if (op1 === "klm" && op2 === "fo") {
    var i1 = String(so) * 3280.84;

    document.getElementById("os").value = i1;
  } else if (op1 === "cen" && op2 === "fo") {
    var i2 = String(so) * 0.0328;

    document.getElementById("os").value = i2;
  } else if (op1 === "ml" && op2 === "fo") {
    var i3 = String(so) * 5280;

    document.getElementById("os").value = i3;
  } else if (op1 === "mlm" && op2 === "fo") {
    var i4 = String(so) * 0.00328;

    document.getElementById("os").value = i4;
  } else if (op1 === "mcm" && op2 === "fo") {
    var i5 = String(so) * 0.0000032808;

    document.getElementById("os").value = i5;
  } else if (op1 === "fo" && op2 === "fo") {
    var i6 = String(so);

    document.getElementById("os").value = i6;
  } else if (op1 === "inc" && op2 === "fo") {
    var i7 = String(so) * 0.0833333333;

    document.getElementById("os").value = i7;
  } else if (op1 === "me" && op2 === "inc") {
    var j = String(so) * 39.37;

    document.getElementById("os").value = j;
  } else if (op1 === "klm" && op2 === "inc") {
    var j1 = String(so) * 39370;

    document.getElementById("os").value = j1;
  } else if (op1 === "cen" && op2 === "inc") {
    var j2 = String(so) * 0.394;

    document.getElementById("os").value = j2;
  } else if (op1 === "mlm" && op2 === "inc") {
    var j3 = String(so) * 0.0394;

    document.getElementById("os").value = j3;
  } else if (op1 === "mcm" && op2 === "inc") {
    var j4 = String(so) * 0.00003937;

    document.getElementById("os").value = j4;
  } else if (op1 === "inc" && op2 === "inc") {
    var j5 = String(so);

    document.getElementById("os").value = j5;
  } else if (op1 === "fo" && op2 === "inc") {
    var j6 = String(so) * 12;

    document.getElementById("os").value = j6;
  }
}

//on change

function coe() {
  var so = document.getElementById("so");

  var os = document.getElementById("os");

  var op1 = document.getElementById("op1").value;
  var op2 = document.getElementById("op2").value;

  document.getElementById("pl").innerHTML = "";

  so.value = "";
  os.value = "";

  if (op1 === "me" && op2 === "cen") {
    var vv = String(so) * 100;
    document.getElementById("os").value = vv;
  } else if (op1 === "klm" && op2 === "cen") {
    var inf = String(so) * 100000;
    document.getElementById("os").value = inf;
  } else if (op1 === "cen" && op2 === "cen") {
    var nap = String(so);
    document.getElementById("os").value = nap;
  } else if (op1 === "ml" && op2 === "cen") {
    var l = String(so) * 160934;
    document.getElementById("os").value = l;
  } else if (op1 === "mlm" && op2 === "cen") {
    var x = String(so) / 10;
    document.getElementById("os").value = x;
  } else if (op1 === "mcm" && op2 === "cen") {
    var xx = String(so) / 1000;
    document.getElementById("os").value = xx;
  } else if (op1 === "fo" && op2 === "cen") {
    var cc = String(so) * 30.48;
    document.getElementById("os").value = cc;
  } else if (op1 === "inc" && op2 === "cen") {
    var sh = String(so) * 2.54;
    document.getElementById("os").value = sh;
  } else if (op1 === "me" && op2 === "me") {
    var sh2 = String(so);
    document.getElementById("os").value = sh2;
  } else if (op1 === "klm" && op2 === "me") {
    var sh2 = String(so) * 1000;

    document.getElementById("os").value = sh2;
  }
}
