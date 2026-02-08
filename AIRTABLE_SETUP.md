# Airtable Integration Setup Guide

This guide will help you set up Airtable to store form submissions from the Tejas Connect website.

## Prerequisites

1. An Airtable account (free tier is sufficient)
2. Your Airtable API key
3. A new Airtable base for storing form data

## Step 1: Get Your API Key

1. Go to [Airtable API Documentation](https://airtable.com/account/api)
2. Click "Generate API Key"
3. Copy your API key and keep it safe

## Step 2: Create Your Airtable Base

1. Go to [airtable.com](https://airtable.com)
2. Create a new base
3. Get your Base ID from the URL: `https://airtable.com/app**[BASE_ID]**`

## Step 3: Create Tables

You need to create three tables with the following structure:

### Table 1: Founders

| Field Name | Field Type | Notes |
|------------|-----------|-------|
| Full Name | Single line text | |
| Contact Number | Phone number | |
| Email Address | Email | |
| Company Name | Single line text | |
| Type of Business | Single line text | |
| Role in Company | Single line text | |
| Purpose of Joining | Long text | |
| Location | Single line text | |

### Table 2: Colleges_Students

| Field Name | Field Type | Notes |
|------------|-----------|-------|
| Full Name | Single line text | |
| Category | Single select | Options: College Management, Student, Dropped Out |
| College Name | Single line text | |
| Contact Number | Phone number | |
| Email Address | Email | |
| Location | Single line text | |
| Message/Purpose | Long text | |

### Table 3: Get_Involved

| Field Name | Field Type | Notes |
|------------|-----------|-------|
| Full Name | Single line text | |
| Contact Number | Phone number | |
| Email Address | Email | |
| Reason for Connecting | Long text | |

## Step 4: Configure Environment Variables

1. Copy `.env.example` to `.env.local`
2. Add your Airtable credentials:
   ```
   VITE_AIRTABLE_API_KEY=YOUR_AIRTABLE_API_KEY
   VITE_AIRTABLE_BASE_ID=YOUR_AIRTABLE_BASE_ID
   ```
3. Save the file

## Step 5: Test the Integration

1. Start the development server: `npm run dev`
2. Fill out any form on the website
3. Submit the form
4. Check your Airtable base to confirm the data was saved

## Important Security Notes

⚠️ **Do NOT commit your `.env.local` file to git!**

- The `.env.local` file is already in `.gitignore`
- Your API key is sensitive information and should never be shared
- In production, use a proper backend service to handle Airtable API calls instead of exposing your API key on the frontend

## Troubleshooting

**Data not appearing in Airtable?**
- Check that your API key is correct
- Verify your Base ID is correct
- Ensure table names match exactly (case-sensitive): `Founders`, `Colleges_Students`, `Get_Involved`
- Check browser console for any error messages

**API Key Issues?**
- Regenerate your API key in Airtable account settings
- Make sure you have permission to create records

## Support

If you have issues with Airtable integration, check the Airtable API documentation:
https://airtable.com/api

---

For questions about the Tejas Connect website, contact the development team.
