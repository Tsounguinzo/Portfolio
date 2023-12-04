import sendgrid from '@sendgrid/mail';
import { SENDGRID_API, TEMPLATE_ID } from '$env/static/private'

sendgrid.setApiKey(SENDGRID_API);

export const actions = {
	default: async ({ request }) => {
        const data = await request.formData();

        const email = data.get('Email');
		const name = data.get('First-Name') + ' ' + data.get('Last-Name');
		const text = data.get('Message');

        const msg = {
            from: "Beaudelaire.dev@gmail.com",
            to: "Beaudelaire@tutamail.com",
            templateId: TEMPLATE_ID,
            dynamic_template_data: {
                subject: "Email from " + email,
                name: name,
                text: text
            }
        }

        const success = await sendgrid
            .send(msg)
            .then((response) => {
                return response[0].statusCode == 202
                })
            .catch((error) => {
                return false
            })

        return {success: success}
    }
};