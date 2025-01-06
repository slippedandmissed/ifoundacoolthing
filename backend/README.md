# Server functions

To deploy:

```shell
gcloud functions deploy ifoundacoolthing \
--project ifoundacoolthing \
--allow-unauthenticated \
--gen2 \
--runtime=nodejs22 \
--region=europe-west2 \
--source=. \
--entry-point=petCat \
--trigger-http \
--set-secrets 'TWILIO_ACCOUNT_SID=twilio-account-sid:latest,TWILIO_AUTH_TOKEN=twilio-auth-token:latest,TWILIO_PHONE_NUMBER=twilio-phone-number:latest,MY_PHONE_NUMBER=my-phone-number:latest'
```