<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Response;
use App\Employee;



class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }

    public function getEmp(){
        return Response::json(Employee::get()); 
    }

    public function regEmp(Request $request){

        $data = $request->all();

        return Employee::create($data);
    }

    public function getEmpbyId($id){
        return Response::json(Employee::where('id', $id)->first());   
    }

    public function regEmpUpdate(Request $request){
        $emp = Employee::find($request->id);
        $emp->name    = $request->name;
        $emp->address = $request->address;
        $emp->company = $request->company;
        return Response::json($emp->save());
    }

    public function deleteEmp($id){
        return Response::json(Employee::where('id', $id)->delete());  
    }
}
