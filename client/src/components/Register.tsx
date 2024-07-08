// SignupForm.tsx
import loginImage from "../assets/login.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };

  interface FormValues {
    email: string;
    password: string;
  }

  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    name: Yup.string().required("Name is required"),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Password must be at least 8 characters long and include at least one letter, one number, and one special character."
      ),
  });

  const handleSubmit = async (
    values: FormValues,
    {
      setSubmitting,
    }: FormikHelpers<{ email: string; name: string; password: string }>
  ) => {
    try {
      setSubmitting(true); // Formik sets isSubmitting to true during submission
      // Simulate API call
      const response = await axios.post(
        `${process.env.VITE_API_BASE_URL}/signup`,
        values
      );
      sessionStorage.setItem("token", response.data.token);
      navigate("/home");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error:", error);
      toast.error(
        error.response ? error.response.data.message : "Network error"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center p-8 md:p-0">
      <div className="bg-white shadow-lg flex flex-col items-center rounded-xl overflow-hidden lg:flex-row lg:w-2/3 2xl:w-1/2">
        <div className="p-8 lg:w-1/2 sm:p-8">
          <h1 className="font-bold text-gray-800 text-3xl md:text-4xl md:mb-16">
            Register To Application
          </h1>

          <h2 className="text-2xl font-semibold mt-8 mb-6 text-gray-700">
            Sign Up
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit }) => (
              <Form className="space-y-4" onSubmit={handleSubmit}>
                <div id="input-field" className="flex flex-col mb-4 relative">
                  <i className="fi fi-rr-envelope absolute top-11 right-5 text-zinc-400"></i>
                  <label htmlFor="email" className="mb-2 text-gray-700">
                    Your email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    placeholder="youremail@gmail.com"
                    className="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div id="input-field" className="flex flex-col mb-4 relative">
                  <i className="fi fi-rr-envelope absolute top-11 right-5 text-zinc-400"></i>
                  <label htmlFor="email" className="mb-2 text-gray-700">
                    Your name
                  </label>
                  <Field
                    type="name"
                    id="name"
                    name="name"
                    placeholder="your name"
                    className="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:border-blue-500 focus:outline-none"
                  />
                  <ErrorMessage
                    name="name"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div id="input-field" className="flex flex-col relative">
                  <i className="fi fi-rr-lock absolute top-11 right-5 text-zinc-400"></i>
                  <label htmlFor="password" className="mb-2 text-gray-700">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="px-4 py-2 border-2 border-slate-300 rounded-md max-w-full focus:outline-none focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign Up
                </button>
                {/* <button
              type="submit"
              disabled={isSubmitting} // Disable the button while submitting
              className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Signing up...' : 'Sign Up'}
            </button> */}
              </Form>
            )}
          </Formik>
          <p className="text-gray-500 my-5">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 font-semibold underline">
              {" "}
              Log in here.
            </Link>
          </p>
        </div>
        <div className="w-1/2">
          <img src={loginImage} alt="Login" className="h-f lg:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default Register;
