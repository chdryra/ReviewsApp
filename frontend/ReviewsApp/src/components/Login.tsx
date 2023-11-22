import { useState } from "react";

export type LoginInfo = {
  email: String,
  password: String
}

export function Login({ onLogin }: { onLogin: (info: LoginInfo) => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const disableButton = email.length < 3 || password.length < 6;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin({
      email,
      password
    });
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email-address">Email address</label>
        <input
          id="email-address"
          name="email"
          type="email"
          value={email}
          required
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          required
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button disabled={disableButton} type='submit'>Login</button>
      </div>
    </form>
  );
}
