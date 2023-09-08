import { FC } from 'react';

import { FormInput } from '../UI/FormInput/FormInput';
import { TriangulationService } from '../../API/TriangulationService';
import { IConeCalculatedData, IConeData } from '../../types/types';
import classes from './FormData.module.scss';

interface FormDataProps {
  coneData: IConeData;
  setConeData: React.Dispatch<React.SetStateAction<IConeData>>;
  setCalculatedData: React.Dispatch<React.SetStateAction<IConeCalculatedData>>;
}

export const FormData: FC<FormDataProps> = ({ coneData, setConeData, setCalculatedData }) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const result = await TriangulationService(coneData);
      setCalculatedData({
        indices: [...result.indices],
        vertices: [...result.vertices],
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setConeData({
      ...coneData,
      [name]: Number(value),
    });
  };

  return (
    <div>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormInput name="height" onChange={handleInputChange} value={coneData.height} />
        <FormInput name="radius" onChange={handleInputChange} value={coneData.radius} />
        <FormInput name="segments" onChange={handleInputChange} value={coneData.segments} />
        <input className={classes.submitBtn} type="submit" value="Submit" />
      </form>
    </div>
  );
};
