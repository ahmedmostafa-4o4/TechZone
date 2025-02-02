function SuccessMessage(props) {
  return (
    <p className="message hide-message" style={{ backgroundColor: props.bg }}>
      {props.message}
    </p>
  );
}

export default SuccessMessage;
