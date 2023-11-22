type Review = {
    title: string,
    rating: number,
    description: string
}

function ReviewItem(review: Review) {
    const { title, rating, description } = review

    return (
        <section>
            <h1>{title}: {rating} stars</h1>
            <p>{description}</p>
        </section>
    )
}

export default ReviewItem;