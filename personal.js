let hei = document.getElementById("hei");
let upwa = document.querySelector(".upwa");
let hea = document.querySelector("header");
let poss = document.documentElement;
let but = new Array();
let iv = new Array();
let arrw = new Array();
let arrw1 = new Array();
let card = new Array();
let wi = 770;
let va = 70;
let r = true;
let r1 = true;

for (let i = 0; i < 4; i++) {
  but[i] = document.getElementById("butt" + i);
  iv[i] = document.getElementById("i" + i);

  but[i].addEventListener("mouseover", function (event) {
    iv[i].style.cssText = `width: 0;`;
    but[i].style.border = "1px solid #fff";
  });
  but[i].addEventListener("mouseout", function (event) {
    iv[i].style.cssText = `width: 100%; right: 0;`;
    but[i].style.border = "1px solid transparent";
  });
}

window.addEventListener("mousemove", func);
window.addEventListener("scroll", func);
function func(e) {
  let car = document.querySelector(".card").getBoundingClientRect(),
    xaxis1 = e.pageX - window.scrollX - car.left,
    yaxis1 = e.pageY - car.top - window.scrollY;

  if (
    xaxis1 < car.width + 188 &&
    xaxis1 > -188 &&
    yaxis1 < car.height + 188 &&
    yaxis1 > -188
  ) {
    poss.style.setProperty("--mouse-x", xaxis1 + "px");
    poss.style.setProperty("--mouse-y", yaxis1 + "px");
  } else {
    poss.style.setProperty("--mouse-x", -188 + "px");
    poss.style.setProperty("--mouse-y", -188 + "px");
  }
}

upwa.addEventListener("mousedown", (e) => {
  window.addEventListener("mousemove", ff);
});
function ff(e) {
  (car1 = upwa.getBoundingClientRect()),
    (xaxis1 = e.pageX - car1.left),
    (yaxis1 = e.pageY - car1.top - window.scrollY);

  let x11 = -(car1.width / 2 - xaxis1) / va;
  let y11 = (car1.height / 2 - yaxis1) / va;
  upwa.style.transform = `rotateY(${x11}deg) rotateX(${y11}deg)`;
}

window.addEventListener("mouseup", function () {
  this.window.removeEventListener("mousemove", ff);
  upwa.style.transform = `rotateY(0deg) rotateX(0deg)`;
  upwa.style.width = 85 + "%";
});

window.addEventListener("mousemove", function (e) {
  for (let i = 0; i < this.document.querySelectorAll(".inhed li").length; i++) {
    let car = this.document
        .querySelectorAll(".inhed li")
        [i].getBoundingClientRect(),
      xaxis1 = e.pageX - window.scrollX - car.left,
      yaxis1 = e.pageY - window.scrollY - car.top;
    let carz = this.document.getElementById("hee").getBoundingClientRect(),
      xaxis1z = e.pageX - window.scrollX - carz.left,
      yaxis1z = e.pageY - window.scrollY - carz.top;

    if (
      xaxis1 < car.width + 66 &&
      xaxis1 > -66 &&
      yaxis1 < car.height + 66 &&
      yaxis1 > -66
    ) {
      poss.style.setProperty("--x" + i, xaxis1 + "px");
      poss.style.setProperty("--y" + i, yaxis1 + "px");
    } else {
      poss.style.setProperty("--x" + i, -66 + "px");
      poss.style.setProperty("--y" + i, -66 + "px");
    }
    if (
      xaxis1z < carz.width + 66 &&
      xaxis1z > -66 &&
      yaxis1z < carz.height + 66 &&
      yaxis1z > -66
    ) {
      poss.style.setProperty("--xc", xaxis1z + "px");
      poss.style.setProperty("--yc", yaxis1z + "px");
    } else {
      poss.style.setProperty("--xc", -66 + "px");
      poss.style.setProperty("--yc", -66 + "px");
    }

    document.querySelectorAll(".inhed li")[
      i
    ].style.background = `radial-gradient(
  circle at var(--x${i}) var(--y${i}),
  #fff 3px,
  transparent 66px
)`;
    document.getElementById("hee").style.background = `radial-gradient(
  circle at var(--xc) var(--yc),
  #fff 3px,
  transparent 66px
)`;
  }
});

window.addEventListener("scroll", function () {
  if (this.window.scrollY > 0) {
    this.document.getElementById("hd").style.backgroundColor = "#1e1e1e";
    hea.style.height = "60px";

    eren(false);
  } else {
    this.document.getElementById("hd").style.backgroundColor = "#121212";
    hea.style.height = "70px";

    eren(true);
  }
});

function eren(x) {
  for (let i = 0; i < this.document.querySelectorAll("a").length; i++) {
    if (x == true) {
      document.querySelectorAll("a")[i].style.background = "#121212";
      document.getElementById("hd").style.background = `radial-gradient(
      circle at var(--xc) var(--yc),
      rgb(30 30 30) 3px,
      #121212 66px
    )`;
    } else {
      document.querySelectorAll("a")[i].style.background = "#1e1e1e";
      document.getElementById("hd").style.background = `radial-gradient(
      circle at var(--xc) var(--yc),
      rgb(50 50 50) 3px,
      #1e1e1e 66px
    )`;
    }
  }
  document.querySelectorAll("a").forEach(function (ele) {
    ele.addEventListener("mouseover", function () {
      ele.style.backgroundColor = "rgb(48 48 48)";
    });
    ele.addEventListener("mouseout", function () {
      if (x == true) {
        ele.style.backgroundColor = "#121212";
      } else {
        ele.style.backgroundColor = "#1e1e1e";
      }
    });
  });
}
// if (window.scrollY > 0) {
//   poss.style.setProperty("--co", "#f00");
// }

let span1 = document.querySelector(".sspan");
let text = ["Delovober1", "Desiner1", "Programmer1"];
let i = 0;
let i1 = 0;

let t = setInterval(function () {
  span1.innerHTML += text[i1][i];

  i++;

  if (i > text[i1].length - 1) {
    i = 0;
    i1++;
    span1.innerHTML = "";
  }

  if (i1 > text.length - 1) {
    i1 = 0;
  }
}, 200);

let h2 = document.getElementById("h2");

let ar = "Hello, My Name is";
let a = new Array();
let car1 = new Array();
let car11 = new Array();
let sum1 = 0;
let sum12 = 0;

window.addEventListener("load", function (e) {
  for (let i = 0; i < ar.length; i++) {
    a[i] = document.createElement("li");
    a[i].className = "ll";

    a[i].append(ar[i]);

    a[i].style.transition = (i + Number(1)) * 60 + "ms";

    h2.addEventListener("mouseover", function () {
      a[i].style.transform = "translateX(50px)";
    });
    h2.addEventListener("mouseout", function () {
      a[i].style.transform = "translateX(0px)";
    });
    h2.append(a[i]);
    car1[i] = a[i].getBoundingClientRect();

    a[i].style.left = sum1 + 83 + "px";

    sum1 += car1[i].width;
  }

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] == " ") {
      sum12 += 10;

      for (let i1 = ar.length - (ar.length - i); i1 < ar.length; i1++) {
        car11[i] = a[i1].getBoundingClientRect();

        a[i1].style.marginLeft = sum12 + "px";
      }
    }
  }
  let cc = this.document.getElementById("i11").getBoundingClientRect();
  let cc1 = this.document.querySelector(".upwa").getBoundingClientRect();
  let cc2 = this.document.querySelector("#i11 h2").getBoundingClientRect();
  this.document.querySelector(".ab h2").style.top =
    (cc.height - cc1.height - cc2.height / 2) / 4 - cc2.height / 2 + "px";
});

let ii = document.getElementById("ii");
let a1 = new Array();
let car = new Array();
let cara = new Array();
let tt = new Array();
let ar1 = "Tariq Mohammad";
let sum = 0;
let sum1c = 0;

window.addEventListener("load", function (e) {
  for (let i = 0; i < ar1.length; i++) {
    a1[i] = document.createElement("li");
    a1[i].className = "ll1";

    a1[i].append(ar1[i]);

    if (i < 5) {
      a1[i].style.color = "#fff";
    }
    a1[i].style.transition = (i + Number(1)) * 60 + "ms";
    document.getElementById("ii").addEventListener("mouseover", function () {
      document.getElementById("ii").style.pointerEvents = "none";
      a1[i].style.pointerEvents = "none";
      a1[i].style.animation = `animate ${i * 300 + i}ms alternate  both`;

      tt[i] = setTimeout(function () {
        a1[i].style.animation = `unset`;
        document.getElementById("ii").style.pointerEvents = "unset";
        a1[i].style.pointerEvents = "unset";
        clearTimeout(tt[i]);
      }, i * 300 + i);
   
    });

    ii.append(a1[i]);
    car[i] = a1[i].getBoundingClientRect();

    a1[i].style.left = sum + 83 + "px";

    sum += car[i].width;
  }

  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] == " ") {
      sum1c += 18;
      for (let i1 = ar1.length - (ar1.length - i); i1 < ar1.length; i1++) {
        cara[i] = a1[i1].getBoundingClientRect();

        a1[i1].style.marginLeft = sum1c + "px";
      }
    }
  }
});
let arn = new Array();
let maxx = new Array();
let sheck = true;
let max = true;
let vb = 0;
let cc = 0;
let v = 0;

poss.style.setProperty("--h", 0 + "px");
poss.style.setProperty("--w", 7 + "px");

let up = document.querySelector(".inpim");
let inup = new Array();
let carvl = new Array();
window.addEventListener("load", function (e) {
  for (let i = 0; i < 5; i++) {
    inup[i] = document.createElement("div");
    inup[i].className = "inup";

    up.append(inup[i]);
  }
  for (let i = 0; i < inup.length; i++) {
    carvl[i] = inup[i].getBoundingClientRect();

    if (i == 1) {
      inup[i].style.transform = `rotateZ(90deg)`;
      inup[i].style.top = -carvl[i].height + "px";
    } else if (i == 2) {
      inup[i].style.left = carvl[i].height - carvl[i].width + "px";
    }
  }
});
let ss = [
  [
    "C:\\Users\\WAFAco\\OneDrive\\Documents\\myprojects$\\webpro\\new\\websiteProject.html",
    "boby.jpg",
    "Meet Food",
    0,
  ],
  [
    "C:\\Users\\WAFAco\\OneDrive\\Documents\\myprojects$\\webpro\\proj\\indexx.html",
    "menu2.jpg",
    "Fresh Food",
    -16,
  ],
  [
    "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/games/Game2/lopi.html",
    "؟.jpg",
    "Game 2",
    -35,
  ],
  [
    "C:\\Users\\WAFAco\\OneDrive\\Documents\\myprojects$\\webpro\\personalWebsite\\Document.html",
    "src.jpg",
    "Personal WebSite",
    -52,
  ],
  [
    "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/jquery/project3d/--add3d/x1.html",
    "sheet.jpg",
    "3D Project",
    0,
  ],
  [
    "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/games/Game1/%E2%80%8F%E2%80%8Fgame.s%20-%20%D9%86%D8%B3%D8%AE%D8%A9/gam.html",
    "xo.jpg",
    "Game 1",
    0,
  ],
  [
    "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/games/snake/snake.html",
    "snakk.jpg",
    "Game 3",
    0,
  ],
  [
    "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/moedern/tawjehy.html?#",
    "calc.png",
    "Calce Your Marks",
    0,
  ],
  [
    "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/moedern/tr.html",
    "car.png",
    "3D Card",
    0,
  ],
  [
    "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/moedern/inn.html",
    "pp.jpg",
    "Searsh in Cards",
    -13,
  ],
  [
    "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/jquery/formes/form1.pro/form1.htm",
    "ff.png",
    "Form LogIn",
    0,
  ],
  [
    "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/moedern/----ibex.html",
    "ball3d.png",
    "3D Ball Use Deves",
    -12,
  ],
];

let incar = new Array();
let upim = new Array();
let h = new Array();
let butb = new Array();
let hre = new Array();
let num = ss.length + 0;
let sh = true;
let view = 8;

for (let i = 0; i < num; i++) {
  card[i] = document.createElement("div");
  upim[i] = document.createElement("div");
  incar[i] = document.createElement("div");
  hre[i] = document.createElement("a");
  h[i] = document.createElement("h4");
  butb[i] = new Array();
  for (let g = 0; g < 4; g++) {
    butb[i][g] = document.createElement("span");
    butb[i][g].className = "spa";

    window.addEventListener("load", () => {
      let car1 = butb[i][g].getBoundingClientRect();
      let size = car1.height / 2;
      let ww = -(car1.width / 2 + size);
      let hh = -(car1.height / 2 + size);
      if (g == 0) {
        butb[i][g].style.top = `${hh}px`;
        butb[i][g].style.left = `${ww}px`;
        butb[i][g].style.transform = "rotateZ(-45deg)";
      } else if (g == 1) {
        butb[i][g].style.top = `${hh}px`;
        butb[i][g].style.right = `${ww}px`;
        butb[i][g].style.transform = "rotateZ(45deg)";
      } else if (g == 2) {
        butb[i][g].style.bottom = `${hh}px`;
        butb[i][g].style.right = `${ww}px`;
        butb[i][g].style.transform = "rotateZ(135deg)";
      } else if (g == 3) {
        butb[i][g].style.bottom = `${hh}px`;
        butb[i][g].style.left = `${ww}px`;
        butb[i][g].style.transform = "rotateZ(-135deg)";
      }
    });
    incar[i].prepend(upim[i], h[i], hre[i], butb[i][g]);
  }

  card[i].className = "pro";
  incar[i].className = "inpro";
  hre[i].className = "hre";
  hre[i].innerHTML = "HREF";

  if (i > view) {
    setTimeout(() => {
      card[i].style.display = "none";
    }, 300);

    document.getElementById("butt3").style.display = "flex";
  }
  if (i > ss.length) {
    upim[i].style.background = "#2b2b2b";
  }

  upim[i].classList.add("upima", "up" + i);
  h[i].className = "h";

  h[i].innerHTML = "Hedeing" + (i + 1);

  card[i].append(incar[i]);
  document.getElementById("ca").append(card[i]);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 1216) {
      setTimeout(() => {
        card[i].style.visibility = "unset";
        upim[i].style.opacity = "1";
        upim[i].style.transform = "scale(1)";
      }, i * 30);
    } else {
      card[i].style.visibility = "hidden";
      upim[i].style.opacity = "0";
      upim[i].style.transform = "scale(0.5)";
    }
  });
}

let carx = new Array();
let x = new Array();
let y = new Array();

window.addEventListener("load", (e) => {
  let car = card[0].getBoundingClientRect();

  let ri = 30;
  let ww = car.width - ri;
  let hh = car.height - ri;
  for (let i = 0; i < num; i++) {
    for (let g = 0; g < 4; g++) {
      let car1 = butb[i][g].getBoundingClientRect();
      let size = car1.height / 2;
      let ww1 = -(car1.width / 2 + size);
      let hh1 = -(car1.height / 2 + size);

      card[i].addEventListener("mouseenter", () => {
        if (g == 0) {
          butb[i][g].style.top = car.height / 2 - car1.height / 2 + "px";
          butb[i][g].style.left = car.width / 2 - car1.width / 2 + "px";
          butb[i][g].style.right = `unset`;
          butb[i][g].style.bottom = `unset`;
        } else if (g == 1) {
          butb[i][g].style.top = car.height / 2 - car1.height / 2 + "px";
          butb[i][g].style.right = car.width / 2 - car1.width / 2 + "px";
          butb[i][g].style.left = `unset`;
          butb[i][g].style.bottom = `unset`;
        } else if (g == 2) {
          butb[i][g].style.bottom = car.height / 2 - car1.height / 2 + "px";
          butb[i][g].style.right = car.width / 2 - car1.width / 2 + "px";
          butb[i][g].style.left = `unset`;
          butb[i][g].style.top = `unset`;
        } else if (g == 3) {
          butb[i][g].style.bottom = car.height / 2 - car1.height / 2 + "px";
          butb[i][g].style.left = car.width / 2 - car1.width / 2 + "px";
          butb[i][g].style.right = `unset`;
          butb[i][g].style.top = `unset`;
        }
        hre[i].style.transform = "scale(1)";
      });
      card[i].addEventListener("mouseleave", () => {
        if (g == 0) {
          butb[i][g].style.top = `${hh1}px`;
          butb[i][g].style.left = `${ww1}px`;
          butb[i][g].style.right = `unset`;
          butb[i][g].style.bottom = `unset`;
        } else if (g == 1) {
          butb[i][g].style.top = `${hh1}px`;
          butb[i][g].style.right = `${ww1}px`;
          butb[i][g].style.left = `unset`;
          butb[i][g].style.bottom = `unset`;
        } else if (g == 2) {
          butb[i][g].style.bottom = `${hh1}px`;
          butb[i][g].style.right = `${ww1}px`;
          butb[i][g].style.left = `unset`;
          butb[i][g].style.top = `unset`;
        } else if (g == 3) {
          butb[i][g].style.bottom = `${hh1}px`;
          butb[i][g].style.left = `${ww1}px`;
          butb[i][g].style.right = `unset`;
          butb[i][g].style.top = `unset`;
        }
        hre[i].style.transform = "scale(0)";
      });
      hre[i].addEventListener("mouseenter", () => {
        if (g == 0) {
          butb[i][g].style.top =
            car.height / 2 - car1.height / 2 + car1.height + "px";
          butb[i][g].style.left =
            car.width / 2 - car1.width / 2 + car1.height + "px";
          butb[i][g].style.right = `unset`;
          butb[i][g].style.bottom = `unset`;
        } else if (g == 1) {
          butb[i][g].style.top =
            car.height / 2 - car1.height / 2 + car1.height + "px";
          butb[i][g].style.right =
            car.width / 2 - car1.width / 2 + car1.height + "px";
          butb[i][g].style.left = `unset`;
          butb[i][g].style.bottom = `unset`;
        } else if (g == 2) {
          butb[i][g].style.bottom =
            car.height / 2 - car1.height / 2 + car1.height + "px";
          butb[i][g].style.right =
            car.width / 2 - car1.width / 2 + car1.height + "px";
          butb[i][g].style.left = `unset`;
          butb[i][g].style.top = `unset`;
        } else if (g == 3) {
          butb[i][g].style.bottom =
            car.height / 2 - car1.height / 2 + car1.height + "px";
          butb[i][g].style.left =
            car.width / 2 - car1.width / 2 + car1.height + "px";
          butb[i][g].style.right = `unset`;
          butb[i][g].style.top = `unset`;
        }
      });
      hre[i].addEventListener("mouseleave", () => {
        if (g == 0) {
          butb[i][g].style.top = car.height / 2 - car1.height / 2 + "px";
          butb[i][g].style.left = car.width / 2 - car1.width / 2 + "px";
          butb[i][g].style.right = `unset`;
          butb[i][g].style.bottom = `unset`;
        } else if (g == 1) {
          butb[i][g].style.top = car.height / 2 - car1.height / 2 + "px";
          butb[i][g].style.right = car.width / 2 - car1.width / 2 + "px";
          butb[i][g].style.left = `unset`;
          butb[i][g].style.bottom = `unset`;
        } else if (g == 2) {
          butb[i][g].style.bottom = car.height / 2 - car1.height / 2 + "px";
          butb[i][g].style.right = car.width / 2 - car1.width / 2 + "px";
          butb[i][g].style.left = `unset`;
          butb[i][g].style.top = `unset`;
        } else if (g == 3) {
          butb[i][g].style.bottom = car.height / 2 - car1.height / 2 + "px";
          butb[i][g].style.left = car.width / 2 - car1.width / 2 + "px";
          butb[i][g].style.right = `unset`;
          butb[i][g].style.top = `unset`;
        }
      });
    }

    card[i].addEventListener("mouseenter", () => {
      let fo = document.createElement("div");
      fo.className = "fo";
      incar[i].append(fo);
      setTimeout(() => {
        fo.style.background = "#000000c7";
      });

      h[i].style.opacity = "1";
      h[i].style.visibility = "unset";
    });

    for (let i0 = 0; i0 < ss[i].length; i0++) {
      card[i].addEventListener("mousemove", (e) => {
        (carx[i] = card[i].getBoundingClientRect()),
          (x[i] = e.clientX - carx[i].left - carx[i].width / 2),
          (y[i] = e.clientY - carx[i].top - carx[i].height / 2);
        upim[i].style.backgroundPosition = -x[i] + "px" + " " + -y[i] + "px";
        upim[i].style.transition = "0s";

        card[i].addEventListener("mouseleave", () => {
          upim[i].style.transition = "0.4s";
          posi();
        });
      });
    }
    card[i].addEventListener("mouseleave", () => {
      document.querySelector(".fo").remove();

      h[i].style.opacity = "0";
      h[i].style.visibility = "hidden";
      upim[i].style.width = ww + "px";
      upim[i].style.height = hh + "px";
    });
    poss.style.setProperty("--ww", ww + "px");
    poss.style.setProperty("--hh", hh + "px");

    for (let i1 = 0; i1 < incar[i].children.length; i1++) {
      if (i1 != 0) {
        incar[i].children[i1].style.zIndex = "3";
      }

      incar[i].children[i1].style.position = "absolute";
      if (i1 != 2 || i1 != 3 || i1 != 4 || i1 != 5) {
        incar[i].children[i1].style.transition = "0.3s";
      } else {
        incar[i].children[i1].style.transition = "0.4s";
      }
    }
  }
});

for (let i = 0; i < ss.length; i++) {
  for (let i0 = 0; i0 < ss[i].length; i0++) {
    if (i0 == 0) {
      hre[i].setAttribute("href", ss[i][i0]);
      hre[i].setAttribute("target", "_blank");
    } else if (i0 == 1) {
      upim[i].style.backgroundImage = `url("${ss[i][i0]}")`;
    } else if (i0 == 2) {
      h[i].innerHTML = ss[i][i0];
    }
  }
}

posi();
function posi() {
  for (let i = 0; i < ss.length; i++) {
    for (let i0 = 0; i0 < ss[i].length; i0++) {
      if (i0 == 3) {
        upim[i].style.backgroundPosition = ss[i][i0] + "px";
      }
    }
  }
}
window.addEventListener("mousemove", function (e) {
  let car = this.document.querySelector(".hh").getBoundingClientRect(),
    xaxis1 = e.pageX - window.scrollX - car.left,
    yaxis1 = e.pageY - window.scrollY - car.top;

  if (
    xaxis1 < car.width + 66 &&
    xaxis1 > -66 &&
    yaxis1 < car.height + 66 &&
    yaxis1 > -66
  ) {
    poss.style.setProperty("--xbn", xaxis1 + "px");
    poss.style.setProperty("--ybn", yaxis1 + "px");
  } else {
    poss.style.setProperty("--xbn", -66 + "px");
    poss.style.setProperty("--ybn", -66 + "px");
  }

  document.querySelector(".hh").style.background = `radial-gradient(
  circle at var(--xbn) var(--ybn),
  transparent -60px,
  #121212 150px
)`;
});

document.getElementById("butt3").addEventListener("click", () => {
  if (sh) {
    for (let i = 0; i < num; i++) {
      card[i].style.display = "flex";
      sh = false;
      if (i > view) {
        upim[i].style.transform = "scale(0.5)";
        upim[i].style.opacity = "0";
      }
      setTimeout(() => {
        upim[i].style.transform = "scale(1)";
        upim[i].style.opacity = "1";
      }, (view - i) * 30);
    }
    document.getElementById("ss").innerHTML = "Less View";
  } else {
    for (let i = 0; i < num; i++) {
      if (i > view) {
        card[i].style.display = "none";
      }
    }
    document.getElementById("ss").innerHTML = "View More";
    sh = true;
  }
});
/////////////////////////////////////////////////////
let ab = new Array();
let inab = new Array();
let tab = new Array();
let intab = new Array();
let carr = new Array();
let num1 = 5;
let to = 7;
let get = new Array();
let get1 = new Array();
upab = document.createElement("div");

let pad = 47;

for (let i = 0; i < num1; i++) {
  ab[i] = document.createElement("div");
  inab[i] = document.createElement("div");
  tab[i] = document.createElement("div");
  intab[i] = document.createElement("div");
  let r = (Math.random() * 255).toFixed();
  let g = (Math.random() * 255).toFixed();
  let b = (Math.random() * 255).toFixed();
  ab[i].className = "abb";
  inab[i].className = "inabb";
  intab[i].className = "intab";
  tab[i].classList.add("tab", "t" + i);
  inab[i].innerHTML = i + 1;
  intab[i].style.background = `rgb(${r}, ${r}, ${r})`;

  ab[i].append(inab[i]);
  tab[i].append(intab[i]);
  upab.append(ab[i]);
  upab.className = "uppk";
  document.getElementById("inn1").prepend(upab, tab[i]);

  document.getElementById("i11").addEventListener("mousemove", (e) => {
    (get[i] = ab[i].getBoundingClientRect()),
      (x0 = e.pageX - get[i].left),
      (y0 = e.pageY - window.scrollY - get[i].top);
   

    if (
      x0 < get[i].width + 100 &&
      x0 > -100 &&
      y0 < get[i].height + 100 &&
      y0 > -100
    ) {
      poss.style.setProperty("--xaz" + i, x0 + "px");
      poss.style.setProperty("--yaz" + i, y0 + "px");
    } else {
      poss.style.setProperty("--xaz" + i, -100 + "px");
      poss.style.setProperty("--yaz" + i, -100 + "px");
    }
   

    ab[i].style.background = `radial-gradient(
     800px circle at var(--xaz${i}) var(--yaz${i}),
    #fff 101px,
    rgb(27 27 27) 188px
    )`;
  
  });
}
window.addEventListener("load", () => {
  let car1 = document.getElementById("inn1").getBoundingClientRect();

  for (let i = 0; i < num1; i++) {
    ab[0].style.marginLeft = "0px";
    carr[i] = ab[i].getBoundingClientRect();
    tab[i].style.top = carr[i].height + to + "px";
    tab[i].style.width = car1.width - pad - 1 + `px`;
    inab[i].style.width = carr[i].width - 1.5 + "px";
    inab[i].style.height = carr[i].height - 2 + "px";

    ab[i].style.marginTop = to + "px";
  }
  document.getElementById("inn1").style.paddingLeft = pad + "px";
});
ab.forEach((ele, ind) => {
  ele.addEventListener("click", () => {
    for (let i = 0; i < num1; i++) {
      tab[i].style.visibility = "hidden";
      tab[i].style.opacity = "0";
      tab[i].style.transform = " scale(0)";
    }
    tab[ind].style.visibility = "unset";
    tab[ind].style.opacity = "1";
    tab[ind].style.transform = " scale(1)";
  });
});


























































// let hei = document.getElementById("hei");
// let upwa = document.querySelector(".upwa");
// let hea = document.querySelector("header");
// let poss = document.documentElement;
// let but = new Array();
// let iv = new Array();
// let arrw = new Array();
// let arrw1 = new Array();
// let card = new Array();
// let wi = 770;
// let va = 70;
// let r = true;
// let r1 = true;

// for (let i = 0; i < 4; i++) {
//   but[i] = document.getElementById("butt" + i);
//   iv[i] = document.getElementById("i" + i);

//   but[i].addEventListener("mouseover", function (event) {
//     iv[i].style.cssText = `width: 0;`;
//     but[i].style.border = "1px solid #fff";
//   });
//   but[i].addEventListener("mouseout", function (event) {
//     iv[i].style.cssText = `width: 100%; right: 0;`;
//     but[i].style.border = "1px solid transparent";
//   });
// }

// window.addEventListener("mousemove", func);
// window.addEventListener("scroll", func);
// function func(e) {
//   let car = document.querySelector(".card").getBoundingClientRect(),
//     xaxis1 = e.pageX - window.scrollX - car.left,
//     yaxis1 = e.pageY - car.top - window.scrollY;

//   if (
//     xaxis1 < car.width + 188 &&
//     xaxis1 > -188 &&
//     yaxis1 < car.height + 188 &&
//     yaxis1 > -188
//   ) {
//     poss.style.setProperty("--mouse-x", xaxis1 + "px");
//     poss.style.setProperty("--mouse-y", yaxis1 + "px");
//   } else {
//     poss.style.setProperty("--mouse-x", -188 + "px");
//     poss.style.setProperty("--mouse-y", -188 + "px");
//   }
// }

// upwa.addEventListener("mousedown", (e) => {
//   window.addEventListener("mousemove", ff);
// });
// function ff(e) {
//   (car1 = upwa.getBoundingClientRect()),
//     (xaxis1 = e.pageX - car1.left),
//     (yaxis1 = e.pageY - car1.top - window.scrollY);

//   let x11 = -(car1.width / 2 - xaxis1) / va;
//   let y11 = (car1.height / 2 - yaxis1) / va;
//   upwa.style.transform = `rotateY(${x11}deg) rotateX(${y11}deg)`;
// }

// window.addEventListener("mouseup", function () {
//   this.window.removeEventListener("mousemove", ff);
//   upwa.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   upwa.style.width = 85 + "%";
// });

// window.addEventListener("mousemove", function (e) {
//   for (let i = 0; i < this.document.querySelectorAll(".inhed li").length; i++) {
//     let car = this.document
//         .querySelectorAll(".inhed li")
//         [i].getBoundingClientRect(),
//       xaxis1 = e.pageX - window.scrollX - car.left,
//       yaxis1 = e.pageY - window.scrollY - car.top;
//     let carz = this.document.getElementById("hee").getBoundingClientRect(),
//       xaxis1z = e.pageX - window.scrollX - carz.left,
//       yaxis1z = e.pageY - window.scrollY - carz.top;

//     if (
//       xaxis1 < car.width + 66 &&
//       xaxis1 > -66 &&
//       yaxis1 < car.height + 66 &&
//       yaxis1 > -66
//     ) {
//       poss.style.setProperty("--x" + i, xaxis1 + "px");
//       poss.style.setProperty("--y" + i, yaxis1 + "px");
//     } else {
//       poss.style.setProperty("--x" + i, -66 + "px");
//       poss.style.setProperty("--y" + i, -66 + "px");
//     }
//     if (
//       xaxis1z < carz.width + 66 &&
//       xaxis1z > -66 &&
//       yaxis1z < carz.height + 66 &&
//       yaxis1z > -66
//     ) {
//       poss.style.setProperty("--xc", xaxis1z + "px");
//       poss.style.setProperty("--yc", yaxis1z + "px");
//     } else {
//       poss.style.setProperty("--xc", -66 + "px");
//       poss.style.setProperty("--yc", -66 + "px");
//     }

//     document.querySelectorAll(".inhed li")[
//       i
//     ].style.background = `radial-gradient(
//   circle at var(--x${i}) var(--y${i}),
//   #fff 3px,
//   transparent 66px
// )`;
//     document.getElementById("hee").style.background = `radial-gradient(
//   circle at var(--xc) var(--yc),
//   #fff 3px,
//   transparent 66px
// )`;
//   }
// });

// window.addEventListener("scroll", function () {
//   if (this.window.scrollY > 0) {
//     this.document.getElementById("hd").style.backgroundColor = "#1e1e1e";
//     hea.style.height = "60px";

//     eren(false);
//   } else {
//     this.document.getElementById("hd").style.backgroundColor = "#121212";
//     hea.style.height = "70px";

//     eren(true);
//   }
// });

// function eren(x) {
//   for (let i = 0; i < this.document.querySelectorAll("a").length; i++) {
//     if (x == true) {
//       document.querySelectorAll("a")[i].style.background = "#121212";
//       document.getElementById("hd").style.background = `radial-gradient(
//       circle at var(--xc) var(--yc),
//       rgb(30 30 30) 3px,
//       #121212 66px
//     )`;
//     } else {
//       document.querySelectorAll("a")[i].style.background = "#1e1e1e";
//       document.getElementById("hd").style.background = `radial-gradient(
//       circle at var(--xc) var(--yc),
//       rgb(50 50 50) 3px,
//       #1e1e1e 66px
//     )`;
//     }
//   }
//   document.querySelectorAll("a").forEach(function (ele) {
//     ele.addEventListener("mouseover", function () {
//       ele.style.backgroundColor = "rgb(48 48 48)";
//     });
//     ele.addEventListener("mouseout", function () {
//       if (x == true) {
//         ele.style.backgroundColor = "#121212";
//       } else {
//         ele.style.backgroundColor = "#1e1e1e";
//       }
//     });
//   });
// }
// // if (window.scrollY > 0) {
// //   poss.style.setProperty("--co", "#f00");
// // }

// let span1 = document.querySelector(".sspan");
// let text = ["Delovober1", "Desiner1", "Programmer1"];
// let i = 0;
// let i1 = 0;

// let t = setInterval(function () {
//   span1.innerHTML += text[i1][i];

//   i++;

//   if (i > text[i1].length - 1) {
//     i = 0;
//     i1++;
//     span1.innerHTML = "";
//   }

//   if (i1 > text.length - 1) {
//     i1 = 0;
//   }
// }, 200);

// let h2 = document.getElementById("h2");

// let ar = "Hello, My Name is";
// let a = new Array();
// let car1 = new Array();
// let car11 = new Array();
// let sum1 = 0;
// let sum12 = 0;

// window.addEventListener("load", function (e) {
//   for (let i = 0; i < ar.length; i++) {
//     a[i] = document.createElement("li");
//     a[i].className = "ll";

//     a[i].append(ar[i]);

//     a[i].style.transition = (i + Number(1)) * 60 + "ms";

//     h2.addEventListener("mouseover", function () {
//       a[i].style.transform = "translateX(50px)";
//     });
//     h2.addEventListener("mouseout", function () {
//       a[i].style.transform = "translateX(0px)";
//     });
//     h2.append(a[i]);
//     car1[i] = a[i].getBoundingClientRect();

//     a[i].style.left = sum1 + 83 + "px";

//     sum1 += car1[i].width;
//   }

//   for (let i = 0; i < ar.length; i++) {
//     if (ar[i] == " ") {
//       sum12 += 10;

//       for (let i1 = ar.length - (ar.length - i); i1 < ar.length; i1++) {
//         car11[i] = a[i1].getBoundingClientRect();

//         a[i1].style.marginLeft = sum12 + "px";
//       }
//     }
//   }
//   let cc = this.document.getElementById("i11").getBoundingClientRect();
//   let cc1 = this.document.querySelector(".upwa").getBoundingClientRect();
//   let cc2 = this.document.querySelector("#i11 h2").getBoundingClientRect();
//   this.document.querySelector(".ab h2").style.top =
//     (cc.height - cc1.height - cc2.height / 2) / 4 - cc2.height / 2 + "px";
// });

// let ii = document.getElementById("ii");
// let a1 = new Array();
// let car = new Array();
// let cara = new Array();
// let tt = new Array();
// let ar1 = "Tariq Mohammad";
// let sum = 0;
// let sum1c = 0;

// window.addEventListener("load", function (e) {
//   for (let i = 0; i < ar1.length; i++) {
//     a1[i] = document.createElement("li");
//     a1[i].className = "ll1";

//     a1[i].append(ar1[i]);

//     if (i < 5) {
//       a1[i].style.color = "#fff";
//     }
//     a1[i].style.transition = (i + Number(1)) * 60 + "ms";
//     document.getElementById("ii").addEventListener("mouseover", function () {
//       document.getElementById("ii").style.pointerEvents = "none";
//       a1[i].style.pointerEvents = "none";
//       a1[i].style.animation = `animate ${i * 300 + i}ms alternate  both`;

//       tt[i] = setTimeout(function () {
//         a1[i].style.animation = `unset`;
//         document.getElementById("ii").style.pointerEvents = "unset";
//         a1[i].style.pointerEvents = "unset";
//         clearTimeout(tt[i]);
//       }, i * 300 + i);
//     });

//     ii.append(a1[i]);
//     car[i] = a1[i].getBoundingClientRect();

//     a1[i].style.left = sum + 83 + "px";

//     sum += car[i].width;
//   }

//   for (let i = 0; i < ar1.length; i++) {
//     if (ar1[i] == " ") {
//       sum1c += 18;
//       for (let i1 = ar1.length - (ar1.length - i); i1 < ar1.length; i1++) {
//         cara[i] = a1[i1].getBoundingClientRect();

//         a1[i1].style.marginLeft = sum1c + "px";
//       }
//     }
//   }
// });
// let arn = new Array();
// let maxx = new Array();
// let sheck = true;
// let max = true;
// let vb = 0;
// let cc = 0;
// let v = 0;

// poss.style.setProperty("--h", 0 + "px");
// poss.style.setProperty("--w", 7 + "px");

// let up = document.querySelector(".inpim");
// let inup = new Array();
// let carvl = new Array();
// window.addEventListener("load", function (e) {
//   for (let i = 0; i < 5; i++) {
//     inup[i] = document.createElement("div");
//     inup[i].className = "inup";

//     up.append(inup[i]);
//   }
//   for (let i = 0; i < inup.length; i++) {
//     carvl[i] = inup[i].getBoundingClientRect();

//     if (i == 1) {
//       inup[i].style.transform = `rotateZ(90deg)`;
//       inup[i].style.top = -carvl[i].height + "px";
//     } else if (i == 2) {
//       inup[i].style.left = carvl[i].height - carvl[i].width + "px";
//     }
//   }
// });
// let ss = [
//   [
//     "C:\\Users\\WAFAco\\OneDrive\\Documents\\myprojects$\\webpro\\new\\websiteProject.html",
//     "boby.jpg",
//     "Meet Food",
//     0,
//   ],
//   [
//     "C:\\Users\\WAFAco\\OneDrive\\Documents\\myprojects$\\webpro\\proj\\indexx.html",
//     "menu2.jpg",
//     "Fresh Food",
//     -16,
//   ],
//   [
//     "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/games/Game2/lopi.html",
//     "؟.jpg",
//     "Game 2",
//     -35,
//   ],
//   [
//     "C:\\Users\\WAFAco\\OneDrive\\Documents\\myprojects$\\webpro\\personalWebsite\\Document.html",
//     "src.jpg",
//     "Personal WebSite",
//     -52,
//   ],
//   [
//     "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/jquery/project3d/--add3d/x1.html",
//     "sheet.jpg",
//     "3D Project",
//     0,
//   ],
//   [
//     "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/games/Game1/%E2%80%8F%E2%80%8Fgame.s%20-%20%D9%86%D8%B3%D8%AE%D8%A9/gam.html",
//     "xo.jpg",
//     "Game 1",
//     0,
//   ],
//   [
//     "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/games/snake/snake.html",
//     "snakk.jpg",
//     "Game 3",
//     0,
//   ],
//   [
//     "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/moedern/tawjehy.html?#",
//     "calc.png",
//     "Calce Your Marks",
//     0,
//   ],
//   [
//     "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/moedern/tr.html",
//     "car.png",
//     "3D Card",
//     0,
//   ],
//   [
//     "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/moedern/inn.html",
//     "pp.jpg",
//     "Searsh in Cards",
//     -13,
//   ],
//   [
//     "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/jquery/formes/form1.pro/form1.htm",
//     "ff.png",
//     "Form LogIn",
//     0,
//   ],
//   [
//     "file:///C:/Users/WAFAco/OneDrive/Documents/myprojects$/moedern/----ibex.html",
//     "ball3d.png",
//     "3D Ball Use Deves",
//     -12,
//   ],
// ];

// let incar = new Array();
// let upim = new Array();
// let h = new Array();
// let butb = new Array();
// let hre = new Array();
// let num = ss.length + 0;
// let sh = true;
// let view = 8;

// for (let i = 0; i < num; i++) {
//   card[i] = document.createElement("div");
//   upim[i] = document.createElement("div");
//   incar[i] = document.createElement("div");
//   hre[i] = document.createElement("a");
//   h[i] = document.createElement("h4");
//   butb[i] = new Array();
//   upim[i].append(h[i], hre[i]);
//   for (let g = 0; g < 4; g++) {
//     butb[i][g] = document.createElement("span");
//     butb[i][g].className = "spa";

//     window.addEventListener("load", () => {
//       let car1 = butb[i][g].getBoundingClientRect();
//       let size = car1.height / 2;
//       let ww = -(car1.width / 2 + size);
//       let hh = -(car1.height / 2 + size);
//       if (g == 0) {
//         butb[i][g].style.top = `${hh}px`;
//         butb[i][g].style.left = `${ww}px`;
//         butb[i][g].style.transform = "rotateZ(-45deg)";
//       } else if (g == 1) {
//         butb[i][g].style.top = `${hh}px`;
//         butb[i][g].style.right = `${ww}px`;
//         butb[i][g].style.transform = "rotateZ(45deg)";
//       } else if (g == 2) {
//         butb[i][g].style.bottom = `${hh}px`;
//         butb[i][g].style.right = `${ww}px`;
//         butb[i][g].style.transform = "rotateZ(135deg)";
//       } else if (g == 3) {
//         butb[i][g].style.bottom = `${hh}px`;
//         butb[i][g].style.left = `${ww}px`;
//         butb[i][g].style.transform = "rotateZ(-135deg)";
//       }
//     });
//     incar[i].prepend(upim[i], butb[i][g]);
//   }

//   card[i].className = "pro";
//   incar[i].className = "inpro";
//   hre[i].className = "hre";
//   hre[i].innerHTML = "HREF";

//   if (i > view) {
//     setTimeout(() => {
//       card[i].style.display = "none";
//     }, 300);

//     document.getElementById("butt3").style.display = "flex";
//   }
//   if (i > ss.length) {
//     upim[i].style.background = "#2b2b2b";
//   }

//   upim[i].classList.add("upima", "up" + i);
//   h[i].className = "h";

//   h[i].innerHTML = "Hedeing" + (i + 1);

//   card[i].append(incar[i]);
//   document.getElementById("ca").append(card[i]);
//   window.addEventListener("scroll", () => {
//     if (window.scrollY >= 1216) {
//       setTimeout(() => {
//         card[i].style.visibility = "unset";
//         upim[i].style.opacity = "1";
//         upim[i].style.transform = "scale(1)";
//       }, i * 30);
//     } else {
//       card[i].style.visibility = "hidden";
//       upim[i].style.opacity = "0";
//       upim[i].style.transform = "scale(0.5)";
//     }
//   });
// }

// let carx = new Array();
// let x = new Array();
// let y = new Array();
// let x1 = new Array();
// let y1 = new Array();
// let ccx = undefined;
// window.addEventListener("load", (e) => {
//   let car = card[0].getBoundingClientRect();

//   let ri = 30;
//   let ww = car.width - ri;
//   let hh = car.height - ri;
//   for (let i = 0; i < num; i++) {
//     for (let g = 0; g < 4; g++) {
//       let car1 = butb[i][g].getBoundingClientRect();
//       let size = car1.height / 2;
//       let ww1 = -(car1.width / 2 + size);
//       let hh1 = -(car1.height / 2 + size);

//       card[i].addEventListener("mouseenter", () => {
//         if (g == 0) {
//           butb[i][g].style.top = car.height / 2 - car1.height / 2 + "px";
//           butb[i][g].style.left = car.width / 2 - car1.width / 2 + "px";
//           butb[i][g].style.right = `unset`;
//           butb[i][g].style.bottom = `unset`;
//         } else if (g == 1) {
//           butb[i][g].style.top = car.height / 2 - car1.height / 2 + "px";
//           butb[i][g].style.right = car.width / 2 - car1.width / 2 + "px";
//           butb[i][g].style.left = `unset`;
//           butb[i][g].style.bottom = `unset`;
//         } else if (g == 2) {
//           butb[i][g].style.bottom = car.height / 2 - car1.height / 2 + "px";
//           butb[i][g].style.right = car.width / 2 - car1.width / 2 + "px";
//           butb[i][g].style.left = `unset`;
//           butb[i][g].style.top = `unset`;
//         } else if (g == 3) {
//           butb[i][g].style.bottom = car.height / 2 - car1.height / 2 + "px";
//           butb[i][g].style.left = car.width / 2 - car1.width / 2 + "px";
//           butb[i][g].style.right = `unset`;
//           butb[i][g].style.top = `unset`;
//         }
//         hre[i].style.display = "flex";
//       });
//       card[i].addEventListener("mouseleave", () => {
//         if (g == 0) {
//           butb[i][g].style.top = `${hh1}px`;
//           butb[i][g].style.left = `${ww1}px`;
//           butb[i][g].style.right = `unset`;
//           butb[i][g].style.bottom = `unset`;
//         } else if (g == 1) {
//           butb[i][g].style.top = `${hh1}px`;
//           butb[i][g].style.right = `${ww1}px`;
//           butb[i][g].style.left = `unset`;
//           butb[i][g].style.bottom = `unset`;
//         } else if (g == 2) {
//           butb[i][g].style.bottom = `${hh1}px`;
//           butb[i][g].style.right = `${ww1}px`;
//           butb[i][g].style.left = `unset`;
//           butb[i][g].style.top = `unset`;
//         } else if (g == 3) {
//           butb[i][g].style.bottom = `${hh1}px`;
//           butb[i][g].style.left = `${ww1}px`;
//           butb[i][g].style.right = `unset`;
//           butb[i][g].style.top = `unset`;
//         }
//         hre[i].style.display = "none";
//       });
//       hre[i].addEventListener("mouseenter", () => {
//         if (g == 0) {
//           butb[i][g].style.top =
//             car.height / 2 - car1.height / 2 + car1.height + "px";
//           butb[i][g].style.left =
//             car.width / 2 - car1.width / 2 + car1.height + "px";
//           butb[i][g].style.right = `unset`;
//           butb[i][g].style.bottom = `unset`;
//         } else if (g == 1) {
//           butb[i][g].style.top =
//             car.height / 2 - car1.height / 2 + car1.height + "px";
//           butb[i][g].style.right =
//             car.width / 2 - car1.width / 2 + car1.height + "px";
//           butb[i][g].style.left = `unset`;
//           butb[i][g].style.bottom = `unset`;
//         } else if (g == 2) {
//           butb[i][g].style.bottom =
//             car.height / 2 - car1.height / 2 + car1.height + "px";
//           butb[i][g].style.right =
//             car.width / 2 - car1.width / 2 + car1.height + "px";
//           butb[i][g].style.left = `unset`;
//           butb[i][g].style.top = `unset`;
//         } else if (g == 3) {
//           butb[i][g].style.bottom =
//             car.height / 2 - car1.height / 2 + car1.height + "px";
//           butb[i][g].style.left =
//             car.width / 2 - car1.width / 2 + car1.height + "px";
//           butb[i][g].style.right = `unset`;
//           butb[i][g].style.top = `unset`;
//         }
//       });
//       hre[i].addEventListener("mouseleave", () => {
//         if (g == 0) {
//           butb[i][g].style.top = car.height / 2 - car1.height / 2 + "px";
//           butb[i][g].style.left = car.width / 2 - car1.width / 2 + "px";
//           butb[i][g].style.right = `unset`;
//           butb[i][g].style.bottom = `unset`;
//         } else if (g == 1) {
//           butb[i][g].style.top = car.height / 2 - car1.height / 2 + "px";
//           butb[i][g].style.right = car.width / 2 - car1.width / 2 + "px";
//           butb[i][g].style.left = `unset`;
//           butb[i][g].style.bottom = `unset`;
//         } else if (g == 2) {
//           butb[i][g].style.bottom = car.height / 2 - car1.height / 2 + "px";
//           butb[i][g].style.right = car.width / 2 - car1.width / 2 + "px";
//           butb[i][g].style.left = `unset`;
//           butb[i][g].style.top = `unset`;
//         } else if (g == 3) {
//           butb[i][g].style.bottom = car.height / 2 - car1.height / 2 + "px";
//           butb[i][g].style.left = car.width / 2 - car1.width / 2 + "px";
//           butb[i][g].style.right = `unset`;
//           butb[i][g].style.top = `unset`;
//         }
//       });
//     }

//     card[i].addEventListener("mouseenter", () => {
//       let fo = document.createElement("div");
//       fo.className = "fo";
//       upim[i].append(fo);
//       setTimeout(() => {
//         fo.style.background = "#000000c7";
//       });

//       h[i].style.opacity = "1";
//       h[i].style.visibility = "unset";
//     });

//     for (let i0 = 0; i0 < ss[i].length; i0++) {
//       let res = 3;
//       card[i].addEventListener("mousemove", (e) => {
//         (carx[i] = card[i].getBoundingClientRect()),
//           (x[i] = e.clientX - carx[i].left - carx[i].width / 2),
//           (y[i] = e.clientY - carx[i].top - carx[i].height / 2),
//           (x1[i] = e.clientX - carx[i].left),
//           (y1[i] = e.clientY - carx[i].top);
//         // upim[i].style.backgroundPosition =
//         //   -x[i] / res + "px" + " " + -y[i] / res + "px";
//         upim[i].style.transition = "0s";

//         card[i].addEventListener("mouseleave", () => {
//           upim[i].style.transition = "0.4s";
//           posi();
//         });
//         ccx = hre[i].getBoundingClientRect();
//         let coo = 2;
//         if (
//           x1[i] >= ccx.left - (ccx.width * coo - 1) &&
//           x1[i] <= ccx.left + ccx.width * coo &&
//           y1[i] >= ccx.top - (y1[i] * coo - 1) &&
//           y1[i] <= ccx.top + ccx.height * coo
//         ) {
//           hre[i].style.left = x1[i] - ccx.width + 70 / 2 - 8 + "px";

//           hre[i].style.top = y1[i] - ccx.height + "px";
//         }
//       });
//     }
//     card[i].addEventListener("mouseleave", () => {
//       document.querySelector(".fo").remove();

//       h[i].style.opacity = "0";
//       h[i].style.visibility = "hidden";
//       upim[i].style.width = ww + "px";
//       upim[i].style.height = hh + "px";
//     });
//     poss.style.setProperty("--ww", ww + "px");
//     poss.style.setProperty("--hh", hh + "px");

//     for (let i1 = 0; i1 < incar[i].children.length; i1++) {
//       if (i1 != 0) {
//         incar[i].children[i1].style.zIndex = "3";
//       }

//       incar[i].children[i1].style.position = "absolute";
//       if (i1 != 2 || i1 != 3 || i1 != 4 || i1 != 5) {
//         incar[i].children[i1].style.transition = "0.3s";
//       } else {
//         incar[i].children[i1].style.transition = "0.4s";
//       }
//     }
//   }
// });

// for (let i = 0; i < ss.length; i++) {
//   for (let i0 = 0; i0 < ss[i].length; i0++) {
//     if (i0 == 0) {
//       hre[i].setAttribute("href", ss[i][i0]);
//       hre[i].setAttribute("target", "_blank");
//     } else if (i0 == 1) {
//       upim[i].style.backgroundImage = `url("${ss[i][i0]}")`;
//     } else if (i0 == 2) {
//       h[i].innerHTML = ss[i][i0];
//     }
//   }
// }

// posi();
// function posi() {
//   for (let i = 0; i < ss.length; i++) {
//     for (let i0 = 0; i0 < ss[i].length; i0++) {
//       if (i0 == 3) {
//         upim[i].style.backgroundPosition = ss[i][i0] + "px";
//       }
//     }
//   }
// }
// window.addEventListener("mousemove", function (e) {
//   let car = this.document.querySelector(".hh").getBoundingClientRect(),
//     xaxis1 = e.pageX - window.scrollX - car.left,
//     yaxis1 = e.pageY - window.scrollY - car.top;

//   if (
//     xaxis1 < car.width + 66 &&
//     xaxis1 > -66 &&
//     yaxis1 < car.height + 66 &&
//     yaxis1 > -66
//   ) {
//     poss.style.setProperty("--xbn", xaxis1 + "px");
//     poss.style.setProperty("--ybn", yaxis1 + "px");
//   } else {
//     poss.style.setProperty("--xbn", -66 + "px");
//     poss.style.setProperty("--ybn", -66 + "px");
//   }

//   document.querySelector(".hh").style.background = `radial-gradient(
//   circle at var(--xbn) var(--ybn),
//   transparent -60px,
//   #121212 150px
// )`;
// });

// document.getElementById("butt3").addEventListener("click", () => {
//   if (sh) {
//     for (let i = 0; i < num; i++) {
//       card[i].style.display = "flex";
//       sh = false;
//       if (i > view) {
//         upim[i].style.transform = "scale(0.5)";
//         upim[i].style.opacity = "0";
//       }
//       setTimeout(() => {
//         upim[i].style.transform = "scale(1)";
//         upim[i].style.opacity = "1";
//       }, (view - i) * 30);
//     }
//     document.getElementById("ss").innerHTML = "Less View";
//   } else {
//     for (let i = 0; i < num; i++) {
//       if (i > view) {
//         card[i].style.display = "none";
//       }
//     }
//     document.getElementById("ss").innerHTML = "View More";
//     sh = true;
//   }
// });
// /////////////////////////////////////////////////////
// let ab = new Array();
// let inab = new Array();
// let tab = new Array();
// let intab = new Array();
// let carr = new Array();
// let num1 = 5;
// let to = 7;
// let get = new Array();
// let get1 = new Array();
// upab = document.createElement("div");

// let pad = 47;

// for (let i = 0; i < num1; i++) {
//   ab[i] = document.createElement("div");
//   inab[i] = document.createElement("div");
//   tab[i] = document.createElement("div");
//   intab[i] = document.createElement("div");
//   let r = (Math.random() * 255).toFixed();
//   let g = (Math.random() * 255).toFixed();
//   let b = (Math.random() * 255).toFixed();
//   ab[i].className = "abb";
//   inab[i].className = "inabb";
//   intab[i].className = "intab";
//   tab[i].classList.add("tab", "t" + i);
//   inab[i].innerHTML = i + 1;
//   intab[i].style.background = `rgb(${r}, ${r}, ${r})`;

//   ab[i].append(inab[i]);
//   tab[i].append(intab[i]);
//   upab.append(ab[i]);
//   upab.className = "uppk";
//   document.getElementById("inn1").prepend(upab, tab[i]);

//   document.getElementById("i11").addEventListener("mousemove", (e) => {
//     (get[i] = ab[i].getBoundingClientRect()),
//       (x0 = e.pageX - get[i].left),
//       (y0 = e.pageY - window.scrollY - get[i].top);

//     if (
//       x0 < get[i].width + 100 &&
//       x0 > -100 &&
//       y0 < get[i].height + 100 &&
//       y0 > -100
//     ) {
//       poss.style.setProperty("--xaz" + i, x0 + "px");
//       poss.style.setProperty("--yaz" + i, y0 + "px");
//     } else {
//       poss.style.setProperty("--xaz" + i, -100 + "px");
//       poss.style.setProperty("--yaz" + i, -100 + "px");
//     }

//     ab[i].style.background = `radial-gradient(
//      800px circle at var(--xaz${i}) var(--yaz${i}),
//     #fff 101px,
//     rgb(27 27 27) 188px
//     )`;
//   });
// }
// window.addEventListener("load", () => {
//   let car1 = document.getElementById("inn1").getBoundingClientRect();

//   for (let i = 0; i < num1; i++) {
//     ab[0].style.marginLeft = "0px";
//     carr[i] = ab[i].getBoundingClientRect();
//     tab[i].style.top = carr[i].height + to + "px";
//     tab[i].style.width = car1.width - pad - 1 + `px`;
//     inab[i].style.width = carr[i].width - 1.5 + "px";
//     inab[i].style.height = carr[i].height - 2 + "px";

//     ab[i].style.marginTop = to + "px";
//   }
//   document.getElementById("inn1").style.paddingLeft = pad + "px";
// });
// ab.forEach((ele, ind) => {
//   ele.addEventListener("click", () => {
//     for (let i = 0; i < num1; i++) {
//       tab[i].style.visibility = "hidden";
//       tab[i].style.opacity = "0";
//       tab[i].style.transform = " scale(0)";
//     }
//     tab[ind].style.visibility = "unset";
//     tab[ind].style.opacity = "1";
//     tab[ind].style.transform = " scale(1)";
//   });
// });
