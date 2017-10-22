import {
  StackNavigator,
} from 'react-navigation';

import HomeScreen from './Home';
import RepoScreen from './Repo';
import WebScreen from './Web';

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
  Web: { 
    screen: WebScreen,
    navigationOptions: {
      title: 'Web'
    }
  },
});

export default App;
