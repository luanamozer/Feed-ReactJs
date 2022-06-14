// props recebe como objeto,acessa as propriedades da função. props:{ author:" ", content:" "}
export function Post(props) {
  return (
    <>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </>
  );
}
