import axios from "axios";

interface MinttrNoteRequest {
  data: {
    content: string;
  };
}

interface MinttrNoteResponse {
  success: boolean;
  result?: {
    id: string;
    content: string;
  };
  error?: string;
}

const note = popclip.input.text 
const token = popclip.options.apiKey
const appname = popclip.context.appName;

if (!token) {
  throw new Error('Settings Error: API token not configured');
}

const requestBody: MinttrNoteRequest = {
  data: {
    content: note
  }
};

try {
  const response = await axios.post<MinttrNoteResponse>(
    'https://my.minttr.com/api/v1/note',
    requestBody,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );

  const data = response.data;

  if (!data.success) {
    const errorMsg = data.error || 'Unknown error';
    throw new Error(`Failed to save: ${errorMsg}`);
  }

  if (popclip.options.openAfterCreate){
    popclip.openUrl('https://my.minttr.com')
  }

  return '✓ Mind Created';

} catch (error) {
  if (axios.isAxiosError(error)) {
    const errorData = error.response?.data as MinttrResponse;
    const errorMsg = errorData?.error || error.message;
    throw new Error(`Save failed: ${errorMsg}`);
  }

  if (error instanceof Error) {
    throw new Error(`Save failed: ${error.message}`);
  }

  throw new Error('Unknown error occurred');
}
