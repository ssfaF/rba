// slider
const imageArray = [
  'Вхідна група.jpg',               // 1
  'HOUSE_2_SD_VZ_2024-09-01_6.jpg', // 2
  'HOUSE_3_SD_VZ_2024-09-01_2.jpg', // 3
  'HOUSE_4_SD_VZ_2024-09-01_2.jpg', // 4
  'HOUSE_5_SD_VZ_2024-09-01_5.jpg', // 5
  'HOUSE_6_SD_VZ_2024-09-01_1.jpg', // 6
  'HOUSE_7_SD_VZ_2024-09-01_3.jpg', // 7
  '1.jpg'
];
const slidesContainer = document.getElementById('slides');
const dotsContainer = document.getElementById('dots');
imageArray.forEach((image, index) => {
  const imgElement = document.createElement('img');
  imgElement.src = `home-slider-images/${image}`;
  if (index === 0) imgElement.classList.add('active');
  slidesContainer.appendChild(imgElement);
  const dotElement = document.createElement('div');
  if (index === 0) dotElement.classList.add('active');
  dotsContainer.appendChild(dotElement);
  dotElement.addEventListener('click', () => {
    showSlide(index);
  });
});
let currentIndex = 0;
function showSlide(index) {
  const slides = document.querySelectorAll('.slides img');
  const dots = document.querySelectorAll('.dots div');
  slides[currentIndex].classList.remove('active');
  dots[currentIndex].classList.remove('active');
  currentIndex = index;
  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}
setInterval(() => {
  let nextIndex = (currentIndex + 1) % imageArray.length;
  showSlide(nextIndex);
}, 5000);