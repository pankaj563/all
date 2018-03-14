<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/auth', function () {
    //Perform a check whether the user is authenticated or not
    //Remove the if block during production
    if(!Auth::check())
    {
        //If they are not, we forcefully login the user with id=1
        $user = App\User::find(1);
        Auth::login($user);
    }
    return Auth::user();
});

/*Route::group(['prefix' => 'admin',  'middleware' => 'auth'], function()
{
    Route::get('dashboard', function() {} );
});*/

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/getemp', 'HomeController@getEmp')->name('get-emp');
Route::get('/regEmp', 'HomeController@regEmp');
Route::post('/regEmp', 'HomeController@regEmp');
Route::get('/getemp/{id}', 'HomeController@getEmpbyId')->name('get-emp');
Route::post('/regEmpUpdate', 'HomeController@regEmpUpdate');

