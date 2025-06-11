# Troubleshooting Airtable Form Submission

## Issue: Form Submit Button Not Working

If the submit button is not sending data to Airtable, follow these steps:

### 1. Check Environment Variables

The most common issue is missing environment variables. Make sure you have created a `.env.local` file in the root of your project with the following:

```
AIRTABLE_BASE_ID=your_actual_base_id
AIRTABLE_TABLE_ID=your_actual_table_name
AIRTABLE_API_KEY=your_actual_api_key
```

**Important:** 
- Replace the placeholder values with your actual Airtable credentials
- The file must be named exactly `.env.local` (not `.env` or `env.local`)
- Do not commit this file to version control

### 2. Get Your Airtable Credentials

1. **Base ID**: 
   - Go to your Airtable base
   - Look at the URL: `https://airtable.com/appXXXXXXXXXXXXXX/...`
   - The part starting with `app` is your Base ID

2. **Table ID/Name**: 
   - This is the name of your table (e.g., "Book Call Submissions")
   - Use the exact name as it appears in Airtable

3. **API Key**:
   - Go to https://airtable.com/create/tokens
   - Create a new personal access token
   - Give it the following scopes:
     - `data.records:read`
     - `data.records:write`
   - Add your base to the token's access list

### 3. Test Your Configuration

Visit http://localhost:3001/api/airtable-status to check if your configuration is correct.

### 4. Restart Your Development Server

After adding the environment variables:
1. Stop the server (Ctrl+C)
2. Run `npm run dev` again

### 5. Check Browser Console

When you try to submit the form, open the browser console (F12) and look for any error messages.

### 6. Common Issues

- **"Server configuration error"**: Your environment variables are not set correctly
- **401 Unauthorized**: Your API key is invalid or doesn't have the right permissions
- **404 Not Found**: Your Base ID or Table ID is incorrect
- **Hydration errors**: Clear your browser cache and hard refresh (Ctrl+Shift+R)

### 7. Manual Test

You can test the form submission manually by visiting: http://localhost:3001/test-form

This will show you exactly what error is occurring.

## Still Having Issues?

1. Double-check that your `.env.local` file is in the root directory (same level as `package.json`)
2. Make sure there are no quotes around your environment variable values
3. Ensure your Airtable table has all the required fields as listed in `AIRTABLE_SETUP.md`

If the form still doesn't work after following these steps, the error message in the browser console or on the test page will help identify the specific issue.
