var intl;

export function setIntl(instance) {
  intl = instance;
}

class _Intl {
  t(message, values) {
    return intl.formatMessage(message, values); 
  }
}
const Intl = new _Intl();
export default Intl;