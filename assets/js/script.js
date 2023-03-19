var galleryImages = document.querySelectorAll(".gallery-image");
var galleryControl = document.querySelectorAll(".gallery-control li .btn");

galleryControl[0].classList.add("btn-active");

galleryControl.forEach(function (control, index) {
  control.addEventListener("click", function (e) {
    e.preventDefault();
    var controlBtn = control.dataset.galleryControl;
    for (var i = 0; i < galleryControl.length; i++) {
      galleryControl[i].classList.remove("btn-active");
    }
    control.classList.add("btn-active");

    // display filtered images when filter button triggered

    for (var j = 0; j < galleryImages.length; j++) {
      galleryImages[j].classList.remove("gallery-anime");
    }

    setTimeout(function () {
      var galleryImgArr = [];
      for (var i = 0; i < galleryImages.length; i++) {
        var dataImg = galleryImages[i].dataset.img;
        galleryImgArr.push(dataImg);
        galleryImages[i].classList.add("display-none");
        galleryImages[i].classList.add("gallery-anime");
        if (index === 0) {
          galleryImages[i].classList.remove("display-none");
        }
        if (controlBtn === galleryImgArr[i]) {
          galleryImages[i].classList.remove("display-none");
        }
      }
    }, 0);
  });
});