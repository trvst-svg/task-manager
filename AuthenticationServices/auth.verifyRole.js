export default async function verifyRole(requiredRole, req, res, next) {
    const role = req.user.role;
    if(role != requriredRole){
        return res.json({message: "Access denied"});
    }
    next();
}