<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class UserFactory extends Factory
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
        ];
    }
}
