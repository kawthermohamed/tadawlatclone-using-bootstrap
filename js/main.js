let sideMenu = document.querySelector(".side-menu");

//open side menu
let mobIcon = document.querySelector(".nav-mobile .nav-icon ");
mobIcon.onclick = function () {
  console.log("yes");
  sideMenu.classList.add("open");
  let overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);
};
//close side menu
let sideIcon = document.querySelector(".side-menu .icon-bar ");
sideIcon.onclick = function () {
  console.log("yes");
  sideMenu.classList.remove("open");
  document.querySelector(".overlay").remove();
};

//fill side menu
let links = document.querySelectorAll(".links ul li ");
let linksa = document.querySelectorAll(".links ul li a");

console.log(links);
let ulside = document.querySelector(".links-side ul");

links.forEach((link) => {
  let liside = document.createElement("li");
  liside.innerHTML = link.innerHTML;
  ulside.appendChild(liside);
});

//features
let tabs = document.querySelectorAll(".offers-tabs .tabs div");
let content = document.querySelectorAll(".offers-tabs .tabs-cont div");
console.log(tabs);
console.log(content);

tabs.forEach((tab) => {
  tab.onclick = function () {
    removeactive();
    this.classList.add("active");
    content.forEach((cont) => {
      if (cont.classList.contains(this.dataset.tab)) {
        cont.classList.add("active");
      } else {
        cont.classList.remove("active");
      }
    });
  };
});

function removeactive() {
  tabs.forEach((e) => {
    e.classList.remove("active");
  });
  content.forEach((ele) => {
    ele.classList.remove("active");
  });
}

//scrolltop
let btntop = document.querySelector(".scrolltop button");

btntop.onclick = function () {
  window.scrollTo(0, 0);
};
