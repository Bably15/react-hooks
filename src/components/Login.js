import React, { useState } from "react";
import Button from "./Button";

const Login = () => {
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    });

    const { email, password } = loginDetails;

    const handleChange = (e) => {
        console.log(loginDetails);
        setLoginDetails({
            ...loginDetails,
            [e.target.name]: e.target.value,
        });
    };
    return (
        <>
            <h1>LOGIN FORM</h1>
            <form>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                        name="email"
                        onChange={handleChange}
                        value={email}
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        id="exampleFormControlInput1"
                        name="password"
                        onChange={handleChange}
                        value={password}
                    />
                </div>
                <div>
                    <Button />
                </div>
            </form>
        </>
    );
};
export default Login;
