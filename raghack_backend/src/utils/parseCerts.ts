function parseCertificationsContext(certificationsContext) {
  return certificationsContext.map(cert => {
      return `KEY ID: ${cert.KEY}\n` +
             `Certification: ${cert.cert}\n` +
             `Level: ${cert.level}\n` +
             `Product: ${cert.product}\n` +
             `Role: ${cert.role}\n` +
             `Renewal Frequency: ${cert.renewal_frequency}\n` +
             `Last Updated: ${cert.last_updated}\n` +
             `Overview: ${cert.overview}\n` +
             `Skills Measured: ${cert.skills_measured}\n` +
             `Cert ID: ${cert.cert_id}\n`;
  }).join('\n');
}

export default parseCertificationsContext;