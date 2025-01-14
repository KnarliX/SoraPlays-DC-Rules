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


