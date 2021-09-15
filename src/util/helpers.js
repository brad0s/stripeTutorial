import {API_URL} from '../config/StripeConfig';

export const fetchPublishableKey = async () => {
  try {
    console.log(`url: ${API_URL}`);
    const response = await fetch(`${API_URL}/config`);
    console.log('response', response);
    const {publishableKey} = await response.json();
    return publishableKey;
  } catch (error) {
    console.warn(error);
    alert('Error fetching publishable key.');
  }
};
