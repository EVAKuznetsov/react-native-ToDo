export class Http {
    // static HEADERS = { 'content-type': 'application/json' }

    static async get(url) {
        try {
            return await request(url, 'GET')
        } catch (error) {
            throw 'error'
        }
    }

    static async post(url, data = {}) {
        try {
            return await request(url, 'POST', data)
        } catch (error) {
            throw 'error'
        }
    }

    static async delete(url) {
        try {
            return await request(url, 'DELETE')
        } catch (error) {
            throw 'error'
        }
    }

    static async patch(url, data = {}) {
        try {
            return await request(url, 'PATCH', data)
        } catch (error) {
            throw 'error'
        }
    }
}

async function request(url, method = 'GET', data) {
    let config = {
        method: method,
        headers: { 'content-type': 'application/json' },
    }
    if (method === 'POST' || method === 'PATCH') {
        config.body = JSON.stringify(data)
    }
    const res = await fetch(url, config)
    return await res.json()
}
