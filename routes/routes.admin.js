import deleteUser from "../adminServices/admin.deleteUser.js";
import verifyRole from "../AuthenticationServices/auth.verifyRole.js";
import e from "express";

router = e.Router();

router.delete('/delete', verifyRole, deleteUser);

export default router;