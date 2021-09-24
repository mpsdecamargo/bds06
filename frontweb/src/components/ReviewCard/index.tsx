import "./styles.css";
import { Review } from '../../types/review';
import image from '../../assets/images/star.png';

type Props = {
    review: Review;
}

const Reviews = ({ review } : Props ) => {
    return (
        <>
        
          <div className="reviews-card">
            <div className="reviewer-name-container">
              <img src={image} alt="" />
              <h2>{review.user.name}</h2>
            </div>
            <div className="card-review-container">
              <p>{review.text}</p>
            </div>
          </div>
        
        </>
        );
};

export default Reviews;
