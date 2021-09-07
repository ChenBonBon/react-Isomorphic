import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loading from './Loading';

export default function AuthRoute({ authority, ...rest}) {
  const { permissions, info } = useSelector(state => state.user);

  if (!info) {
    return <Loading />;
  }

  if (typeof(authority) === 'string') {
    if (permissions.includes(authority)) {
      return <Route {...rest} />
    }
    return <Redirect to='/403' />;
  }

  if (authority.filter(item=>permissions.includes(item)).length > 0) {
    return <Route {...rest} />
  }

  return <Redirect to='/403' />;
}