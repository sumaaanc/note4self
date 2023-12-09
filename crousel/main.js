

const prevBtn = document.querySelector('#prevBtn')
const imageDiv = document.querySelector('#imageContain')
const nextBtn = document.querySelector('#nextBtn')

const links = [
    "https://4kwallpapers.com/images/wallpapers/mclaren-artura-trophy-race-cars-dark-background-2022-5k-8k--8444.jpg",
    "https://wallpapers.com/images/featured/mclaren-js7crb2zb9wbk7zk.jpg",
    "https://wallpapercrafter.com/desktop/127239-car-McLaren-P1-McLaren-front-angle-view-smoke-smoke-background.jpg",
    "https://c4.wallpaperflare.com/wallpaper/585/793/301/car-mclaren-p1-mclaren-wallpaper-preview.jpg"
]

let activeIndex = 0;

function loadImage(){
    imageDiv.innerHTML = ''
    links.forEach((car)=>{
        const images = document.createElement('img')
        if(links[activeIndex] == car){
        images.src = links[activeIndex]; 
        images.style.height = '400px';
        images.style.width = '400px';
        imageDiv.appendChild(images)
        }
    })
}
loadImage()

nextBtn.addEventListener('click',(e)=>{
    activeIndex++;
    loadImage()
})
