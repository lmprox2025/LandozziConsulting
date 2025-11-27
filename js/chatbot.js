document.addEventListener('DOMContentLoaded', () => {
    const cbToggle = document.getElementById('chatbot-toggle');
    const cbWindow = document.getElementById('chatbot-window');
    const cbInput = document.getElementById('chatbot-input');
    const cbSend = document.getElementById('chatbot-send');
    const cbMessages = document.getElementById('chatbot-messages');

    cbToggle.addEventListener('click', () => {
        cbWindow.style.display = cbWindow.style.display === 'flex' ? 'none' : 'flex';
        if (cbWindow.style.display === 'flex') {
            cbWindow.style.flexDirection = 'column';
        }
    });

    function addChatMessage(text, sender) {
        const msg = document.createElement('div');
        msg.classList.add('chat-message', sender);
        const bubble = document.createElement('div');
        bubble.classList.add('chat-bubble');
        bubble.textContent = text;
        msg.appendChild(bubble);
        cbMessages.appendChild(msg);
        cbMessages.scrollTop = cbMessages.scrollHeight;
    }

    function botResponse(message) {
        const lower = message.toLowerCase();
        if (lower.includes('servizi')) {
            return 'Offriamo consulenza su sicurezza, privacy, cybersecurity, HACCP, sistemi di certificazione, accreditamento sanitario e formazione.';
        }
        if (lower.includes('orari') || lower.includes('apertura')) {
            return 'I nostri uffici sono aperti dal lunedì al venerdì dalle 9 alle 18.';
        }
        if (lower.includes('corso') || lower.includes('formazione')) {
            return 'Organizziamo corsi RSPP, primo soccorso, antincendio, attrezzature, HACCP, privacy e molti altri. Consulta la sezione Formazione.';
        }
        if (lower.includes('preventivo') || lower.includes('costo')) {
            return 'Per un preventivo gratuito compila il modulo nella sezione Contatti. Ti risponderemo rapidamente.';
        }
        if (lower.includes('contatto') || lower.includes('call')) {
            return 'Puoi chiamarci allo 0577 555208 o inviare una mail a info@landozziconsultingsrl.com per fissare una call.';
        }
        return 'Grazie per il tuo messaggio. Un consulente ti risponderà al più presto.';
    }

    function sendMessage() {
        const text = cbInput.value.trim();
        if (!text) return;
        addChatMessage(text, 'user');
        cbInput.value = '';
        setTimeout(() => {
            addChatMessage(botResponse(text), 'ai');
        }, 500);
    }

    cbSend.addEventListener('click', sendMessage);
    cbInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });
});