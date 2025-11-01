document.addEventListener('DOMContentLoaded', () => {

    // ==================== HERO SLIDER (SWIPER) ====================
    const heroSlider = new Swiper('.hero__slider', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // effect: 'fade',
        // fadeEffect: {
        //     crossFade: true
        // },
    });


    const licensesSlider = new Swiper('.licenses-slider', {
        loop: true,
        grabCursor: true,
        // centeredSlides: true, // Этот параметр лучше убрать, когда slidesPerView > 1

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },

        slidesPerView: 3,
        spaceBetween: 30, // Добавим небольшой отступ, как на макете

        breakpoints: {
            0: {
                slidesPerView: 2.5,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 60
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 60
            }
        }
    });



    

    

        // ==================== DESKTOP DROPDOWN MENU ====================

        // --- 1. ДАННЫЕ ДЛЯ МЕНЮ ---
        const menuData = {
            'services': {
                left: [
                    { id: 'fire-safety', svg: '', text: 'Проектирование', url: '/services/design' },
                    { id: 'mounting', svg: '', text: 'Монтаж', url: '/services/mounting' },
                    { id: 'maintenance', svg: '', text: 'Техническое обслуживание', url: '/services/maintenance' },
                    { id: 'construction', svg: '', text: 'Строительство', url: '/services/construction' },
                    { id: 'stu', svg: '', text: 'Разработка СТУ', url: '/services/stu' },
                ],
                right: {
                    'fire-safety': {
                        title: 'Системы пожарной безопасности',
                        links: [
                            { text: 'Пожарная сигнализация (СПС)', url: '/services/design/sps' },
                            { text: 'Система оповещения (СОУЭ)', url: '/services/design/soue' },
                            { text: 'Спринклерная система', url: '/services/design/sprinkler' }
                        ]
                    },
                    'mounting': {
                        title: 'Монтажные работы',
                        links: [{ text: 'Монтаж СПС', url: '/services/mounting/sps' }]
                    },
                    'maintenance': {
                        title: 'Техническое обслуживание',
                        links: [{ text: 'Обслуживание сигнализации', url: '/services/maintenance/alarms' }]
                    },
                    'construction': {
                        title: 'Строительство',
                        links: [{ text: 'Пожарные резервуары', url: '/services/construction/tanks' }]
                    },
                    'stu': {
                        title: 'Разработка СТУ',
                        links: [{ text: 'Анализ объекта', url: '/services/stu/analysis' }]
                    },
                }
            },
            'documentation': {
                left: [{ id: 'certs', svg: '', text: 'Сертификаты', url: '/docs/certs' }],
                right: {
                    'certs': { title: 'Сертификаты', links: [{ text: 'Сертификат ISO 9001', url: '/docs/certs/iso' }] }
                }
            },
            'articles': {
                left: [{ id: 'news', svg: '', text: 'Новости', url: '/articles/news' }],
                right: {
                    'news': { title: 'Новости компании', links: [{ text: 'Открытие филиала', url: '/articles/news/new-office' }] }
                }
            }
        };

        // --- 2. ЛОГИКА РАБОТЫ МЕНЮ ---
        const nav = document.querySelector('.nav');
        const dropdownItems = document.querySelectorAll('.nav__item--has-dropdown');
        let activeDropdown = null;
        let leaveTimeout;

        const createDropdownHTML = (data) => {
            const leftColHTML = data.left.map(item => `
            <div class="dropdown-menu__item" data-submenu-id="${item.id}">
                <a href="${item.url}" class="dropdown-menu__item-text">
                    ${item.svg || '<svg viewBox="0 0 24 24"></svg>'}
                    <span>${item.text}</span>
                </a>
                <span class="dropdown-menu__item-arrow">
                    <svg viewBox="0 0 8 12"><path d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z" fill="currentColor"/></svg>
                </span>
            </div>
        `).join('');

            const rightColHTML = Object.entries(data.right).map(([key, submenu]) => `
            <div class="submenu" data-submenu-id="${key}">
                <h3 class="submenu__title">${submenu.title}</h3>
                <ul class="submenu__list">
                    ${submenu.links.map(link => `<li><a href="${link.url}" class="submenu__link">${link.text}</a></li>`).join('')}
                </ul>
            </div>
        `).join('');

            return `
            <div class="dropdown-menu">
                <div class="dropdown-menu__container">
                    <div class="dropdown-menu__left">${leftColHTML}</div>
                    <div class="dropdown-menu__right">${rightColHTML}</div>
                </div>
            </div>
        `;
        };

        const showSubmenu = (submenuId, dropdown) => {
            const leftItems = dropdown.querySelectorAll('.dropdown-menu__item');
            const rightSubmenus = dropdown.querySelectorAll('.submenu');

            leftItems.forEach(i => i.classList.remove('is-active'));
            rightSubmenus.forEach(s => s.classList.remove('is-active'));

            const activeLeftItem = Array.from(leftItems).find(i => i.dataset.submenuId === submenuId);
            const activeSubmenu = Array.from(rightSubmenus).find(s => s.dataset.submenuId === submenuId);

            if (activeLeftItem) activeLeftItem.classList.add('is-active');
            if (activeSubmenu) activeSubmenu.classList.add('is-active');
        };

        dropdownItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                clearTimeout(leaveTimeout);

                if (item.classList.contains('is-active')) return;

                // Закрываем предыдущее открытое меню, если оно есть
                if (activeDropdown && activeDropdown.parentElement !== item) {
                    activeDropdown.classList.remove('is-visible');
                    activeDropdown.parentElement.classList.remove('is-active');
                    activeDropdown = null;
                }

                item.classList.add('is-active');
                let dropdown = item.querySelector('.dropdown-menu');

                // Если меню для этого пункта еще не создано, создаем его
                if (!dropdown) {
                    const menuId = item.dataset.menuId;
                    const data = menuData[menuId];
                    if (data) {
                        const dropdownHTML = createDropdownHTML(data);
                        item.insertAdjacentHTML('beforeend', dropdownHTML);
                        dropdown = item.querySelector('.dropdown-menu');

                        // Добавляем обработчики наведения на левые пункты
                        const leftItems = dropdown.querySelectorAll('.dropdown-menu__item');
                        leftItems.forEach(li => {
                            const arrow = li.querySelector('.dropdown-menu__item-arrow');
                            const submenuId = li.dataset.submenuId;

                            // Показываем подменю при наведении на весь пункт
                            li.addEventListener('mouseenter', () => {
                                showSubmenu(submenuId, dropdown);
                            });

                            // Также показываем подменю при клике на стрелку (для тач-устройств в будущем)
                            if (arrow) {
                                arrow.addEventListener('click', (e) => {
                                    e.preventDefault(); // Предотвращаем переход по ссылке
                                    showSubmenu(submenuId, dropdown);
                                });
                            }
                        });
                    }
                }

                // Показываем меню
                if (dropdown) {
                    activeDropdown = dropdown;
                    setTimeout(() => {
                        dropdown.classList.add('is-visible');
                    }, 10); // Задержка для CSS-анимации

                    // Показываем первое подменю по умолчанию
                    const firstSubmenuId = menuData[item.dataset.menuId]?.left[0]?.id;
                    if (firstSubmenuId) {
                        showSubmenu(firstSubmenuId, dropdown);
                    }
                }
            });
        });

        // Логика закрытия меню
        const closeDropdownMenu = () => {
            leaveTimeout = setTimeout(() => {
                if (activeDropdown) {
                    activeDropdown.classList.remove('is-visible');
                    activeDropdown.parentElement.classList.remove('is-active');
                    activeDropdown = null;
                }
            }, 200);
        };

        nav.addEventListener('mouseleave', closeDropdownMenu);

    


    // ==================== MODAL LOGIC ====================
    const openModalButtons = document.querySelectorAll('[data-modal-open]');
    const closeModalButtons = document.querySelectorAll('[data-modal-close]');
    const body = document.body;

    const openModal = (modalId) => {
        const modal = document.getElementById(modalId);
        if (modal) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            body.style.paddingRight = `${scrollbarWidth}px`;
            body.classList.add('body--modal-open');
            modal.hidden = false;
            // Небольшая задержка для срабатывания CSS-анимации
            setTimeout(() => modal.classList.add('is-open'), 10);
        }
    };

    const closeModal = (modal) => {
        modal.classList.remove('is-open');
        // Ждем окончания анимации перед скрытием
        modal.addEventListener('transitionend', function handler() {
            modal.hidden = true;
            body.classList.remove('body--modal-open');
            body.style.paddingRight = '';
            modal.removeEventListener('transitionend', handler);
        });
    };

    openModalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = button.dataset.modalOpen;
            openModal(modalId);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const modal = button.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });

    // Закрытие модалки по клику на оверлей
    document.querySelectorAll('.modal__overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            const modal = overlay.closest('.modal');
            if (modal) {
                closeModal(modal);
            }
        });
    });

    // ==================== MOBILE MENU ====================

    const burgerBtn = document.querySelector('.burger');
    const burgerClose = document.querySelector('.burger-close');
    const mobileNav = document.querySelector('.mobile-nav');
    burgerBtn?.addEventListener('click', () => {
        burgerBtn.classList.toggle('is-active');
        mobileNav.classList.toggle('is-open');
        burgerClose.classList.toggle('is-active');
        body.classList.toggle('body--modal-open');
    });
    const closeMenu = () => {
        burgerBtn.classList.remove('is-active');
        mobileNav.classList.remove('is-open');
        burgerClose.classList.remove('is-active');
        body.classList.remove('body--modal-open');
    };

    burgerClose.addEventListener('click', () => {
        if (mobileNav.classList.contains("is-open")) {
            closeMenu()
        }
        // 3. Закрытие по клику на ссылку внутри меню (опционально, но полезно для якорей)
        mobileNav.addEventListener('click', (e) => {
            if (e.target.classList.contains('nav__link')) {
                closeMenu();
            }
        });

        // 4. Закрытие по клавише Esc
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
                closeMenu();
            }
        });
    })


    // ==================== CTA FORM VALIDATION ====================
    document.addEventListener('DOMContentLoaded', () => {

        const ctaForm = document.getElementById('main-cta-form');

        if (ctaForm) {
            ctaForm.addEventListener('submit', function (e) {
                // Отменяем стандартную отправку формы
                e.preventDefault();

                let isValid = true;
                const requiredInputs = this.querySelectorAll('[required]');

                // Сначала убираем классы ошибок со всех полей
                requiredInputs.forEach(input => {
                    input.classList.remove('is-invalid');
                });

                // Проверяем каждое обязательное поле
                requiredInputs.forEach(input => {
                    if (input.value.trim() === '') {
                        isValid = false;
                        input.classList.add('is-invalid');
                    }
                });

                // Если все поля заполнены, можно отправлять данные
                if (isValid) {
                    console.log('Форма валидна! Отправка данных...');
                    // Здесь будет ваша логика отправки данных на сервер (AJAX/Fetch)

                    // После успешной отправки можно очистить форму
                    this.reset();
                    alert('Спасибо! Ваша заявка отправлена.'); // Или показать сообщение об успехе
                } else {
                    console.log('Форма невалидна. Пожалуйста, заполните все обязательные поля.');
                }
            });

            // Убираем красную рамку, как только пользователь начинает печатать
            this.querySelectorAll('[required]').forEach(input => {
                input.addEventListener('input', () => {
                    if (input.value.trim() !== '') {
                        input.classList.remove('is-invalid');
                    }
                });
            });
        }

    });



    // ==================== FORM VALIDATION ====================
    const modalForm = document.getElementById('modal-form');
    if (modalForm) {
        modalForm.addEventListener('submit', function (e) {
            e.preventDefault();
            let isValid = true;
            const inputs = this.querySelectorAll('input[required]');

            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    isValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            if (isValid) {
                console.log('Форма валидна. Отправка...');
                // Здесь будет логика отправки данных
                this.reset();
                closeModal(this.closest('.modal'));
            }
        });

        // Убираем класс ошибки при вводе
        modalForm.querySelectorAll('input[required]').forEach(input => {
            input.addEventListener('input', () => {
                if (input.classList.contains('is-invalid')) {
                    input.classList.remove('is-invalid');
                }
            });
        });
    }

});
