// Form 
const form = document.getElementById("form")
const result = document.getElementById("result")
document.getElementById("Submit").addEventListener("click", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("Name").value.trim();
    const email = document.getElementById("Email").value.trim();
    const message = document.getElementById("Pesan").value.trim();
  
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!name || !email || !message) {
      alert("Please fill in all fields!");
      return;
    }
  
    if (!nameRegex.test(name)) {
      alert("Please enter a valid name (letters and spaces only).");
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    const result = document.getElementById("result");
    result.value = `Hello, ${name}!\n\nYour email: ${email}\n\nMessage: ${message}`;
  });
  
// Task 
const menuClick = document.getElementById('menu-click');
const navbar = document.getElementById('navbar');

menuClick.addEventListener('click', function(){
    navbar.classList.toggle('hidden');
});

