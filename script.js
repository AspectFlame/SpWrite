// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navigation scroll effect
let lastScrollTop = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add/remove scrolled class for styling
    if (scrollTop > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

// FAQ accordion functionality
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    
    question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
        
        // Animate the answer
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = '0';
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.feature-card, .requirement-card, .usage-card, .step').forEach(el => {
    observer.observe(el);
});

// Download button click tracking (placeholder for analytics)
document.querySelectorAll('.download-btn, .btn-primary').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Add download analytics here
        console.log('Download initiated');
        
        // For demo purposes, prevent actual download
        if (btn.getAttribute('href') === '#') {
            e.preventDefault();
            showDownloadModal();
        }
    });
});

// Show download modal (demo functionality)
function showDownloadModal() {
    const modal = document.createElement('div');
    modal.className = 'download-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Download SpWrite</h3>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <p>This is a demo website. In a real implementation, the download would start automatically.</p>
                <div class="modal-features">
                    <div class="modal-feature">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 12l2 2 4-4"/>
                            <circle cx="12" cy="12" r="10"/>
                        </svg>
                        <span>100% Offline</span>
                    </div>
                    <div class="modal-feature">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                        <span>Privacy First</span>
                    </div>
                    <div class="modal-feature">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M23 6l-9.5 9.5-5-5L1 18"/>
                        </svg>
                        <span>Adaptive AI</span>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-secondary modal-cancel">Cancel</button>
                <button class="btn btn-primary modal-download">Start Download</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Modal event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('.modal-cancel').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.querySelector('.modal-download').addEventListener('click', () => {
        alert('Download would start here in a real implementation!');
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
}

// Add CSS for modal
const modalStyles = `
.download-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    backdrop-filter: blur(4px);
}

.modal-content {
    background: white;
    border-radius: var(--radius-xl);
    max-width: 500px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-header {
    padding: var(--spacing-xl);
    border-bottom: 1px solid var(--border-light);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.modal-header h3 {
    margin: 0;
    font-size: var(--font-size-xl);
    font-weight: 600;
}

.modal-close {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    color: var(--text-secondary);
    padding: 0;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
}

.modal-close:hover {
    background: var(--background-secondary);
    color: var(--text-primary);
}

.modal-body {
    padding: var(--spacing-xl);
}

.modal-body p {
    margin-bottom: var(--spacing-lg);
    color: var(--text-secondary);
}

.modal-features {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
}

.modal-feature {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    font-size: var(--font-size-sm);
    font-weight: 500;
    color: var(--text-secondary);
}

.modal-feature svg {
    width: 16px;
    height: 16px;
    color: var(--primary-blue);
}

.modal-footer {
    padding: var(--spacing-xl);
    border-top: 1px solid var(--border-light);
    display: flex;
    gap: var(--spacing-md);
    justify-content: flex-end;
}
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Add additional CSS for animations and interactions
const additionalStyles = `
/* Navigation scroll effect */
.nav.scrolled {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

/* Mobile navigation */
@media (max-width: 768px) {
    .nav-links {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        flex-direction: column;
        padding: var(--spacing-lg);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        transform: translateY(-10px);
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-base);
    }
    
    .nav-links.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
}

/* Animation classes */
.animate-in {
    animation: slideInUp 0.6s ease-out forwards;
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* FAQ styles */
.faq-item {
    border: 1px solid var(--border-light);
    border-radius: var(--radius-lg);
    margin-bottom: var(--spacing-md);
    overflow: hidden;
    transition: all var(--transition-base);
}

.faq-item:hover {
    box-shadow: 0 4px 16px var(--shadow-light);
}

.faq-question {
    padding: var(--spacing-lg);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: white;
    transition: background-color var(--transition-fast);
}

.faq-question:hover {
    background: var(--background-tertiary);
}

.faq-question h3 {
    margin: 0;
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--text-primary);
}

.faq-icon {
    width: 20px;
    height: 20px;
    color: var(--text-secondary);
    transition: transform var(--transition-base);
}

.faq-item.active .faq-icon {
    transform: rotate(180deg);
}

.faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--transition-base);
}

.faq-answer p {
    padding: 0 var(--spacing-lg) var(--spacing-lg);
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.6;
}

.faq-answer a {
    color: var(--primary-blue);
    text-decoration: none;
}

.faq-answer a:hover {
    text-decoration: underline;
}

/* Download page specific styles */
.download-hero {
    padding: 120px 0 var(--spacing-4xl);
    background: var(--gradient-hero);
    text-align: center;
}

.download-title {
    font-size: var(--font-size-4xl);
    font-weight: 700;
    margin-bottom: var(--spacing-lg);
    color: var(--text-primary);
}

.download-subtitle {
    font-size: var(--font-size-xl);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-2xl);
}

.download-card {
    background: white;
    border-radius: var(--radius-xl);
    padding: var(--spacing-2xl);
    box-shadow: 0 10px 30px var(--shadow-light);
    border: 1px solid var(--border-light);
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 600px;
    margin: 0 auto;
    gap: var(--spacing-xl);
}

.download-info {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    flex: 1;
}

.download-icon {
    width: 48px;
    height: 48px;
    color: var(--primary-blue);
}

.download-details h3 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--spacing-xs);
    color: var(--text-primary);
}

.download-details p {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-sm);
    font-size: var(--font-size-sm);
}

.download-badges {
    display: flex;
    gap: var(--spacing-sm);
}

.download-badge {
    background: var(--background-secondary);
    color: var(--text-secondary);
    padding: var(--spacing-xs) var(--spacing-sm);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    font-weight: 500;
}

/* Requirements section */
.requirements {
    padding: var(--spacing-4xl) 0;
    background: var(--background-primary);
}

.requirements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
}

.requirement-card {
    background: white;
    padding: var(--spacing-xl);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-light);
    text-align: center;
    transition: all var(--transition-base);
}

.requirement-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px var(--shadow-light);
}

.requirement-icon {
    width: 40px;
    height: 40px;
    color: var(--primary-blue);
    margin: 0 auto var(--spacing-md);
}

.requirement-card h3 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.requirement-card p {
    color: var(--text-secondary);
    margin: 0;
}

/* Installation section */
.installation {
    padding: var(--spacing-4xl) 0;
    background: var(--background-secondary);
}

.installation-steps {
    max-width: 800px;
    margin: 0 auto;
}

.step {
    display: flex;
    gap: var(--spacing-xl);
    margin-bottom: var(--spacing-2xl);
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
}

.step.animate-in {
    opacity: 1;
    transform: translateY(0);
}

.step-number {
    width: 48px;
    height: 48px;
    background: var(--gradient-primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: var(--font-size-lg);
    flex-shrink: 0;
}

.step-content h3 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.step-content p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
}

.step-content code {
    background: var(--background-tertiary);
    padding: 2px 6px;
    border-radius: var(--radius-sm);
    font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
    font-size: 0.9em;
    color: var(--text-primary);
}

/* Usage section */
.usage {
    padding: var(--spacing-4xl) 0;
    background: var(--background-primary);
}

.usage-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-xl);
}

.usage-card {
    background: white;
    padding: var(--spacing-xl);
    border-radius: var(--radius-lg);
    border: 1px solid var(--border-light);
    transition: all var(--transition-base);
}

.usage-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px var(--shadow-light);
}

.usage-icon {
    width: 40px;
    height: 40px;
    color: var(--primary-blue);
    margin-bottom: var(--spacing-md);
}

.usage-card h3 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    margin-bottom: var(--spacing-sm);
    color: var(--text-primary);
}

.usage-card p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
}

.usage-card kbd {
    background: var(--background-secondary);
    border: 1px solid var(--border-light);
    border-radius: var(--radius-sm);
    padding: 2px 6px;
    font-family: inherit;
    font-size: 0.9em;
    font-weight: 500;
}

/* Troubleshooting section */
.troubleshooting {
    padding: var(--spacing-4xl) 0;
    background: var(--background-secondary);
}

.faq-list {
    max-width: 800px;
    margin: 0 auto;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .download-card {
        flex-direction: column;
        text-align: center;
    }
    
    .step {
        flex-direction: column;
        text-align: center;
    }
    
    .step-number {
        margin: 0 auto var(--spacing-md);
    }
}
`;

// Inject additional styles
const additionalStyleSheet = document.createElement('style');
additionalStyleSheet.textContent = additionalStyles;
document.head.appendChild(additionalStyleSheet);

// Dark Mode Functionality
class ThemeManager {
    constructor() {
        this.theme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        // Set initial theme
        document.documentElement.setAttribute('data-theme', this.theme);
        
        // Add event listeners to all theme toggle buttons
        document.querySelectorAll('.theme-toggle').forEach(button => {
            button.addEventListener('click', () => this.toggleTheme());
        });
        
        // Listen for system theme changes
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    this.setTheme(e.matches ? 'dark' : 'light');
                }
            });
        }
    }

    toggleTheme() {
        const newTheme = this.theme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
    }

    setTheme(theme) {
        this.theme = theme;
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Trigger a custom event for other components that might need to know about theme changes
        window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
    }

    getTheme() {
        return this.theme;
    }
}

// Initialize theme manager
const themeManager = new ThemeManager();

// Export for potential use by other scripts
window.themeManager = themeManager;