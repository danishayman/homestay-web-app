# 📅 Google Calendar Integration Setup Guide

This guide will help you set up the Google Calendar integration for your Tuah Suci Homestay website's availability calendar.

## 🔑 Step 1: Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Make note of your Project ID

## 🔄 Step 2: Enable the Google Calendar API

1. In your Google Cloud Project, go to "APIs & Services" > "Library"
2. Search for "Google Calendar API" and select it
3. Click "Enable"

## 👤 Step 3: Create a Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" and select "Service Account"
3. Fill in the required information for your service account
4. Grant the role "Calendar API > Calendar Events Reader" to the service account
5. Click "Done"

## 🔐 Step 4: Generate Service Account Keys

1. Find your newly created service account in the "Service Accounts" list
2. Click on the service account name to view details
3. Go to the "Keys" tab
4. Click "Add Key" > "Create new key"
5. Select "JSON" as the key type and click "Create"
6. A JSON key file will be downloaded to your computer

## 📆 Step 5: Set Up Your Google Calendar

1. Go to [Google Calendar](https://calendar.google.com/)
2. Create a new calendar specifically for tracking your homestay bookings
3. In your new calendar's settings, go to "Share with specific people"
4. Add the service account email (found in the JSON key file) with "See all event details" permissions
5. Copy the Calendar ID (it will be your calendar's email address)

## ⚙️ Step 6: Configure Environment Variables

1. Open the downloaded JSON key file
2. In your project's `.env` file (or Vercel environment variables), add:

```
GOOGLE_CALENDAR_ID=your-calendar-id@group.calendar.google.com
GOOGLE_CLIENT_EMAIL=your-service-account-email@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour Private Key\n-----END PRIVATE KEY-----\n"
```

- For `GOOGLE_CALENDAR_ID`: Use the email address of your calendar
- For `GOOGLE_CLIENT_EMAIL`: Use the "client_email" value from the JSON key file
- For `GOOGLE_PRIVATE_KEY`: Use the "private_key" value from the JSON key file (make sure to keep the quotes)

## 🔍 Step 7: Mark Dates as Booked

To mark dates as booked in your Google Calendar:
1. Create a new event on your Google Calendar
2. Include the word "BOOKED" or "TEMPAHAN" in the event title
3. Set the event dates to match the booking dates
4. Save the event

The availability calendar will automatically display these dates as booked (red) on your website. All other dates will be shown as available (green).

## 🧪 Step 8: Testing

1. Create some test events in your Google Calendar with "BOOKED" in the title
2. Deploy your website or run it locally
3. Visit your availability calendar to verify that the booked dates are displayed correctly

## 🔒 Security Notes

- **Important**: Keep your service account credentials private
- Do not commit your .env file or JSON key file to your Git repository
- Use environment secrets in your deployment platform (like Vercel) 