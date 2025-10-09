document.addEventListener('DOMContentLoaded', function() {
    const headerHTML = `
        <header class="container">
            <img src="images/profilepic" alt="Jillian Miles" class="profile-pic">
            <div>
                <h1>Jillian Miles</h1>
                <div class="subtitle">Workers & Local Communities | Energy Transition | Research for Policymaking</div>
                <nav>
                    <a href="index.html">Home</a>
                    <a href="publications.html">Research</a>
                    <a href="resumes.html">CV & Resumés</a>
                    <a href="news.html">In the News</a>
                    <a href="stained_glass.html">Stained Glass</a>
                </nav>
            </div>
        </header>
    `;
    
    // Insert the header at the top of the body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);

    // Dynamically add favicon
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png'; // or 'image/x-icon' for .ico files
    link.href = 'images/favicon-32x32.png'; // path to your favicon
    document.head.appendChild(link);

    
});
