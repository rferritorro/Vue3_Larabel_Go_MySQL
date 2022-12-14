<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TableResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'reserved' => $this->reserved,
            'place' => $this->place,
            'img' => $this->img
        ];
    }
}