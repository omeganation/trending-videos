// Simulate loading
window.onload = function () {
    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
        loadTrendingVideos(); // Load videos after the page has loaded
    }, 2000); // Wait for 2 seconds
};

// Array of sample videos
const videos = {
    instagram: [
        {
            url: 'https://www.instagram.com/p/xyz123/',
            thumbnail: 'https://via.placeholder.com/200x120?text=Instagram'
        },
        {
            url: 'https://www.instagram.com/p/xyz456/',
            thumbnail: 'https://via.placeholder.com/200x120?text=Instagram'
        },
    ],
    tiktok: [
        {
            url: 'https://www.tiktok.com/@username/video/1234567890',
            thumbnail: 'https://via.placeholder.com/200x120?text=TikTok'
        },
        {
            url: 'https://www.tiktok.com/@username/video/0987654321',
            thumbnail: 'https://via.placeholder.com/200x120?text=TikTok'
        },
    ],
    youtube: [
        {
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            thumbnail: 'https://via.placeholder.com/200x120?text=YouTube'
        },
        {
            url: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
            thumbnail: 'https://via.placeholder.com/200x120?text=YouTube'
        },
    ],
    facebook: [
        {
            url: 'https://www.facebook.com/watch/?v=1234567890',
            thumbnail: 'https://via.placeholder.com/200x120?text=Facebook'
        },
        {
            url: 'https://www.facebook.com/watch/?v=0987654321',
            thumbnail: 'https://via.placeholder.com/200x120?text=Facebook'
        },
    ],
    x: [
        {
            url: 'https://x.com/status/1234567890',
            thumbnail: 'https://via.placeholder.com/200x120?text=X'
        },
        {
            url: 'https://x.com/status/0987654321',
            thumbnail: 'https://via.placeholder.com/200x120?text=X'
        },
    ],
};

const videoContainer = document.getElementById('video-container');

// Load videos based on selection
function loadTrendingVideos() {
    loadInstagramVideos();
}

function loadInstagramVideos() {
    videoContainer.innerHTML = ''; // Clear current videos
    loadVideos(videos.instagram);
}

function loadTikTokVideos() {
    videoContainer.innerHTML = ''; // Clear current videos
    loadVideos(videos.tiktok);
}

function loadYouTubeVideos() {
    videoContainer.innerHTML = ''; // Clear current videos
    loadVideos(videos.youtube);
}

function loadFacebookVideos() {
    videoContainer.innerHTML = ''; // Clear current videos
    loadVideos(videos.facebook);
}

function loadXVideos() {
    videoContainer.innerHTML = ''; // Clear current videos
    loadVideos(videos.x);
}

// Function to load videos dynamically
function loadVideos(videoArray) {
    videoArray.forEach((video, index) => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.style.animationDelay = `${index * 0.3}s`; 
        
        const videoLink = document.createElement('a');
        videoLink.classList.add('video-link');
        videoLink.href = video.url;
        videoLink.target = '_blank';
        
        const thumbnailImage = document.createElement('img');
        thumbnailImage.classList.add('video-thumbnail');
        thumbnailImage.src = video.thumbnail;

        videoLink.appendChild(thumbnailImage);
        videoItem.appendChild(videoLink);
        videoContainer.appendChild(videoItem);
    });
}

// Toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
