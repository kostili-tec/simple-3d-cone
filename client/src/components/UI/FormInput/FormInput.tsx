import { FC } from 'react';

import classes from './FormInput.module.scss';

interface FormInputProps {
  name: string;
}

export const FormInput: FC<FormInputProps> = ({ name }) => {
  return (
    <div className={classes.container}>
      <label className={classes.label}>{name}</label>
      <input className={classes.input} type="number" />
    </div>
  );
};
