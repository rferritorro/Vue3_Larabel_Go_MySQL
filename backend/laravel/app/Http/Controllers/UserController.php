<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;

class UserController extends Controller
{
    //GET ALL DATA INTO TABLE USERS.
    public function index(){
        return UserResource::collection(User::get());
    }

    //CREATE DATA INTO TABLE USERS
    public function store(StoreUserRequest $request){
        return UserResource::make(User::create($request->validated()));
    }


    public function show($id){
        return UserResource::make(User::where('id', $id)->firstOrFail());
    }

    //UPDATE DATA INTO TABLE TABLES
    public function update(Request $request, $id){
        if (User::where('id', $id)->exists()) {
            $user = User::find($id);
            $user->username = $request->username;
            $user->password = $request->password;
            $user->email = $request->email;
            $user->avatar = $request->avatar;
            $user->type_ = $request->type_;
            $user->save();
            return response()->json([
              "message" => "User updated successfully"
            ], 200);
          } else {
            return response()->json([
              "message" => "User not found"
            ], 404);
          }
    }

    //DELETE DATA INTO TABLE USER
    public function destroy($id){
        if(User::where('id', $id)->exists()) {
            $user = User::find($id);
            $user->delete();
            return response()->json([
              "message" => "User deleted succesfully"
            ], 202);
          } else {
            return response()->json([
              "message" => "User not found"
            ], 404);
          }
    }
}
