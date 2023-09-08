import { IConeData as SendData, IConeCalculatedData as ResponseData } from '../types/types';

const API_url = {
  base: __IS_DEV__ ? 'http://localhost:4000/' : 'https://3d-cone-server.cyclic.cloud/',
  additional: 'triangulation/',
};

export const TriangulationService = async (sendData: SendData): Promise<ResponseData> => {
  const url = API_url.base + API_url.additional;
  const { height, radius, segments } = sendData;
  console.log(url);
  if (height < 1 || radius < 3 || segments < 3) throw new Error('Incorrect data');
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendData),
    });
    return response.json();
  } catch (error) {
    throw new Error(`There was a problem with the fetch operation: ${error}`);
  }
};
