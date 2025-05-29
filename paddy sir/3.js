const reviews = [
    {
        name: "Alice Johnson",
        job: "Frontend Developer",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        text: "This product changed my workflow. Super easy to use and efficient!"
    },
    {
        name: "Mark Peterson",
        job: "Backend Engineer",
        image: "https://randomuser.me/api/portraits/men/34.jpg",
        text: "I've tried many solutions, but this one really stands out. Highly recommended."
    },
    {
        name: "Sara Lee",
        job: "UI/UX Designer",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
        text: "Love the clean interface and responsive design. Works perfectly on all devices."
    }
];

let current = 0;

const avatar = document.getElementById('avatar');
const name = document.getElementById('name');
const job = document.getElementById('job');
const text = document.getElementById('text');

function showReview(index) {
    const review = reviews[index];
    avatar.src = review.image;
    name.textContent = review.name;
    job.textContent = review.job;
    text.textContent = review.text;
}

document.getElementById('next').addEventListener('click', () => {
    current = (current + 1) % reviews.length;
    showReview(current);
});

document.getElementById('prev').addEventListener('click', () => {
    current = (current - 1 + reviews.length) % reviews.length;
    showReview(current);
});

// Initial load
showReview(current);
