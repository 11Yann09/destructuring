const UsersF = (props) => {
  const { name, age } = props;

  return (
    <div>
      <p>Chanteur : {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default UsersF;
