  const mobileWidth = 680;
  const addMenuBackground = () => {
  const pageWidth = window.innerWidth;
  const bodyOffset = document.body.scrollTop || document.documentElement.scrollTop;
  const navigation = document.querySelector("header nav");
  if(pageWidth > mobileWidth){
  bodyOffset > 0 ? navigation.classList.add("aw-nav-fixed") : navigation.classList.remove("aw-nav-fixed");
}
}
//navigation to each section
const onNavItemClick = () => {
  const navItemsList = document.querySelectorAll(".aw-section-link");
  const navItems = [...navItemsList];
  navItems.forEach(item =>{
    item.addEventListener('click', event =>{
      event.preventDefault();
      const sectionId = event.target.getAttribute("href") || event.target.dataset.href;
      console.log(sectionId);
      scrollTopSection(sectionId);
    });
  });
}

const scrollTopSection = sectionId => {
  let sectionPosition , sectionOffset;
  const navigationHeight = document.querySelector("header nav").offsetHeight;
  const pageWidth = windo.innerWidth;
  if(sectionId !== "#"){
    sectionOffset = document.querySelector(sectionId).offsetTop;
    sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset;

  }
  else{
    sectionPosition = 0;
  }
window.scrollTo({
  'behavior' : 'smooth',
  'left' : 0,
  'top' : sectionPosition
})
}
const onGalleryImageClick = () =>{
  const galleryImageList = document.querySelectorAll("#aw-gallery li");
  const galleryImages = [...galleryImageList];
  galleryImages.forEach(image =>{
    image.addEventListener("click", event =>{
      galleryImageOpen(event.target);
    });

  });
}
const galleryImageOpen = image =>{
  const imageSrc = image.getAttribute("src");
  const openedImage = `<div class='aw-backdrop'><img src='${imageSrc}' alt=''/>
                      <span class='aw-backdrop-close'>X</span></div>`;
  document.body.insertAdjacentHTML("beforeend",openedImage);
}
window.addEventListener("scroll", () =>{
  addMenuBackground();
});

onGalleryImageClick();
onNavItemClick();
