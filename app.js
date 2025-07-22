// src/App.jsx
import ArtistRegister from './components/ArtistRegister';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <h1>Print on Demand Platform</h1>

      <ArtistRegister />
      <hr />
      <Login />
      <hr />
      <Dashboard />
    </div>
  );
}

export default App;
