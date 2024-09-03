import axios from 'axios';

const API_URL = 'https://65609c5083aba11d99d12eb3.mockapi.io/api/v1/users';

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
