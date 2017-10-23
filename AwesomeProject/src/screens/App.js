import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './Home';
import EntryScreen from './Entry';

const App = StackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      title: 'Repositories'
    }
  },
  Entry: { 
    screen: EntryScreen,
    navigationOptions: {
      title: 'Entry'
    }
  },
});

export default App;
