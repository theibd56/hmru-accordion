import '../style.css'

document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    if (accordionItems.length === 0) return;

    const closeAll = () => {
        accordionItems.forEach(el => el.classList.remove('open'));
    };

    accordionItems.forEach((item) => {
        item.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');

            closeAll();

            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    window.addEventListener('resize', closeAll);
});

