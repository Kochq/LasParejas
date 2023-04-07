import axios from 'axios';

export const getData = async () => {
  try {
    const response = await axios.get(
      'https://relevar.com.ar/app/LasParejas/backend.php'
    );
    return response.data;
  } catch (error) {
    console.error('error');
    throw error;
  }
};
