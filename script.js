// ... existing code ...

// 数据和项目配置
const data = {
    projects: [
        {
            id: 1,
            title: "观影平台",
            description: "来自开源项目MoonTV搭建的平台",
            tags: ["MoonTV", "观影", "Movie"],
            link: "https://tv.guaicong.top",
        },
        {
            id: 2,
            title: "怪葱网盘",
            description: "用Openlist部署的在线网盘。",
            tags: ["云盘", "Drive", "123pan"],
            link: "https://drive.guaicong.top",
        },
        {
            id: 3,
            title: "Github文件下载加速助手",
            description: "粘贴文件，使用cloudflare为github下载加速！",
            tags: ["Github", "加速", "下载"],
            link: "https://gh.guaicong.top",
        },
        {
            id: 4,
            title: "Blog_test",
            description: "高性能现代化UI博客",
            tags: ["Blog", "博客"],
            link: "https://blog.guaicong.top",
        },
        {
            id: 5,
            title: "图床",
            description: "使用IPFS的图床",
            tags: ["imgbed", "图床", "IPFS"],
            link: "https://imgbed.guaicong.top",
        },
        {
            id: 6,
            title: "深港澳合作大挑战",
            description: "深港澳参赛作品",
            tags: ["Shenzhen", "Hongkong", "Macao"],
            link: "https://szhkmo.guaicong.top/",
        },
    ],
    resources: [
        {
            id: 1,
            title: "Deadshot.io射击游戏",
            description: "耗玩的激情四射的对冲游戏",
            tags: ["游戏", "Game", "Deadshot"],
            link: "https://deadshot.io/",
        },
        
    ]
};

// 初始化函数
document.addEventListener('DOMContentLoaded', function() {
    // 加载项目和资源
    loadProjects();
    loadResources();
    
    // 初始化统计数据动画
    initStatsAnimation();
    
    // 初始化搜索功能
    initSearch();
    
    // 初始化导航滚动
    initNavigation();
    
    // 初始化终端效果
    initTerminalEffect();
    
    // 移动端优化
    initMobileOptimizations();
});

// 移动端优化函数
function initMobileOptimizations() {
    // 检测是否为移动设备
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // 优化触摸交互
        optimizeTouchInteractions();
        
        // 优化滚动性能
        optimizeScrollPerformance();
        
        // 优化字体渲染
        optimizeFontRendering();
        
        // 优化图片加载
        optimizeImageLoading();
    }
    
    // 响应式事件监听
    setupResponsiveEvents();
}

// 优化触摸交互
function optimizeTouchInteractions() {
    const cards = document.querySelectorAll('.card');
    const navLinks = document.querySelectorAll('.nav-link');
    const buttons = document.querySelectorAll('button, .card-link');
    
    // 为触摸设备添加反馈
    cards.forEach(card => {
        card.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        card.addEventListener('touchend', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.opacity = '0.7';
        });
        
        button.addEventListener('touchend', function() {
            this.style.opacity = '1';
        });
    });
}

// 优化滚动性能
function optimizeScrollPerformance() {
    // 减少滚动时的重绘
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(function() {
                updateScrollEffects();
                ticking = false;
            });
            ticking = true;
        }
    });
}

function updateScrollEffects() {
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
}

// 优化字体渲染
function optimizeFontRendering() {
    document.body.style.webkitFontSmoothing = 'antialiased';
    document.body.style.mozOsxFontSmoothing = 'grayscale';
    document.body.style.textRendering = 'optimizeLegibility';
}

// 优化图片加载（为未来扩展准备）
function optimizeImageLoading() {
    // 如果有图片，可以在这里添加懒加载逻辑
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if ('loading' in HTMLImageElement.prototype) {
            img.loading = 'lazy';
        }
    });
}

// 响应式事件设置
function setupResponsiveEvents() {
    // 窗口大小变化时重新布局
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 250);
    });
}

function handleResize() {
    const width = window.innerWidth;
    
    if (width <= 768) {
        // 移动端布局调整
        adjustMobileLayout();
    } else {
        // 桌面端布局恢复
        adjustDesktopLayout();
    }
}

function adjustMobileLayout() {
    // 移动端特定调整
    const terminalEffect = document.getElementById('terminal-effect');
    if (terminalEffect) {
        terminalEffect.style.animationDuration = '30s'; // 移动端减慢动画速度
    }
    
    // 优化移动端导航
    const nav = document.querySelector('.hacker-nav');
    if (nav) {
        nav.style.backdropFilter = 'blur(5px)';
    }
}

function adjustDesktopLayout() {
    // 桌面端恢复设置
    const terminalEffect = document.getElementById('terminal-effect');
    if (terminalEffect) {
        terminalEffect.style.animationDuration = '20s';
    }
    
    const nav = document.querySelector('.hacker-nav');
    if (nav) {
        nav.style.backdropFilter = 'blur(10px)';
    }
}

// 改进的搜索功能，适配移动端虚拟键盘，实现实时搜索
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    // 实时搜索功能 - 输入时自动搜索
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        // 清除之前的定时器
        clearTimeout(searchTimeout);
        
        // 设置新的定时器，延迟300ms执行搜索（防抖处理）
        searchTimeout = setTimeout(() => {
            performSearch();
        }, 300);
    });
    
    // 保留原有的按钮点击和回车键功能
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    // 移动端虚拟键盘处理
    searchInput.addEventListener('focus', function() {
        if (window.innerWidth <= 768) {
            // 移动端输入时调整布局
            setTimeout(() => {
                window.scrollTo(0, this.getBoundingClientRect().top - 100);
            }, 300);
        }
    });
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query === '') {
            // 如果搜索框为空，显示所有内容
            loadProjects();
            loadResources();
            return;
        }
        
        // 搜索项目
        const filteredProjects = data.projects.filter(project => 
            project.title.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query) ||
            project.tags.some(tag => tag.toLowerCase().includes(query))
        );
        
        // 搜索资源
        const filteredResources = data.resources.filter(resource => 
            resource.title.toLowerCase().includes(query) ||
            resource.description.toLowerCase().includes(query) ||
            resource.tags.some(tag => tag.toLowerCase().includes(query))
        );
        
        // 显示搜索结果，如果没有结果则显示提示
        loadProjects(filteredProjects);
        loadResources(filteredResources);
        
        // 检查是否有搜索结果，如果没有则显示无结果提示
        showNoResultsMessage(filteredProjects, filteredResources, query);
        
        // 添加搜索结果的动画效果
        animateSearchResults();
        
        // 移动端搜索后滚动到结果区域
        if (window.innerWidth <= 768 && (filteredProjects.length > 0 || filteredResources.length > 0)) {
            setTimeout(() => {
                const firstSection = document.querySelector('.projects-section, .resources-section');
                if (firstSection) {
                    window.scrollTo({
                        top: firstSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }, 500);
        }
    }
}

// 显示无结果提示
function showNoResultsMessage(projects, resources, query) {
    // 移除之前可能存在的无结果提示
    removeNoResultsMessage();
    
    // 如果项目和资源都没有搜索结果
    if (projects.length === 0 && resources.length === 0) {
        const projectsContainer = document.getElementById('projects-container');
        const resourcesContainer = document.getElementById('resources-container');
        
        // 创建无结果提示
        const noResultsMessage = createNoResultsMessage(query);
        
        // 在项目区域显示无结果提示
        projectsContainer.appendChild(noResultsMessage.cloneNode(true));
        
        // 在资源区域也显示无结果提示（可选，或者只在一个区域显示）
        // resourcesContainer.appendChild(noResultsMessage.cloneNode(true));
    }
}

// 创建无结果提示元素
function createNoResultsMessage(query) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'no-results-message';
    messageDiv.innerHTML = `
        <div class="no-results-terminal">
            <div class="terminal-output">
                <p>> search "${query}"</p>
                <p>> 未找到匹配的结果</p>
                <p>> 请尝试其他关键词或浏览所有内容</p>
            </div>
        </div>
    `;
    return messageDiv;
}

// 移除无结果提示
function removeNoResultsMessage() {
    const existingMessages = document.querySelectorAll('.no-results-message');
    existingMessages.forEach(message => message.remove());
}

// 改进的导航滚动，适配移动端
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offset = window.innerWidth <= 768 ? 60 : 80;
                window.scrollTo({
                    top: targetSection.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 初始化终端效果
function initTerminalEffect() {
    const terminalEffect = document.getElementById('terminal-effect');
    
    // 创建矩阵雨效果
    function createMatrixRain() {
        const characters = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        const fontSize = 14;
        const columns = Math.floor(window.innerWidth / fontSize);
        const drops = Array(columns).fill(1);
        
        function draw() {
            const ctx = document.createElement('canvas').getContext('2d');
            ctx.fillStyle = 'rgba(0, 17, 0, 0.05)';
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
            
            ctx.fillStyle = '#0F0';
            ctx.font = fontSize + 'px monospace';
            
            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                
                if (drops[i] * fontSize > window.innerHeight && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
            
            terminalEffect.style.background = `url(${ctx.canvas.toDataURL()})`;
        }
        
        setInterval(draw, 33);
    }
    
    createMatrixRain();
}

// 添加滚动动画效果
window.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;
    
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
});

// 保存数据到JSON文件（可选功能）
function saveDataToJSON() {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'hacker-portfolio-data.json';
    a.click();
    URL.revokeObjectURL(url);
}

// 加载项目卡片
function loadProjects(projects = data.projects) {
    const container = document.getElementById('projects-container');
    container.innerHTML = '';
    
    if (projects.length === 0) {
        // 如果没有项目，显示空状态
        container.innerHTML = '<div class="section-empty">暂无项目</div>';
    } else {
        projects.forEach(project => {
            const card = createCard(project);
            container.appendChild(card);
        });
    }
}

// 加载资源卡片
function loadResources(resources = data.resources) {
    const container = document.getElementById('resources-container');
    container.innerHTML = '';
    
    if (resources.length === 0) {
        // 如果没有资源，显示空状态
        container.innerHTML = '<div class="section-empty">暂无资源</div>';
    } else {
        resources.forEach(resource => {
            const card = createCard(resource);
            container.appendChild(card);
        });
    }
}

// 创建卡片通用函数
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="tags">
            ${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a href="${item.link}" class="card-link">查看详情</a>
    `;
    return card;
}

// 初始化统计数据动画
function initStatsAnimation() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.textContent);
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 30);
    });
}

// 搜索结果动画
function animateSearchResults() {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('animate-in');
    });

}

