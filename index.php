<?php
session_start();
$isLoggedIn = isset($_SESSION['loggedin']) && $_SESSION['loggedin'];
$username = $isLoggedIn ? $_SESSION['username'] : 'Guest';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Placement Preparation</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Header Section -->
    <header>
        <div class="navbar">
            <div class="logo">
                <h1>PlacementPrep</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="aboutus.html">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    
                    <?php if ($isLoggedIn): ?>
                        <li><a href="logout.php">Logout</a></li>
                    <?php else: ?>
                        <li><a href="login.html">Login</a></li>
                    <?php endif; ?>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-content">
            <h2>Welcome to PlacementPrep</h2>
            <p>Prepare for your dream job with our personalized placement preparation resources.</p>
            
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
        <h1>Our Motto</h1>
        <h2> "Unlock Your Career Potential,</h2>
         <h2>   Master Every Interview and Test,</h2>
         <h2> Build Confidence, Skills, and Knowledge,</h2>
            <h2>  With Tailored Resources at Your Fingertips,</h2>
            <h2>    Achieve Your Dream Job with Us."</h2>
            
           <h2> This emphasizes both preparation and empowerment, aligning with the site's mission to guide users towards their career goals.</h2>
    </section>

    <!-- Features Section -->
    <section id="features" class="section">
        <h1>Features</h1>
        
        <div class="feature-cards">
            <div class="card">
                <h3>Aptitude & Reasoning</h3>
                <p>Master basic and advanced aptitude tests to sharpen your problem-solving skills.</p>
            </div>
            <div class="card">
                <h3>Coding Challenges</h3>
                <p>Enhance your coding skills with practice problems from top tech companies.</p>
            </div>
             <div class="card">
                <h3>Group Discussion</h3>
                <p>Group discussions encourage diverse perspectives, enhance critical thinking, and improve communication and teamwork skills.</p>
            </div>
            <div class="card">
                <h3>Communication Skills</h3>
                <p>Group discussions encourage diverse perspectives, enhance critical thinking, and improve communication and teamwork skills.</p>
            </div>
            <div class="card">
                <h3>Personality Devlopment</h3>
                <p>Group discussions encourage diverse perspectives, enhance critical thinking, and improve communication and teamwork skills.</p>
            </div>

           <div class="card">
                <h3>Interview Preparation</h3>
                <p>Prepare for technical and HR interviews with mock interviews and company-specific questions.</p>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section id="cta" class="cta-section">
        <h2>Get Started with PlacementPrep</h2>
        <p>Sign up today and start your preparation for a successful placement drive!</p>
        <button id="registerBtnAction"><a href="register.html">Register Now</button></a>
    </section>

    <!-- Footer Section -->
    <footer id="contact" class="footer">
    <p>© 2024 PlacementPrep. All the best.</p>
        
    </footer>

    <!-- JavaScript to handle interactivity -->
    <script>
        const username = <?php echo json_encode($username); ?>;

        document.getElementById('ctaBtn').addEventListener('click', function () {
            alert(`Hello, ${username}! Start your preparation now.`);
        });
    </script>

    <script src="scripts.js"></script>
</body>
</html>
