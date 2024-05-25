<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MediaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('portal');
});

Route::get('/projects', function () {
    return view('projects');
});



Auth::routes();


Route::post('/upload', [MediaController::class, 'upload']);
Route::get('/media/{key}', [MediaController::class, 'getMedia']);


Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
