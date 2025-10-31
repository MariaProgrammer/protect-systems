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
    // // Реализация через JS, как было запрошено. Для простых случаев можно использовать CSS :hover
    // const dropdownItems = document.querySelectorAll('.nav__item--has-dropdown');

    // dropdownItems.forEach(item => {
    //     item.addEventListener('mouseenter', () => {
    //         item.classList.add('is-active');
    //     });
    //     item.addEventListener('mouseleave', () => {
    //         item.classList.remove('is-active');
    //     });
    // });

    // --- 1. ДАННЫЕ ДЛЯ МЕНЮ ---
    // Здесь мы храним контент для каждого выпадающего меню.
    // Структура: id -> { левая колонка, правая колонка }
    const menuData = {
        'services': {
            left: [
                { id: 'fire-safety', icon: '🔥', text: 'Проектирование' },
                { id: 'mounting', icon: '🔧', text: 'Монтаж' },
                { id: 'maintenance', icon: '🛠️', text: 'Техническое обслуживание' },
                { id: 'construction', icon: '🏗️', text: 'Строительство' },
                { id: 'stu', icon: '📄', text: 'Разработка СТУ' },
            ],
            right: {
                'fire-safety': {
                    title: 'Системы пожарной безопасности',
                    links: ['Пожарная сигнализация (СПС)', 'Система оповещения (СОУЭ)', 'Спринклерная система', 'Газовая система', 'Порошковая система']
                },
                'mounting': {
                    title: 'Монтажные работы',
                    links: ['Монтаж СПС', 'Монтаж СОУЭ', 'Монтаж видеонаблюдения']
                },
                'maintenance': {
                    title: 'Техническое обслуживание',
                    links: ['Обслуживание сигнализации', 'Проверка систем', 'Плановый ремонт']
                },
                'construction': {
                    title: 'Строительство',
                    links: ['Пожарные резервуары', 'Огнезащита конструкций']
                },
                'stu': {
                    title: 'Разработка СТУ',
                    links: ['Анализ объекта', 'Согласование в МЧС']
                },
            }
        },
        'documentation': {
            left: [
                { id: 'certs', icon: '📜', text: 'Сертификаты' },
                { id: 'licenses', icon: '⭐', text: 'Лицензии' },
            ],
            right: {
                'certs': {
                    title: 'Наши сертификаты',
                    links: ['Сертификат ISO 9001', 'Сертификат соответствия ГОСТ']
                },
                'licenses': {
                    title: 'Действующие лицензии',
                    links: ['Лицензия МЧС', 'Лицензия ФСБ']
                }
            }
        },
        'articles': {
            left: [
                { id: 'news', icon: '📰', text: 'Новости компании' },
                { id: 'reviews', icon: '💬', text: 'Обзоры оборудования' },
            ],
            right: {
                'news': {
                    title: 'Последние новости',
                    links: ['Открытие нового филиала', 'Новинка сезона 2025']
                },
                'reviews': {
                    title: 'Обзоры',
                    links: ['Сравнение датчиков дыма', 'Лучшие огнетушители для офиса']
                }
            }
        }
    };

    // --- 2. ЛОГИКА РАБОТЫ МЕНЮ ---
    const nav = document.querySelector('.nav');
    const dropdownItems = document.querySelectorAll('.nav__item--has-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const dropdownContainer = dropdownMenu.querySelector('.dropdown-menu__container');
    let leaveTimeout;

    // Функция для генерации HTML левой колонки
    const createLeftColumn = (items) => {
        const leftCol = document.createElement('div');
        leftCol.className = 'dropdown-menu__left';
        items.forEach(item => {
            // Вместо emoji можно вставить SVG-код иконки
            const iconHtml = `<svg class="icon-${item.id}" viewBox="0 0 24 24"><path d="..."/></svg>`;
            leftCol.innerHTML += `
                <div class="dropdown-menu__item" data-submenu-id="${item.id}">
                    <span class="dropdown-menu__item-text">
                        ${item.icon} 
                        ${item.text}
                    </span>
                    <span class="dropdown-menu__item-arrow">
                        <svg viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.590088 10.59L5.17009 6L0.590088 1.41L2.00009 0L8.00009 6L2.00009 12L0.590088 10.59Z" fill="currentColor"/></svg>
                    </span>
                </div>
            `;
        });
        return leftCol;
    };

    // Функция для генерации HTML правой колонки
    const createRightColumn = (submenus) => {
        const rightCol = document.createElement('div');
        rightCol.className = 'dropdown-menu__right';
        for (const key in submenus) {
            const submenu = submenus[key];
            rightCol.innerHTML += `
                <div class="submenu" data-submenu-id="${key}">
                    <h3 class="submenu__title">${submenu.title}</h3>
                    <ul class="submenu__list">
                        ${submenu.links.map(link => `<li><a href="#" class="submenu__link">${link}</a></li>`).join('')}
                    </ul>
                </div>
            `;
        }
        return rightCol;
    };

    const showSubmenu = (submenuId, leftItems, rightSubmenus) => {
        leftItems.forEach(i => i.classList.remove('is-active'));
        rightSubmenus.forEach(s => s.classList.remove('is-active'));

        const activeLeftItem = Array.from(leftItems).find(i => i.dataset.submenuId === submenuId);
        const activeSubmenu = Array.from(rightSubmenus).find(s => s.dataset.submenuId === submenuId);

        if (activeLeftItem) activeLeftItem.classList.add('is-active');
        if (activeSubmenu) activeSubmenu.classList.add('is-active');
    };

    // При наведении на пункт с выпадающим меню
    dropdownItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            clearTimeout(leaveTimeout); // Отменяем таймер закрытия

            // Если мы уже навели на этот пункт, ничего не делаем
            if (item.classList.contains('is-active')) return;

            dropdownItems.forEach(i => i.classList.remove('is-active'));
            item.classList.add('is-active');

            const menuId = item.dataset.menuId;
            const data = menuData[menuId];

            if (data) {
                dropdownContainer.innerHTML = '';
                const leftCol = createLeftColumn(data.left);
                const rightCol = createRightColumn(data.right);
                dropdownContainer.append(leftCol, rightCol);

                dropdownMenu.classList.add('is-visible');

                const leftItems = leftCol.querySelectorAll('.dropdown-menu__item');
                const rightSubmenus = rightCol.querySelectorAll('.submenu');

                leftItems.forEach(li => {
                    li.addEventListener('mouseenter', () => {
                        showSubmenu(li.dataset.submenuId, leftItems, rightSubmenus);
                    });
                });

                // Показываем первое подменю по умолчанию
                if (data.left.length > 0) {
                    showSubmenu(data.left[0].id, leftItems, rightSubmenus);
                }
            }
        });
    });

    // Логика закрытия меню
    const closeDropdownMenu = () => {
        leaveTimeout = setTimeout(() => {
            dropdownItems.forEach(i => i.classList.remove('is-active'));
            dropdownMenu.classList.remove('is-visible');
        }, 200); // Небольшая задержка перед закрытием
    };

    nav.addEventListener('mouseleave', closeDropdownMenu);
    dropdownMenu.addEventListener('mouseenter', () => clearTimeout(leaveTimeout));
    dropdownMenu.addEventListener('mouseleave', closeDropdownMenu);

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
