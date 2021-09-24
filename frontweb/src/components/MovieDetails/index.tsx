import './styles.css';
import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { hasAnyRoles } from '../../util/auth';
import { requestBackend } from '../../util/requests';
import { Review } from '../../types/review';
import { Movie } from '../../types/movie';
import InsertReviewCard from '../InsertReviewCard';
import ReviewCard from '../ReviewCard';
import { AxiosRequestConfig } from 'axios';

type UrlParams = {
  movieId: string;
};

type ReviewList = Review[];

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();
  const [movie, setMovie] = useState<Movie>();
  const [reviewList, setReviewList] = useState<ReviewList>();

  const movieData = useCallback(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  const reviewData = useCallback(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      setReviewList(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    movieData();
    reviewData();
  }, [movieData, reviewData]);

  return (
    <>
      <div className="movie-details-container">
        <div className="moviedetails-title-container">
          <h2> Tela detalhes do filme id:{movie?.id}</h2>
        </div>
        {hasAnyRoles(['ROLE_MEMBER']) && (
          <div className="reviews-input-card-container">
            <InsertReviewCard movieId={movieId} onNewReview={reviewData} />
          </div>
        )}
        <div className="review-card-container">
          {reviewList?.length !== 0 ? (
            reviewList?.map((rev) => (
              <ReviewCard key={rev.id} review={rev} />
            ))
          ) : (
            <p>Não há reviews deste filme no momento</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
