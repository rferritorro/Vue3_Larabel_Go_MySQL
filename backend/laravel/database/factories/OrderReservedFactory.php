<?php

namespace Database\Factories;

use App\Models\OrderReserved;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderReservedFactory extends Factory
{
    protected $model = OrderReserved::class;
    
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'order_' => $this->faker->number()
        ];
    }
}