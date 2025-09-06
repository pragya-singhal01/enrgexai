<?php

/** @var \Laravel\Lumen\Routing\Router $router */
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->post('api/register', 'AuthController@register');
$router->post('api/login', 'AuthController@login');

$router->group(['middleware' => 'auth'], function() use($router) {
    $router->get('api/posts', 'PostController@index');
    $router->post('api/posts', 'PostController@store');
    $router->get('api/posts/{id}', 'PostController@show');
});
