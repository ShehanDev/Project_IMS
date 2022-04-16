import http from "../http-common";
class StudentsDataService {
  getAll() {
    return http.get("/student");
  }
  get(id) {
    return http.get(`/student/${id}`);
  }
  create(data) {
    return http.post("/student", data);
  }
  update(id, data) {
    return http.put(`/student/${id}`, data);
  }
  delete(id) {
    return http.delete(`/student/${id}`);
  }
  // deleteAll() {
  //   return http.delete(`/students`);
  // }
//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}
export default new StudentsDataService();
