
This is a tutorial to make the laravel project work after cloning it.

you only need to do this once and for the next changes you can just do "git pull".


-clone it with git clone <url>

-go in the laravel project and copy paste the .env.example and rename the pasted one to just ".env".

-open the .env and you see "DB_DATABASE=" put "fakenews", and make an empty database called fakenews.

-open terminal inside the laravel project.

-type "composer install". If it doesn't work, download composer from the internet.

-type "npm install".

-type "npm run build".

-type php "artisan key:generate".

-type "php artisan migrate".

-lastly type "php artisan storage:link".

now it works with php artisan serve. Enjoy!

you can change the is_admin column to 1 after creating account