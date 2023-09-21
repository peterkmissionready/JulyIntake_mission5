<<<<<<< HEAD
import http from "../http-common";

class MyDataService {
    getAll(page = 0) {
        return http.get(`?page=${page}`);
    }
}

=======
import http from "../http-common";

class MyDataService {
    getAll(page = 0) {
        return http.get(`?page=${page}`);
    }
}

>>>>>>> 7559f16 (Test pushing works on my end.)
export default new MyDataService();