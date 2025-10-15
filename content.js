function createSpeedButton() {
    if (document.getElementById('ytp-speed-scroll-button')) {
        return;
    }

    const rightControls = document.querySelector('.ytp-right-controls');
    const video = document.querySelector('video');

    if (!rightControls || !video) return;

    const translations = {
        'pt': 'Alterar velocidade',
        'pt-BR': 'Alterar velocidade',
        'en': 'Change speed',
        'es': 'Cambiar velocidad',
        'fr': 'Modifier la vitesse',
        'de': 'Geschwindigkeit ändern',
        'it': 'Modifica velocità',
        'ja': '速度を変更',
        'ko': '속도 변경',
        'zh': '更改速度',
        'ru': 'Изменить скорость',
        'ar': 'تغيير السرعة',
        'hi': 'गति बदलें',
        'nl': 'Snelheid wijzigen',
        'pl': 'Zmień prędkość',
        'tr': 'Hızı değiştir'
    };
    
    const userLang = navigator.language || navigator.userLanguage || 'en';
    const lang = userLang.split('-')[0];
    const tooltipMessage = translations[userLang] || translations[lang] || translations['en'];

    const speedButton = document.createElement('div');
    speedButton.className = 'ytp-button';
    speedButton.id = 'ytp-speed-scroll-button';
    speedButton.setAttribute('data-tooltip', tooltipMessage);

    const speedDisplay = document.createElement('span');
    speedDisplay.id = 'ytp-speed-scroll-display';
    const fmt = (v) => `${v.toFixed(2).replace(/\.00$/, '').replace(/\.([1-9])0$/, '.$1')}x`;
    speedDisplay.textContent = fmt(video.playbackRate);

    speedButton.appendChild(speedDisplay);

    rightControls.insertBefore(speedButton, rightControls.firstChild);

    let savedSpeed = video.playbackRate;
    let lastSpeed = video.playbackRate;
    let isSpacebarActive = false;
    let userChangedSpeed = false;

    speedButton.addEventListener('wheel', (event) => {
        event.preventDefault();
        event.stopPropagation();

        userChangedSpeed = true;
        let currentSpeed = video.playbackRate;
        let newSpeed = event.deltaY < 0 ? currentSpeed + 0.25 : currentSpeed - 0.25;
        video.playbackRate = Math.max(0.25, Math.min(4, newSpeed));
        setTimeout(() => { userChangedSpeed = false; }, 50);
    }, { passive: false });

    video.addEventListener('ratechange', () => {
        const currentSpeed = video.playbackRate;
        speedDisplay.textContent = fmt(currentSpeed);
        
        if (userChangedSpeed) {
            savedSpeed = currentSpeed;
            lastSpeed = currentSpeed;
            return;
        }
        
        if (currentSpeed === 2 && lastSpeed !== 2 && lastSpeed > 1) {
            isSpacebarActive = true;
            savedSpeed = lastSpeed;
        }
        else if (isSpacebarActive && currentSpeed === 1) {
            setTimeout(() => {
                video.playbackRate = savedSpeed;
                isSpacebarActive = false;
            }, 10);
        }
        else if (!isSpacebarActive) {
            savedSpeed = currentSpeed;
        }
        
        lastSpeed = currentSpeed;
    });

    let tooltipEl = document.getElementById('ytp-speed-scroll-tooltip');
    if (!tooltipEl) {
        tooltipEl = document.createElement('div');
        tooltipEl.id = 'ytp-speed-scroll-tooltip';
        tooltipEl.innerHTML = `<div class="ytp-tooltip-text"></div><div class="ytp-tooltip-arrow"></div>`;
        document.body.appendChild(tooltipEl);
    }
    const tooltipText = tooltipEl.querySelector('.ytp-tooltip-text');

    let tooltipTimeout = null;
    let rafId = null;

    function updateTooltipPosition() {
        const rect = speedButton.getBoundingClientRect();
        const tooltipRect = tooltipEl.getBoundingClientRect();
        const left = rect.left + rect.width / 2;
        const top = rect.top - 19;

        tooltipEl.style.left = `${left}px`;
        tooltipEl.style.top = `${top - tooltipRect.height}px`;
        rafId = null;
    }

    speedButton.addEventListener('mouseenter', () => {
        const svgIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-left: 5px; flex-shrink: 0;">
            <rect x="8" y="5" width="8" height="13" rx="3.5" stroke="white" stroke-width="2" fill="none"/>
            <line x1="12" y1="8" x2="12" y2="10" stroke="white" stroke-width="2" stroke-linecap="round"/>
        </svg>`;
        tooltipText.innerHTML = `${speedButton.getAttribute('data-tooltip') || ''}${svgIcon}`;
        tooltipEl.classList.add('visible');
        if (!rafId) {
            rafId = requestAnimationFrame(updateTooltipPosition);
        }
    });

    speedButton.addEventListener('mouseleave', () => {
        clearTimeout(tooltipTimeout);
        tooltipEl.classList.remove('visible');
        if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
        }
    });

    const reposition = () => {
        if (tooltipEl.classList.contains('visible')) {
            if (!rafId) rafId = requestAnimationFrame(updateTooltipPosition);
        }
    };
    window.addEventListener('scroll', reposition, true);
    window.addEventListener('resize', reposition);

    speedButton.removeAttribute('title');
}

const observer = new MutationObserver(() => {
    const playerControls = document.querySelector('.ytp-right-controls');
    if (playerControls) createSpeedButton();
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
