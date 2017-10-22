import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './Home';
import RepoScreen from './Repo';

const App = StackNavigator({
  Home: { 
    screen: HomeScreen,
    navigationOptions: {
      title: 'Repositories'
    }
  },
  Repo: { 
    screen: RepoScreen,
    navigationOptions: {
      title: 'Description'
    }
  },
});

export default App;
