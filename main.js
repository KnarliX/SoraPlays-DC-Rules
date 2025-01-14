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
  this.src = 'https://cdn.discordapp.com/attachments/1288526364286255124/1328633512424636447/IMG-20250114-WA0009.jpg?ex=678769e2&is=67861862&hm=4122330637044c220f01c90551d21e5ac078973c8f58ccca3ca80b52c3925366&';
};
