import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import { Button } from 'antd';
import { withTranslation, WithTranslation } from 'react-i18next';

// import png from './assets/404.png';

interface Props extends WithTranslation {
  name: string;
}

class LegacyComponentClass extends React.Component<Props> {
  render() {
    const { name, t } = this.props;
    return (
      <>
        <h1>Hello {name}</h1>
        <Button type="primary">2333</Button>
        <p>{t('ss', { name: '2333' })}</p>
        <p>{t('target:tt')}</p>
      </>
    );
  }
}

const MyComponent = withTranslation(['common', 'target'])(LegacyComponentClass);

function App() {
  return (
    <React.Suspense fallback="loading">
      <MyComponent name="2333" />
    </React.Suspense>
  );
}

export default hot(App);
