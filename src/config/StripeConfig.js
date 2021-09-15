import {Platform} from 'react-native';

export const API_URL =
  Platform.OS === 'android' ? 'http://10.0.0.2:4242' : 'http://127.0.0.1:3000';
