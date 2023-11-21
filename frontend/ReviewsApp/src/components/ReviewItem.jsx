function ReviewItem({ title, rating, description }) {
    return (
        <section>
            <h1>{title}: {rating} stars</h1>
            <p>{description}</p>
        </section>
    )
}

export default ReviewItem;