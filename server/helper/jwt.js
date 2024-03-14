
import {expressjwt} from 'express-jwt'
export const authJwt =() => {
    const secret = process.env.SECRET
    const api = process.env.API_URL;
    return expressjwt({
        secret,
        algorithms: ['HS256'],
    }).unless({
        path: [ 
            `/products`,
            `/categories`,
            `/user/login`,
           ` /public/uploads`,
           `/user`
        ]
    })
}

async function isRevoked(req, payload, done) {
    if(payload.isAdmin) {
        done(null, true)
    }

    done();
}



