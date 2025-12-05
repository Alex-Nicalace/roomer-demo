import {
  UserAbout,
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
import { BackButton } from 'shared/ui/back-button';
import { Button, ButtonTheme } from 'shared/ui/button';
import { Surface } from 'shared/ui/surface';
import { GamesPanel } from 'widgets/games-panel';
import { Header } from 'widgets/header';
import { profileMenu } from '../config';
import { ProfileAccordions } from './ProfileAccordions';
import styles from './ProfilePage.module.scss';

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
      <main className={styles.wrapPage}>
        <div>
          <div className={styles.profileHeader}>
            <BackButton className={styles.backButton} />
            <UserAvatar />
            <div className={styles.profileHeaderActions}>
              <ShareProfile />
              <ToggleVisibilityUser />
              <ShowLinkedAccount />
            </div>
          </div>
          <UserName className={styles.userName} />
          <UserNickname className={styles.userNickname} />
        </div>
        <UserStats />
        <div className={styles.wrapEdit}>
          <UserCity className={styles.userCity} />
          <EditProfile />
        </div>
        <ProfileAccordions />
        <GamesPanel />
        <UserAbout />
        {profileMenu.map((item) => (
          <Surface key={item[0].id} theme="list">
            {item.map((item) => (
              <Button
                key={item.id}
                theme={ButtonTheme.CLEAR}
                withIcon={item.iconName}
                fullWidth
              >
                {item.label}
              </Button>
            ))}
          </Surface>
        ))}
      </main>
    </>
  );
}
