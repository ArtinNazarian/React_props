const App = () => {
  return (
    <div>
      <Person
        age="18"
        name="Gloria Sandoval"
        hubbies={["playing guitar", "surfing"]}
      />
      <Person
        age="16"
        name="Bob Smith"
        hubbies={["playing baseball", "collecting baseball cards"]}
      />
      <Person
        age="42"
        name="Jerry Lewis"
        hubbies={["rock climbing", "playing poker", "fishing"]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
