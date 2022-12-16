<?php

namespace Database\Factories;

use App\Models\Menu;
use Illuminate\Database\Eloquent\Factories\Factory;

class MenuFactory extends Factory
{
    protected $model = Menu::class;
    
    public function definition()
    {
        return [
            'nombre' => $this->faker->name(),
            'descr' => $this->faker->name(),
            'img' => $this->faker->name()
        ];
    }
}
