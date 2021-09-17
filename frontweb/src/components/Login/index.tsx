import ButtonIcon from '../ButtonIcon';
import './styles.css';

const Login = () => {
  return (
    <div className="base-card login-card">
      <div className="title-container">
        <h1>LOGIN</h1>
      </div>

      <div className="mb-4">
        <input
          type="text"
          className="form-control base-input"
          placeholder="Email"
          name="username"
        />
        <div className="mb-2">
          <input
            type="password"
            className="form-control base-input "
            placeholder="Password"
            name="password"
          />
          <div className="invalid-feedback d-block"></div>
        </div>

        <div className="login-submit">
          <ButtonIcon text="FAZER LOGIN" />
        </div>
        <div className="signup-container"></div>
      </div>
    </div>
  );
};

export default Login;
