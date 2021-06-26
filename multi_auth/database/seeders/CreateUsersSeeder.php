<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class CreateUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            [
                'name'=>'Student',
                'email'=>'student@malinator.com',
                'user_role'=>'student',
                'password'=> bcrypt('123456'),
            ],
            [
                'name'=>'Teacher',
                'email'=>'teacher@malinator.com',
                'user_role'=>'teacher',
                'password'=> bcrypt('123456'),
            ],
            [
                'name'=>'Admin',
                'email'=>'admin@malinator.com',
                'user_role'=>'admin',
                'password'=> bcrypt('123456'),
            ],
            [
                'name'=>'SuperAdmin',
                'email'=>'superAdmin@malinator.com',
                'user_role'=>'superAdmin',
                'password'=> bcrypt('123456'),
            ],
        ];

        foreach ($user as $key => $value) {
            User::create($value);
        }
    }
}
