export const currentUser = (state) => state.currentUser;
export const editUserDialog = (state) => state.editUserDialog;
export const currentUserName = (state) => {
  if (state.currentUser) {
    return state.currentUser.email;
  }
  return '';
};
