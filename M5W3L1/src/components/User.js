export const User = ({ user, onClick }) => {
  return (
    <div>
      {user.name.first} <img src={user.picture.thumbnail} />
      <button onClick={() => onClick(user.login.uuid)}>X</button>
    </div>
  );
};
