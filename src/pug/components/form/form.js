import * as yup from 'yup';
import i18next from 'i18next';
import axios from 'axios';
import initView from './form-view';
import { langDetect } from '../../../assets/scripts/modules/helpers/helpers';

const sendForm = async (data) => {
  const response = await axios.post('/wp-admin/admin-ajax.php', data);
  return response.data;
};

/*  */
const lang = langDetect();
(async () => {
  await i18next.init({
    lng: lang, // Текущий язык
    debug: true,
    resources: {
      ua: {
        translation: {
          name: 'Ім’я:*',
          phone: 'Телефон:*',
          field_too_short: 'Телефон має містити принаймні {{cnt}} символів',
          field_too_long: 'Телефон має містити не більше {{cnt}} символів',
          only_number: 'Телефон повинен містити лише цифри',
          onlyletters: 'Ім`я повинне містити тільки літери',
          required: 'Це поле є обов`язковим',
          sendingSuccessTitle: 'Повідомлення надіслано',
          sendingSuccessText: 'Чекайте відповіді наших менеджерів',
          sendingErrorText: 'Чекайте відповіді наших менеджерів',
          sendingErrorTitle: 'Сталася помилка',
          send_fail:
            'Повідомлення не було відправлено через невідому помилку сервера. Код: [send_fail] ',
          invalid_form:
            'Повідомлення не було відправлено через невідому помилку сервера. Код: [invalid_form] ',
          front_error:
            'Повідомлення не було відправлено через невідому помилку сервера. Код: [front_error] ',
          invalid_upload_file: 'Помилка завантаження файлу. Код: [invalid_upload_file]',
          invalid_recaptcha: 'Заповніть капчу і спробуйте ще раз знову. Код: [invalid_recaptcha]',
          connectionFailed: 'Помилка з\'єднання с CRM',
        },
      },
      en: {
        translation: {
          name: 'Name:*',
          phone: 'Phone:*',
          field_too_short: 'Phone must be at least {{cnt}} characters',
          field_too_long: 'Phone must be at most {{cnt}} characters',
          only_number: 'The phone must contain only numbers',
          onlyletters: 'Name must contain only letters',
          required: 'This field is required',
          sendingSuccessTitle: 'Message sent',
          sendingSuccessText: 'Wait for the answers of our managers',
          sendingErrorText: 'Wait for the answers of our managers',
          sendingErrorTitle: 'An error has occurred',
          send_fail: 'The message was not sent due to an unknown server error. Code: [send_fail] ',
          invalid_form:
            'The message was not sent for an unknown server error. Code: [invalid_form] ',
          front_error: 'The message was not sent for an unknown server error. Code: [front_error] ',
          invalid_upload_file: 'Error uploading file. Code: [invalid_upload_file] ',
          invalid_recaptcha: 'Please fill in the captcha and try again. Code: [invalid_recaptcha] ',
          connectionFailed: 'Server connection error',
        },
      },
      ru: {
        translation: {
          name: 'Имя:*',
          phone: 'Телефон:*',
          field_too_short: 'Телефон должен содержать как минимум {{cnt}} символов',
          field_too_long: 'Телефон должен содержать не более {{cnt}} символов',
          only_number: 'Телефон должен содержать только цифры',
          onlyletters: 'Имя должно содержать только буквы',
          required: 'Это поле является обязательным',
          sendingSuccessTitle: 'Сообщение отправлено',
          sendingSuccessText: 'Ожидайте ответа от наших менеджеров',
          sendingErrorText: 'Возникла ошибка при отправке',
          sendingErrorTitle: 'Ошибка',
          send_fail: 'Сообщение не было отправлено из-за неизвестной ошибки сервера. Код: [send_fail]',
          invalid_form: 'Сообщение не было отправлено из-за неизвестной ошибки сервера. Код: [invalid_form]',
          front_error: 'Сообщение не было отправлено из-за неизвестной ошибки сервера. Код: [front_error]',
          invalid_upload_file: 'Ошибка загрузки файла. Код: [invalid_upload_file]',
          invalid_recaptcha: 'Заполните капчу и попробуйте еще раз. Код: [invalid_recaptcha]',
          connectionFailed: 'Ошибка соединения с CRM',
        },
      },
    },
  });
})();
/*  */

export default class FormMonster {
  constructor(setting) {
    this.elements = setting.elements;
    this.$body = document.querySelector('body');
    this.showSuccessMessage = setting.showSuccessMessage || true;

    this.state = {
      serverError: null,
      error: true,
      form: setting.elements.fields,
      status: 'filling',
    };
    this.fieldsKey = Object.keys(this.elements.fields);
    this.watchedState = initView(this.state, this.elements);

    this.init();
  }

  validate(formData) {
    const formDataObj = this.fieldsKey.reduce((acc, key) => {
      acc[key] = formData.get(key);
      return acc;
    }, {});
    /*  */
    const shapeObject = this.fieldsKey.reduce((acc, key) => {
      acc[key] = this.elements.fields[key].rule;
      return acc;
    }, {});
    /*  */

    const schema = yup.object().shape(shapeObject);

    try {
      schema.validateSync(formDataObj, { abortEarly: false });
      return null;
    } catch (err) {
      return err.inner;
    }
  }

  changeInput() {
    return (e) => {
      /*  */
      e.preventDefault();
      this.watchedState.status = 'filling';
      /*  */
      const formData = new FormData(this.elements.$form);
      /*  */
      const error = this.validate(formData);
      /*  */
      this.fieldsKey.map((key) => {
        const field = this.elements.fields[key];
        field.valid = true;
        field.error = [];
        return null;
      });
      /*  */
      /*  */
      if (error) {
        error.forEach(({ path, message }) => {
          this.watchedState.form[path].valid = false;
          this.watchedState.form[path].error.push(message);
          return null;
        });
        this.watchedState.error = true;
        this.watchedState.status = 'renderErrorValidation';
        return null;
      }
      this.watchedState.error = false;
      this.watchedState.status = 'renderSuccessValidation';
      return null;
    };
  }

  submitForm() {
    return async (e) => {
      /*  */
      e.preventDefault();
      this.changeInput()(e);

      /*  */
      if (this.watchedState.error === false) {
        try {
          this.watchedState.status = 'loading';
          const formData = new FormData(this.elements.$form);
          formData.append('action', 'app');
          formData.append('url', window.location.href);
          /* eslint-disable-next-line */
          const { error, code_error } = await sendForm(formData);

          if (error === 0) {
            this.watchedState.status = 'successSand';
            return true;
          }
          /* eslint-disable-next-line */
          this.watchedState.serverError = code_error;
          this.watchedState.status = 'failed';
        } catch (err) {
          this.watchedState.error = err.message;
          this.watchedState.serverError = 'front_error';
          this.watchedState.status = 'failed';
        }
      }
      return null;
    };
  }

  listers() {
    this.elements.$form.addEventListener('submit', this.submitForm(this.watchedState));
    this.fieldsKey.map((key) => {
      const { input } = this.elements.fields[key].inputWrapper;
      input.addEventListener('input', this.changeInput(this.watchedState));
      return null;
    });
  }

  init() {
    this.listers();
  }
}
