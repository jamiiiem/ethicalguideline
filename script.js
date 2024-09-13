document.addEventListener('DOMContentLoaded', () => {
    const sectionHeaders = document.querySelectorAll('.section-header');

    sectionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const subsections = header.nextElementSibling;
            if (subsections.style.display === 'block') {
                subsections.style.display = 'none';
            } else {
                subsections.style.display = 'block';
            }
        });
    });
});
