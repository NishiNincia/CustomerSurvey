
import axios from 'axios';

export const saveFormData = async (formData) => {
  try {
    const response = await axios.post('http://localhost:8080/api/feedback', formData);
    return response.data;
  } catch (error) {
    console.error('Error:', error.message);
    return error.response?.data || 'Unknown error';
  }
};
