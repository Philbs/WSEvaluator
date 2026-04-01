document.addEventListener('DOMContentLoaded', () => {
      console.log('WS Evaluator Initialized');
      const viewContainer = document.getElementById('view-container');
      const pageTitle = document.getElementById('page-title');
      const navItems = document.querySelectorAll('.nav-item');

                              const routes = {
                                        'dashboard': () => viewContainer.innerHTML = '<h2>Dashboard</h2>',
                                        'provas': () => viewContainer.innerHTML = '<h2>Gerador de Provas</h2>',
                                        'cis': () => viewContainer.innerHTML = '<h2>Gerador de CIS</h2>',
                                        'avaliacao': () => viewContainer.innerHTML = '<h2>Avaliacao</h2>',
                                        'relatorios': () => viewContainer.innerHTML = '<h2>Relatorios</h2>'
                              };

                              function navigate(page) {
                                        navItems.forEach(item => item.classList.toggle('active', item.dataset.page === page));
                                        pageTitle.innerText = page.charAt(0).toUpperCase() + page.slice(1);
                                        if (routes[page]) routes[page]();
                              }

                              navItems.forEach(item => {
                                        item.addEventListener('click', () => navigate(item.dataset.page));
                              });

                              navigate('dashboard');
});
