import sgMail from '@sendgrid/mail';
import envVars from '../../config/envVars';

const { SENDGRID } = envVars;
const { API_KEY, FROM_EMAIL, RESET_PASSWORD_EMAIL_ID } = SENDGRID;

sgMail.setApiKey(API_KEY);

export default async function sendForgotPasswordEmail({
  forgotPasswordToken,
  email,
  firstName,
  hostname,
}) {
  const msg = {
    to: email,
    from: FROM_EMAIL,
    templateId: RESET_PASSWORD_EMAIL_ID,
    dynamic_template_data: {
      firstName,
      url: `http://${hostname}/reset-password/${forgotPasswordToken}`,
    },
  };
  console.log('bout to send');
  await sgMail.send(msg);
  console.log('sent');
  return undefined;
}
