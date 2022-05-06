
let introducing = new Swiper(".introducing-swiper", {
  spaceBetween: 10,
  pagination: {
    el: ".introducing-swiper-pagination",
    clickable: true,
  },
});

let spaces = new Swiper(".spaces-swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      centeredSlides: false,
    },
    240: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".spaces-swiper-button-next",
    prevEl: ".spaces-swiper-button-prev",
  },
  pagination: {
    el: ".spaces-swiper-pagination",
    clickable: true,
    type: "custom",
    renderCustom: function(swiper, current, total) {
  
      var paginationHtml = "<ul>";
      for (let i = 1; i <= total; i++) {
        if (current == i) {
          paginationHtml += `<li class="swiper-pagination-bullet active"></li>`;
        } else {
          paginationHtml += `<li class="swiper-pagination-bullet"></li>`;
        }
      }
      paginationHtml += "</ul>";
      paginationHtml += `<span class="swiper-pagination-current">0${current} </span>/<span class="swiper-pagination-total"> 0${total}</span>`;
      return paginationHtml;
    }
  }
});


const facilitiesBlock = document.querySelector(".facilities-block");
const facilitiesImageBlock = facilitiesBlock.querySelector(".facilities-img");
const facilitiesImage = facilitiesImageBlock.querySelector("img");

const facilitiesBtns = facilitiesBlock.getElementsByClassName("facilities-item");
for (let i = 0; i < facilitiesBtns.length; i++){
  facilitiesBtns[i].addEventListener("click", 
    function () {
      for (let j = 0; j < facilitiesBtns.length; j++){
        facilitiesBtns[j].classList.remove("active");
      }
      this.classList.add("active");
      facilitiesImage.src = "img/facilities/"+ this.id + ".png";
    }
  )

}


let gallery = new Swiper(".gallery-swiper", {
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".gallery-swiper-button-next",
    prevEl: ".gallery-swiper-button-prev",
  },
  slidesPerView: 4,
});

let reviews = new Swiper(".reviews-swiper", {
  spaceBetween: 30,
  pagination: {
    el: ".reviews-swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".reviews-swiper-button-next",
    prevEl: ".reviews-swiper-button-prev",
  },
  slidesPerView: 3,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});





function showEvents() {
  let showBtns = document.querySelectorAll(".item-btn");


for (let i = 0; i < showBtns.length; i++) {
  showBtns[i].addEventListener("click",  function() {

    let contentShow = this.parentElement.getElementsByClassName("item-show");
    
    if (this.classList.contains("open")) {
      contentShow[0].style.display = "none";
      this.classList.remove("open");
    } else {
      contentShow[0].style.display = "block";
    this.classList.add("open");
    }
  })
};
}

showEvents();


let showMore = document.querySelector(".btn-more");

showMore.addEventListener("click", function() {
  let faqBlock = document.querySelector(".faq-block");

  let newElement = `
      <li class="faq-item">
      <div class="item-block">
        <p class="item-text">How do I know if a space is available?</p>
        <div class="item-show">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Dolorem repellat quasi tenetur dolorum adipisci nam, ex praesentium vitae molestiae 
          natus totam odit molestias a consequatur culpa nostrum ut quibusdam esse.
        </div>
        <button class="item-btn"><span class="arrow-left"></span><span class="arrow-right"></span></button>
      </div>
    </li>
  ` ;

  faqBlock.innerHTML += newElement + newElement +newElement;
  showEvents();
});