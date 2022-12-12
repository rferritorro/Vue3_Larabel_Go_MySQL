<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserved extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table = 'User_table_reserved';
    protected $fillable = ['user_id', 'table_id', 'menu_id', 'date', 'hour', 'n_comensales'];
}