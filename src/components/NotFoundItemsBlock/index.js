import styles from './NotFoundItemsBlock.module.scss';

const NotFoundItems = () => {
  return (
    <>
      <h3 className={styles.items}>nothing was found for your query</h3>
    </>
  );
};

export default NotFoundItems;
