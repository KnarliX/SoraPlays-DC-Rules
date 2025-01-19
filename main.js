function toggleRule(element) {
  const openRule = document.querySelector('.rule.open');
  const details = element.querySelector('.rule-details');
  const arrow = element.querySelector('.arrow');

  // Close any currently open rule
  if (openRule && openRule !== element) {
    openRule.classList.remove('open');
    openRule.querySelector('.rule-details').style.display = 'none';
    openRule.querySelector('.arrow').textContent = '✓';
  }

  // Toggle the clicked rule
  if (element.classList.contains('open')) {
    element.classList.remove('open');
    details.style.display = 'none';
    arrow.textContent = '✓';
  } else {
    element.classList.add('open');
    details.style.display = 'block';
    arrow.textContent = '📌';
  }
}
// Logo fallback
document.getElementById('logo').onerror = function() {
  this.src = 'https://i.ibb.co/4FQt2Mt/IMG-20250114-WA0009.jpg';
};
document.addEventListener('copy', (event) => {
            // Create a custom message
            const customMessage = `https://knarlix.github.io/Universe/`;
            
            // Set the new clipboard data
            event.clipboardData.setData('text/plain', customMessage);
            // Prevent the default copy action
            event.preventDefault();
        });
