import DBPool from "../helper/DBPool.js";
import departmentService from "../services/DepartmentService.js";

(async () => {
  try {
    let result = await departmentService.getList();
    console.log(result);

    result = await departmentService.getItem({ deptno: 206 });
    console.log(result);

    result = await departmentService.addItem({
      dname: "MVC학과",
      loc: "여긴어디?",
    });
    console.log(result);

    result = await departmentService.editItem({
      deptno: 207,
      dname: "Node학과",
      loc: "공학관?",
    });
    console.log(result);

    await departmentService.deleteItem({ deptno: 206 });

    result = await departmentService.getCount();
    console.log(result);
  } catch (e) {
    console.error(e);
  } finally {
    DBPool.close();
  }
})();
