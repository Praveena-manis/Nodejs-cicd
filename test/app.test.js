const request=require('supertest');
const app=require('../index');

describe('GET /',()=>{
    it('Should return Hello from Node!',async()=>{

        const res=await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello from Node!');
    });
});