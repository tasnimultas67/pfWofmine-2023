
// function getSliderItems() {
//     fetch("./portSlider.json")
//         .then(res => res.json())
//         .then(data => showsliderItems(data))
// }

// function showsliderItems(items) {
//     const portfolioContainer = document.getElementById('portfolio-slider-container');
//     items.map(item => {
//         const itemDiv = document.createElement('div');
//         itemDiv.setAttribute("style", `background-image: url(${item.imgLink});`)
//         itemDiv.classList.add('item')
//         itemDiv.innerHTML = `
//         <div class="item-desc">
//         <h3 class="card-title text-xl font-bold">${item.title}</h3>
//         <p class="lg:text-[1rem] lg:leading-6 text-sm md:text-md">${item.itemDescription}</p>
//         <a class="text-sm py-2" href="${item.liveLink}" target="_blank">Live<i class="fa-solid fa-arrow-right ml-2 "></i></a>

//       </div>
//         `
//         portfolioContainer.appendChild(itemDiv)
//     })
// }

// getSliderItems()
