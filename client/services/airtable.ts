// Airtable configuration
const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY || '';
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID || '';
const AIRTABLE_API_URL = 'https://api.airtable.com/v0';

// Table names
const TABLES = {
  FOUNDERS: 'Founders',
  COLLEGES_STUDENTS: 'Colleges_Students',
  GET_INVOLVED: 'Get_Involved',
};

interface AirtableRecord {
  fields: Record<string, any>;
}

/**
 * Submit data to Airtable
 */
async function submitToAirtable(
  tableName: string,
  fields: Record<string, any>
): Promise<boolean> {
  if (!AIRTABLE_API_KEY || !AIRTABLE_BASE_ID) {
    console.warn('Airtable credentials not configured');
    return false;
  }

  try {
    const url = `${AIRTABLE_API_URL}/${AIRTABLE_BASE_ID}/${tableName}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [
          {
            fields,
          },
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Airtable API error:', error);
      return false;
    }

    console.log('Data submitted to Airtable successfully');
    return true;
  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    return false;
  }
}

/**
 * Submit founder form data to Airtable
 */
export async function submitFounderForm(data: {
  fullName: string;
  contactNumber: string;
  email: string;
  companyName: string;
  industry: string;
  role: string;
  purpose: string;
  location: string;
}): Promise<boolean> {
  const fields = {
    'Full Name': data.fullName,
    'Contact Number': data.contactNumber,
    'Email Address': data.email,
    'Company Name': data.companyName,
    'Type of Business': data.industry,
    'Role in Company': data.role,
    'Purpose of Joining': data.purpose,
    'Location': data.location,
  };

  return submitToAirtable(TABLES.FOUNDERS, fields);
}

/**
 * Submit colleges/students form data to Airtable
 */
export async function submitCollegesStudentsForm(data: {
  fullName: string;
  userType: string;
  collegeName: string;
  contactNumber: string;
  email: string;
  location: string;
  purpose: string;
}): Promise<boolean> {
  const fields = {
    'Full Name': data.fullName,
    'Category': data.userType === 'college-management' ? 'College Management' : 
               data.userType === 'student' ? 'Student' : 
               data.userType === 'dropped-out' ? 'Dropped Out' : data.userType,
    'College Name': data.collegeName,
    'Contact Number': data.contactNumber,
    'Email Address': data.email,
    'Location': data.location,
    'Message/Purpose': data.purpose,
  };

  return submitToAirtable(TABLES.COLLEGES_STUDENTS, fields);
}

/**
 * Submit get involved form data to Airtable
 */
export async function submitGetInvolvedForm(data: {
  fullName: string;
  contactNumber: string;
  email: string;
  description: string;
}): Promise<boolean> {
  const fields = {
    'Full Name': data.fullName,
    'Contact Number': data.contactNumber,
    'Email Address': data.email,
    'Reason for Connecting': data.description,
  };

  return submitToAirtable(TABLES.GET_INVOLVED, fields);
}
