import { useState } from "react";

export type SignupInfo = {
  email: String,
  password: String
  displayName: String
}

export function Signup({ onSignup }: { onSignup: (info: SignupInfo) => void }) {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [displayName, setDisplayName] = useState("");

  const disableButton = email.length < 3 || password1.length < 6 || password2.length < 6 || displayName.length < 3;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(password1 === password2) {
        onSignup({
            email,
            password: password1,
            displayName
          });
    } else {
        alert("Passwords don't match")
    }
    
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
        <label htmlFor="password1">Password</label>
        <input
          id="password1"
          name="password1"
          type="password"
          value={password1}
          required
          placeholder="Password"
          onChange={(e) => setPassword1(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password2">Confirm password</label>
        <input
          id="password2"
          name="password2"
          type="password"
          value={password2}
          required
          placeholder="Password"
          onChange={(e) => setPassword2(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="displayName">Display name</label>
        <input
          id="displayName"
          name="displayName"
          type="text"
          value={displayName}
          required
          placeholder="Display name"
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </div>
      <div>
        <button disabled={disableButton} type='submit'>Signup</button>
      </div>
    </form>
  );
}
