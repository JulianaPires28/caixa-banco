import "../styles/displaysMovimentacoesExtrato.css";

const DisplayPrincipalSaldoConta = (props) => {
  return (
    <div className="cardPrincipal">
      <h4 className="Title">{props.title}</h4>
      <div className="Content">{props.children}</div>
    </div>
  );
};

export default DisplayPrincipalSaldoConta;
