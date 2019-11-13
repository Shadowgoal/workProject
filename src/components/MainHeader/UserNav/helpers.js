export const userSelector = ({
  auth: {
    user: {
      username,
    },
    isLoggedIn,
  },
}) => ({
  username, isLoggedIn,
});

export const blank = () => {};
