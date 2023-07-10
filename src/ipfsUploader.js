import axios from 'axios';
const pinataApiKey = ``;
const pinataApiSecret = `` ;

const pinataApiUrl = 'https://api.pinata.cloud/pinning/pinFileToIPFS';

const pinataHeaders = {
  headers: {
    'Content-Type': 'multipart/form-data',
    pinata_api_key: pinataApiKey,
    pinata_secret_api_key: pinataApiSecret,
  },
};

export async function uploadToIPFS(file) {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await axios.post(pinataApiUrl, formData, pinataHeaders);
    const ipfsHash = response.data.IpfsHash;
    return `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
  } catch (error) {
    console.error('Error uploading file to Pinata:', error);
    throw error;
  }
}
