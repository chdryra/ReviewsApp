import { useEffect, useState } from "react";

import BackendConfig from './../config/backendConfig';
import ReviewsList from "../components/ReviewsList";

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    BackendConfig.axiosClient.get("/reviews").then((response) => setReviews(response.data.reviews));
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      <ReviewsList reviews={reviews} />
    </div>
  );
}
