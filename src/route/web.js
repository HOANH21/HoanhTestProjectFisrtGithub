import express from "express";
import homeControllers from "../controllers/homeControllers";
let router = express.Router();

let initWebRoutes = (app) => {
    //rest api

    router.get('/', homeControllers.getHomePage);
    router.get('/about', homeControllers.getAboutPage);
    router.get('/crud', homeControllers.getCRUD);
    router.post('/post-crud', homeControllers.postCRUD);


    router.get('/get-crud', homeControllers.displayGetCRUD);
    router.get('/edit-crud', homeControllers.getEditCRUD);
    router.post('/put-crud', homeControllers.putCRUD);

    // router.get('/hoidanit', (req, res) => {
    //     return res.send('Hello world with hoidanit')
    // });
    return app.use("/", router);
}

module.exports = initWebRoutes;
