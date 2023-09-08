import classes from './LoadingSpinner.module.scss';

export const LoadingSpinner = () => {
  return (
    <div className={classes.loaderContainer}>
      <span className={classes.loader}></span>
    </div>
  );
};
