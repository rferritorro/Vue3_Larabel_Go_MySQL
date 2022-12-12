<?php

namespace Database\Factories;

use App\Models\Reserved;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReservedFactory extends Factory
{
    protected $model = Reserved::class;
    
    public function definition()
    {
        return [
            'user_id' => $this->faker->number(),
            'table_id' => $this->faker->number(),
            'menu_id' => $this->faker->number(),
            'date' => $this->faker->name(),
            'hour' => $this->faker->number(),
            'n_comensales' => $this->faker->number()
        ];
    }
}