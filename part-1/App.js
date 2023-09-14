const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Artin" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
