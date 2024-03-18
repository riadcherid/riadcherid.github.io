<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mon Site Web Personnel</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header">
    <h1>Mon Site Web Personnel</h1>
    <p>Technicien informatique | Réseau et Systèmes | Support Client</p>
    <img src="myimage1.jpg" alt="smile to life, the life will smile to you" class="profile-img">
  </header>
  
  <nav>
    <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="projects.html">Projets</a></li>
      <li><a href="resume.html">CV</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
  
  <main>
    <section class="section">
      <h2 class="section-title">À propos de moi</h2>
      <p>Technicien informatique bilingue avec une expertise en réseau, Active Directory, dépannage, Linux, Azure et support client.</p>
      <p>Opérateur de systèmes de chronométrage électronique (Finish Lynx, MyLaps, Seltec).</p>
    </section>

    <section id="projects-section">
      <h2 class="section-title">Projets</h2>
      <div id="projects-list">
        <!-- Les projets seront chargés ici dynamiquement avec JavaScript -->
      </div>
    </section>
  </main>
  
  <section class="section">
    <h2 class="section-title">Contact</h2>
    <div class="contact-info">
      <p><strong>Téléphone :</strong> 438-304-3132</p>
      <p><strong>Adresse :</strong> 545 Sherbourne St</p>
      <p><strong>Email :</strong> <a href="mailto:riad.cherid@gmail.com">riad.cherid@gmail.com</a></p>
    </div>
  </section>
  
  <footer>
    <p>Ceci est la page d'accueil de mon site personnel.</p>
  </footer>
  
  <script src="projects.js"></script>
</body>
</html>
