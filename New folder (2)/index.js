const socialLinks = [
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/ishraeju", color: "#1877f2" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/ishrae_jadavpuruniversity", color: "#e4405f" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/company/ishrae-jadavpur-university/posts/?feedView=all", color: "#0077b5" },
    { name: "YouTube", icon: "youtube", url: "https://www.youtube.com/@ishraejadavpuruniversityst6204", color: "#ff0000" },
    { name: "WhatsApp", icon: "message-circle", url: "https://wa.me/1234567890", color: "#25D366" },
];

function createSocialCard(link) {
    const card = document.createElement('a');
    card.href = link.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";
    card.className = "social-card";

    card.innerHTML = `
        <div class="icon-wrapper" style="background-color: ${link.color};">
            <i data-lucide="${link.icon}"></i>
        </div>
        <div class="social-info">
            <h2>${link.name}</h2>
            <p>Join us on ${link.name}</p>
        </div>
    `;

    return card;
}

function renderSocialLinks() {
    const container = document.getElementById('socialLinks');
    socialLinks.forEach(link => {
        const card = createSocialCard(link);
        container.appendChild(card);
    });
    lucide.createIcons();
}

document.addEventListener('DOMContentLoaded', renderSocialLinks);