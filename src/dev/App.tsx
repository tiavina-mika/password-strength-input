import PasswordStrengthInput from '../PasswordStrengthInput';

const App = () => {
  return (
    <div className="app">
      <div className="app-content">
        <div>
          <h1>Password Strength Input</h1>
          <p>Check the password strength</p>
        </div>
        <div>
          <PasswordStrengthInput
            // className='input'
            // options={{
            //   tooWeak: {
            //     label: 'Too weak 1',
            //     color: 'red',
            //   },
            //   weak: {
            //     label: 'Weak 1',
            //     color: 'yellow',
            //   },
            //   medium: {
            //     label: 'Medium 1',
            //     color: 'green',
            //   },
            //   strong: {
            //     label: 'Strong 1',
            //     color: 'blue'
            //   },
            // }}
          />
        </div>
      </div>
    </div>
  )
}

export default App
