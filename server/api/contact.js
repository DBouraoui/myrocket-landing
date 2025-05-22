// server/api/contact.js (pour Nuxt 3)
import nodemailer from 'nodemailer';
import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event);

        // Configurer le transporteur SMTP
        const transporter = nodemailer.createTransport({
            host: useRuntimeConfig().smtpHost,
            port: useRuntimeConfig().smtpPort,
            secure: true,
            auth: {
                user: useRuntimeConfig().smtpUser,
                pass: useRuntimeConfig().smtpPass,
            }
        });

        // Construire le contenu de l'email
        const mailOptions = {
            from: 'MyRocket website',
            to: 'contact@myrocket.fr',
            replyTo: body.email,
            subject: `Nouvelle demande: ${body.projectType} - ${body.company}`,
            text: `
        Nouvelle demande de contact:
        
        Nom: ${body.name}
        Email: ${body.email}
        Téléphone: ${body.phone}
        Entreprise: ${body.company}
        
        Type de projet: ${body.projectType}
        Budget: ${body.budget}
        Délai: ${body.deadline}
        Source: ${body.source}
        
        Description du projet:
        ${body.description}
      `,
            html: `
        <h2>Nouvelle demande de contact</h2>
        
        <h3>Informations du contact:</h3>
        <ul>
          <li><strong>Nom:</strong> ${body.name}</li>
          <li><strong>Email:</strong> ${body.email}</li>
          <li><strong>Téléphone:</strong> ${body.phone}</li>
          <li><strong>Entreprise:</strong> ${body.company}</li>
        </ul>
        
        <h3>Détails du projet:</h3>
        <ul>
          <li><strong>Type de projet:</strong> ${body.projectType}</li>
          <li><strong>Budget:</strong> ${body.budget}</li>
          <li><strong>Délai:</strong> ${body.deadline}</li>
          <li><strong>Source:</strong> ${body.source}</li>
        </ul>
        
        <h3>Description:</h3>
        <p>${body.description.replace(/\n/g, '<br>')}</p>
      `
        };

        // Envoyer l'email
        const info = await transporter.sendMail(mailOptions);

        return {
            success: true,
            messageId: info.messageId
        };

    } catch (error) {
        console.error('Erreur d\'envoi d\'email:', error);

        return {
            success: false,
            error: error.message
        };
    }
});