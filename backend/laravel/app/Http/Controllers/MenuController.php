<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\MenuResource;
use App\Http\Requests\StoreMenuRequest;
use App\Models\Menu;
use Illuminate\Support\Facades\DB;

class MenuController extends Controller 
{
    //GET ALL DATA INTO TABLE MENU
    public function index() {
        return MenuResource::collection(Menu::get());
    }

    public function get_menus_search($data) {
      $menu_search = DB::table('Menu')
          ->selectRaw('*')
          ->where('nombre', '=', $data)
          ->get();
      return $menu_search;
    }

    //CREATE DATA INTO TABLE MENU
    public function store(StoreMenuRequest $request) {
        return MenuResource::make(Menu::create($request->validated()));
    }

    //UPDATE DATA INTO TABLE MENU
    public function update(Request $request, $id){
        if (Menu::where('id', $id)->exists()) {
            $menu = Menu::find($id);
            $menu->nombre = $request->nombre;
            $menu->descr = $request->descr;
            $menu->img = $request->img;
            $menu->save();
            return response()->json([
              "message" => "Menu updated successfully"
            ], 200);
          } else {
            return response()->json([
              "message" => "Menu not found"
            ], 404);
          }
    }

    //DELETE DATA INTO TABLE MENU
    public function destroy($id){
        if(Menu::where('id', $id)->exists()) {
            $menu = Menu::find($id);
            $menu->delete();
            return response()->json([
              "message" => "Menu deleted succesfully"
            ], 202);
          } else {
            return response()->json([
              "message" => "Menu not found"
            ], 404);
          }
    }
}
