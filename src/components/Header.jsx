const Header = () => {
  let textValue = "Imagine a place...";
  let uppercase = textValue.toUpperCase();
  return (
    <div>
      <h1>{uppercase}</h1>
    </div>
  );
};

export default Header;
