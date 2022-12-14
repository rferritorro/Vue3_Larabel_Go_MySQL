<?php

namespace Database\Factories;

use App\Models\Table;
use Illuminate\Database\Eloquent\Factories\Factory;

class TableFactory extends Factory
{
    protected $model = Table::class;
    
    public function definition()
    {
        return [
            'reserved' => $this->faker->boolean(),
            'place' => $this->faker->name(),
            'img' => $this->faker->name()
        ];
    }
}
