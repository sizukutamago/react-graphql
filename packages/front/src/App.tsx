import client from './apolloClient';
import { ApolloProvider } from '@apollo/client';
import TodoList from './components/TodoList';

function App() {
  return (
    <ApolloProvider client={client}>
      <TodoList />
    </ApolloProvider>
  );
}

export default App;
