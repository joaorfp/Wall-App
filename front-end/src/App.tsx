import Router from './Routers/router';
import DataProvider from './Context/DataProvider'

function App() {
  return (
    <DataProvider>
      <Router />
    </DataProvider>
  );
}

export default App;