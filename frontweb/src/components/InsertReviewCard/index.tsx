import { useForm } from "react-hook-form";
import { requestBackendReview } from "../../util/requests";
import "./styles.css";
import { toast } from 'react-toastify';

type DadosForm = {
    text: string;
    movieId: string;
}

type Props = {
    movieId: string;
    onNewReview: Function;
}

const InsertReviewCard = ({ movieId, onNewReview } : Props ) => {

    const { register, handleSubmit, formState: {errors}, setValue } = useForm<DadosForm>();

    const onSubmit = (dadosForm: DadosForm) => {
        dadosForm.movieId=movieId;
        requestBackendReview(dadosForm).then(() => {
          setValue("text", "");
          onNewReview(); 
          toast.success('Avaliação salva com sucesso!')
        });    
    };

return (
    <div className="movie-details-card">
        <form onSubmit={handleSubmit(onSubmit)} className="input-container">
          <div className="review-input-card">
            <div className="input-text-container">
              <input
              {...register("text",{
                  required: "Campo obrigatório"
              })}
                type="text"
                className="form-control review-input"
                placeholder={'Deixe sua avaliação aqui'}
              ></input>
            </div>
            <div className="invalid-feedback d-block">
                {errors.text?.message}
              </div>
            <div className="button-container">
            <button type="submit" className="btn review-button">SALVAR AVALIAÇÃO</button>
            </div>
          </div>
          </form>
          </div>
        );
};
export default InsertReviewCard;

