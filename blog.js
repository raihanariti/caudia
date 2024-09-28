//testimonial section
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.testimonial-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f8f9fa';
        });

        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
});

//statistics section

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll('.statistic-item h3');
  const speed = 200; // The speed of the animation (milliseconds)

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.parentElement.getAttribute('data-count');
      const count = +counter.innerText;

      const inc = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(updateCount, 1);
      } else {
        counter.innerText = target; // Ensure it ends on the target number
      }
    };

    updateCount();
  });
});

//header

  document.getElementById('sidebarToggle').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
  });

  document.getElementById('closeSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.remove('active');
  });





