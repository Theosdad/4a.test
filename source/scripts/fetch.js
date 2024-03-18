/* eslint-disable no-console */
const fetchData = async () => {
  try {
    const response = await fetch('https://t-pay.iqfit.app/subscribe/list-test');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const fetchedData = fetchData();
