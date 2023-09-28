import { USER_REPOSITORY } from "../repository/repositoryManager.js";

export default class UserServices {
  getUser = async (email) => await USER_REPOSITORY.getUser(email);
  saveUser = async (user) => await USER_REPOSITORY.register(user);
  changePassword = async ({ email, newpassword }) =>
    await USER_REPOSITORY.resetPassword({ email, newpassword });
  recoverPassword = async (user) => await USER_REPOSITORY.recoverPassword(user)
  checkResetUrl = async (idurl) => await USER_REPOSITORY.checkResetUrl(idurl)
  resetRecoverPassword = async (email) => await USER_REPOSITORY.resetRecoverPassword(email)
  changeRole = async (uid) => await USER_REPOSITORY.changeRole(uid)
  setLastConnection = async (uid) => await USER_REPOSITORY.setLastConnection(uid)
  uploadDocuments = async (uid, documents) => await USER_REPOSITORY.uploadDocuments(uid, documents)
  getUserById = async (uid) => await USER_REPOSITORY.getUserById(uid)
  getAll = async () => await USER_REPOSITORY.getAll()
  deleteInactiveUser = async (uid) => await USER_REPOSITORY.deleteInactiveUser(uid)
}
