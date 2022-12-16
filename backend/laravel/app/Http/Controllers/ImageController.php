<?php

namespace App\Http\Controllers;

class ImageController extends Controller 
{
    public function getImages($img_name) 
    {
        $path = public_path().'/uploads/'.$img_name;
        return response()->file($path);
    }

}