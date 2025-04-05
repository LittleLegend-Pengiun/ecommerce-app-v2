export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (email === 'abc123' && password === '123456') {
            const user = {
                fullname: 'abc123',
                email: 'abc123@gmail.com'
            };
            return Response.json({ user });
        } else {
            return Response.json({ error: 'Invalid credentials' }, { status: 401 });
        }
    } catch (error) {
        return Response.json({ error: 'Invalid request' }, { status: 400 });
    }
}