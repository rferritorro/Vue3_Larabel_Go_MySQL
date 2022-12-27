<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\OrderReservedResource;
use App\Http\Requests\StoreOrderReservedRequest;
use App\Models\OrderReserved;
use Illuminate\Support\Facades\DB;

class OrderReservedController extends Controller
{
    //GET ALL DATA INTO TABLE RESERVED
    public function index() {
      return OrderReservedResource::collection(OrderReserved::get());
    }

    public function get_order() {
      $reserved = DB::table('order_reserved')
          ->selectRaw('*')
          ->where('order_', '=', '1', 'OR', 'order_', '=', '-1')
          ->get();
        return $reserved;
      //SELECT * FROM `order_reserved` WHERE order_ = 1 OR order_ = -1;
    }
    //CREATE DATA INTO TABLE RESERVED
    public function store(StoreOrderReservedRequest $request) {
        return OrderReservedResource::make(OrderReserved::create($request->validated()));
    }

    //UPDATE DATA INTO TABLE RESERVED
     public function update(Request $request, $id){
      // UPDATE order_reserved SET order_ = '0' WHERE order_ = '1' OR order_ = '-1';
      // UPDATE order_reserved SET order_ = '1' WHERE id = '1';
        if (OrderReserved::where('id', $id)->exists()) {
            DB::table('order_reserved')
            ->where('order_', $request->order_old)
            ->update(['order_' => 0]);
            DB::table('order_reserved')
            ->where('order_', $request->order_old2)
            ->update(['order_' => 0]);
            $order_reserved = OrderReserved::find($id);
            $order_reserved->order_ = $request->order_;
            $order_reserved->save();
            // $reserved = OrderReserved::find($id);
            // $reserved->name = $request->name;
            // $reserved->order_ = $request->order_;
            // $reserved->save();
            return response()->json([
              "message" => "OrderReserved updated successfully"
            ], 200);
          } else {
            return response()->json([
              "message" => "OrderReserved not found"
            ], 404);
          }
    }

    //DELETE DATA INTO TABLE RESERVED
    public function destroy($id){
        if(OrderReserved::where('id', $id)->exists()) {
            $reserved = OrderReserved::find($id);
            $reserved->delete();
            return response()->json([
              "message" => "OrderReserved deleted succesfully"
            ], 202);
          } else {
            return response()->json([
              "message" => "OrderReserved not found"
            ], 404);
          }
    }

}
