import { useEffect, useState } from "react";

import ReviewsList from "../components/ReviewsList";
import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://127.0.0.1:5000" });

function ReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axiosInstance.get("/reviews").then((response) => setReviews(response.data.reviews));
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      <ReviewsList reviews={reviews} />
    </div>
  );
}

export default ReviewsPage;
