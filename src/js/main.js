// Smooth scroll for internal links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const el = document.querySelector(targetId);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Placeholder payment handler — replace with merchant SDK later
function handlePayment(plan) {
  // TODO: Integrate merchant (fiat/crypto)
  // For now we just log the selection.
  console.log('Оплата плана:', plan);
  alert(`Вы выбрали план: ${plan}. Интеграция оплаты будет добавлена позже.`);
}

// Bind pay buttons
document.querySelectorAll('.pay-btn').forEach(btn => {
  btn.addEventListener('click', () => handlePayment(btn.dataset.plan));
});
