import { Router } from 'express';
import userController from '../controllers/user.controller';

class UserRoutes{

    router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }

    routes(){
        this.router.get('/', userController.getUsers);
        this.router.get('/:username', userController.getUser);
        this.router.post('/', userController.createUser);
        this.router.put('/:username', userController.updateUser);
        this.router.delete('/:username', userController.deleteUser);
    }
    
}

const userRoutes = new UserRoutes();
export default userRoutes.router;