<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreAuthRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            "username" => ["required"],
            "password" => ["required"],
            "email" => ["required"],
            "avatar" => ["required"],
            "type_" => ["required"],
            "token" => ["required"]
        ];
    }

}
