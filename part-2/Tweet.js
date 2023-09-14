const Tweet = (props) => {
  return (
    <div>
      <h3> username: {props.username}</h3>
      <span> name: {props.name}</span>
      <span> date: {props.date}</span>
      <span> message: {props.message}</span>
    </div>
  );
};
