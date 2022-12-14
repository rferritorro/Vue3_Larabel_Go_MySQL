<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTableRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            "reserved" => ["required"],
            "place" => ["required"],
            "img" => ["required"]
        ];
    }

}