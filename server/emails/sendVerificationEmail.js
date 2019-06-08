import sgMail from '@sendgrid/mail';
import envVars from '../../config/envVars';

sgMail.setApiKey(envVars.SENDGRID_API_KEY);

export default async function sendVerificationEmail({
  signupToken,
  email,
  firstName,
  hostname,
}) {
  // sgMail.send(signupToken, email, firstName, hostname);
  console.log(signupToken, email, firstName, hostname);
}
