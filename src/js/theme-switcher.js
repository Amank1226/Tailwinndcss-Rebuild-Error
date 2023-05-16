const toggle = document.querySelector('#theme-toggle');
const body = document.querySelector('body');
const icon = document.querySelector('#theme-icon');

// check if user has set a theme preference
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// set the initial theme based on user preference or browser default
if (currentTheme) {
  body.classList.add(currentTheme);
  if (currentTheme === 'dark') {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
} else {
  body.classList.add('light');
}

toggle.addEventListener('click', function() {
  // toggle the class of the body element
  body.classList.toggle('dark');

  // toggle the icon
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');

  // update the user preference
  const theme = body.classList.contains('dark') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});
