const poster = document.getElementById("poster");
const posterPath = document.getElementsByClassName("poster-path")[0];

const discoverContent = document.getElementById("discover-content");
const discImg = document.getElementById("disc-img");


const container = document.querySelector('.disc-card-container');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const cards = document.querySelectorAll('.disc-card');

let currentIndex = 0;

// NEW RELEASES VARIABLES
let newBtn = document.getElementById('new-pill');
let comingBtn = document.getElementById('coming-pill');

let newRelease = document.getElementById('just-released');
let comingSoon = document.getElementById('coming-soon');

// Set the first card as active initially
cards[0].classList.add('active');

// Function to update active card
function updateActiveCard(index) {
    // Remove 'active' class from all cards
    cards.forEach(card => card.classList.remove("active"));

    // Add 'active' class to clicked card
    const activeCard = cards[index];
    activeCard.classList.add("active");

    // Update global index
    currentIndex = index;

    // Scroll smoothly to selected card
    activeCard.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // Get card ID & update the discover section
    const cardId = activeCard.getAttribute("id");
    if (cardId) {
        switchDiscoverImage(cardId);
    }
}

// Attach event listeners to each card
cards.forEach((card, index) => {
    card.addEventListener("click", function () {
        updateActiveCard(index);
    });
});


function switchCard(id) {
    if (posterPath) {
        switch (id) {
            case "split-fiction":
                posterPath.style.backgroundImage = "url('high_res_images/split-fiction-hero-desktop-02-en-10mar25.jpeg')";
                poster.innerHTML = `
                    <div class="text-content">
                        <img src="high_res_images/Split-Fiction-logo-01-en-00abc23-removebg-preview.png" alt="Split Fiction">
                        <h2>A boundary-pushing co-op adventure</h2>
                        <p >Jump into mind-blowing moments and experience the many worlds of Split Fiction, available on PS5</p>
                        <button>Find out more</button> 
                    </div>
                `;
                break;
            case "wwe-2k25":
                posterPath.style.backgroundImage = "url('high_res_images/WWE-2K25-All-Tricover-Hero-Desktop-01-25feb25.jpeg')";
                poster.innerHTML = `
                    <div class="text-content">
                        <img src="high_res_images/WWE2K25-glow-logo-01-en-20jan25-removebg-preview.png" alt="WWE 2K25">
                        <h2>Rule beyond the ring</h2>
                        <p >Featuring the Bloodline's Showcase, new match types, intergender wrestling and a roster for the ages. WWE 2K25 is available now.</p> 
                        <button>Find out more</button>
                    </div>
                `;
                break;
            case "monster-hunter":
                posterPath.style.backgroundImage = "url('high_res_images/monster-hunter-wilds-homepage-hero-desktop-01-en-26sep24.jpeg')";
                poster.innerHTML = `
                    <div class="text-content">
                        <img src="high_res_images/monster-hunter-wilds-logo-o1-en-25sep24-removebg-preview.png" alt="Monster Hunter">
                        <h2>The wilds are calling</h2>
                        <p >Explore a wild and unrelenting new frontier in the most eveolved and immersive Monster Hunter game yet, out now on PS5</p>
                        <button>Find out more</button> 
                    </div>
                `;
                break;
            case "megamarch":
                posterPath.style.backgroundImage = "url('high_res_images/MegaMarch-hero-desktop-01-en-10mar25.jpeg')";
                poster.innerHTML = `
                    <div class="text-content">
                        <img src="high_res_images/MegaMarch-logo-01-10mar25_en-removebg-preview.png" alt="MegaMarch">
                        <p >Make the most of these magnificent delas on a range of great games and add-ons, live now at PlayStation Store</p> 
                        <button>Find out more</button>
                    </div>
                `;
                break;
            case "ps-beta":
                posterPath.style.backgroundImage = "url('high_res_images/ps-beta-hero-desktop-01-en-22jan24.jpeg')";
                poster.innerHTML = `
                    <div class="ps-beta">
                        <h1>Join the Beta Program at PlayStation</h1>
                        <p >Help PlayStation deliver the very best experiences by signing up for the opportunity to test participating games, console features and more.</p>
                        <button>Join now</button> 
                    </div>
                `;
                break;
            case "lost-soul":
                posterPath.style.backgroundImage = "url('high_res_images/lost-soul-asidehero-desktop-02-en-25nov24.jpeg')";
                poster.innerHTML = `
                    <div class="text-content">
                        <img src="high_res_images/lost-soul-aside-logo-01-24jan25_en-removebg-preview.png" alt="Lost Soul">
                        <h2>Fight to save your world</h2>
                        <p >Embark on an epic odyssey to save your sister-and humanity-from mysterious dimensional invaders in this new action adventure coming soon to PS5 & PC</p> 
                        <button>Find out more</button>
                    </div>
                `;
                break;
            default:
                console.log("Invalid ID");
        }
    }
}

function switchDiscoverImage(id) {
    switch (id) {
        case "ps5Slim":
            discoverContent.innerHTML = `
                <h3>PlayStation 5 Console</h3>
                <p>Experience an all-new generation of incredible PlayStation games.</p>
            `
            discImg.innerHTML = `
                <img src="high_res_images/ps5-slim-disc-console-featured-hardware-image-block-02-en-15nov23.jpeg" alt="ps5-slim-disc-console-featured-hardware-image-block-02-en-15nov23"
                >
            `;
            cards[currentIndex].classList.add('active')
            break;
        case "ps5Pro":
            cards[currentIndex].classList.add('active')
            discoverContent.innerHTML = `
                <h3>PlayStation 5 Pro Console</h3>
                <p>Play PS5® games with the most impressive visuals ever possible on a PlayStation console.</p>
            `
            discImg.innerHTML = `
                <img src="high_res_images/ps5-pro-dualsense-image-block-01-en-18sep24.jpeg" alt="ps5-pro-dualsense-image-block-01-en-18sep24">
            `;
            break;
        case "dualsenseRange":
            discoverContent.innerHTML = `
                <h3>DualSense™ Wireless Controller</h3>
                <p>Immerse yourself in the gaming experience with a controller the supports responsive haptic feedback and dynamic trigger effects.</p>
            `
            discImg.innerHTML = `
                <img src="high_res_images/dualsense-range-stacked-image-block-01-en-11feb22.jpeg" alt="dualsense-range-stacked-image-block-01-en-11feb22">
            `;
            break;
        case "eliteHeadset":
            discoverContent.innerHTML = `
                <h3>PULSE Elite™ Wireless Headset</h3>
                <p>Enjoy lifelike gaming audio in a comfortable headset design equipped with a retractable microphone and built-in long-life battery</p>
            `
            discImg.innerHTML = `
                <img src="high_res_images/PULSE-Elite-headset-thumbnail-01-en-08sep23.jpeg" alt="PULSE-Elite-headset-thumbnail-01-en-08sep23">
            `;
            break;
        case "exploreEarbuds":
            discoverContent.innerHTML = `
                <h3>PULSE Explore™ Wireless Earbuds</h3>
                <p>Enjoy lifelike gaming audio wherever play takes you with a portable design equipped with hidden microphones and a companion charging case.</p>
            `
            discImg.innerHTML = `
                <img src="high_res_images/PULSE-Explore-earbuds-image-block-01-en-08sep23.jpeg" alt="PULSE-Explore-earbuds-image-block-01-en-08sep23">
            `;
            break;
        case "dualsenseEdge":
            discoverContent.innerHTML = `
                <h3>DualSense Edge™ Wireless Controller</h3>
                <p>Get an edge in gameplay with remappable buttons, tuneable triggers and sticks, changeable stick caps, back buttons, and more.</p>
            `
            discImg.innerHTML = `
                <img src="high_res_images/dualsense-edge-featured-hardware-image-block-01-en-11aug23.jpeg" alt="dualsense-edge-featured-hardware-image-block-01-en-11aug23">
            `;
            break;
        case "accessController":
            discoverContent.innerHTML = `
                <h3>Access™ Controller</h3>
                <p>A highly customisable PlayStation®5 controller kit designed to make gaming more accessible.</p>
            `
            discImg.innerHTML = `
                <img src="high_res_images/access-controller-featured-hardware-image-block-01-en-12oct23.jpeg" alt="access-controller-featured-hardware-image-block-01-en-12oct23">
            `;
            break;
        case "consoleCover":
            discoverContent.innerHTML = `
                <h3>PS5 Console Covers</h3>
                <p>Personalise your PlayStation 5 or PlayStation 5 Digital Edition console with a vibrant array of new colour options.</p>
            `
            discImg.innerHTML = `
                <img src="high_res_images/ps5-console-cover-range-image-block-01-en-16feb22.jpeg" alt="ps5-console-cover-range-image-block-01-en-16feb22">
            `;
            break;
        case "mediaRemote":
            discoverContent.innerHTML = `
                <h3>Media Remote</h3>
                <p>Conveniently control movies, streaming services and more on your PS5 console with an intuitive layout.</p>
            `
            discImg.innerHTML = `
                <img src="high_res_images/media-remote-featured-hardware-image-block-01-en-11aug23.jpeg" alt="media-remote-featured-hardware-image-block-01-en-11aug23">
            `;
            break;
        case "hdCamera":
            discoverContent.innerHTML = `
                <h3>HD Camera</h3>
                <p>Add yourself to your gameplay videos and broadcasts with smooth, sharp, full-HD capture. </p>
            `
            discImg.innerHTML = `
                <img src="high_res_images/hd-camera-featured-hardware-image-block-01-en-11aug23.jpeg" alt="hd-camera-featured-hardware-image-block-01-en-11aug23">
            `;
            break;
        default:
            console.log("Invalid ID");
    }

}



prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateActiveCard(currentIndex);
    }
});

nextBtn.addEventListener('click', function() {
    if (currentIndex < cards.length - 1) {
        currentIndex++;
        updateActiveCard(currentIndex);
    }
});

const playStationContainer = document.querySelector('.playstation-card-container');
const pprevButton = document.querySelector('.btn-prev');
const nnextButton = document.querySelector('.btn-next');

let scrollAmount = 0;

pprevButton.addEventListener('click', () => {
    const cardWidth = playStationContainer.querySelector('.playstation-card').offsetWidth;
    scrollAmount -= cardWidth + 20; // Subtract card width and gap
    playStationContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
    });
});

nnextButton.addEventListener('click', () => {
    const cardWidth = playStationContainer.querySelector('.playstation-card').offsetWidth;
    scrollAmount += cardWidth + 20; // Add card width and gap
    playStationContainer.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
    });
});

// NEW RELEASES
function switchPill(pillOne, gridOne, pillTwo, gridTwo) {
    if (!pillOne.classList.contains('active')) {
        pillOne.classList.add('active');
        pillTwo.classList.remove('active');


        gridTwo.style.opacity = "0";

        setTimeout(() => {
            gridTwo.classList.add('not-active-mode');
            gridTwo.style.display = "none";


            gridOne.style.display = "grid";
            gridOne.style.opacity = "0";

            setTimeout(() => {
                gridOne.style.opacity = "1";
            }, 20);
        }, 200);
    }
}

newBtn.addEventListener('click', () => {
    switchPill(newBtn, newRelease, comingBtn, comingSoon);
})

comingBtn.addEventListener('click', () => {
    switchPill(comingBtn, comingSoon, newBtn, newRelease);
})


// 
// PLAYSTATION STORE

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".blog-card-holder");
    const prevBlogBtn = document.querySelector(".carousel-prev");
    const nextBlogBtn = document.querySelector(".carousel-next");
    const cards = document.querySelectorAll(".blog-card");
    
    let scrollAmount = 0;
    const cardWidth = cards[0].offsetWidth + 14; // Adding gap
    const totalCards = cards.length;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    
    function updateButtons() {
        prevBlogBtn.style.opacity = "1";
        nextBlogBtn.style.opacity = "1";
    }
    
    prevBlogBtn.addEventListener("click", function () {
        if (scrollAmount > 0) {
            scrollAmount -= cardWidth;
            carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
        } else {
            // Loop seamlessly to last item
            scrollAmount = maxScroll + cardWidth;
            carousel.scrollTo({ left: scrollAmount, behavior: "instant" });
            setTimeout(() => {
                scrollAmount -= cardWidth;
                carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
            }, 50);
        }
        updateButtons();
    });
    
    nextBlogBtn.addEventListener("click", function () {
        if (scrollAmount < maxScroll) {
            scrollAmount += cardWidth;
            carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
        } else {
            // Loop seamlessly to first item
            scrollAmount = -cardWidth;
            carousel.scrollTo({ left: scrollAmount, behavior: "instant" });
            setTimeout(() => {
                scrollAmount = 0;
                carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
            }, 50);
        }
        updateButtons();
    });
    
    updateButtons();
});