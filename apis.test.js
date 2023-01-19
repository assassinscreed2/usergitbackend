const request = require('supertest')
const app = require('./server')

describe('Users API',()=>{
    it('should GET /user/userid information',()=>{
        return request(app)
        .get('/user/assassinscreed2')
        .expect(200)
        .then((res)=>{
            expect(res.body).toEqual(
                expect.objectContaining({
                    login:"assassinscreed2",
                    repositories:expect.any(Array)
                })
            )
        })
    })

    it('should not GET /user/userid information',()=>{
        return request(app)
        .get('/user/randomassassinscreed2123!@#')
        .expect(403)
    })
})

