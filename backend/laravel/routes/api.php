<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TableController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\ReservedController;
use App\Http\Controllers\ImageController;

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
Route::resource('users', UserController::class);
Route::resource('tables', TableController::class);
Route::resource('menus', MenuController::class);
Route::resource('reserved', ReservedController::class);
Route::get('/public/{image}', [ImageController::class, 'getImages']);

