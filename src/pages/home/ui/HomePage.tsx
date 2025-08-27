import { Button } from 'shared/ui/button';
import { Header } from 'widgets/Header';

export default function HomePage(/*{ }: HomePageProps*/) {
  return (
    <>
      <Header>
        <h1>Главная</h1>
      </Header>
      <main>
        <Button href="/profile">Перейти в профиль</Button>
      </main>
    </>
  );
}
