document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.querySelector(".welcome");
    let userName = prompt("Please enter your name:");

    if (userName !== null && userName !== "") {
        welcomeMessage.innerHTML = `Hi <span id="name">${userName}</span>, welcome to our website.`;
    }
});
function validateForm() {
    const nama = document.forms['message-form']['name-input'].value;
    const birthdate = document.forms['message-form']['birth-date'].value;
    const gender = document.forms['message-form']['gender'].value;
    const messages = document.forms['message-form']['messages'].value;

    const errorElement = document.getElementById('error-name');
   
    if (nama == '' || birthdate == '' || gender == '' || messages == '') {
        document.getElementById("error-name").innerHTML = "There should not be any empty option!"
        
        return false
    }
    
    errorElement.innerHTML = "Success!"; 
    document.getElementById("name").innerHTML = nama;
    
    return false
}
document.addEventListener('DOMContentLoaded', function() {
    const profileLink = document.getElementById('profile-link');
    const aboutSection = document.getElementById('about-section');

    profileLink.addEventListener('click', function() {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const welcomeSection = document.getElementById('welcome-section');

    homeLink.addEventListener('click', function() {
        welcomeSection.scrollIntoView({ behavior: 'smooth' });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const achievementsLink = document.getElementById("achievements-link");
    const achievementsSection = document.querySelector(".achievements");

    achievementsLink.addEventListener("click", function() {
        achievementsSection.scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const messageLink = document.getElementById('message-link');
    const messageSection = document.getElementById('message-section');

    messageLink.addEventListener('click', function() {
        messageSection.scrollIntoView({ behavior: 'smooth' });
    });
});
function displayResponse() {
    const nameInput = document.getElementById('name-input').value;
    const birthDateInput = document.getElementById('birth-date').value;
    const genderInput = document.querySelector('input[name="gender"]:checked');
    const messageInput = document.querySelector('textarea[name="messages"]').value;
  
    const options = { timeZone: 'Asia/Jakarta', timeZoneName: 'short' };
    const currentTime = new Date().toLocaleString('en-US', options);
  
    const nameResponse = nameInput ? `<p class="response-text">Name: ${nameInput}</p>` : '<p class="response-error">Error</p>';
    const birthDateResponse = birthDateInput ? `<p class="response-text">Birth Date: ${birthDateInput}</p>` : '<p class="response-error">Error</p>';
    const genderResponse = genderInput ? `<p class="response-text">Gender: ${genderInput.value}</p>` : '<p class="response-error">Error</p>';
    const messageResponse = messageInput ? `<p class="response-text">Message: ${messageInput}</p>` : '<p class="response-error">Error</p>';
    const timeResponse = `<p class="response-text">Current Time (WIB): ${currentTime}</p>`;
      
    document.getElementById('name-response').innerHTML = nameResponse;
    document.getElementById('birthdate-response').innerHTML = birthDateResponse;
    document.getElementById('gender-response').innerHTML = genderResponse;
    document.getElementById('message-response').innerHTML = messageResponse;
    document.getElementById('time-response').innerHTML = timeResponse;
  
    const responseOutline = document.querySelector('.response-outline');
    responseOutline.style.border = '2px solid black';
    responseOutline.style.padding = '10px';
  
    const welcomeMessage = document.querySelector('.welcome');
    if (nameInput) {
      welcomeMessage.innerHTML = `Hi <span id="name">${nameInput}</span>, welcome to our website.`;
    }
  }
  
  document.forms['message-form'].addEventListener('submit', function (event) {
    event.preventDefault();
    displayResponse();
  });
  