import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactUs = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values) => {
      const whatsappMessage = `Hi, I am ${values.firstName} ${values.lastName}.\nSubject: ${values.subject}\nMessage: ${values.message}\nEmail: ${values.email}`;
      const whatsappURL = `https://wa.me/<YOUR_PHONE_NUMBER>?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappURL, "_blank");
    },
  });
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex items-center gap-8 max-w-4xl">
        {/* Form Section */}
        <form
          onSubmit={formik.handleSubmit}
          className="p-8 bg-white rounded-lg shadow-lg border border-gray-200 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="mt-1 p-2 border rounded w-full"
                {...formik.getFieldProps("firstName")}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <p className="text-sm text-red-500">
                  {formik.errors.firstName}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="mt-1 p-2 border rounded w-full"
                {...formik.getFieldProps("lastName")}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <p className="text-sm text-red-500">{formik.errors.lastName}</p>
              ) : null}
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="mt-1 p-2 border rounded w-full"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-sm text-red-500">{formik.errors.email}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              className="mt-1 p-2 border rounded w-full"
              {...formik.getFieldProps("subject")}
            >
              <option value="">-- Choose Topic --</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Support">Support</option>
              <option value="Feedback">Feedback</option>
            </select>
            {formik.touched.subject && formik.errors.subject ? (
              <p className="text-sm text-red-500">{formik.errors.subject}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 p-2 border rounded w-full"
              rows="4"
              {...formik.getFieldProps("message")}
            ></textarea>
            {formik.touched.message && formik.errors.message ? (
              <p className="text-sm text-red-500">{formik.errors.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="text-white bg-[#A28140] hover:bg-[#8F6E35] px-4 py-2 sm:px-6 sm:py-3 transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info Section */}
        <div className="p-8 ">
          <h2 className="text-2xl font-bold text-gray-800">Reach us at</h2>
          <p className="text-gray-600">
            Feel free to contact us with your queries or suggestions.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-gold">📍</span>
              <p className="text-gray-800">Chandigarh, India</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gold">📧</span>
              <p className="text-gray-800">Hello@Email.com</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gold">📞</span>
              <p className="text-gray-800">(+62) 123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
