'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);



/**
 * header & back top btn active when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const showElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", showElemOnScroll);



/**
 * product filter
 */

const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterBox = document.querySelector("[data-filter]");

let lastClickedFilterBtn = filterBtns[0];

const filter = function () {
  lastClickedFilterBtn.classList.remove("active");
  this.classList.add("active");
  lastClickedFilterBtn = this;

  filterBox.setAttribute("data-filter", this.dataset.filterBtn)
}

addEventOnElem(filterBtns, "click", filter);



// FUNGSI UNTUK MENGIRIM PESAN
function handleWhatsAppClick(event, message) {
  event.preventDefault(); // Menghentikan perilaku default dari tautan
  
  var adminNumber = "6282210269977"; // Ganti dengan nomor telepon admin
  
  // Pesan yang akan dikirim
  var encodedMessage = encodeURIComponent(message);

  // Buat URL khusus untuk membuka WhatsApp ke chat admin dan membuat pesan otomatis
  var url = "https://wa.me/" + adminNumber + "?text=" + encodedMessage;

  // Buka tautan WhatsApp di jendela atau tab baru
  window.open(url, '_blank');
}

// Ambil tautan WhatsApp dan tambahkan event listener
var whatsappLink1 = document.getElementById("whatsappLink1");
whatsappLink1.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Furnitur...");
});

var whatsappLink2 = document.getElementById("whatsappLink2");
whatsappLink2.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Furnitur...");
});

var whatsappLink3 = document.getElementById("whatsappLink3");
whatsappLink3.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Bunga Plastik.");
});

var whatsappLink4 = document.getElementById("whatsappLink4");
whatsappLink4.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Vas Bunga Kayu.");
});

var whatsappLink5 = document.getElementById("whatsappLink5");
whatsappLink5.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Tanaman Buatan.");
});

var whatsappLink6 = document.getElementById("whatsappLink6");
whatsappLink6.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Kendi Hijau Tua.");
});

var whatsappLink7 = document.getElementById("whatsappLink7");
whatsappLink7.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Gelas Bambu.");
});

var whatsappLink8 = document.getElementById("whatsappLink8");
whatsappLink8.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Kursi Helen.");
});

var whatsappLink9 = document.getElementById("whatsappLink9");
whatsappLink9.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Botol Kaca.");
});

var whatsappLink10 = document.getElementById("whatsappLink10");
whatsappLink10.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Lampu Ruang Tamu & Kamar Tidur.");
});

var whatsappLink11 = document.getElementById("whatsappLink11");
whatsappLink11.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Kursi Nancy.");
});

var whatsappLink12 = document.getElementById("whatsappLink12");
whatsappLink12.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Kursi Sederhana.");
});

var whatsappLink13 = document.getElementById("whatsappLink13");
whatsappLink13.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Cobek Kayu.");
});

var whatsappLink14 = document.getElementById("whatsappLink14");
whatsappLink14.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Meja Bundar Hitam.");
});

var whatsappLink15 = document.getElementById("whatsappLink15");
whatsappLink15.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Lemari TV Kayu Pinus.");
});

var whatsappLink16 = document.getElementById("whatsappLink16");
whatsappLink16.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Teko Hitam.");
});

var whatsappLink17 = document.getElementById("whatsappLink17");
whatsappLink17.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Dekorasi Unik.");
});

var whatsappLink18 = document.getElementById("whatsappLink18");
whatsappLink18.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Vas Bunga.");
});

var whatsappLink19 = document.getElementById("whatsappLink19");
whatsappLink19.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Telur Kayu.");
});

var whatsappLink20 = document.getElementById("whatsappLink20");
whatsappLink20.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Botol Kayu.");
});

var whatsappLink21 = document.getElementById("whatsappLink21");
whatsappLink21.addEventListener("click", function(event) {
  handleWhatsAppClick(event, "Halo, saya ingin membeli Cangkir Kayu.");
});



// HTML FORM TO GOOGLE SHEET 
window.addEventListener("load", function() {
  const form = document.getElementById('my-form');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      alert("Berhasil Subscribe!");
    })
  });
});
