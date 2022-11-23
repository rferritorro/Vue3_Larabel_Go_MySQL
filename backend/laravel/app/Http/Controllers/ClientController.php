<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ClientResource;
use App\Http\Requests\StoreClientRequest;
use App\Models\Client;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        // $clients = Client::all();
    	// return response()->json($clients);

        // return ClientResource::collection(Client::all());

        // return Client::orderBy('fname', 'asc')->get();

        // return ClientResource::collection(Client::orderBy('fname', 'asc')->paginate(2));

        // return Client::offset(0)->limit(2)->get();
        // return ClientResource::collection(Client::offset(0)->limit(2)->get());

        //$page = $request->has('page') ? $request->get('page') : 1;
        //$limit = $request->has('limit') ? $request->get('limit') : 5;
        //return ClientResource::collection(Client::limit($limit)->offset(($page - 1) * $limit)->get());
        return ClientResource::collection(Client::get());
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
    public function store(StoreClientRequest $request)
    {
        // $client = new Client;
        // $client->fname = $request->fname;
        // $client->lname = $request->lname;
        // $client->email = $request->email;
        // $client->password = $request->password;
        // $client->save();
        // return response()->json([
        //     "message" => "Client record created"
        // ], 201);

        return ClientResource::make(Client::create($request->validated()));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return ClientResource::make(Client::where('id', $id)->firstOrFail());
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
        if (Client::where('id', $id)->exists()) {
            $client = Client::find($id);
            $client->fname = $request->fname;
            $client->lname = $request->lname;
            $client->email = $request->email;
            $client->password = $request->password;
            $client->save();
            return response()->json([
              "message" => "Client updated successfully"
            ], 200);
          } else {
            return response()->json([
              "message" => "Client not found"
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
        if(Client::where('id', $id)->exists()) {
            $client = Client::find($id);
            $client->delete();
            return response()->json([
              "message" => "Client deleted"
            ], 202);
          } else {
            return response()->json([
              "message" => "Client not found"
            ], 404);
          }
    }
}
