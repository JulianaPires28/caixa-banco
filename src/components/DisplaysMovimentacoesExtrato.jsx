import "../styles/displaysMovimentacoesExtrato.css";

const Card = (props) => {
  return (
    <div className="card">
      <div className="Title">
        <p>{props.title}</p>
      </div>
    </div>
  );
};

export default Card;
