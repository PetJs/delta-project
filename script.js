const poster = document.getElementById("poster");
const posterPath = document.getElementsByClassName("poster-path")[0];

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
























// STARTED HERE TO MERGE BETTER
let newBtn = document.getElementById('new-pill');
let comingBtn = document.getElementById('coming-pill');

let newRelease = document.getElementById('just-released');
let comingSoon = document.getElementById('coming-soon');

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