const baseUrl = "https://reqres.in/api"

export const loginApi = async (email, password) => {
    const result = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    return result
}

