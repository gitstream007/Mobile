import { createBottomTabNavigator } from 'react-navigation';
import WelcomePage from './Views/WelcomePage';
import LogoutTab from './Views/LogoutView';

const NavLoggedIn = createBottomTabNavigator({
    WelcomePage: {
        screen: WelcomePage
    },
    LogoutTab: {
        screen: LogoutTab
    }
});

export default NavLoggedIn;
