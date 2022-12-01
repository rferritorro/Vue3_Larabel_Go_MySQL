<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ReservedResource;
use App\Http\Requests\StoreReservedRequest;
use App\Models\Reserved;

class ReservedController extends Controller
{
    //GET ALL DATA INTO TABLE RESERVED
    public function index() {
        return ReservedResource::collection(Reserved::get());
    }

    //CREATE DATA INTO TABLE RESERVED
    public function store(StoreReservedRequest $request) {
        return ReservedResource::make(Reserved::create($request->validated()));
    }

    //UPDATE DATA INTO TABLE RESERVED
     public function update(Request $request, $id){
        if (Reserved::where('id', $id)->exists()) {
            $reserved = Reserved::find($id);
            $reserved->user_id = $request->user_id;
            $reserved->user_id = $request->table_id;
            $reserved->user_id = $request->menu_id;
            $reserved->user_id = $request->date;
            $reserved->save();
            return response()->json([
              "message" => "Reserved updated successfully"
            ], 200);
          } else {
            return response()->json([
              "message" => "Reserved not found"
            ], 404);
          }
    }

    //DELETE DATA INTO TABLE RESERVED
    public function destroy($id){
        if(Reserved::where('id', $id)->exists()) {
            $reserved = Reserved::find($id);
            $reserved->delete();
            return response()->json([
              "message" => "Reserved deleted succesfully"
            ], 202);
          } else {
            return response()->json([
              "message" => "Reserved not found"
            ], 404);
          }
    }

}
