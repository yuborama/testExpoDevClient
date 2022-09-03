import { FC } from 'react';
import AtomLoader from '../AtomLoader';

type LoadingProps = {
  loading?: boolean;
};

const AtomLoadingScreen: FC<LoadingProps> = (props) => {
  const { loading, children } = props;
  if (loading)
    return <AtomLoader type="large" alignItems="center" justifyContent="center" height="100%" />;
  return <>{children}</>;
};

export default AtomLoadingScreen;