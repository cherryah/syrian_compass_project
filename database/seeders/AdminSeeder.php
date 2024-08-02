<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => Hash::make('password'), // Change to a secure password
            'phone_number' => '1234567890',
            'gender' => 'male', // or 'female'
            'country' => 'YourCountry',
            'is_admin' => true,
    
        ]);
    }
}
