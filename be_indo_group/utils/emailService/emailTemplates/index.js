export const generateJoiningLetterTemplate = (name) => `
  <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #f9f9f9; color: #333;">
    <h2 style="color: #007bff;">Welcome to Revonera, ${name}!</h2>
    <p>Dear ${name},</p>
    <p>Congratulations on being selected to join our team at <strong>Revonera</strong>.</p>
    <p>Your official joining letter is attached with this email.</p>
    <p>Please report to the HR desk on your first day as mentioned in the letter.</p>
    <br/>
    <p>We're excited to have you onboard and wish you a great start!</p>
    <p>Best regards,<br/><strong>HR Team</strong><br/>Revonera</p>
  </div>
`;

export const generateSalarySlipTemplate = (name, month) => `
  <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #f4f4f4;">
    <h2 style="color: #28a745;">Salary Slip - ${month}</h2>
    <p>Hello ${name},</p>
    <p>Your salary slip for <strong>${month}</strong> is attached.</p>
    <p>If you have any questions or corrections, contact <a href="mailto:accounts@revonera.com">accounts@revonera.com</a>.</p>
    <br/>
    <p>Warm regards,<br/><strong>Finance Team</strong><br/>Revonera</p>
  </div>
`;
export const generateTerminationTemplate = (name) => `
  <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #fff3f3;">
    <h2 style="color: #dc3545;">Employment Termination</h2>
    <p>Dear ${name},</p>
    <p>We regret to inform you that your employment with <strong>Revonera</strong> has been terminated.</p>
    <p>Please find your official termination letter attached.</p>
    <p>We thank you for your contributions and wish you all the best.</p>
    <br/>
    <p>Regards,<br/><strong>HR Department</strong><br/>Revonera</p>
  </div>
`;
export const generateRejoiningTemplate = (name) => `
  <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #e8f5e9;">
    <h2 style="color: #6f42c1;">Welcome Back, ${name}!</h2>
    <p>We are excited to have you rejoin <strong>Revonera</strong>.</p>
    <p>Please find your official rejoining letter attached to this email.</p>
    <br/>
    <p>Let’s achieve great things together again!</p>
    <p>Best regards,<br/><strong>HR Team</strong><br/>Revonera</p>
  </div>
`;

export function generateRegistrationEmailTemplate(full_name, company_name) {
  return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
                font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                background-color: #f4f4f4;
                padding: 20px;
                color: #333;
            }
            .email-container {
                max-width: 600px;
                margin: auto;
                background-color: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            }
            .header {
                font-size: 22px;
                font-weight: bold;
                margin-bottom: 20px;
                color: #007bff;
            }
            .content {
                font-size: 16px;
                line-height: 1.6;
            }
            .footer {
                margin-top: 30px;
                font-size: 14px;
                color: #555;
            }
         </style>
        </head>
        <body>
          <div style="max-width:600px;margin:auto;padding:20px;background:#fff;border-radius:8px;font-family:sans-serif">
            <h2 style="color:#007bff;">Registration Successful</h2>
            <p>Hi <strong>${full_name}</strong>,</p>
            <p>Thank you for registering with us. Our HR team is currently reviewing your details.</p>
            <p>You will receive your <strong>joining letter</strong> or a <strong>status update</strong> soon via email.</p>
            <p>We appreciate your patience and interest in being part of our team.</p>
            <p>Regards,<br/><strong>HR Team</strong><br/>${company_name}</p>
            <hr />
            <small>This is an automated message. Please do not reply.</small>
          </div>
        </body>
      </html>
    `;
}
