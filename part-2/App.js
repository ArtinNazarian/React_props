const App = () => {
  return (
    <div>
      <Tweet
        username="Greg45"
        name="Greg Smith"
        date="02/14/2022"
        message="Can'wait for Spring"
      />
      <Tweet
        username="masterJoshi"
        name="John Benny"
        date="12/22/2021"
        message="Had blast skiing at Lake Taho"
      />
      <Tweet
        username="sportDude01"
        name="Bob Hope"
        date="09/12/2023"
        message="The pain of being a Jets fan"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
