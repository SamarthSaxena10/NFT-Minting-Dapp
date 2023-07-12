import axios from "axios";
import { getAuthHeaders } from "nft.storage";

const nftStorageApiKey = process.env.NFT_STORAGE_API_KEY;

const nftStorageApiUrl = "https://api.nft.storage/upload";

const nftStorageHeaders = {
  ...getAuthHeaders(nftStorageApiKey),
  "Content-Type": "multipart/form-data",
};

export async function uploadToIPFS(file) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(nftStorageApiUrl, formData, {
      headers: nftStorageHeaders,
    });
    const ipfsUrl = response.data.value.ipfs;
    return ipfsUrl;
  } catch (error) {
    console.error("Error uploading file to nft.storage:", error);
    throw error;
  }
}
