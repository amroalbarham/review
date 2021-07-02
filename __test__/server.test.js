'use strict';

const supertest=require('supertest');
const server=require('../server');
const request=supertest(server.app);


describe('test on http request',()=>{
  it('test firts http ',async()=>{
    const response =await request.get('/');
    expect(response.status).toBe(200);

  })
  it('test firts http ',async()=>{
    const response =await request.get('/asdf');
    expect(response.status).toBe(404);
    // expect(response.body).toBe('hello deves');

  })
  it('test firts http ',async()=>{
    const response =await request.get('/bad');
    expect(response.status).toBe(500);
    // expect(response.body).toBe('hello deves');

  })
})
