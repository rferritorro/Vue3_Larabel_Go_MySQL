<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReservedResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'table_id' => $this->table_id,
            'menu_id' => $this->menu_id,
            'date' => $this->date,
            'hour' => $this->hour,
            'n_comensales' => $this->n_comensales
        ];
    }
}