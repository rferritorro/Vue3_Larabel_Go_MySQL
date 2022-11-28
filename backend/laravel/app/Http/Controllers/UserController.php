<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use App\Http\Requests\StoreUserRequest;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $users = User::all();
    	// return response()->json($users);

        // return UserResource::collection(User::all());

        // return User::orderBy('fname', 'asc')->get();

        // return UserResource::collection(User::orderBy('fname', 'asc')->paginate(2));

        // return User::offset(0)->limit(2)->get();
        // return UserResource::collection(User::offset(0)->limit(2)->get());

        //$page = $request->has('page') ? $request->get('page') : 1;
        //$limit = $request->has('limit') ? $request->get('limit') : 5;
        //return UserResource::collection(User::limit($limit)->offset(($page - 1) * $limit)->get());
        return UserResource::collection(User::get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    // public function store(Request $request)
    public function store(StoreUserRequest $request)
    {
        // $user = new User;
        // $user->fname = $request->fname;
        // $user->lname = $request->lname;
        // $user->email = $request->email;
        // $user->password = $request->password;
        // $user->save();
        // return response()->json([
        //     "message" => "User record created"
        // ], 201);

        return UserResource::make(User::create($request->validated()));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return UserResource::make(User::where('id', $id)->firstOrFail());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        if (User::where('id', $id)->exists()) {
            $user = User::find($id);
            $user->fname = $request->fname;
            $user->lname = $request->lname;
            $user->email = $request->email;
            $user->password = $request->password;
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

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(User::where('id', $id)->exists()) {
            $user = User::find($id);
            $user->delete();
            return response()->json([
              "message" => "User deleted"
            ], 202);
          } else {
            return response()->json([
              "message" => "User not found"
            ], 404);
          }
    }
}
