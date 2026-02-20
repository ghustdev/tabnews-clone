// Apenas testes de get
test('GET to /api/v1/status should return 200', async () => {
  const response = await fetch('http://localhost:3000/api/v1/status');
  // uso do TDD para visualizar o response
  expect(response.status).toBe(200);
  console.log(response.status);
});