document.querySelector(".mobile-menu").addEventListener("click", function () {
  this.classList.toggle("is-active");
  document.querySelector(".nav-list").classList.toggle("active");
});


const observer = new IntersectionObserver( entries => {
  console.log(entries)
})

observer.observe(document.querySelector(".init-hidden"))