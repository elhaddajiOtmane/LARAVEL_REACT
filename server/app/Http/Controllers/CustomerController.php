<?php

namespace App\Http\Controllers;
use App\Models\Customer;
use Faker\Factory;


use Illuminate\Http\Request;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //return json data
        $customers = Customer::orderBy('id', 'desc')->get();
        return response()->json($customers);
    }

    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $customer= new Customer;
        $customer->first_name = $request->first_name;
        $customer->last_name = $request->last_name;
        $customer->email= $request->email;
        $customer->save();
        return response()->json($customer);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // show a single customer
        $customer = Customer::findOrFail($id);
        return response()->json($customer);

    }

    /**
     * Show the form for editing the specified resource.
     */


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // update a single customer
        $customer = Customer::find($id);
        $customer->first_name = $request->first_name;
        $customer->last_name = $request->last_name;
        $customer->email= $request->email;
        $customer->save();
        return response()->json($customer);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // delete a single customer
        $customer = Customer::find($id);
        $customer->delete();
        return response()->json($customer);
    }

}
