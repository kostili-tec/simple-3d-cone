import { FC } from 'react';

import classes from './FormInput.module.scss';
import { IConeData } from '../../../types/types';

interface FormInputProps {
  name: keyof IConeData;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: number;
}

export const FormInput: FC<FormInputProps> = ({ name, onChange, value }) => {
  return (
    <div className={classes.container}>
      <label className={classes.label}>{name}</label>
      <input
        onChange={onChange}
        value={value}
        className={classes.input}
        type="number"
        name={name}
      />
    </div>
  );
};
