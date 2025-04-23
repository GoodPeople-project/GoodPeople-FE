export async function Login(username: string, password: string) {
  const response = await fetch('http://localhost:8000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
    }),
  });
}

export async function Signup(username: string, password: string, nickname: string) {
  const response = await fetch('http://localhost:8000/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password,
      nickname,
    }),
  });
}
