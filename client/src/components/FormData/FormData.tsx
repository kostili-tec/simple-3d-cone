import { FC, useState } from 'react';

import { FormInput } from '../UI/FormInput/FormInput';
import classes from './FormData.module.scss';
import { IConeCalculatedData, IConeData } from '../../types/types';
import { TriangulationService } from '../../API/TriangulationService';

interface FormDataProps {
  coneData: IConeData;
  setConeData: React.Dispatch<React.SetStateAction<IConeData>>;
  calculatedData: IConeCalculatedData;
  setCalculatedData: React.Dispatch<React.SetStateAction<IConeCalculatedData>>;
}

export const FormData: FC<FormDataProps> = ({
  coneData,
  setConeData,
  calculatedData,
  setCalculatedData,
}) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log(coneData);
    try {
      const result = await TriangulationService(coneData);
      setCalculatedData({
        indices: [...result.indices],
        vertices: [...result.vertices],
      });
      console.log(result);
      console.log('calculatedData', calculatedData);
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
    console.log(name);
    console.log(coneData);
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
