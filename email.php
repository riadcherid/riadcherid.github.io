<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collecter les données du formulaire
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Vérifier si l'email est valide
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Destination de l'email (remplacez par votre adresse email)
        $to = 'riad.cherid@gmail.com';

        // Sujet de l'email
        $subject = 'Nouveau message de ' . $nom;

        // Construire le corps de l'email
        $body = "Nom: $nom\nEmail: $email\nMessage:\n$message";

        // En-têtes de l'email
        $headers = "From: $email";

        // Envoyer l'email
        if (mail($to, $subject, $body, $headers)) {
            echo 'Votre message a été envoyé.';
        } else {
            echo 'Erreur lors de l’envoi du message.';
        }
    } else {
        echo 'Adresse email invalide.';
    }
}
?>
