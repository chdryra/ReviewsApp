import ReviewItem from "./ReviewItem";

function ReviewsList({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          title={review.title}
          rating={review.rating}
          description={review.description}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
