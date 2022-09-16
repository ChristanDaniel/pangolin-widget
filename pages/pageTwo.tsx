import type { NextPage } from 'next';
import { Provider } from 'react-redux'
import { MyProvider } from '../src/context/pangolinContext';
import storee from '../src/redux/index';
import { PageTwo } from '../src/template/PageTwo';

const Home: NextPage = () => {
  return (
    <PageTwo />
  )
}

export default Home
