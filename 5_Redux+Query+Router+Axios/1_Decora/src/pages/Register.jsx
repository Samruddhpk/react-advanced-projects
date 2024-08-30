import { FormInput, SubmitBtn } from "../components";
import { Form, Link } from "react-router-dom";

const Register = () => {

    return (
        <section className="h-screen grid place-items-center">
            <Form method="post" className="w-96 card p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
                <h4 className="font-bold text-3xl text-center">
                    Register
                </h4>
                <FormInput type="text" label="username" name="username" />
                <FormInput type="email" label="email" name="email" />
                <FormInput type="password" label="password" name="password" />

                <div className="mt-4">
                    <SubmitBtn text="register" />
                </div>

                <p className="text-center">Already a member?

                    <Link to="/login" className="link link-hover link-primary capitalize ml-2">login</Link>
                </p>

            </Form>
        </section>
    );
};
export default Register;