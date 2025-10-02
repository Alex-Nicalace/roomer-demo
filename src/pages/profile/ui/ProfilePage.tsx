import {
  UserAvatar,
  UserCity,
  UserName,
  UserNickname,
  UserStats,
} from 'entities/user';
import { EditProfile } from 'features/edit-profile';
import { ShareProfile } from 'features/share-profile';
import { ShowLinkedAccount } from 'features/show-linked-account';
import { ToggleVisibilityUser } from 'features/toggle-visibility-user';
import { Accordion } from 'shared/ui/accordion';
import { BackButton } from 'shared/ui/back-button';
import { Header } from 'widgets/header';

// type pageProps = { }
export default async function ProfilePage(/*{ }: pageProps*/) {
  // const response = await fetch(
  //   'https://igroom.ru/api/v2/profile/5e800be0-088e-41cb-b549-10ebf4a13591'
  // );
  // if (response.ok) {
  //   let result = await response.json();
  //   console.log(result);
  // }

  return (
    <>
      <Header>
        <h1>Профиль</h1>
      </Header>
      <main>
        <BackButton />
        <UserAvatar />
        <div>
          <ShareProfile />
          <ToggleVisibilityUser />
          <ShowLinkedAccount />
        </div>
        <UserName />
        <UserNickname />
        <UserStats />
        <UserCity />
        <EditProfile />
        <Accordion summary="Настройки">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum mollitia
          et itaque necessitatibus autem repudiandae, velit beatae animi sit
          totam molestiae iure accusantium, illum vel culpa accusamus ex iusto
          suscipit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Cum mollitia et itaque necessitatibus autem repudiandae, velit beatae
          animi sit totam molestiae iure accusantium, illum vel culpa accusamus
          ex iusto suscipit.
        </Accordion>
      </main>
    </>
  );
}
