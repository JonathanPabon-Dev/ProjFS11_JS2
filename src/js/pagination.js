export function renderPaginator(totalPages, currentPage, mobile = false) {
  const paginatorContainer = document.getElementById('paginator-container');
  paginatorContainer.innerHTML = '';

  const startPage = totalPages > 5 ? Math.max(currentPage - 2, 1) : 1;
  const endPage =
    totalPages > 5 ? Math.min(startPage + 4, totalPages) : totalPages;

  const buttons = [];

  if (currentPage > 4 && totalPages > 5 && !mobile) {
    buttons.push({ type: 'button', value: 1 });
    buttons.push({ type: 'dot', value: '...' });
  }

  for (let i = startPage; i <= endPage; i++) {
    buttons.push({ type: 'button', value: i });
  }

  if (endPage < totalPages - 1 && !mobile) {
    buttons.push({ type: 'dot', value: '...' });
    buttons.push({ type: 'button', value: totalPages });
  }

  buttons.unshift({
    type: 'button',
    value: 'Prev',
    disabled: currentPage === 1,
  });
  buttons.push({
    type: 'button',
    value: 'Next',
    disabled: currentPage === totalPages,
  });

  buttons.forEach(item => {
    if (item.type === 'button') {
      const button = document.createElement('button');
      button.textContent = '';
      button.classList.add('pg-btn');
      if (item.value === 'Prev') {
        button.id = 'prev-btn';
        button.classList.add('pg-btn__arrow');
        button.innerHTML = `<svg class="svg-close-modal">
                              <use href="./images/symbol-defs.svg#filmoteka-left-arrow"></use>
                            </svg>`;
      } else if (item.value === 'Next') {
        button.id = 'next-btn';
        button.classList.add('pg-btn__arrow');
        button.innerHTML = `<svg class="svg-close-modal">
                              <use href="./images/symbol-defs.svg#filmoteka-right-arrow"></use>
                            </svg>`;
      } else {
        button.textContent = item.value;
      }

      if (item.value === currentPage) {
        button.classList.add('pg-active');
      }

      if (item.disabled) {
        button.disabled = true;
        button.classList.add('disabled');
      }

      paginatorContainer.appendChild(button);
    } else if (item.type === 'dot') {
      const dot = document.createElement('button');
      dot.classList.add('pg-btn', 'pg-btn__dot');
      dot.textContent = item.value;
      paginatorContainer.appendChild(dot);
    }
  });
}
