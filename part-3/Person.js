const Person = (props) => {
  return (
    <div>
      <p>Learn some information about this person</p>
      <ul>
        <li>
          Name: {props.name.length > 8 ? props.name.slice(0, 6) : props.name}
        </li>
        <li>{props.age >= 18 ? "Go Vote" : "You must be 18 to vote"}</li>
        <ul>
          {props.hubbies.map((h) => (
            <li>{h}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
