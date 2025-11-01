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
                {
                    id: 'fire-safety',
                    svg: `<svg width="18" height="21" viewBox="0 0 18 21" fill="white" xmlns="http://www.w3.org/2000/svg"><path fill- rule="evenodd" clip - rule="evenodd" d = "M8.44184 0.153716C8.78771 -0.0512388 9.21229 -0.0512388 9.55816 0.153716L11.4285 1.26205C11.9679 1.58173 12.1553 2.29439 11.8471 2.85383C11.5388 3.41327 10.8516 3.60763 10.3122 3.28795L9 2.51038L7.68784 3.28795C7.14839 3.60763 6.46118 3.41327 6.15291 2.85383C5.84465 2.29439 6.03207 1.58173 6.57153 1.26205L8.44184 0.153716ZM3.97677 4.14339C4.28503 4.70283 4.09761 5.41549 3.55816 5.73517L3.39251 5.83333L3.55816 5.93149C4.09761 6.25117 4.28504 6.96384 3.97677 7.52327C3.66851 8.08271 2.9813 8.27707 2.44184 7.9574L2.24829 7.84269C2.21581 8.45683 1.72531 8.94444 1.125 8.94444C0.50368 8.94444 0 8.42211 0 7.77778V5.83333C0 5.41467 0.216322 5.0281 0.566844 4.82038L2.44184 3.70927C2.9813 3.38959 3.66851 3.58396 3.97677 4.14339ZM14.0232 4.14339C14.3315 3.58396 15.0187 3.38959 15.5582 3.70927L17.4332 4.82038C17.7837 5.0281 18 5.41467 18 5.83333V7.77778C18 8.42211 17.4963 8.94444 16.875 8.94444C16.2747 8.94444 15.7842 8.45683 15.7517 7.8427L15.5582 7.9574C15.0187 8.27707 14.3315 8.08271 14.0232 7.52327C13.715 6.96384 13.9024 6.25117 14.4418 5.93149L14.6075 5.83333L14.4418 5.73517C13.9024 5.41549 13.715 4.70283 14.0232 4.14339ZM6.15291 8.81284C6.46117 8.2534 7.14839 8.05904 7.68784 8.37872L9 9.15629L10.3122 8.37872C10.8516 8.05904 11.5388 8.2534 11.8471 8.81284C12.1553 9.37227 11.9679 10.0849 11.4285 10.4046L10.125 11.177V12.4444C10.125 13.0888 9.62132 13.6111 9 13.6111C8.37868 13.6111 7.875 13.0888 7.875 12.4444V11.177L6.57153 10.4046C6.03207 10.0849 5.84465 9.37228 6.15291 8.81284ZM1.125 12.0556C1.74632 12.0556 2.25 12.5779 2.25 13.2222V14.4896L3.55816 15.2648C4.09761 15.5845 4.28504 16.2972 3.97677 16.8566C3.66851 17.416 2.9813 17.6104 2.44184 17.2907L0.566844 16.1796C0.216322 15.9719 0 15.5853 0 15.1667V13.2222C0 12.5779 0.50368 12.0556 1.125 12.0556ZM16.875 12.0556C17.4963 12.0556 18 12.5779 18 13.2222V15.1667C18 15.5853 17.7837 15.9719 17.4332 16.1796L15.5582 17.2907C15.0187 17.6104 14.3315 17.416 14.0232 16.8566C13.715 16.2972 13.9024 15.5845 14.4418 15.2648L15.75 14.4896V13.2222C15.75 12.5779 16.2537 12.0556 16.875 12.0556ZM10.1233 17.824L10.3122 17.7121C10.8516 17.3924 11.5388 17.5867 11.8471 18.1462C12.1553 18.7056 11.9679 19.4183 11.4285 19.738L9.55816 20.8463C9.21229 21.0512 8.7877 21.0512 8.44184 20.8463L6.57153 19.7379C6.03207 19.4183 5.84465 18.7056 6.15291 18.1462C6.46117 17.5867 7.14839 17.3924 7.68784 17.712L7.87671 17.824C7.90919 17.2098 8.39968 16.7222 9 16.7222C9.60032 16.7222 10.0908 17.2098 10.1233 17.824Z" fill = "white" />
                    </svg >`,
                    text: 'Проектирование', url: ' /services.html#safety'
                },
                {
                    id: 'mounting', svg: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.36443 0.100886C0.590448 0.150759 0 0.800541 0 1.57517V9H9.01116V1.57517C9.01116 0.80054 8.42071 0.150759 7.64673 0.100886C6.60832 0.0339736 5.56092 0 4.50558 0C3.45024 0 2.40284 0.0339736 1.36443 0.100886Z" fill="white"/>
                    <path d="M16.3986 4.08245C16.2265 3.43878 15.637 3 14.9699 3H12.0149C11.1854 3 10.513 3.67157 10.513 4.5V13.9013C10.9548 13.6461 11.4678 13.5 12.0149 13.5C13.6738 13.5 15.0186 14.8431 15.0186 16.5H16.5205C17.3499 16.5 18.0247 15.8282 17.9993 15.0001C17.8836 11.2357 17.334 7.58042 16.3986 4.08245Z" fill="white"/>
                    <path d="M13.5167 16.5C13.5167 17.3284 12.8443 18 12.0149 18C11.1854 18 10.513 17.3284 10.513 16.5C10.513 15.6716 11.1854 15 12.0149 15C12.8443 15 13.5167 15.6716 13.5167 16.5Z" fill="white"/>
                    <path d="M0 15V10.5H9.01116V15C9.01116 15.8284 8.33875 16.5 7.5093 16.5C7.5093 14.8431 6.16449 13.5 4.50558 13.5C2.84667 13.5 1.50186 14.8431 1.50186 16.5C0.672406 16.5 0 15.8284 0 15Z" fill="white"/>
                    <path d="M6.00744 16.5C6.00744 17.3284 5.33503 18 4.50558 18C3.67613 18 3.00372 17.3284 3.00372 16.5C3.00372 15.6716 3.67613 15 4.50558 15C5.33503 15 6.00744 15.6716 6.00744 16.5Z" fill="white"/>
                    </svg>`,
                    text: 'Монтаж', url: '/services.html#mounting'
                },
                {
                    id: 'maintenance', svg: `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9994 4C15.9994 6.20914 14.2086 8 11.9996 8C11.9746 8 11.9497 7.99977 11.9249 7.99932C10.7946 7.97862 9.53297 8.15104 8.83895 9.04339L4.11978 15.1111C3.68358 15.672 3.01288 16 2.30239 16C1.03081 16 0 14.9691 0 13.6975C0 12.987 0.328028 12.3163 0.888858 11.8801L6.95636 7.16073C7.84867 6.46669 8.02109 5.20497 8.00039 4.07468C7.99994 4.04984 7.99971 4.02495 7.99971 4C7.99971 1.79086 9.79051 0 11.9996 0C12.3871 0 12.7617 0.0551067 13.1161 0.157911C13.4872 0.265576 13.5608 0.725902 13.2876 0.999145L10.9705 3.31639C10.7667 3.52017 10.7452 3.84506 10.9336 4.0631C11.2435 4.42167 11.5791 4.75734 11.9377 5.06723C12.1558 5.25568 12.4807 5.23412 12.6845 5.03027L15.0005 2.71298C15.2738 2.43959 15.7342 2.51329 15.8418 2.88454C15.9444 3.23859 15.9994 3.61287 15.9994 4ZM3.14274 13.7143C3.14274 14.1877 2.759 14.5714 2.28563 14.5714C1.81226 14.5714 1.42852 14.1877 1.42852 13.7143C1.42852 13.2409 1.81226 12.8571 2.28563 12.8571C2.759 12.8571 3.14274 13.2409 3.14274 13.7143Z" fill="white"/>
                    <path d="M11.9996 9.71429C12.3576 9.71429 12.7079 9.68136 13.0476 9.61838L15.2899 11.8608C15.7446 12.3155 16 12.9321 16 13.5751C16 14.914 14.9146 15.9995 13.5757 15.9995C12.9328 15.9995 12.3161 15.744 11.8615 15.2894L8.65036 12.0781L10.1921 10.0959C10.2491 10.0225 10.3733 9.91572 10.6802 9.82985C10.9978 9.74097 11.4099 9.70446 11.8935 9.71332C11.9288 9.71396 11.9642 9.71429 11.9996 9.71429Z" fill="white"/>
                    <path d="M4.57184 3.42803L6.22398 5.08023C6.20879 5.16496 6.19081 5.24478 6.16993 5.31938C6.08407 5.62629 5.97729 5.75049 5.90393 5.80755L5.2074 6.34932L3.42902 4.57089H1.89137C1.78316 4.57089 1.68423 4.50975 1.63583 4.41295L0.0926683 1.32651C0.0376719 1.21651 0.0592294 1.08366 0.146186 0.996702L0.997782 0.145076C1.08474 0.0581155 1.21758 0.0365571 1.32758 0.0915554L4.41391 1.63478C4.5107 1.68317 4.57184 1.78211 4.57184 1.89033V3.42803Z" fill="white"/>
                    </svg>`, 
                    text: 'Техническое обслуживание', url: '/services.html#maintenance'
                },
                { id: 'construction', svg: `<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.964286 0C0.431725 0 0 0.419733 0 0.9375C0 1.45527 0.431725 1.875 0.964285 1.875H1.28571V13.125H0.964286C0.431725 13.125 0 13.5447 0 14.0625C0 14.5803 0.431725 15 0.964286 15H2.89286C3.42542 15 3.85714 14.5803 3.85714 14.0625V12.1875C3.85714 11.6697 4.28887 11.25 4.82143 11.25H6.75C7.28256 11.25 7.71429 11.6697 7.71429 12.1875V14.0625C7.71429 14.5803 8.14601 15 8.67857 15H9.32143C9.85399 15 10.2857 14.5803 10.2857 14.0625V1.875H10.6071C11.1397 1.875 11.5714 1.45527 11.5714 0.9375C11.5714 0.419733 11.1397 0 10.6071 0H0.964286ZM3.21429 4.375C3.21429 4.02982 3.5021 3.75 3.85714 3.75H4.5C4.85504 3.75 5.14286 4.02982 5.14286 4.375V5C5.14286 5.34518 4.85504 5.625 4.5 5.625H3.85714C3.5021 5.625 3.21429 5.34518 3.21429 5V4.375ZM3.85714 6.875C3.5021 6.875 3.21429 7.15482 3.21429 7.5V8.125C3.21429 8.47018 3.5021 8.75 3.85714 8.75H4.5C4.85504 8.75 5.14286 8.47018 5.14286 8.125V7.5C5.14286 7.15482 4.85504 6.875 4.5 6.875H3.85714ZM6.42857 4.375C6.42857 4.02982 6.71639 3.75 7.07143 3.75H7.71429C8.06933 3.75 8.35714 4.02982 8.35714 4.375V5C8.35714 5.34518 8.06933 5.625 7.71429 5.625H7.07143C6.71639 5.625 6.42857 5.34518 6.42857 5V4.375ZM7.07143 6.875C6.71639 6.875 6.42857 7.15482 6.42857 7.5V8.125C6.42857 8.47018 6.71639 8.75 7.07143 8.75H7.71429C8.06933 8.75 8.35714 8.47018 8.35714 8.125V7.5C8.35714 7.15482 8.06933 6.875 7.71429 6.875H7.07143Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 5C12.7899 5 12.2143 5.55964 12.2143 6.25V13.75C12.2143 14.4404 12.7899 15 13.5 15H17.0357C17.5683 15 18 14.5803 18 14.0625C18 13.5447 17.5683 13.125 17.0357 13.125H16.7143V6.875H17.0357C17.5683 6.875 18 6.45527 18 5.9375C18 5.41973 17.5683 5 17.0357 5H13.5ZM14.1429 6.875H14.7857C15.1408 6.875 15.4286 7.15482 15.4286 7.5V8.125C15.4286 8.47018 15.1408 8.75 14.7857 8.75H14.1429C13.7878 8.75 13.5 8.47018 13.5 8.125V7.5C13.5 7.15482 13.7878 6.875 14.1429 6.875ZM14.1429 10C13.7878 10 13.5 10.2798 13.5 10.625V11.25C13.5 11.5952 13.7878 11.875 14.1429 11.875H14.7857C15.1408 11.875 15.4286 11.5952 15.4286 11.25V10.625C15.4286 10.2798 15.1408 10 14.7857 10H14.1429Z" fill="white"/>
                </svg>`, 
                text: 'Строительство', url: '/services/construction' },
                { id: 'stu', svg: `<svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.315 2.71429H13.3333C14.8061 2.71429 16 3.92951 16 5.42857V13.5714C16 14.8362 15.1501 15.8989 14 16.2002V8.14286C14 6.26903 12.5076 4.75 10.6667 4.75H2.75066C3.04668 3.57931 4.09075 2.71429 5.33332 2.71429H5.35162C5.51744 1.18752 6.78913 0 8.33332 0H10.3333C11.8775 0 13.1492 1.18752 13.315 2.71429ZM11.3333 4.07143V3.05357C11.3333 2.49142 10.8856 2.03571 10.3333 2.03571H8.33332C7.78103 2.03571 7.33332 2.49142 7.33332 3.05357V4.07143H11.3333Z" fill="white"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.33334 6.78571C0.596955 6.78571 0 7.39333 0 8.14286V17.6429C0 18.3924 0.596955 19 1.33334 19H10.6667C11.4031 19 12 18.3924 12 17.6429V8.14286C12 7.39333 11.4031 6.78571 10.6667 6.78571H1.33334ZM3.66667 10.1786C3.11439 10.1786 2.66667 10.6343 2.66667 11.1964C2.66667 11.7586 3.11439 12.2143 3.66667 12.2143H8.33335C8.88563 12.2143 9.33335 11.7586 9.33335 11.1964C9.33335 10.6343 8.88563 10.1786 8.33335 10.1786H3.66667ZM2.66667 14.5893C2.66667 14.0271 3.11439 13.5714 3.66667 13.5714H8.33335C8.88563 13.5714 9.33335 14.0271 9.33335 14.5893C9.33335 15.1514 8.88563 15.6071 8.33335 15.6071H3.66667C3.11439 15.6071 2.66667 15.1514 2.66667 14.5893Z" fill="white"/>
                </svg>`, 
                text: 'Разработка СТУ', url: '/services.html#stu' },
                { id: 'risk', svg: `<svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.2 0C1.43269 0 0 1.4071 0 3.14286V18.8571C0 20.5929 1.43269 22 3.2 22H12.8C14.5673 22 16 20.5929 16 18.8571V3.14286C16 1.40711 14.5673 0 12.8 0H3.2ZM4.4 9.42857C3.73726 9.42857 3.2 9.95624 3.2 10.6071C3.2 11.258 3.73726 11.7857 4.4 11.7857C5.06274 11.7857 5.6 11.258 5.6 10.6071C5.6 9.95624 5.06274 9.42857 4.4 9.42857ZM3.2 4.32143C3.2 3.67052 3.73726 3.14286 4.4 3.14286H11.6C12.2627 3.14286 12.8 3.67052 12.8 4.32143C12.8 4.97234 12.2627 5.5 11.6 5.5H4.4C3.73726 5.5 3.2 4.97234 3.2 4.32143ZM4.4 16.5C3.73726 16.5 3.2 17.0277 3.2 17.6786C3.2 18.3295 3.73726 18.8571 4.4 18.8571C5.06274 18.8571 5.6 18.3295 5.6 17.6786C5.6 17.0277 5.06274 16.5 4.4 16.5ZM3.2 14.1429C3.2 13.492 3.73726 12.9643 4.4 12.9643C5.06274 12.9643 5.6 13.492 5.6 14.1429C5.6 14.7938 5.06274 15.3214 4.4 15.3214C3.73726 15.3214 3.2 14.7938 3.2 14.1429ZM11.6 9.42857C10.9373 9.42857 10.4 9.95624 10.4 10.6071C10.4 11.258 10.9373 11.7857 11.6 11.7857C12.2627 11.7857 12.8 11.258 12.8 10.6071C12.8 9.95624 12.2627 9.42857 11.6 9.42857ZM10.4 14.1429C10.4 13.492 10.9373 12.9643 11.6 12.9643C12.2627 12.9643 12.8 13.492 12.8 14.1429V17.6786C12.8 18.3295 12.2627 18.8571 11.6 18.8571C10.9373 18.8571 10.4 18.3295 10.4 17.6786V14.1429ZM8 9.42857C7.33726 9.42857 6.8 9.95624 6.8 10.6071C6.8 11.258 7.33726 11.7857 8 11.7857C8.66274 11.7857 9.2 11.258 9.2 10.6071C9.2 9.95624 8.66274 9.42857 8 9.42857ZM6.8 17.6786C6.8 17.0277 7.33726 16.5 8 16.5C8.66274 16.5 9.2 17.0277 9.2 17.6786C9.2 18.3295 8.66274 18.8571 8 18.8571C7.33726 18.8571 6.8 18.3295 6.8 17.6786ZM8 12.9643C7.33726 12.9643 6.8 13.492 6.8 14.1429C6.8 14.7938 7.33726 15.3214 8 15.3214C8.66274 15.3214 9.2 14.7938 9.2 14.1429C9.2 13.492 8.66274 12.9643 8 12.9643Z" fill="white"/>
                </svg>`, 
                text: 'Расчёт пожарного риска', url: '/services.html#risk' },
                { id: 'plan', svg: `<svg width="19" height="15" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-5.20894e-07 2.74984L-1.20206e-07 11.9165C-5.20894e-08 13.4748 1.19167 14.6665 2.75 14.6665L8.25 14.6665L8.25 6.78317L6.14167 8.8915C5.775 9.25817 5.225 9.25817 4.85833 8.8915C4.49167 8.52484 4.49167 7.97484 4.85833 7.60817L8.525 3.94151C8.89167 3.57484 9.44167 3.57484 9.80833 3.94151L13.475 7.60817C13.8417 7.97484 13.8417 8.52484 13.475 8.8915C13.1083 9.25817 12.5583 9.25817 12.1917 8.8915L10.0833 6.78317L10.0833 14.6665L15.5833 14.6665C17.1417 14.6665 18.3333 13.4748 18.3333 11.9165L18.3333 2.74984C18.3333 1.1915 17.1417 -0.00016192 15.5833 -0.000161852L2.75 -0.000161291C1.19167 -0.000161223 -5.89011e-07 1.19151 -5.20894e-07 2.74984Z" fill="white"/>
                </svg>`, 
                text: 'Планы эвакуации', url: '/services.html#plan' },
                { id: 'category', svg: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C10.732 0 9.55 0.832014 9.181 2.00201L1 2C0.448 2 0 2.448 0 3C0 3.552 0.448 4 1 4L9.181 3.99902C9.629 5.22402 10.732 6 12 6C13.268 6 14.382 5.22203 14.838 3.99103L17 4C17.552 4 18 3.552 18 3C18 2.448 17.552 2 17 2H14.83C14.348 0.781 13.268 0 12 0ZM6 6C4.682 6 3.57899 6.82001 3.17599 8.00201C3.03499 8.01101 1 8 1 8C0.448 8 0 8.448 0 9C0 9.552 0.448 10 1 10C1 10 3.05199 9.979 3.17999 9.992C3.58299 11.174 4.682 12 6 12C7.268 12 8.35401 11.223 8.82901 10.003L17 10C17.552 10 18 9.552 18 9C18 8.448 17.552 8 17 8L8.82401 7.99103C8.38601 6.79803 7.268 6 6 6ZM12 12C10.732 12 9.57199 12.835 9.17999 13.99L1 14C0.448 14 0 14.448 0 15C0 15.552 0.448 16 1 16L9.16599 16.001C9.57998 17.186 10.732 18 12 18C13.268 18 14.361 17.207 14.842 16.001L17 16C17.552 16 18 15.552 18 15C18 14.448 17.552 14 17 14L14.833 13.994C14.402 12.811 13.268 12 12 12Z" fill="white"/>
                </svg>`, 
                text: 'Расчёт категории помещений', url: '/services.html#stu' },
            ],
            right: {
                'fire-safety': {
                    title: 'Системы пожарной безопасности',
                    links: [
                        { text: 'Пожарная сигнализация (СПС)', url: '/services/design/sps' },
                        { text: 'Система оповещения (СОУЭ)', url: '/services/design/soue' },
                        { text: 'Спринклерная система', url: '/services/design/sprinkler' },
                        { text: 'Газовая система пожаротушения', url: '/services/design/sprinkler' },
                        { text: 'Порошковая система пожаротушения', url: '/services/design/sprinkler' },
                        { text: 'Внутренний противопожарный водопровод', url: '/services/design/sprinkler' },
                        { text: 'Системы дымоудаления', url: '/services/design/sprinkler' },
                        { text: 'Огнезащита металлоконструкций', url: '/services/design/sprinkler' },
                    ]
                },
                'mounting': {
                    title: 'Слаботочные системы',
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
                    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 8.66016L1.38009e-07 17.3204L8.95112e-07 -9.86219e-05L9 8.66016Z" fill="white"/>
                    </svg>
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
