document.addEventListener('DOMContentLoaded', function () {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function () {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

// quotes of the day
document.addEventListener("DOMContentLoaded", function () {
    var quotes = [
        { "quote": "I'm the new Moses" },
        { "quote": "Winning is the only option" },
        { "quote": "We will be recognized" },
        { "quote": "You can't look at a glass half full or empty if it's overflowing." },
        { "quote": "There are people sleeping in parking lots" },
        { "quote": "Distraction is the enemy of vision" },
        { "quote": "I'm nice at ping pong" },
        { "quote": "I give up drinking every week" },
        { "quote": "We will change the paradigm" },
        { "quote": "Sometimes you have to get rid of everything" },
        { "quote": "Life is the ultimate gift" },
        { "quote": "Burn that excel spread sheet" },
        { "quote": "People only get jealous when they care." },
        { "quote": "All you have to be is yourself" },
        { "quote": "Believe in your flyness...conquer your shyness." },
        { "quote": "George Bush doesn't care about black people" },
        { "quote": "Artists are founders" },
        { "quote": "I leave my emojis bart Simpson color" },
        { "quote": "There's so many lonely emojis man" },
        { "quote": "All the musicians will be free" },
        { "quote": "My memories are from the future" },
        { "quote": "I'm the best" },
        { "quote": "Style is genderless" },
        { "quote": "I watch Bladerunner on repeat" },
        { "quote": "If I got any cooler I would freeze to death" },
        { "quote": "Only free thinkers" },
        { "quote": "The world is our office" },
        { "quote": "My greatest award is what I'm about to do." },
        { "quote": "I make awesome decisions in bike stores!!!" },
        { "quote": "We must form a union. We must unify" },
        { "quote": "Tweeting is legal and also therapeutic" },
        { "quote": "I feel calm but energized" },
        { "quote": "I don't expect to be understood at all." },
        // { "quote": "One day I'm gon' marry a porn star" },
        { "quote": "I love sleep; it's my favorite." },
        { "quote": "I wish I had a friend like me" },
        { "quote": "Keep squares out yo circle" },
        { "quote": "Pulling up in the may bike" },
        { "quote": "For me giving up is way harder than trying." },
        { "quote": "We will heal. We will cure." },
        { "quote": "Buy property" },
        { "quote": "You only live once, but if you do it right, once is enough." },
        { "quote": "If you tell the truth, you don't have to remember anything." },
        { "quote": "Be yourself; everyone else is already taken." },
        { "quote": "A room without books is like a body without a soul." },
        { "quote": "You only live once, but if you do it right, once is enough." },
        { "quote": "If you tell the truth, you don't have to remember anything." },
        { "quote": "We don't see things as they are, we see them as we are." },
        { "quote": "Without music, life would be a mistake." },
        { "quote": "We are all in the gutter, but some of us are looking at the stars." },
        { "quote": "A woman is like a tea bag; you never know how strong it is until it's in hot water." },
        { "quote": "If you don't stand for something you will fall for anything." },
        { "quote": "For every minute you are angry you lose sixty seconds of happiness." },
        { "quote": "If you judge people, you have no time to love them." },
        { "quote": "I'm not upset that you lied to me, I'm upset that from now on I can't believe you." },
        { "quote": "Everything you can imagine is real." },

    ]

    function getQuote() {
        var randomIndex = Math.floor(Math.random() * quotes.length);
        var selectedQuote = quotes[randomIndex];

        document.getElementById('hero-title').textContent = selectedQuote.quote;
    }

    document.getElementById('hero-title-refresh').addEventListener('click', getQuote);
    getQuote();
});

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
const myAge = document.getElementById('profileAge')
myAge.innerText = getAge("2003/12/24")

// ---------------------------------

// Get paths with targets.
const animatedPaths = document.querySelectorAll('[data-morph-targets]');

// Create timeline for each morphing paths.
animatedPaths.forEach((path, index) => {
    const targets = path.getAttribute('data-morph-targets').split(',');
    const timeline = gsap.timeline({
        delay: index * -2,
        repeat: -1,
        yoyo: true,
    });

    targets.forEach((targetId) => {
        const target = document.querySelector(`[data-morph=${targetId}]`);

        timeline.to(
            path,
            5, {
            morphSVG: target,
            ease: "none",
        },
        );
    });
});
