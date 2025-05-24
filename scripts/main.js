import '../style.css'

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelectorAll('.accordion-item')) {
        const accordionItems = document.querySelectorAll('.accordion-item');
        const columns = 2;
        const breakpoint = 992;

        const isDesktop = () => window.innerWidth >= breakpoint;

        accordionItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const isOpen = item.classList.contains('open');
                const isLeftColumn = index % columns === 0;

                accordionItems.forEach(el => el.classList.remove('open'));

                if (isOpen) return;

                item.classList.add('open');

                if (isDesktop()) {
                    const neighborIndex = isLeftColumn ? index + 1 : index - 1;
                    const neighbor = accordionItems[neighborIndex];
                    if (neighbor) {
                        neighbor.classList.add('open');
                    }
                }
            });
        });

        window.addEventListener('resize', () => {
            accordionItems.forEach(el => el.classList.remove('open'));
        });
    }
});


