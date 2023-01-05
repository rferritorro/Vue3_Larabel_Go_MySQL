<?php

namespace Database\Factories;

use App\Models\Auth;
use Illuminate\Database\Eloquent\Factories\Factory;

class AuthFactory extends Factory
{
    protected $model = User::class;
    
    public function definition()
    {
        return [
            'username' => $this->faker->firstName(),
            'password' => $this->faker->password(), // password
            'email' => $this->faker->email(),
            'avatar' => $this->faker->name(),
            'type_' => $this->faker->boolean(),
            'token' => $this->faker->text(),
        ];
    }
}
