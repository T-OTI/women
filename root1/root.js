document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll('.page');
    const nextButton = document.getElementById('nextButton');
    const prevButton = document.getElementById('prevButton');
    let currentPageIndex = 0;

    function showPage(index) {
        pages.forEach((page, pageIndex) => {
            if (pageIndex === index) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    function nextPage() {
        currentPageIndex++;
        if (currentPageIndex >= pages.length) {
            currentPageIndex = 0;
        }
        showPage(currentPageIndex);
    }

    function prevPage() {
        currentPageIndex--;
        if (currentPageIndex < 0) {
            currentPageIndex = pages.length - 1;
        }
        showPage(currentPageIndex);
    }

    nextButton.addEventListener('click', nextPage);
    prevButton.addEventListener('click', prevPage);
});
