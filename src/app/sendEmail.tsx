import emailjs from 'emailjs-com';

export function sendEmail(fromName: any, replyTo: any, message: any) {
  const templateParams = {
    from_name: fromName,
    reply_to: replyTo,
    message: message,
    to_email: "nicolastheodosiou2013@gmail.com",
  };

  emailjs.send('service_v2xqo1d', 'template_f9k79h5', templateParams, 'L-9SKgKDZw3pBLo1i')
    .then((response) => {
      console.log('Success:', response);
      alert("Message Sent.");
    }, (error) => {
      console.error('Error:', error);
      alert("Message Not Sent!");
    });
}
