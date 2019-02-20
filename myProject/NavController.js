import { createSwitchNavigator } from 'react-navigation';

import NavLoggedOut from './NavLoggedOut';
import NavLoggedIn from './NavLoggedIn';

export const NavController = (isLoggedIn = false) => createSwitchNavigator(
    {
        LoggedOut: {
            screen: NavLoggedOut
        },
        LoggedIn: {
            screen: NavLoggedIn
        }
    },
    {
        initialRouteName: isLoggedIn ? 'LoggedIn' : 'LoggedOut'
    }
);
