import DBPool from '../helper/DBPool.js';
import departmentService from '../services/DepartmentService.js';

(async () => {
    try {
        let result = await departmentService.getList();
        console.log(result);

        result = await departmentService.getItem({deptno: 255});
        console.log(result);

        result = await departmentService.addItem({dname: 'MVC학과', loc: '여긴어디?'});
        console.log(result);

        result = await departmentService.editItem({deptno: 255, dname: 'MVC학과', loc: '여긴어디?'});
        console.log(result);

        await departmentService.deleteItem({deptno: 255});

        result = await departmentService.getCount();
        console.log(result);
    } catch (e) {
        console.error(e);
    } finally {
        DBPool.close();
    }
})();