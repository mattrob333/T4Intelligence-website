# Airtable Integration Setup Guide

## Overview
Your book call form is now integrated with Airtable to automatically store form submissions. Follow these steps to complete the setup.

## Step 1: Set up your Airtable Base

1. **Create or use an existing Airtable base:**
   - Go to [Airtable](https://airtable.com)
   - Create a new base or use an existing one
   - Create a table for storing form submissions (e.g., "Book Call Submissions")

2. **Set up the table columns** (field names must match exactly):
   - `Full Name` (Single line text)
   - `Email` (Email)
   - `Company Name` (Single line text)
   - `Role` (Single select)
   - `Phone` (Phone number)
   - `Annual Revenue` (Single select)
   - `Number of Employees` (Single select)
   - `Industry` (Single select)
   - `AI Status` (Single select)
   - `Biggest Challenge` (Single select)
   - `Interest Triggers` (Long text)
   - `Implementation Timeline` (Single select)
   - `Budget Range` (Single select)
   - `Decision Process` (Single select)
   - `Specific Interests` (Long text)
   - `Meeting Format` (Single select)
   - `Biggest Opportunity` (Long text)
   - `Questions` (Long text)
   - `Preferred Times` (Long text)
   - `Time Zone` (Single select)
   - `Submission Date` (Date & time)

## Step 2: Get your Airtable credentials

1. **Get your Base ID:**
   - Open your Airtable base
   - Look at the URL: `https://airtable.com/[BASE_ID]/[TABLE_ID]`
   - Copy the BASE_ID (starts with "app")

2. **Get your Table ID:**
   - This is usually the table name (e.g., "Book Call Submissions")
   - Or you can get it from the URL as shown above

3. **Generate an API Key:**
   - Go to [Airtable Tokens](https://airtable.com/create/tokens)
   - Click "Create new token"
   - Give it a name (e.g., "T4Intelligence Website")
   - Add scopes: `data.records:read` and `data.records:write`
   - Add access to your specific base
   - Click "Create token" and copy the token

## Step 3: Configure environment variables

1. **Create a `.env.local` file** in your project root (same directory as `package.json`)

2. **Add your credentials** to `.env.local`:
   ```
   AIRTABLE_BASE_ID=your_actual_base_id
   AIRTABLE_TABLE_ID=your_actual_table_name
   AIRTABLE_API_KEY=your_actual_api_key
   ```

3. **Replace the placeholder values** with your actual Airtable credentials

## Step 4: Test the integration

1. **Restart your development server:**
   ```bash
   npm run dev
   ```

2. **Test the form:**
   - Fill out the book call form on your website
   - Submit it
   - Check your Airtable base to see if the record was created

## Security Notes

- ✅ **DO NOT** commit your `.env.local` file to version control
- ✅ The API key is kept server-side for security
- ✅ Form submissions are processed through a secure API route
- ✅ All sensitive data is handled server-side only

## Troubleshooting

### Common Issues:

1. **"Server configuration error"**
   - Check that all environment variables are set correctly
   - Restart your development server after adding env vars

2. **"Failed to submit to Airtable"**
   - Verify your Base ID and Table ID are correct
   - Check that your API key has the right permissions
   - Ensure table field names match exactly (case-sensitive)

3. **Form submission fails silently**
   - Check the browser console for errors
   - Check your server logs for detailed error messages

### Getting Help:

If you encounter issues:
1. Check the browser console for client-side errors
2. Check your server logs for API errors
3. Verify all field names in Airtable match the integration exactly
4. Test your Airtable API credentials using a tool like Postman

## What happens when someone submits the form:

1. User fills out and submits the form
2. Form data is sent to `/api/book-call` endpoint
3. Server validates the data and environment variables
4. Server makes authenticated request to Airtable API
5. Record is created in your Airtable base
6. User receives confirmation message
7. You can view and manage submissions in Airtable
