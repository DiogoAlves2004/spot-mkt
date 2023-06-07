import HomePage from './components/home/HomePage';
import Form from './components/form/Form';
import Quemsomos from './components/quemsomos/Quemsomos';
import Skiils from './components/skills/Skiils';

export default function Home() {
  return (
    <main>
      <HomePage />
      <Quemsomos />
      <Skiils />
      <Form />
    </main>
  );
}
