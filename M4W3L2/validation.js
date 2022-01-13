const emailAlreadyExists = (email) => false;

const validateUser = ({ email, password, passwordConfirmation }) => {
  if (password !== passwordConfirmation) return false;
  if (emailAlreadyExists(email)) return false;
  //   if (emailIsValidEmail(email)) return false;

  return true;
};

module.exports = { validateUser };
