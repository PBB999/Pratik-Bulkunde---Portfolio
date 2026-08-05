// Chatbot Knowledge Base
const knowledgeBase = {
    greetings: {
        patterns: ['hi', 'hello', 'hey', 'greetings', 'namaste', 'howdy'],
        responses: [
            'Hey there! 👋 I\'m Pratik\'s AI assistant. How can I help you today?',
            'Hello! Welcome to Pratik\'s portfolio. What would you like to know?',
            'Hi! 😊 Feel free to ask me about Pratik\'s skills, experience, or projects!',
            'Greetings! I\'m here to help. What interests you about Pratik?'
        ]
    },
    skills: {
        patterns: ['skills', 'what can', 'expertise', 'proficient', 'languages', 'tools', 'technical'],
        responses: [
            'Pratik has expertise in:\n• Web Application Security\n• API Security\n• Mobile Security\n• Network Security\n• Cloud Security\n\nHe\'s proficient with Burp Suite, OWASP ZAP, Nmap, Nessus, and many other security tools!',
            'Pratik\'s technical skills include:\n🔐 Security Testing (VAPT)\n💻 Web & API Security\n📱 Mobile App Security\n🔧 Tools: Burp Suite Pro, Postman, SQLMap\n🐍 Languages: Python, JavaScript, Java',
            'Want to know more about a specific skill? Pratik specializes in penetration testing, vulnerability assessment, and ethical hacking with OWASP expertise!'
        ]
    },
    experience: {
        patterns: ['experience', 'worked', 'job', 'employment', 'career', 'what do you do'],
        responses: [
            'Pratik is a Security Engineer at Vision Minds Technology (since Jun 2025).\n\nHis responsibilities include:\n• OWASP Top 10 vulnerability testing\n• Penetration testing with tools like Burp Suite\n• API security assessments\n• VAPT report preparation\n• Vulnerability remediation support',
            'Currently, Pratik works as a Security Engineer, performing:\n✓ Manual penetration testing\n✓ Automated vulnerability scanning\n✓ Network security assessments\n✓ API security testing\n✓ Detailed VAPT reporting\n\nHe collaborates with development teams on security fixes!'
        ]
    },
    certifications: {
        patterns: ['certificate', 'certified', 'ceh', 'qualification', 'awards', 'achievements'],
        responses: [
            'Pratik has impressive certifications:\n🏆 Smart India Hackathon 2024 Winner\n🔒 Certified Ethical Hacker (CEH) - May 2026\n📚 Google Cybersecurity Fundamentals - Dec 2023\n🎓 Multiple security courses from Udemy & EDUCBA\n📜 Copyright Registration for AI-based biometric security',
            'Notable achievements:\n• Won Smart India Hackathon 2024 🏆\n• CEH Certification (May 2026)\n• Google Cybersecurity Certificate\n• NPTEL Ethical Hacking\n• Mobile Security Certifications\n• Government of India Copyright Registration'
        ]
    },
    education: {
        patterns: ['education', 'study', 'college', 'school', 'degree', 'university', 'bachelor'],
        responses: [
            'Pratik\'s education:\n🎓 B.Tech in Information Technology\n   Sanjivani College of Engineering, Kopargaon\n   Specialization: Cybersecurity\n   CGPA: 8.8/10 (2022-2026)\n\n📖 HSC: 70.83% | SSC: 85.40%',
            'Currently a B.Tech student at Sanjivani College (honors in Cybersecurity) with a strong CGPA of 8.8/10. Pratik combines academic excellence with practical security expertise!'
        ]
    },
    projects: {
        patterns: ['project', 'work', 'built', 'developed', 'portfolio', 'showcase'],
        responses: [
            'Pratik has worked on notable security projects:\n\n🔐 Broken Crystal (Jun 2025)\n• Web Application Security Assessment\n• Tested OWASP Top 10 vulnerabilities\n• SQL Injection, XSS, Authentication testing\n\n🔗 NexaFlow (Jul 2025)\n• API Security Assessment & VAPT\n• OWASP API Security Top 10\n• BOLA, BFLA, Rate Limiting testing',
            'Featured projects include comprehensive security assessments using industry-leading tools like Burp Suite Pro, OWASP ZAP, and Postman. Each project includes detailed documentation and remediation guidance!'
        ]
    },
    contact: {
        patterns: ['contact', 'reach', 'email', 'phone', 'message', 'communicate', 'talk'],
        responses: [
            'You can reach Pratik at:\n📧 Email: pratikbulkunde08@gmail.com\n📱 Phone: (+91) 9699076606\n📍 Location: Sangamner, Maharashtra, India\n\nFeel free to send a message using the contact form on this page!'
        ]
    },
    tools: {
        patterns: ['tools', 'software', 'burp', 'nmap', 'postman', 'metasploit', 'zap'],
        responses: [
            'Pratik is proficient with:\n\n🛡️ Security Tools:\n• Burp Suite Professional\n• OWASP ZAP\n• Nmap & Nessus\n• Wireshark\n• Metasploit\n• SQLMap\n\n🔧 Development Tools:\n• Postman (API Testing)\n• Git/GitHub\n• VS Code\n• Swagger UI'
        ]
    },
    languages: {
        patterns: ['programming', 'language', 'python', 'javascript', 'java', 'html', 'css'],
        responses: [
            'Pratik\'s programming skills:\n💻 Languages: Python, JavaScript, Java\n🌐 Web: HTML, CSS, React.js\n🗄️ Database: MySQL\n\nHe uses these languages to build security testing tools and understand application vulnerabilities better!'
        ]
    },
    security: {
        patterns: ['security', 'hacking', 'penetration', 'vulnerability', 'exploit', 'ethical'],
        responses: [
            'Pratik specializes in ethical hacking and penetration testing:\n🎯 Vulnerability Assessment & Penetration Testing (VAPT)\n🔓 Web Application Security testing\n🔐 API Security assessment\n📱 Mobile application security\n🌐 Network security analysis\n\nAll work follows ethical guidelines and industry best practices!'
        ]
    },
    owasp: {
        patterns: ['owasp', 'top 10', 'vulnerability', 'security testing'],
        responses: [
            'Pratik is an expert in OWASP standards:\n✓ OWASP Top 10 (SQL Injection, XSS, CSRF, etc.)\n✓ OWASP API Security Top 10\n✓ Secure SDLC practices\n✓ Authentication & Authorization testing\n✓ Security misconfigurations\n\nHe uses this knowledge for comprehensive application security assessments!'
        ]
    },
    copyright: {
        patterns: ['copyright', 'patent', 'registered', 'innovation', 'research'],
        responses: [
            'Pratik has a Registered Copyright:\n📜 "Enhancing Biometric Security with AI-Generated False Fingerprints and Cryptographic Protection"\n\nRegistered under: Copyright Act, 1957 (Government of India)\nFocus: AI-driven cybersecurity and biometric innovation\nDate: May 2025\n\nThis showcases his innovative approach to security!'
        ]
    },
    appreciation: {
        patterns: ['thanks', 'thank you', 'great', 'awesome', 'nice', 'perfect', 'excellent'],
        responses: [
            'Thanks so much! 😊 Feel free to ask more questions or check out the contact form to get in touch with Pratik directly!',
            'Happy to help! If you have more questions about Pratik\'s work, just ask!'
        ]
    }
};

// Suggested quick replies
const suggestedReplies = [
    'Tell me about skills',
    'Show me projects',
    'Certifications',
    'How to contact'
];

// Emoji map for personality
const emojiMap = {
    'security': '🔒',
    'hacking': '🎯',
    'python': '🐍',
    'javascript': '📜',
    'java': '☕',
    'tool': '🔧',
    'vulnerability': '⚠️',
    'certified': '🏆',
    'project': '💼'
};

// Add emoji to text
function addEmoji(text) {
    let result = text;
    for (const [word, emoji] of Object.entries(emojiMap)) {
        const regex = new RegExp(`\\b${word}\\b`, 'gi');
        result = result.replace(regex, `${emoji} ${word}`);
    }
    return result;
}

// Get Bot Response with Enhanced Features
function getBotResponse(userInput) {
    const input = userInput.toLowerCase().trim();

    // Check knowledge base
    for (const [key, data] of Object.entries(knowledgeBase)) {
        for (const pattern of data.patterns) {
            if (input.includes(pattern)) {
                const responses = data.responses;
                let response = responses[Math.floor(Math.random() * responses.length)];
                return addEmoji(response);
            }
        }
    }

    // Default responses
    const defaultResponses = [
        'That\'s a great question! Could you be more specific? Try asking about skills 🔐, experience 💼, projects 🎯, or certifications 🏆.',
        'I\'m still learning! 😅 Try asking me about Pratik\'s cybersecurity expertise or projects.',
        'Hmm, I\'m not sure about that. How about asking me about Pratik\'s penetration testing skills or security projects?',
        'Good question! For more detailed information, feel free to use the contact form to reach out directly. 📧',
        'I\'m here to help with questions about Pratik\'s profile. Ask about skills, experience, certifications, or projects! 🛡️'
    ];

    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

// Add Message to Chat
function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}-message`;
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Add Typing Indicator
function addTypingIndicator() {
    const chatMessages = document.getElementById('chatbotMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message bot-message typing-indicator';
    messageDiv.innerHTML = `<p><span>.</span><span>.</span><span>.</span></p>`;
    messageDiv.id = 'typingIndicator';
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove Typing Indicator
function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Send Message
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const userMessage = chatInput.value.trim();
    
    if (!userMessage) return;

    // Add user message to chat
    addMessage(userMessage, 'user');
    chatInput.value = '';

    // Get bot response
    const botResponse = getBotResponse(userMessage);
    
    // Add typing indicator
    addTypingIndicator();

    // Simulate bot thinking time
    setTimeout(() => {
        removeTypingIndicator();
        addMessage(botResponse, 'bot');
    }, 800);
}

// Add welcome suggestions
function addSuggestedReplies() {
    const chatInput = document.getElementById('chatInput');
    const parentDiv = chatInput.parentElement;
    
    // Check if suggestions already exist
    if (parentDiv.querySelector('.chatbot-suggestions')) {
        return;
    }
    
    const suggestionsDiv = document.createElement('div');
    suggestionsDiv.className = 'chatbot-suggestions';
    
    suggestedReplies.forEach(reply => {
        const btn = document.createElement('button');
        btn.textContent = reply;
        btn.className = 'suggestion-btn';
        btn.addEventListener('click', () => {
            chatInput.value = reply;
            chatInput.focus();
        });
        suggestionsDiv.appendChild(btn);
    });
    
    parentDiv.insertBefore(suggestionsDiv, chatInput);
}

// Initialize chatbot when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('🤖 Chatbot initializing...');
    
    try {
        // Get all chatbot elements
        const chatbotToggle = document.getElementById('chatbotToggle');
        const chatbotContainer = document.querySelector('.chatbot-container');
        const chatbotClose = document.getElementById('chatbotClose');
        const chatInput = document.getElementById('chatInput');
        const chatSend = document.getElementById('chatSend');

        if (!chatbotToggle || !chatbotContainer || !chatInput || !chatSend) {
            console.error('❌ Chatbot elements not found in HTML');
            return;
        }

        // Toggle Chatbot
        chatbotToggle.addEventListener('click', () => {
            chatbotContainer.classList.toggle('active');
            if (chatbotContainer.classList.contains('active')) {
                chatInput.focus();
                addSuggestedReplies();
            }
        });

        // Close Chatbot
        if (chatbotClose) {
            chatbotClose.addEventListener('click', () => {
                chatbotContainer.classList.remove('active');
            });
        }

        // Send Message on Button Click
        chatSend.addEventListener('click', sendMessage);

        // Send Message on Enter Key
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });

        console.log('✅ Chatbot initialized successfully!');
    } catch (error) {
        console.error('❌ Error initializing chatbot:', error);
    }
});

// Add Typing Animation CSS
const chatbotStyles = `
    /* Chatbot Container */
    .chatbot-container {
        position: fixed;
        bottom: 100px;
        right: 20px;
        width: 380px;
        height: 500px;
        background: white;
        border-radius: 15px;
        box-shadow: 0 5px 30px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        transform: translateY(400px);
        opacity: 0;
        transition: all 0.3s ease;
        z-index: 999;
        overflow: hidden;
    }

    .chatbot-container.active {
        transform: translateY(0);
        opacity: 1;
    }

    .chatbot-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px 15px 0 0;
    }

    .chatbot-header h3 {
        margin: 0;
        font-size: 18px;
        font-weight: 600;
    }

    .chatbot-close {
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .chatbot-close:hover {
        opacity: 0.8;
    }

    #chatbotMessages {
        flex: 1;
        overflow-y: auto;
        padding: 20px;
        background: #f5f5f5;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .chat-message {
        display: flex;
        word-wrap: break-word;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .chat-message p {
        margin: 0;
        padding: 12px 16px;
        border-radius: 12px;
        font-size: 14px;
        line-height: 1.5;
        white-space: pre-wrap;
    }

    .user-message p {
        background: #667eea;
        color: white;
        margin-left: auto;
        max-width: 85%;
        border-radius: 12px 2px 12px 12px;
    }

    .bot-message p {
        background: white;
        color: #333;
        max-width: 85%;
        border: 1px solid #ddd;
        border-radius: 2px 12px 12px 12px;
    }

    .typing-indicator p {
        display: flex;
        gap: 4px;
        background: white;
        border: 1px solid #ddd;
    }

    .typing-indicator span {
        width: 8px;
        height: 8px;
        background: #667eea;
        border-radius: 50%;
        animation: typing 1.4s infinite;
    }

    .typing-indicator span:nth-child(2) {
        animation-delay: 0.2s;
    }

    .typing-indicator span:nth-child(3) {
        animation-delay: 0.4s;
    }

    @keyframes typing {
        0%, 60%, 100% {
            opacity: 0.5;
            transform: translateY(0);
        }
        30% {
            opacity: 1;
            transform: translateY(-10px);
        }
    }

    .chatbot-input {
        display: flex;
        gap: 10px;
        padding: 12px;
        background: white;
        border-top: 1px solid #ddd;
    }

    #chatInput {
        flex: 1;
        border: 1px solid #ddd;
        border-radius: 20px;
        padding: 10px 15px;
        font-size: 14px;
        outline: none;
        transition: border-color 0.3s ease;
    }

    #chatInput:focus {
        border-color: #667eea;
    }

    #chatSend {
        background: #667eea;
        color: white;
        border: none;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
    }

    #chatSend:hover {
        background: #764ba2;
    }

    .chatbot-suggestions {
        padding: 10px;
        border-top: 1px solid #ddd;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        background: #f9f9f9;
    }

    .suggestion-btn {
        padding: 6px 12px;
        border: 1px solid #667eea;
        background: transparent;
        color: #667eea;
        border-radius: 15px;
        cursor: pointer;
        font-size: 12px;
        transition: all 0.3s ease;
    }

    .suggestion-btn:hover {
        background: #667eea;
        color: white;
    }

    /* Chatbot Toggle Button */
    .chatbot-toggle {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        z-index: 998;
    }

    .chatbot-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 16px rgba(102, 126, 234, 0.6);
    }

    /* Responsive Design */
    @media (max-width: 480px) {
        .chatbot-container {
            width: calc(100% - 40px);
            height: 60vh;
            bottom: 80px;
            right: 20px;
            left: 20px;
        }

        .user-message p,
        .bot-message p {
            max-width: 90%;
        }
    }
`;

// Inject styles
const styleElement = document.createElement('style');
styleElement.textContent = chatbotStyles;
document.head.appendChild(styleElement);
