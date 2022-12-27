<?php

namespace Database\Seeders;

use App\Models\OrderReserved;
use Illuminate\Database\Seeder;

class OrderReservedSeeder extends Seeder
{
    public function run()
    {
        OrderReserved::factory()
            ->count(10)
            ->create();
    }
}
