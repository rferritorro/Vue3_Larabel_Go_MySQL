<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreReservedRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            "user_id" => ["required"],
            "table_id" => ["required"],
            "menu_id" => ["required"],
            "date" => ["required"],
            "hour" => ["required"],
            "n_comensales" => ["required"]
        ];
    }

}