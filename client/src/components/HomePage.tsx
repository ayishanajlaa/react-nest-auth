import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("token"); // Get token from session storage
        const response = await axios.get(`${process.env.VITE_API_BASE_URL}/content`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(response.data); // Assuming the API response is JSON and you want to set it to state
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error (e.g., show an error message)
      }
    };

    fetchData();
  }, []);

  const logOutHandler = () => {
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://image.freepik.com/free-vector/colorful-memphis-design-background-vector_53876-81744.jpg")',
      }}
    >
      <div className="text-white text-center max-w-4xl px-6">
        <h1 className="mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
          {data ? data : "Welcome to application..."}
        </h1>

        <button
          className="inline-flex justify-center items-center my-5 py-3 px-8 text-base font-medium text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={logOutHandler}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
