import MyCounter from './components/MyCounter';
import MyGitHub from './components/MyGitHub';

function App() {
  return (
    <div>
      <MyCounter incBy={1} />
      <MyCounter incBy={2} />
      <hr /> 
      <MyGitHub />
    </div>
  );
}

export default App;