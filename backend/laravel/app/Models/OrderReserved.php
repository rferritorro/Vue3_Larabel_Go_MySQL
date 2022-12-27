<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderReserved extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'order_reserved';
    protected $fillable = ['name', 'order_'];
}