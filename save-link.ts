import axios from "axios";

interface MinttrLinkRequest {
  data: {
    url: string;
    note?: string;
  };
}

interface MinttrResponse {
  success: boolean;
  result?: {
    id: string;
    url: string;
    note?: string;
  };
  error?: string;
}

const url = popclip.context.browserUrl;
const note = popclip.input.text || undefined
const token = popclip.options.apiKey
const appname = popclip.context.appName;

if (!url) {
  throw new Error('Cannot get URL from current page');
}

if (!token) {
  throw new Error('Settings Error: API token not configured');
}

const requestBody: MinttrLinkRequest = {
  data: {
    url: url,
    note: note
  }
};

try {
  const response = await axios.post<MinttrResponse>(
    'https://my.minttr.com/api/v1/link',
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

  if (popclip.options.openAfterSave){
    popclip.openUrl('https://my.minttr.com')
  }

  return '✓ Saved to Minttr';

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
