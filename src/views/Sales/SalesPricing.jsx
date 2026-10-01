import React, { useEffect, useState } from "react";
import { useSearchParams } from "@/lib/router-compat";
import { Helmet } from "@/lib/helmet-compat";
const Banner3 = "/assets/Enroll/Banner3.png";
import EnrollHeader from "../../component/Enroll/EnrollHeader"; 

const SalesPricing = ({ location }) => {
  const [searchParams] = useSearchParams();
  const [utmData, setUtmData] = useState({});
  
  // State for form fields
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    address: "",
    state: "",
    your_occupation: "",
    preferred_batch: "",
    preferred_internship: ""
  });

  useEffect(() => {
    const params = {
      source: searchParams.get("utm_source") || "UMREF",
    };
    setUtmData(params);
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Consolidating form data and UTM source for the backend
    const submissionData = { ...formData, utm_source: utmData.source };
    console.log("Sending to Database:", submissionData);
    alert(`Processing payment for ${formData.full_name} from source: ${utmData.source}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Secure Checkout | Kre8ly</title>
      </Helmet>

      <div className="bg-yellow-100 p-2 text-center text-xs border-b border-yellow-200">
        <strong>Detected Sale Code:</strong> {utmData.source} 
      </div>

      <main className="max-w-5xl mx-auto p-6">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row">
          
          {/* Left Panel: Course Summary */}
          <div className="p-8 bg-blue-900 text-white md:w-1/3">
            <h2 className="text-2xl font-bold mb-4">Data Analyst Course</h2>
            <p className="text-blue-200 mb-6 text-sm">Join our comprehensive program and kickstart your career.</p>
            
            <div className="mt-10 pt-6 border-t border-blue-700">
              <p className="text-sm">Total Amount:</p>
              <p className="text-4xl font-bold">399 INR</p>
            </div>
          </div>

          {/* Right Panel: Enrollment Form */}
          <div className="p-8 md:w-2/3 bg-white">
            <h3 className="text-xl font-semibold mb-6 border-b pb-2">Enrollment Details</h3>
            
            <form onSubmit={handlePayment} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" name="full_name" required onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" name="email" required onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" name="phone_number" required onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>

                {/* Occupation */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Your Occupation</label>
                  <input type="text" name="your_occupation" onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">State</label>
                  <input type="text" name="state" onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                </div>

                {/* Preferred Batch */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">Preferred Batch</label>
                  <select name="preferred_batch" onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2">
                    <option value="">Select Batch</option>
                    <option value="morning">Morning</option>
                    <option value="evening">Evening</option>
                  </select>
                </div>
              </div>

              {/* Address - Full Width */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea name="address" rows="2" onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2"></textarea>
              </div>

              {/* Preferred Internship - Full Width */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Internship Domain</label>
                <input type="text" name="preferred_internship" placeholder="e.g. Data Science, Marketing" onChange={handleChange} className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
              </div>

              <button 
                type="submit"
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition"
              >
                Complete Payment (399 INR)
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
};

export default SalesPricing;