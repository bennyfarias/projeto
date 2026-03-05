
document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.img');
    const cabecalho = document.querySelector('.cabecalho');
    const links = document.querySelectorAll('.links p');
    const footer = document.querySelector('.footer');

    img.style.animation = 'fadeInDown 0.8s ease-out';
    cabecalho.style.animation = 'fadeInUp 0.8s ease-out 0.2s backwards';
    
    links.forEach((link, index) => {
        link.style.animation = `fadeInUp 0.6s ease-out ${0.4 + index * 0.1}s backwards`;
    });
    
    footer.style.animation = 'fadeInUp 0.8s ease-out 0.8s backwards';

  

    loadTheme();
});

function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeBtn');

    if (body.dataset.theme === 'dark') {
        body.dataset.theme = 'light';
        localStorage.setItem('theme', 'light');
        themeBtn.innerHTML = '🌙';
        themeBtn.title = 'Ativar modo escuro';
    } else {
        body.dataset.theme = 'dark';
        localStorage.setItem('theme', 'dark');
        themeBtn.innerHTML = '☀️';
        themeBtn.title = 'Ativar modo claro';
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const body = document.body;
    const themeBtn = document.getElementById('themeBtn');

    body.dataset.theme = savedTheme;
    
    if (savedTheme === 'dark') {
        themeBtn.innerHTML = '☀️';
        themeBtn.title = 'Ativar modo claro';
    } else {
        themeBtn.innerHTML = '🌙';
        themeBtn.title = 'Ativar modo escuro';
    }
}


const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.3s ease;
        font-weight: bold;
    }

    /* Tema Escuro */
    body[data-theme="dark"] {
        background-color: #1a1a1a;
        color: #fff;
    }

    body[data-theme="dark"] .cabecalho {
        color: #fff;
    }

    body[data-theme="dark"] p {
        background-color: #333;
        color: #f4f4f4;
    }

    body[data-theme="dark"] p:hover {
        background-color: #444;
    }

    body[data-theme="dark"] .footer {
        border-top-color: #333;
        color: #aaa;
    }

    body[data-theme="dark"] .footer p {
        color: #aaa;
    }

    /* dark styles for navigation links */
    body[data-theme="dark"] .links ul li a {
        background-color: #444;
        color: #f4f4f4;
    }
    body[data-theme="dark"] .links ul li a:hover {
        background-color: #555;
    }

    #themeBtn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transition: all 0.3s ease;
        z-index: 999;
    }

    #themeBtn:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }

    #themeBtn:active {
        transform: scale(0.95);
    }

    .links p {
        position: relative;
        overflow: hidden;
        cursor: pointer;
        transition: all 0.3s ease;
    }
`;

document.head.appendChild(style);
