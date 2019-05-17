import axios from "axios";

export function serviceCall(url) {
    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then(response => {
                console.log("axios call of users")
                return resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

