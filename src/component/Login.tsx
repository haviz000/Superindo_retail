import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-8 h-8 mr-2"
            src="data:image/png;base64,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"
            alt="logo"
          />
          SuperIndo Retail Store
        </a>
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="username"
                  required={true}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <div className="flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder={showPassword ? "password here" : "••••••••"}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                  />
                  <input
                    type="checkbox"
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-2 form-checkbox h-5 w-5 text-primary-600 focus:ring-primary-500 dark:text-primary-400 dark:focus:ring-primary-600"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required={true}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
