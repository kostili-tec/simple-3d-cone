import { IConeData as SendData, IConeCalculatedData as ResponseData } from '../types/types';

const APIurl = {
  base: 'https://3d-cone-server.cyclic.cloud/',
  additional: 'triangulation/',
};

export const TriangulationService = async (sendData: SendData): Promise<ResponseData> => {
  const url = APIurl.base + APIurl.additional;
  const { height, radius, segments } = sendData;
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
