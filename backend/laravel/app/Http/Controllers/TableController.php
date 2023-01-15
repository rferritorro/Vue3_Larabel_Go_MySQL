<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\TableResource;
use App\Http\Requests\StoreTableRequest;
use App\Models\Table;
use Illuminate\Support\Facades\DB;

class TableController extends Controller 
{
    //GET ALL DATA INTO TABLE TABLES
    public function index() {
        return TableResource::collection(Table::get());
    }

    //CREATE DATA INTO TABLE TABLES
    public function store(StoreTableRequest $request){
        return TableResource::make(Table::create($request->validated()));
    }

    public function get_tables_reserved($data) {
        $filter_tables = DB::table('Table_')
        ->selectRaw('*')
        ->where('reserved', '=', $data)
        ->get();
        return $filter_tables;
    }

    //UPDATE DATA INTO TABLE TABLES
    public function update(Request $request, $id){
        if (Table::where('id', $id)->exists()) {
            $table = Table::find($id);
            $table->reserved = $request->reserved;
            $table->place = $request->place;
            $table->img = $request->img;
            $table->save();
            return response()->json([
              "message" => "Table updated successfully"
            ], 200);
          } else {
            return response()->json([
              "message" => "Table not found"
            ], 404);
          }
    }

    //DELETE DATA INTO TABLE TABLES
    public function destroy($id)
    {
        if(Table::where('id', $id)->exists()) {
            $table = Table::find($id);
            $table->delete();
            return response()->json([
              "message" => "Table deleted succesfully"
            ], 202);
          } else {
            return response()->json([
              "message" => "Table not found"
            ], 404);
          }
    }

}