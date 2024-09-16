// Variables to track the selected section and tag
let selectedSection = 'all';
let selectedTag = 'all';

// Event listeners for section and tag dropdowns
document.querySelectorAll('.section-dropdown a').forEach(item => {
    item.addEventListener('click', updateSection);
});

document.querySelectorAll('.tag-dropdown a').forEach(item => {
    item.addEventListener('click', updateTag);
});

function updateSection(e) {
    e.preventDefault();
    selectedSection = e.target.getAttribute('data-section');
    document.getElementById('sectionBtn').textContent = e.target.textContent;
    filterContent();
}

function updateTag(e) {
    e.preventDefault();
    selectedTag = e.target.getAttribute('data-tag');
    document.getElementById('tagBtn').textContent = e.target.textContent;
    filterContent();
}

function filterContent() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const sectionID = section.getAttribute('data-section');
        if (selectedSection === 'all' || sectionID === selectedSection) {
            section.style.display = '';

            const subsections = section.querySelectorAll('.subsection');
            let hasVisibleSubsection = false;

            subsections.forEach(subsection => {
                const tags = subsection.getAttribute('data-tags').split(' ');

                if (selectedTag === 'all' || tags.includes(selectedTag)) {
                    subsection.style.display = '';
                    hasVisibleSubsection = true;
                } else {
                    subsection.style.display = 'none';
                }
            });

            if (!hasVisibleSubsection && selectedTag !== 'all') {
                section.style.display = 'none';
            }
        } else {
            section.style.display = 'none';
        }
    });
}
