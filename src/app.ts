/* env config setting */
import 'dotenv/config';
/* modules */
import { join } from 'path';
import express from 'express';
/* routes */
import { router as adminRoutes } from './routes/admin.js';
import { router as shopRoutes } from './routes/shop.js';
import { get404 } from './Controller/error.js';
/*others */
import { sequelize as db } from './util/database.js';
import { User } from './model/user.model.js';
import { make_association } from './util/make_association.js';

process.env.NODE_ENV = process.env.ENV;

const app = express();
make_association();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(join('public')));
app.use(async (req, res, next) => {
    const user = await User.findByPk(1);

    if (user) {
        req.user = user;
        console.log(user.getCart);
        const cart = await user.getCart!();
        if(!cart)
        {
            await user.createCart();
        }
    }
    next();
})

/*Routes */
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(get404);
app.use((err,req,res,next) => {
    console.log(err.stack);
    res.redirect('/');
})
/*End Routes */

try {
    const result = await db.sync();

    let user = await User.findByPk(1);
    if (!user) {
        user = await User.create({
            name: "First User",
            email: "blaxsior@gmail.com"
        });
    }
    app.listen(3000);
} catch (err) {
    console.log(err);
}


// db.sync({force: true}).then(result => {
//     console.log(result);
//     app.listen(3000);
// }).catch(err => {
//     console.log
// })

// app.listen(3000);
