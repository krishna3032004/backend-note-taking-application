import jwt from "jsonwebtoken";
export function authMiddleware(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth)
        return res.status(401).json({ message: "No token" });
    const token = auth.split(" ")[1];
    try {
        const secret = process.env.JWT_SECRET || "secret123";
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
}
