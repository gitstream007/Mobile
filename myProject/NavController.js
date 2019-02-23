import { createSwitchNavigator } from 'react-navigation';

import NavLoggedOut from './NavLoggedOut';
import NavLoggedIn from './NavLoggedIn';
import QuestionScreenTest from "./Views/QuestionScreenTest";

export const NavController = (isLoggedIn = false) => createSwitchNavigator(
    {
        LoggedOut: {
            screen: NavLoggedOut
        },
        LoggedIn: {
            screen: NavLoggedIn
        },
        QuestionScreenTest: {
            screen: QuestionScreenTest
        },
/*        LoggedOut: {
            screen: NavLoggedOut
        },*/
    },
    {
        initialRouteName: isLoggedIn ? 'LoggedIn' : 'LoggedOut'
    }
);
