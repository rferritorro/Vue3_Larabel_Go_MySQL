<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//use App\Http\Controllers\UserController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ReservedController;
use App\Http\Controllers\OrderReservedController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });


//ROUTES TO API/BD GET DATA TO DATABSES LARAVEL
//LARAVEL --> PANEL ADMIN
//Route::resource('users', UserController::class);
Route::resource('tables', TableController::class);
Route::resource('menus', MenuController::class);
Route::resource('reserved', ReservedController::class);
Route::resource('order_reserved', OrderReservedController::class);
Route::get('/public/{image}', [ImageController::class, 'getImages']);
Route::get('/_reserved/', [OrderReservedController::class, 'get_order']);
Route::get('/menus_search/{data}', [MenuController::class, 'get_menus_search']);
Route::get('/tables_filter/{data}', [TableController::class, 'get_tables_reserved']);
Route::put('/check_reserved/{data}', [ReservedController::class, 'check_reserved']);

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');

});