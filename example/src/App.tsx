import PasswordStrengthInput from 'password-strength-input';

const App = () => {
  return (
    <div className="app">
      <div className="app-content">
        <div>
          <h1>Password Strength Input</h1>
          <p>Check the password strength</p>
        </div>
        <form>
          <PasswordStrengthInput
            className="input"
            placeholder="Enter your password"
            options={{
              tooWeak: {
                label: 'Trop faible',
                color: 'red',
              },
              weak: {
                label: 'Faible',
                color: 'yellow',
              },
              medium: {
                label: 'Moyen',
                color: 'green',
              },
              strong: {
                label: 'Fort',
                color: 'blue',
              },
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
