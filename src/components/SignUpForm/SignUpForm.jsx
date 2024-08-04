import { useState } from "react";
import styles from "./SignUpForm.module.css";
import classNames from "classnames";

const SignUpFormRegExp = {
  fullName: /^[A-Z][a-z]{1,31} [A-Z][a-z]{1,31}$/,
  email: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*)(?=.*[!@#$%^&*])(?=.*\d.*).{6,20}$/,
};

function SignUpForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFullNameChange = ({ target: { value } }) => {
    setFullName(value);
  };

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleSignUpFormBtn = (e) => {
    e.preventDefault();
    setFullName("");
    setEmail("");
    setPassword("");
  };

  const calcClassName = (name, value) => {
    const isValueValid = SignUpFormRegExp[name].test(value);

    return classNames(styles.formInput, {
      [styles.validInput]: isValueValid,
      [styles.invalidInput]: !isValueValid,
    });
  };

  const isSignUpBtnDisabled = () => {
    return !(
      SignUpFormRegExp.fullName.test(fullName) &&
      SignUpFormRegExp.email.test(email) &&
      SignUpFormRegExp.password.test(password)
    );
  };

  //   const inputFullNameClassName = classNames(styles.formInput, {
  //     [styles.validInput]: SignUpFormRegExp.fullName.test(fullName),
  //     [styles.invalidInput]: !SignUpFormRegExp.fullName.test(fullName),
  //   });

  //   const inputEmailClassName = classNames(styles.formInput, {
  //     [styles.validInput]: SignUpFormRegExp.email.test(email),
  //     [styles.invalidInput]: !SignUpFormRegExp.email.test(email),
  //   });

  //   const inputPasswordClassName = classNames(styles.formInput, {
  //     [styles.validInput]: SignUpFormRegExp.password.test(password),
  //     [styles.invalidInput]: !SignUpFormRegExp.password.test(password),
  //   });

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Sign Up Form</h2>
      <form className={styles.signUpForm} onSignUp={handleSignUpFormBtn}>
        <label className={styles.formLabel}>
          <span className={styles.inputTitle}>FULL NAME</span>
          <input
            className={calcClassName("fullName", fullName)}
            type="text"
            name="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            placeholder="Test Testov"
            autoFocus
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputTitle}>EMAIL ADDRESS</span>
          <input
            className={calcClassName("email", email)}
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="my@mail"
          />
        </label>
        <label className={styles.formLabel}>
          <span className={styles.inputTitle}>PASSWORD</span>
          <input
            className={calcClassName("password", password)}
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="password"
          />
        </label>

        <button
          className={styles.signUpBtn}
          disabled={isSignUpBtnDisabled()}
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUpForm;
