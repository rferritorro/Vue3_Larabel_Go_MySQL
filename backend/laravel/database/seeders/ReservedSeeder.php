<?php

namespace Database\Seeders;

use App\Models\Reserved;
use Illuminate\Database\Seeder;

class ReservedSeeder extends Seeder
{
    public function run()
    {
        Reserved::factory()
            ->count(10)
            ->create();
    }
}
