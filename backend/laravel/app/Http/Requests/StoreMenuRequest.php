<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreMenuRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            "nombre" => ["required"],
            "descr" => ["required"],
            "img" => ["required"]
        ];
    }

}