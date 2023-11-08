
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
const showRegisterFormLink = document.getElementById('showRegisterForm');
const showLoginFormLink = document.getElementById('showLoginForm');
const userActions = document.getElementById('user-actions');
const logoutDiv = document.getElementById('logout');
const logoutButton = document.getElementById('logoutButton');
const regUsername = document.getElementById('regUsername');
const regPassword = document.getElementById('regPassword');


showRegisterFormLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});


showLoginFormLink.addEventListener('click', function(event) {
    event.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});


loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    userActions.style.display = 'none';
    logoutDiv.style.display = 'block';
    
    
    document.getElementById('commentsSection').style.display = 'block';
    document.getElementById('contactSection').style.display = 'block';
});


registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateRegistration()) {
        
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        alert('Registration successful! You can now log in.');
    }
});


logoutButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    logoutDiv.style.display = 'none';
    userActions.style.display = 'block';
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    
    
    document.getElementById('commentsSection').style.display = 'none';
    document.getElementById('contactSection').style.display = 'none';
});



function validateRegistration() {
    if (regUsername.value.length < 5) {
        alert('Username must be at least 5 characters long.');
        return false;
    }
    if (regPassword.value.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
    }
    return true;
}
let currentSlideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.gallery-item');
    const totalSlides = slides.length;
    
    
    let newSlideIndex = currentSlideIndex + direction;
    
    
    if (newSlideIndex >= totalSlides) newSlideIndex = 0;
    if (newSlideIndex < 0) newSlideIndex = totalSlides - 1;
    
    
    const gallery = document.querySelector('.gallery');
    gallery.style.transform = `translateX(-${newSlideIndex * 100}%)`;
    
    
    currentSlideIndex = newSlideIndex;
}

document.getElementById('submitComment').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');

    
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.textContent = commentInput.value;
    
    
    commentsList.appendChild(newComment);
    
    
    commentInput.value = '';
});

