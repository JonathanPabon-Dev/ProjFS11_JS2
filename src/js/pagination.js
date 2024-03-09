export function renderPaginator(
  currentPage,
  totalResults,
  moviesPerPage = 20,
  mobile = false
) {
  const totalPages = Math.min(Math.ceil(totalResults / moviesPerPage), 500);
  const paginatorContainer = document.querySelector('.pg-container');
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
      button.type = 'button';
      button.value = item.value;
      if (item.value === 'Prev') {
        button.id = 'prev-btn';
        button.classList.add('pg-btn__arrow');
        button.innerHTML = `<svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M12.6666 8H3.33325" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M7.99992 12.6667L3.33325 8.00004L7.99992 3.33337" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>`;
      } else if (item.value === 'Next') {
        button.id = 'next-btn';
        button.classList.add('pg-btn__arrow');
        button.innerHTML = `<svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3.33341 8H12.6667" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.00008 12.6667L12.6667 8.00004L8.00008 3.33337" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
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

export function resizePaginator(totalResults, currentPage) {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    renderPaginator(currentPage, totalResults);
  } else {
    renderPaginator(currentPage, totalResults, 20, true);
  }
}
