import { FC } from 'react';
import { FormInput } from '../UI/FormInput/FormInput';

import classes from './FormData.module.scss';

export const FormData: FC = () => {
  return (
    <div>
      <form className={classes.form}>
        <FormInput name="Height" />
        <FormInput name="Radius" />
        <FormInput name="Segments" />
        <input className={classes.submitBtn} type="submit" value="Submit" />
      </form>
    </div>
  );
};
