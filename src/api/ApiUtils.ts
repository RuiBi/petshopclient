const HOST = 'localhost:8080';

export const get = (path: string): Promise<any> => {
    return fetch(`http://${HOST}/${path}`).then(res => res.json());
}

export const put = (path: string, data: any): Promise<any> => {
    return fetch(`http://${HOST}/${path}`,{
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        method: 'PUT',
        body: JSON.stringify(data),
    }).then(res => res.json());
};

export const post = (path: string, id: string, data: any): Promise<any> => {
    return fetch(`http://${HOST}/${path}/${id}`,{
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(data),
    }).then(res => {
        if (res.ok) {
            return res;
        }

        throw new Error('Operation failed');
    })
}

export const remove = (path: string, id: string): Promise<any> => {
    return fetch(`http://${HOST}/${path}/${id}`,{
        mode: 'cors',
        method: 'DELETE',
    }).then(res => {
        if (res.ok) {
            return res;
        }

        throw new Error('Operation failed');
    });
}