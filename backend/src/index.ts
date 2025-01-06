import * as functions from "@google-cloud/functions-framework";
import twilio from "twilio";

functions.http("petCat", async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    return void res.status(204).send('');
  }

  const catName = req.query.cat;

  if (!catName) {
    return void res.status(400).send('Which cat?');
  }

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_PHONE_NUMBER;
  const toNumber = process.env.MY_PHONE_NUMBER;

  if (!accountSid) {
    return void res.status(500).send('Missing accountSid');
  }

  if (!authToken) {
    return void res.status(500).send('Missing authToken');
  }

  if (!fromNumber) {
    return void res.status(500).send('Missing fromNumber');
  }

  if (!toNumber) {
    return void res.status(500).send('Missing toNumber');
  }

  const client = twilio(accountSid, authToken);
  await client.messages.create({
    body: `Someone petted ${catName} 😊`,
    from: fromNumber,
    to: toNumber,
  });
  
  res.send(`${catName} has been petted.`);
});
