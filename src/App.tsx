import React, { useState, useEffect } from 'react';
import { 
  Mic, 
  Shield, 
  Wifi, 
  WifiOff, 
  Star, 
  Download, 
  Monitor, 
  Zap, 
  HardDrive, 
  Settings, 
  CheckCircle,
  ChevronDown,
  Menu,
  X,
  Twitter,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Sun,
  Moon
} from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Mic className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">SpWrite</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#download" className="text-gray-600 hover:text-gray-900 transition-colors">Download</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a href="#download" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
              Download
            </a>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Features</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">About</a>
              <a href="#download" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Download</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">FAQ</a>
              <div className="flex justify-center">
                <ThemeToggle />
              </div>
              <a href="#download" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-center">
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 min-h-screen flex items-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4 mr-2" />
                100% Privacy Focused
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight transition-colors">
                Your voice, your style,
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  completely private
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                SpWrite is a context-aware voice assistant that adapts to your unique writing style. 
                Works 100% offline with complete privacy protection.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-sm transition-colors">
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">100% Offline</span>
              </div>
              <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-sm transition-colors">
                <Shield className="w-5 h-5 text-blue-500 mr-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Privacy First</span>
              </div>
              <div className="flex items-center bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-sm transition-colors">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Always Available</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#download" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5 mr-2" />
                Download for macOS
              </a>
              <a href="#features" className="inline-flex items-center justify-center bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-xl text-lg font-medium transition-colors border border-gray-200 dark:border-gray-700">
                Learn More
              </a>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors">
              Free • macOS 14.2 or later • 1.52GB download
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">SpWrite</span>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <p className="text-lg font-medium text-gray-900 dark:text-white">Listening...</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Press ⌘⇧S to start</p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 transition-colors">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 italic transition-colors">
                    "Let me help you write that email in your professional tone..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Context-Aware Intelligence",
      description: "Understands your writing context and adapts suggestions based on the type of document, recipient, and your personal style."
    },
    {
      icon: <WifiOff className="w-8 h-8" />,
      title: "100% Offline Processing",
      description: "All voice processing happens locally on your Mac. No internet required, no data sent to servers, complete privacy guaranteed."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Complete Data Privacy",
      description: "Your voice data never leaves your device. No cloud storage, no analytics, no tracking. Your words stay yours."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Works Completely Offline",
      description: "Your data is so secure it never needs the internet. Write and dictate anywhere, anytime - even in airplane mode."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Adaptive Writing Style",
      description: "Learns your unique voice and writing patterns to provide personalized suggestions that sound authentically you."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Native macOS Integration",
      description: "Seamlessly integrates with your favorite Mac apps. Works with Mail, Pages, Notion, and any text field system-wide."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
            Designed for privacy.<br />
            Built for productivity.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
            Every feature is crafted with your privacy and workflow in mind.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-600 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white transition-colors">
                Built by privacy advocates,<br />
                for privacy advocates.
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">
                SpWrite was created by a team of developers who believe that powerful AI assistance 
                shouldn't come at the cost of your privacy. We've spent years perfecting offline 
                voice recognition and natural language processing to bring you a tool that's both 
                incredibly capable and completely private.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">0</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Data collected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">100%</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Local processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">15MB</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 transition-colors">Download size</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white dark:bg-gray-700 rounded-3xl shadow-xl p-8 transition-colors">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300" 
                  alt="Alex Chen" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors">Alex Chen</h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors">Lead Developer</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors">
                Former Apple engineer with 8+ years in privacy-focused AI development. 
                Passionate about creating tools that empower users without compromising their data.
              </p>
              
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-500 dark:text-gray-500 dark:hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DownloadSection = () => {
  const requirements = [
    { icon: <Monitor className="w-6 h-6" />, title: "Operating System", detail: "macOS 14.2  or later" },
    { icon: <Zap className="w-6 h-6" />, title: "Processor", detail: "Apple Silicon or Intel processor" },
    { icon: <HardDrive className="w-6 h-6" />, title: "Memory", detail: "4GB RAM minimum, 8GB recommended" },
    { icon: <HardDrive className="w-6 h-6" />, title: "Storage", detail: "2GB free disk space" },
    { icon: <Mic className="w-6 h-6" />, title: "Microphone", detail: "Built-in or external microphone" },
    { icon: <Shield className="w-6 h-6" />, title: "Permissions", detail: "Microphone and Accessibility access" }
  ];

  const steps = [
    { title: "Download SpWrite", description: "Click the download button to get the latest version of SpWrite. The download will start automatically and save to your Downloads folder." },
    { title: "Open the Installer", description: "Locate the downloaded SpWrite-1.0.0.dmg file in your Downloads folder and double-click to open it." },
    { title: "Install the Application", description: "Drag the SpWrite app icon to your Applications folder. This will install SpWrite on your Mac." },
    { title: "Launch SpWrite", description: "Open SpWrite from your Applications folder or Launchpad. You may see a security dialog on first launch." },
    { title: "Grant Permissions", description: "SpWrite will request microphone and accessibility permissions. These are required for voice recognition and system integration." },
    { title: "Start Using SpWrite", description: "Once permissions are granted, SpWrite is ready to use. Press the hotkey (fn) to start voice dictation anywhere on your Mac." }
  ];

  return (
    <section id="download" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
            Download SpWrite
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 transition-colors">
            Get started with privacy-focused voice assistance in minutes
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 max-w-2xl mx-auto transition-colors">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors">SpWrite for macOS</h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors">Version 1.0.0 • 15MB • Universal Binary</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Apple Silicon</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium">Intel Mac</span>
                  </div>
                </div>
              </div>
              <a href="../voice_app/voice_app.dmg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center" download>
                <Download className="w-5 h-5 mr-2" />
                Download Now
              </a>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 transition-colors">System Requirements</h3>
            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-colors">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                    {req.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white transition-colors">{req.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">{req.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 transition-colors">Installation Guide</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2 transition-colors">{step.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 transition-colors">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "SpWrite won't open after installation",
      answer: "This is usually due to macOS security settings. Right-click on SpWrite in Applications and select \"Open\". You may need to go to System Preferences > Security & Privacy and click \"Open Anyway\"."
    },
    {
      question: "Voice recognition isn't working",
      answer: "Check that SpWrite has microphone permissions in System Preferences > Security & Privacy > Privacy > Microphone. Also ensure your microphone is working in other applications."
    },
    {
      question: "Hotkey not responding",
      answer: "SpWrite needs Accessibility permissions to register global hotkeys. Go to System Preferences > Security & Privacy > Privacy > Accessibility and ensure SpWrite is checked."
    },
    {
      question: "How to uninstall SpWrite",
      answer: "Simply drag SpWrite from your Applications folder to the Trash. All user data is stored locally and will be removed when you empty the Trash."
    },
    {
      question: "Need more help?",
      answer: "Contact our support team at support@spwrite.app or visit our documentation for more detailed troubleshooting guides."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
            Troubleshooting
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors">
            Common questions and solutions
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600 overflow-hidden transition-colors">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white transition-colors">{faq.question}</h3>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 transition-colors">
          Ready to write with complete privacy?
        </h2>
        <p className="text-xl text-blue-100 dark:text-blue-200 mb-8 transition-colors">
          Join thousands of writers who've made the switch to private, offline voice assistance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#download" className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-xl text-lg font-medium transition-colors">
            <Download className="w-5 h-5 mr-2" />
            Download SpWrite
          </a>
          <a href="#features" className="inline-flex items-center justify-center bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl text-lg font-medium transition-colors border border-white/30">
            Learn More
          </a>
        </div>
        
        <p className="text-blue-100 dark:text-blue-200 mt-6 transition-colors">
          Free download • No account required • Works offline immediately
        </p>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-semibold">SpWrite</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-md transition-colors">
              Privacy-focused voice assistant for macOS. Your voice, your style, completely private.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white transition-colors">Product</h4>
            <div className="space-y-2">
              <a href="#download" className="block text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors">Download</a>
              <a href="#features" className="block text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors">Features</a>
              <a href="#download" className="block text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors">System Requirements</a>
              <a href="#" className="block text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors">Release Notes</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white transition-colors">Support</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors">Documentation</a>
              <a href="#faq" className="block text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors">FAQ</a>
              <a href="#" className="block text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors">Contact Support</a>
              <a href="#about" className="block text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors">About</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 dark:text-gray-500 text-sm transition-colors">
            © 2024 SpWrite. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white dark:text-gray-500 dark:hover:text-gray-300 transition-colors text-sm">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <DownloadSection />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;