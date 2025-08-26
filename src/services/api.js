import axios from "axios";

// Replace with your own GoldAPI.io key
const API_KEY = "goldapi-3dxou19mespcigf-io";
const BASE_URL = "https://www.goldapi.io/api";

// Generic function to fetch metal price
export async function getMetalPrice(symbol) {
  try {
    const response = await axios.get(`${BASE_URL}/${symbol}`, {
      headers: {
        "x-access-token": API_KEY,
        "Content-Type": "application/json",
      },
    });

    // Return only needed fields
    return {
      price: response.data.price,
      timestamp: response.data.timestamp,
      previous_open: response.data.previous_open,
      previous_close: response.data.previous_close,
    };
  } catch (error) {
    // Log error for debugging
    console.error(
      `API Error for ${symbol}:`,
      error.response?.status,
      error.response?.data
    );

    // Return null to prevent app crash
    return null;
  }
}
