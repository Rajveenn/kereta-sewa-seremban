export default {
  accountactivation: {
    name: "Account Activation",
    subject: "Account Activation",
    body: `Dear {{name}},
  
  Thank you for creating an account with us. To activate your account, please click on the link below:
  
  {{activationLink}}
  
  If you did not request an account with us, please disregard this email.
  
  Thank you,
  The Team`,
  },
  missingorincorrectdocuments: {
    name: "Missing or Incorrect Documents",
    subject: "Missing or Incorrect Documents",
    body: `
    <h2>Welcome to JRV Car Rental Seremban</h2>
    <h3>Dear {{name}},</h3>
    <h3>We have checked your documents and your account is currently missing some documents :</h3>
    <h3><strong> - {} </strong></h3>
    <h3>Please re-upload the documents and we will verify them in 24 hours.</h3>
    <h3>Thank you!</h3>

    <div class="footer">
      <div class="footer-top">
        <img src="https://jrvservices.co/logo.png" alt="JRV Car Rental Services" class="footer-logo">

        <div class="footer-text">
        <a href="https://jrvservices.co/car-rental-seremban" target="_blank" class="company-link">JRV Services</a>
        </div>

        <div class="footer-social">
          <a href="https://www.facebook.com/jrvcarrentalseremban" target="_blank" class="company-link">Facebook</a>
          <a href="https://www.instagram.com/jastransport_rentalservices/" target="_blank" class="company-link">Instagram</a>
          <a href="https://chat.whatsapp.com/DVZXvnBiDqS0Z9jkHwL9yT" target="_blank" class="company-link"></i>WhatsApp</a>
          <a href="https://t.me/+ILGvKb39imRkMDNl" target="_blank" class="company-link"></i>Telegram</a>
        </div>
      </div>
    </div>`,
  },
};
