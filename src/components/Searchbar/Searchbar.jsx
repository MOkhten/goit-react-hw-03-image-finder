import css from './Seachbar.module.css';
import { Formik } from 'formik';

export const Searchbar = ({onSubmit})=> {
    
  const handleSubmit = (values, actions) => {
        onSubmit(values);
        actions.resetForm();
    }
  
  return (  
          <header className={css.searchbar}>
          <Formik initialValues={{ query: '' }}
      onSubmit={handleSubmit}>
  <form className={css.searchForm}>
    <button type="submit" className={css.searchForm_button}>
      <span >Search</span>
    </button>

    <input
      type="text"
      name="query"
       autoComplete="off"
       autoFocus
       placeholder="Search images and photos"
    />
              </form>
          </Formik>
      </header>
    );
  };
