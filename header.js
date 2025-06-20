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
                    <a href="misc.html">Other Endeavors</a>
                </nav>
            </div>
        </header>
    `;
    
    // Insert the header at the top of the body
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});
