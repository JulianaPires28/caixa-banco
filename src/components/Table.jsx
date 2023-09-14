const Table = (props) => {
  return (
    <div>
      <table>
        <tr>
          <th>{props.nav}</th>
        </tr>
        <tr>
          <td>{props.children}</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
