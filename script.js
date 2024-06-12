
const dropdown = document.getElementById('dropdown');
const contentDiv = document.getElementById('content');

dropdown.addEventListener('change', (e) => {
  const selectedOption = e.target.value;
  switch (selectedOption) {
    case 'option1':
      contentDiv.innerHTML = 'You selected HTML!';
      break;
    case 'option2':
      contentDiv.innerHTML = 'You selected CSS!';
      break;
    case 'option3':
      contentDiv.innerHTML = 'You selected JAVA SCRIPT!';
      break;
    default:
      contentDiv.innerHTML = 'Initial Content';
  }

  contentDiv.classList.add('animate');
  setTimeout(() => {
    contentDiv.classList.remove('animate');
    contentDiv.classList.add('active');
    setTimeout(() => {
      contentDiv.classList.remove('active');
    }, 300);
  }, 100);
});