import './assets/styles/globalStyles.css'
import Layout from './components/Layout/Layout';
import Reports from './containers/Reports/Reports';

function App() {
  return (
    <div className="App">
      <Layout>
        <Reports />
      </Layout>
    </div>
  );
}

export default App;
