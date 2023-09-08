import { FC } from 'react';

import { FormInput } from '../UI/FormInput/FormInput';
import { TriangulationService } from '../../API/TriangulationService';
import { IConeCalculatedData, IConeData } from '../../types/types';
import classes from './FormData.module.scss';

interface FormDataProps {
  coneData: IConeData;
  setConeData: React.Dispatch<React.SetStateAction<IConeData>>;
  setCalculatedData: React.Dispatch<React.SetStateAction<IConeCalculatedData>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormData: FC<FormDataProps> = ({
  coneData,
  setConeData,
  setCalculatedData,
  setIsLoading,
}) => {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const result = await TriangulationService(coneData);
      setCalculatedData({
        indices: [...result.indices],
        vertices: [...result.vertices],
      });
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
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
