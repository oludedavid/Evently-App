export default function FormComponent({
  type,
  values,
  onChangeHandler,
  onClick,
}: {
  type: string;
  values: { userName?: string; userEmail: string; userPassword: string };
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}) {
  return type === "login" ? (
    <LoginForm
      changeHandler={onChangeHandler}
      onClick={onClick}
      values={values}
    />
  ) : (
    <RegisterForm
      changeHandler={onChangeHandler}
      onClick={onClick}
      values={values}
    />
  );
}

const RegisterForm = ({
  changeHandler,
  onClick,
  values,
}: {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  values: { userName?: string; userEmail: string; userPassword: string };
}) => {
  return (
    <div>
      <h1>Register</h1>
      <div>
        <label htmlFor="userName">Name:</label>
        <input
          onChange={(e) => changeHandler(e)}
          type="text"
          placeholder="Max Muller"
          id="userName"
          name="userName"
          value={values.userName}
          required
        />
      </div>
      <div>
        <label htmlFor="userEmail">Email:</label>
        <input
          onChange={(e) => changeHandler(e)}
          type="email"
          placeholder="Max@muller.com"
          id="userEmail"
          name="userEmail"
          value={values.userEmail}
          required
        />
      </div>
      <div>
        <label htmlFor="userPassword">Password</label>
        <input
          onChange={(e) => changeHandler(e)}
          type="password"
          name="userPassword"
          id="userPassword"
          value={values.userPassword}
          required
        />
      </div>
      <div>
        <button onClick={onClick}>Register</button>
      </div>
    </div>
  );
};

const LoginForm = ({
  changeHandler,
  onClick,
  values,
}: {
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  values: { userName?: string; userEmail: string; userPassword: string };
}) => {
  return (
    <div>
      <div>
        <label htmlFor="userEmail">Email:</label>
        <input
          onChange={(e) => changeHandler(e)}
          type="email"
          placeholder="Max@muller.com"
          id="userEmail"
          name="userEmail"
          value={values.userEmail}
          required
        />
      </div>
      <div>
        <label htmlFor="userPassword">Password</label>
        <input
          onChange={(e) => changeHandler(e)}
          type="password"
          name="userPassword"
          id="userPassword"
          value={values.userPassword}
          required
        />
      </div>
      <div>
        <button onClick={onClick}>Login</button>
      </div>
    </div>
  );
};
