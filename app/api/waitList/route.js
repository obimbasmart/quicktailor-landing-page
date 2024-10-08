import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(req) {
    const { message, to } = await req.json(); 
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    console.log(authToken)
    console.log(accountSid)
    const from = 'whatsapp:+14155238886';  // Twilio sandbox number

    const client = twilio(accountSid, authToken);
    const groupMembers = ['+2348130119931']

    try {
        const messageResponses = [];

       
        for (const member of groupMembers) {
            const messageResponse = await client.messages.create({
                body: message,
                from: from,
                to: `whatsapp:${member}`, 
            });
            messageResponses.push(messageResponse);
            console.log(messageResponse)
        }

        return NextResponse.json({ success: true, messageResponses }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
