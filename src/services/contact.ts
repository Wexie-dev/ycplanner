export type ContactMePayload = {
  name: string;
  email: string;
  phone: string;
  date: Date | null;
  notes?: string;
};

const encode = (data: Record<string, any>) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export async function postContactMe(values: ContactMePayload) {
  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': 'contact',
      'netlify-honeypot': 'bot-field',
      ...values,
    }),
  });
  return response.ok;
}
