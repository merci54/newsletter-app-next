import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from "formik";
import * as Yup from "yup";
import css from './SubscribeBlock.module.scss';
import { initialValuesProps } from "@/app/page";
import Image from "next/image";


const validationSchema = Yup.object({
  email: Yup.string().email('Valid email required').required('Valid email required')
})

const initialValues: initialValuesProps = {
  email: "",
}

interface SubscribeBlockProps {
    submitHandler: (email: initialValuesProps, props: FormikHelpers<initialValuesProps>) => Promise<void>;
}

export default function SubscribeBlock({submitHandler}: SubscribeBlockProps) {
    return <div className={css.contentBlock}>
        <div className={css.imageBlock}>
          <Image width={375} height={284} className={css.imageBlock__image} src="/image.svg" alt="image block" />
        </div>
        <div className={css.container}>
          <div className={css.textBlock}>
            <h1 className={css.textBlock__title}>Stay updated</h1>
            <p className={css.textBlock__description}>
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <ul className={css.list}>
              <li className={css.list__item}>
                <Image width={21} height={21} className={css.list__icon} src="/check.svg" alt="check icon" />
                <p>Product discovery and building what matters</p>
              </li>
              <li className={css.list__item}>
                <Image width={21} height={21} className={css.list__icon} src="/check.svg" alt="check icon" />
                <p>Measuring to ensure updates are a success</p>
              </li>
              <li className={css.list__item}>
                <Image width={21} height={21} className={css.list__icon} src="/check.svg" alt="check icon" /> <p>And much more!</p>
              </li>
            </ul>
          </div>
          <div className={css.formBlock}>
            <Formik onSubmit={submitHandler} initialValues={initialValues} validationSchema={validationSchema}>
              {({isSubmitting, errors, touched}) => (<Form className={css.form}>
                <div className={css.labelBlock}>
                  <label className={css.form__label} htmlFor="email">
                  Email address
                  </label>

                  <ErrorMessage className={css.errorLabel} component={'span'} name="email" />
                </div>
                
              <Field
                className={`${css.form__input} ${(errors.email && touched.email) ? css.errorInput : "" }`}
                type="email"
                name="email"
                id="email"
                placeholder="email@company.com"
              />
    
              <button className={css.form__button} type="submit">
                {isSubmitting ? 'Sending...'   : 'Subscribe to monthly newsletter'}
              </button>
              </Form>)}
              
            </Formik>
            
          </div>
        </div>
      </div>
}