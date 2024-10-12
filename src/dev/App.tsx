import PasswordStrengthInput from '../PasswordStrengthInput';

const App = () => {
  return (
    <div className="app">
      <div className="app-content">
        <div>
          <h1>Password Strength Input</h1>
          <p>Check the password strength</p>
        </div>
        <form>
          <PasswordStrengthInput />
        </form>
      </div>
    </div>
  );
};

export default App;
