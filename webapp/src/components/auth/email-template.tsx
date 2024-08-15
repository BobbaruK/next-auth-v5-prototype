import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  confirmLink: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  confirmLink,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>
      Click <a href={confirmLink}>here</a> to confirm your email!
    </p>
  </div>
);
