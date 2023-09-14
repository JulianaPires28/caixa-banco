import "../styles/titleTransactions.css";

const TitleTransactions = (props) => {
  return (
    <div className="titleTransactions">
      <div className="title">
        <p className="titlePageTransactions">{props.title}</p>
      </div>
      <div className="type">{props.type}</div>
    </div>
  );
};

export default TitleTransactions;