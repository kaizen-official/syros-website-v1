import { NextResponse } from 'next/server';

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/syroshospitals@gmail.com';

const SUBJECTS = {
  appointment: 'New Appointment Request - Syros Healthcare',
  careers: 'New Career Application - Syros Healthcare',
  contact: 'New Contact Enquiry - Syros Healthcare',
  cta: 'New Appointment Request - Syros Healthcare',
  partner: 'New Hospital Partnership Enquiry - Syros Healthcare',
};

export async function POST(request) {
  try {
    const body = await request.json();
    const { formType = 'website', _subject, ...formData } = body;
    const replyTo = formData.email;
    const sourceOrigin = request.headers.get('origin') || 'https://www.syroshealthcare.in';
    const sourceUrl = request.headers.get('referer') || `${sourceOrigin}/`;

    const payload = {
      _subject: _subject || SUBJECTS[formType] || 'New Website Enquiry - Syros Healthcare',
      _template: 'table',
      _captcha: 'false',
      _url: sourceUrl,
      'Form Type': formType,
      'Submitted From': sourceUrl,
      ...formData,
    };

    if (replyTo && replyTo !== 'Not provided') {
      payload._replyto = replyTo;
    }

    const response = await fetch(FORMSUBMIT_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Origin: sourceOrigin,
        Referer: sourceUrl,
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok || result.success === false || result.success === 'false') {
      return NextResponse.json(
        { success: false, error: result.message || 'Failed to submit form' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
