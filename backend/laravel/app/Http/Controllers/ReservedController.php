<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ReservedResource;
use App\Http\Requests\StoreReservedRequest;
use App\Models\Reserved;
use Illuminate\Support\Facades\DB;

class ReservedController extends Controller
{
    //GET ALL DATA INTO TABLE RESERVED
    public function index() {
        $reserved = DB::table('User_table_reserved')
          ->selectRaw('User_table_reserved.id, User_table_reserved.user_id, User_table_reserved.table_id,
            User_table_reserved.menu_id
            ,User.username, Table_id, Menu.nombre,
             User_table_reserved.date, User_table_reserved.hour, User_table_reserved.n_comensales,
             User_table_reserved.reserved')
          ->join('User', 'User.id', '=', 'User_table_reserved.user_id')
          ->join('Table_', 'Table_.id', '=', 'User_table_reserved.table_id')
          ->join('Menu', 'Menu.id', '=', 'User_table_reserved.menu_id')
          ->orderBy("User.username")
          ->get();

        return $reserved;
    }

    public function check_reserved($data, Request $request) {
      if (Reserved::where('id', $data)->exists()) {
        $reserved = Reserved::find($data);
        $reserved->reserved = $request->reserved;
        $reserved->save();
        return response()->json([
          "message" => "Reserved updated successfully"
        ], 200);
      } else {
        return response()->json([
          "message" => "Reserved not found"
        ], 404);
      }
      return $data;
    }

    public function show($id) {
      // SELECT User.username, Table_id, Menu.nombre, User_table_reserved.date, User_table_reserved.hour, User_table_reserved.n_comensales
        // FROM `User_table_reserved`
        // INNER JOIN User
        //   ON User.id = User_table_reserved.user_id
        //   INNER JOIN Table_
        //   ON Table_.id = User_table_reserved.table_id
        //   INNER JOIN Menu
        //   ON Menu.id = User_table_reserved.menu_id;
      switch ($id) {
      case '1':
        $order = "User.username";
        break;
      case '2':
        $order = "Table_id";
        break;
      case '3':
        $order = "Menu.nombre";
        break;
      case '4':
        $order = "User_table_reserved.date";
        break;
      case '5':
        $order = "User_table_reserved.hour";
        break;
      case '6':
        $order = "User_table_reserved.n_comensales";
        break;

      default:
        break;
      }

        $reserved_asc = DB::table('User_table_reserved')
          ->selectRaw('User_table_reserved.id, User_table_reserved.user_id,
          User_table_reserved.menu_id
          ,User.username, Table_id, Menu.nombre,
           User_table_reserved.date, User_table_reserved.hour, User_table_reserved.n_comensales,
           User_table_reserved.reserved')
          ->join('User', 'User.id', '=', 'User_table_reserved.user_id')
          ->join('Table_', 'Table_.id', '=', 'User_table_reserved.table_id')
          ->join('Menu', 'Menu.id', '=', 'User_table_reserved.menu_id')
          ->orderBy($order)
          ->get();
        $reserved_desc = DB::table('User_table_reserved')
          ->selectRaw('User_table_reserved.id, User.username, Table_id, Menu.nombre, User_table_reserved.date, User_table_reserved.hour, User_table_reserved.n_comensales')
          ->join('User', 'User.id', '=', 'User_table_reserved.user_id')
          ->join('Table_', 'Table_.id', '=', 'User_table_reserved.table_id')
          ->join('Menu', 'Menu.id', '=', 'User_table_reserved.menu_id')
          ->orderByDesc($order)
          ->get();
       
        return $reserved_asc;
        //filter ASC OR DESC:
        //ORDER BY `User`.`username` ASC
        //return ReservedResource::ReservedResource(Reserved::get());
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
            $reserved->table_id = $request->table_id;
            $reserved->menu_id = $request->menu_id;
            $reserved->date = $request->date;
            $reserved->hour = $request->hour;
            $reserved->n_comensales = $request->n_comensales;
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
