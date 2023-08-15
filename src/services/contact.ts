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
  const postRequest = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode({
      'form-name': 'contact',
      ...values,
    }),
  });

  const response = await postRequest.json();
  console.log('🚀 ~ file: contact.ts:26 ~ postContactMe ~ response:', response);
  return response;
}
