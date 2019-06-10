import sgMail from '@sendgrid/mail';
import envVars from '../../config/envVars';

const { SENDGRID } = envVars;
const { API_KEY, FROM_EMAIL, VERIFICATION_EMAIL_ID } = SENDGRID;

sgMail.setApiKey(API_KEY);

export default async function sendVerificationEmail({
  signupToken,
  email,
  firstName,
  hostname,
}) {
  const msg = {
    to: email,
    from: FROM_EMAIL,
    templateId: VERIFICATION_EMAIL_ID,
    dynamic_template_data: {
      firstName,
      url: `http://${hostname}/verify-email/${signupToken}`,
    },
  };
  await sgMail.send(msg);
}
