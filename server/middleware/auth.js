/*import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
       // const isCustomAuth = token.length;

        let decodedData = jwt.verify(token, 'test')  // secret from .env file

        req.userId = decodedData?.id;

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth; */